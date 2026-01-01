// Copyright 2017-2025 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { VoteThreshold } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

import { useEffect, useState } from 'react';

import { BN_ZERO } from '@polkadot/util';
import { approxChanges } from "@/lib/utils";
import { useTrnApi } from "@futureverse/transact-react";



interface Result {
  changeAye: BN;
  changeNay: BN;
}

export function useChangeCalc (threshold: VoteThreshold, votedAye: BN, votedNay: BN, votedTotal: BN): Result {
  const { trnApi } = useTrnApi();

  const [result, setResult] = useState<Result>({ changeAye: BN_ZERO, changeNay: BN_ZERO });

  useEffect((): void => {
    // ✅ Add null check to prevent calling API when not ready
    if (!trnApi) {
      return; // Don't proceed if API is not available
    }
    const fetchElectorate = async () => {
      const sqrtElectorate = await trnApi.derive.democracy.sqrtElectorate();
      sqrtElectorate && setResult(
          approxChanges(threshold, sqrtElectorate, {votedAye, votedNay, votedTotal})
      );
    };
    fetchElectorate();
  }, [ threshold, trnApi, votedAye, votedNay, votedTotal]);

  return result;
}
