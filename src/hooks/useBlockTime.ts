
import type { ApiPromise } from '@polkadot/api';
import type { BN } from '@polkadot/util';
import type { Time } from '@polkadot/util/types';

import { useMemo } from 'react';

import { BN_MAX_INTEGER, BN_ONE, bnMin, bnToBn, extractTime } from '@polkadot/util';

import { useBlockInterval } from './useBlockInterval';
// import {useTrnApi} from "@futureverse/transact-react";

type Result = [blockInterval: number, timeStr: string, time: Time];

export function calcBlockTime (blockTime: BN, blocks: BN): Result {
  // in the case of excessively large locks, limit to the max JS integer value
  const value = bnMin(BN_MAX_INTEGER, blockTime.mul(blocks)).toNumber();

  // time calculations are using the absolute value (< 0 detection only on strings)
  const time = extractTime(Math.abs(value));
  const { days, hours, minutes, seconds } = time;

  return [
    blockTime.toNumber(),
    `${value < 0 ? '+' : ''}${[
      days
        ? (days > 1)
          ? `${days} day`
          : '1 day'
        : null,
      hours
        ? (hours > 1)
          ? `${hours} hrs`
          : '1 hr'
        : null,
      minutes
        ? (minutes > 1)
          ? `${minutes} mins`
          : '1 min'
        : null,
      seconds
        ? (seconds > 1)
          ? `${seconds} s`
          : '1 s'
        : '0 s'
    ]
      .filter((s): s is string => !!s)
      .slice(0, 2)
      .join(' ')}`,
    time
  ];
}

export function useBlockTime (blocks: number | BN | null = BN_ONE, trnApi: ApiPromise): Result {
  const blockTime = useBlockInterval(trnApi);

  return useMemo(
    () => calcBlockTime(blockTime, bnToBn(blocks)),
    [blockTime, blocks]
  );
}
