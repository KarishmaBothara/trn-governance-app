
import type { ApiPromise } from '@polkadot/api';
import type { BlockNumber, Votes } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

import { useMemo } from 'react';

import { isFunction } from '@polkadot/util';

import { useBestNumber } from './useBestNumber';
import {useTrnApi} from "@futureverse/transact-react";

interface State {
  hasFailed: boolean;
  hasPassed: boolean;
  isCloseable: boolean;
  isVoteable: boolean;
  remainingBlocks: BN | null;
}

export type CollectiveType = 'alliance' | 'council' | 'membership' | 'technicalCommittee';


const DEFAULT_STATUS = { hasFailed: false, hasPassed: false, isCloseable: false, isVoteable: false, remainingBlocks: null };

function getStatus (api: ApiPromise, bestNumber: BlockNumber, votes: Votes, numMembers: number, section: CollectiveType): State {
  const [instance] = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), section) || [section];
  const modLocation = isFunction(api.tx[instance as 'technicalCommittee']?.close)
    ? instance
    : null;

  if (!votes.end || !modLocation) {
    return {
      hasFailed: false,
      hasPassed: false,
      isCloseable: false,
      isVoteable: true,
      remainingBlocks: null
    };
  }

  const isEnd = bestNumber.gte(votes.end);
  const hasPassed = votes.threshold.lten(votes.ayes.length);
  const hasFailed = votes.threshold.gtn(Math.abs(numMembers - votes.nays.length));

  return {
    hasFailed,
    hasPassed,
    isCloseable: api.tx[modLocation].close.meta.args.length === 4 // current-generation
      ? isEnd || hasPassed || hasFailed
      : isEnd,
    isVoteable: !isEnd,
    remainingBlocks: isEnd
      ? null
      : votes.end.sub(bestNumber)
  };
}

export function useVotingStatus (votes: Votes | null | undefined, numMembers: number, section: CollectiveType): State {
    const {trnApi} = useTrnApi();
    const { data: bestNumber } = useBestNumber();

    return useMemo(
        () => {
          try {
            return bestNumber && votes
                ? getStatus(trnApi, bestNumber, votes, numMembers, section)
                : DEFAULT_STATUS;
          } catch (e) {
            console.log("Err::", e);
            return DEFAULT_STATUS; // or handle error appropriately
          }
        },
        [trnApi, bestNumber, numMembers, section, votes]
    );
}

// export const useVotingStatus = createNamedHook('useVotingStatus', useVotingStatusImpl);
