'use client'

import { useFutureverseSigner } from "@futureverse/auth-ui";

export function useSigner() {
  const result = useFutureverseSigner();
  console.log("Result::", result);

  return result;
}
