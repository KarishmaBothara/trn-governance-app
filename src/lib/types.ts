//
//
//
//
//
//
// import type React from 'react';
// import type { Option, u32, Vec } from '@polkadot/types';
// import type { H256 } from '@polkadot/types/interfaces';
// import type { BlockHash } from '@polkadot/types/interfaces/chain';
// import type { EthAddress, EthBloom, EthLog } from '@polkadot/types/interfaces/eth/types';
// import type { Registry, TypeDef } from '@polkadot/types/types';
// import type { HexString } from '@polkadot/util/types';
//
// // params returning types extending Base (i.e. anything from api-codec)
export type RawParamValue = unknown;
//
export interface RawParam {
    isValid: boolean;
    value: RawParamValue;
}
//
// export interface RawParamOnChangeValue {
//     isValid: boolean;
//     value: RawParamValue;
// }
//
// export type RawParamOnChange = (value: RawParamOnChangeValue) => void;
// export type RawParamOnEnter = () => void;
// export type RawParamOnEscape = () => void;
//
// export type RawParams = RawParam[];
//
// export interface Props {
//     className?: string;
//     defaultValue: RawParam;
//     isDisabled?: boolean;
//     isError?: boolean;
//     isInOption?: boolean;
//     isReadOnly?: boolean;
//     isOptional?: boolean;
//     label?: React.ReactNode;
//     name?: string;
//     onChange?: RawParamOnChange;
//     onEnter?: RawParamOnEnter;
//     onEscape?: RawParamOnEscape;
//     overrides?: ComponentMap;
//     registry: Registry;
//     type: TypeDefExt;
//     withLabel?: boolean;
//     withLength?: boolean;
// }
//
// export type Size = 'full' | 'large' | 'medium' | 'small';
//
// export type ComponentMap = Record<string, React.ComponentType<Props>>;
//
// export interface ParamDef {
//     length?: number;
//     name?: string;
//     type: TypeDef;
// }
//
// export interface ExpandedCid {
//     codec: number;
//     hash: {
//         code: number;
//         digest: HexString;
//     };
//     version: 0 | 1;
// }
//
// export interface TypeDefExt extends TypeDef {
//     withOptionActive?: boolean;
// }
//
// export interface BlockEVMEvent {
//     transactionHash: H256;
//     readonly transactionIndex: u32;
//     readonly from: EthAddress;
//     readonly to: Option<EthAddress>;
//     readonly contractAddress: Option<EthAddress>;
//     readonly logs: Vec<EthLog>;
//     readonly logsBloom: EthBloom;
//     blockHash?: BlockHash;
//     blockNumber?: Option<u32>;
// }
//
// export type BitLength = 8 | 16 | 32 | 64 | 128 | 256;
//
// // import * as sdk from "@futureverse/auth";
// // import { Static, Type } from "@sinclair/typebox";
// // import type { NetworkName } from "@therootnetwork/api";
// // // import type BigNumber from "bignumber.js";
// // // import type { AccountLinesTrustline, Balance } from "xrpl";
// //
// // export interface TrnToken {
// // 	assetId: number;
// // 	symbol: string;
// // 	decimals: number;
// // 	name: string;
// // 	priceInUSD?: number;
// // 	supply: number;
// // }
// //
// //
// // export interface TrnNetworkDetails {
// // 	NetworkName: NetworkName;
// // 	ChainName: string;
// // 	ChainId: {
// // 		InDec: number;
// // 		InHex: string;
// // 	};
// // 	ApiUrl: {
// // 		InWebSocket: string;
// // 	};
// // 	LinkedEthChain: string;
// // 	LinkedXrpChain: string;
// // 	ExplorerUrl: string;
// // 	Environment: sdk.EnvironmentInfo;
// // 	Stage: sdk.Environment;
// // }
// //
// // export interface XrplNetworkDetails {
// // 	ApiUrl: {
// // 		InWebSocket: string;
// // 	};
// // 	ChainId: {
// // 		InDec: number;
// // 		InHex: string;
// // 	};
// // 	ExplorerUrl: string | { Bridge: string; Swap: string; Pool: string };
// // }
// //
// // export const XrplCurrency = Type.Object({
// // 	ticker: Type.Optional(Type.String()),
// // 	currency: Type.String(),
// // 	issuer: Type.Optional(Type.String()),
// // 	decimals: Type.Optional(Type.Number()),
// // 	priceInUSD: Type.Optional(Type.Number()),
// // });
// // export type XrplCurrency = Static<typeof XrplCurrency>;
// //
// //
// // export type Token = TrnToken | XrplCurrency;
