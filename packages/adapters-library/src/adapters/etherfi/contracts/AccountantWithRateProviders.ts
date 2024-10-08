/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface AccountantWithRateProvidersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountantState"
      | "authority"
      | "base"
      | "claimFees"
      | "decimals"
      | "getRate"
      | "getRateInQuote"
      | "getRateInQuoteSafe"
      | "getRateSafe"
      | "owner"
      | "pause"
      | "rateProviderData"
      | "resetHighwaterMark"
      | "setAuthority"
      | "setRateProviderData"
      | "transferOwnership"
      | "unpause"
      | "updateDelay"
      | "updateExchangeRate"
      | "updateLower"
      | "updateManagementFee"
      | "updatePayoutAddress"
      | "updatePerformanceFee"
      | "updateUpper"
      | "vault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuthorityUpdated"
      | "DelayInSecondsUpdated"
      | "ExchangeRateUpdated"
      | "FeesClaimed"
      | "HighwaterMarkReset"
      | "LowerBoundUpdated"
      | "ManagementFeeUpdated"
      | "OwnershipTransferred"
      | "Paused"
      | "PayoutAddressUpdated"
      | "PerformanceFeeUpdated"
      | "RateProviderUpdated"
      | "Unpaused"
      | "UpperBoundUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accountantState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "base", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimFees",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRateInQuote",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRateInQuoteSafe",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRateSafe",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rateProviderData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "resetHighwaterMark",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRateProviderData",
    values: [AddressLike, boolean, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateExchangeRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLower",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateManagementFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePayoutAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePerformanceFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUpper",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accountantState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRateInQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateInQuoteSafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRateSafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rateProviderData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetHighwaterMark",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRateProviderData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateExchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateManagementFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePayoutAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePerformanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateUpper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace AuthorityUpdatedEvent {
  export type InputTuple = [user: AddressLike, newAuthority: AddressLike];
  export type OutputTuple = [user: string, newAuthority: string];
  export interface OutputObject {
    user: string;
    newAuthority: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DelayInSecondsUpdatedEvent {
  export type InputTuple = [oldDelay: BigNumberish, newDelay: BigNumberish];
  export type OutputTuple = [oldDelay: bigint, newDelay: bigint];
  export interface OutputObject {
    oldDelay: bigint;
    newDelay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExchangeRateUpdatedEvent {
  export type InputTuple = [
    oldRate: BigNumberish,
    newRate: BigNumberish,
    currentTime: BigNumberish
  ];
  export type OutputTuple = [
    oldRate: bigint,
    newRate: bigint,
    currentTime: bigint
  ];
  export interface OutputObject {
    oldRate: bigint;
    newRate: bigint;
    currentTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesClaimedEvent {
  export type InputTuple = [feeAsset: AddressLike, amount: BigNumberish];
  export type OutputTuple = [feeAsset: string, amount: bigint];
  export interface OutputObject {
    feeAsset: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HighwaterMarkResetEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LowerBoundUpdatedEvent {
  export type InputTuple = [oldBound: BigNumberish, newBound: BigNumberish];
  export type OutputTuple = [oldBound: bigint, newBound: bigint];
  export interface OutputObject {
    oldBound: bigint;
    newBound: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ManagementFeeUpdatedEvent {
  export type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
  export type OutputTuple = [oldFee: bigint, newFee: bigint];
  export interface OutputObject {
    oldFee: bigint;
    newFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [user: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [user: string, newOwner: string];
  export interface OutputObject {
    user: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PayoutAddressUpdatedEvent {
  export type InputTuple = [oldPayout: AddressLike, newPayout: AddressLike];
  export type OutputTuple = [oldPayout: string, newPayout: string];
  export interface OutputObject {
    oldPayout: string;
    newPayout: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PerformanceFeeUpdatedEvent {
  export type InputTuple = [oldFee: BigNumberish, newFee: BigNumberish];
  export type OutputTuple = [oldFee: bigint, newFee: bigint];
  export interface OutputObject {
    oldFee: bigint;
    newFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RateProviderUpdatedEvent {
  export type InputTuple = [
    asset: AddressLike,
    isPegged: boolean,
    rateProvider: AddressLike
  ];
  export type OutputTuple = [
    asset: string,
    isPegged: boolean,
    rateProvider: string
  ];
  export interface OutputObject {
    asset: string;
    isPegged: boolean;
    rateProvider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpperBoundUpdatedEvent {
  export type InputTuple = [oldBound: BigNumberish, newBound: BigNumberish];
  export type OutputTuple = [oldBound: bigint, newBound: bigint];
  export interface OutputObject {
    oldBound: bigint;
    newBound: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AccountantWithRateProviders extends BaseContract {
  connect(runner?: ContractRunner | null): AccountantWithRateProviders;
  waitForDeployment(): Promise<this>;

  interface: AccountantWithRateProvidersInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  accountantState: TypedContractMethod<
    [],
    [
      [
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        bigint,
        bigint,
        bigint
      ] & {
        payoutAddress: string;
        highwaterMark: bigint;
        feesOwedInBase: bigint;
        totalSharesLastUpdate: bigint;
        exchangeRate: bigint;
        allowedExchangeRateChangeUpper: bigint;
        allowedExchangeRateChangeLower: bigint;
        lastUpdateTimestamp: bigint;
        isPaused: boolean;
        minimumUpdateDelayInSeconds: bigint;
        managementFee: bigint;
        performanceFee: bigint;
      }
    ],
    "view"
  >;

  authority: TypedContractMethod<[], [string], "view">;

  base: TypedContractMethod<[], [string], "view">;

  claimFees: TypedContractMethod<[feeAsset: AddressLike], [void], "nonpayable">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  getRate: TypedContractMethod<[], [bigint], "view">;

  getRateInQuote: TypedContractMethod<[quote: AddressLike], [bigint], "view">;

  getRateInQuoteSafe: TypedContractMethod<
    [quote: AddressLike],
    [bigint],
    "view"
  >;

  getRateSafe: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  rateProviderData: TypedContractMethod<
    [arg0: AddressLike],
    [[boolean, string] & { isPeggedToBase: boolean; rateProvider: string }],
    "view"
  >;

  resetHighwaterMark: TypedContractMethod<[], [void], "nonpayable">;

  setAuthority: TypedContractMethod<
    [newAuthority: AddressLike],
    [void],
    "nonpayable"
  >;

  setRateProviderData: TypedContractMethod<
    [asset: AddressLike, isPeggedToBase: boolean, rateProvider: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  updateDelay: TypedContractMethod<
    [minimumUpdateDelayInSeconds: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateExchangeRate: TypedContractMethod<
    [newExchangeRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateLower: TypedContractMethod<
    [allowedExchangeRateChangeLower: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateManagementFee: TypedContractMethod<
    [managementFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePayoutAddress: TypedContractMethod<
    [payoutAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePerformanceFee: TypedContractMethod<
    [performanceFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateUpper: TypedContractMethod<
    [allowedExchangeRateChangeUpper: BigNumberish],
    [void],
    "nonpayable"
  >;

  vault: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountantState"
  ): TypedContractMethod<
    [],
    [
      [
        string,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
        bigint,
        bigint,
        bigint
      ] & {
        payoutAddress: string;
        highwaterMark: bigint;
        feesOwedInBase: bigint;
        totalSharesLastUpdate: bigint;
        exchangeRate: bigint;
        allowedExchangeRateChangeUpper: bigint;
        allowedExchangeRateChangeLower: bigint;
        lastUpdateTimestamp: bigint;
        isPaused: boolean;
        minimumUpdateDelayInSeconds: bigint;
        managementFee: bigint;
        performanceFee: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "authority"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "base"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimFees"
  ): TypedContractMethod<[feeAsset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRateInQuote"
  ): TypedContractMethod<[quote: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRateInQuoteSafe"
  ): TypedContractMethod<[quote: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRateSafe"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rateProviderData"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[boolean, string] & { isPeggedToBase: boolean; rateProvider: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "resetHighwaterMark"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAuthority"
  ): TypedContractMethod<[newAuthority: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRateProviderData"
  ): TypedContractMethod<
    [asset: AddressLike, isPeggedToBase: boolean, rateProvider: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateDelay"
  ): TypedContractMethod<
    [minimumUpdateDelayInSeconds: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateExchangeRate"
  ): TypedContractMethod<[newExchangeRate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateLower"
  ): TypedContractMethod<
    [allowedExchangeRateChangeLower: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateManagementFee"
  ): TypedContractMethod<[managementFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePayoutAddress"
  ): TypedContractMethod<[payoutAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePerformanceFee"
  ): TypedContractMethod<[performanceFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateUpper"
  ): TypedContractMethod<
    [allowedExchangeRateChangeUpper: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AuthorityUpdated"
  ): TypedContractEvent<
    AuthorityUpdatedEvent.InputTuple,
    AuthorityUpdatedEvent.OutputTuple,
    AuthorityUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "DelayInSecondsUpdated"
  ): TypedContractEvent<
    DelayInSecondsUpdatedEvent.InputTuple,
    DelayInSecondsUpdatedEvent.OutputTuple,
    DelayInSecondsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ExchangeRateUpdated"
  ): TypedContractEvent<
    ExchangeRateUpdatedEvent.InputTuple,
    ExchangeRateUpdatedEvent.OutputTuple,
    ExchangeRateUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "FeesClaimed"
  ): TypedContractEvent<
    FeesClaimedEvent.InputTuple,
    FeesClaimedEvent.OutputTuple,
    FeesClaimedEvent.OutputObject
  >;
  getEvent(
    key: "HighwaterMarkReset"
  ): TypedContractEvent<
    HighwaterMarkResetEvent.InputTuple,
    HighwaterMarkResetEvent.OutputTuple,
    HighwaterMarkResetEvent.OutputObject
  >;
  getEvent(
    key: "LowerBoundUpdated"
  ): TypedContractEvent<
    LowerBoundUpdatedEvent.InputTuple,
    LowerBoundUpdatedEvent.OutputTuple,
    LowerBoundUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ManagementFeeUpdated"
  ): TypedContractEvent<
    ManagementFeeUpdatedEvent.InputTuple,
    ManagementFeeUpdatedEvent.OutputTuple,
    ManagementFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "PayoutAddressUpdated"
  ): TypedContractEvent<
    PayoutAddressUpdatedEvent.InputTuple,
    PayoutAddressUpdatedEvent.OutputTuple,
    PayoutAddressUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PerformanceFeeUpdated"
  ): TypedContractEvent<
    PerformanceFeeUpdatedEvent.InputTuple,
    PerformanceFeeUpdatedEvent.OutputTuple,
    PerformanceFeeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RateProviderUpdated"
  ): TypedContractEvent<
    RateProviderUpdatedEvent.InputTuple,
    RateProviderUpdatedEvent.OutputTuple,
    RateProviderUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "UpperBoundUpdated"
  ): TypedContractEvent<
    UpperBoundUpdatedEvent.InputTuple,
    UpperBoundUpdatedEvent.OutputTuple,
    UpperBoundUpdatedEvent.OutputObject
  >;

  filters: {
    "AuthorityUpdated(address,address)": TypedContractEvent<
      AuthorityUpdatedEvent.InputTuple,
      AuthorityUpdatedEvent.OutputTuple,
      AuthorityUpdatedEvent.OutputObject
    >;
    AuthorityUpdated: TypedContractEvent<
      AuthorityUpdatedEvent.InputTuple,
      AuthorityUpdatedEvent.OutputTuple,
      AuthorityUpdatedEvent.OutputObject
    >;

    "DelayInSecondsUpdated(uint24,uint24)": TypedContractEvent<
      DelayInSecondsUpdatedEvent.InputTuple,
      DelayInSecondsUpdatedEvent.OutputTuple,
      DelayInSecondsUpdatedEvent.OutputObject
    >;
    DelayInSecondsUpdated: TypedContractEvent<
      DelayInSecondsUpdatedEvent.InputTuple,
      DelayInSecondsUpdatedEvent.OutputTuple,
      DelayInSecondsUpdatedEvent.OutputObject
    >;

    "ExchangeRateUpdated(uint96,uint96,uint64)": TypedContractEvent<
      ExchangeRateUpdatedEvent.InputTuple,
      ExchangeRateUpdatedEvent.OutputTuple,
      ExchangeRateUpdatedEvent.OutputObject
    >;
    ExchangeRateUpdated: TypedContractEvent<
      ExchangeRateUpdatedEvent.InputTuple,
      ExchangeRateUpdatedEvent.OutputTuple,
      ExchangeRateUpdatedEvent.OutputObject
    >;

    "FeesClaimed(address,uint256)": TypedContractEvent<
      FeesClaimedEvent.InputTuple,
      FeesClaimedEvent.OutputTuple,
      FeesClaimedEvent.OutputObject
    >;
    FeesClaimed: TypedContractEvent<
      FeesClaimedEvent.InputTuple,
      FeesClaimedEvent.OutputTuple,
      FeesClaimedEvent.OutputObject
    >;

    "HighwaterMarkReset()": TypedContractEvent<
      HighwaterMarkResetEvent.InputTuple,
      HighwaterMarkResetEvent.OutputTuple,
      HighwaterMarkResetEvent.OutputObject
    >;
    HighwaterMarkReset: TypedContractEvent<
      HighwaterMarkResetEvent.InputTuple,
      HighwaterMarkResetEvent.OutputTuple,
      HighwaterMarkResetEvent.OutputObject
    >;

    "LowerBoundUpdated(uint16,uint16)": TypedContractEvent<
      LowerBoundUpdatedEvent.InputTuple,
      LowerBoundUpdatedEvent.OutputTuple,
      LowerBoundUpdatedEvent.OutputObject
    >;
    LowerBoundUpdated: TypedContractEvent<
      LowerBoundUpdatedEvent.InputTuple,
      LowerBoundUpdatedEvent.OutputTuple,
      LowerBoundUpdatedEvent.OutputObject
    >;

    "ManagementFeeUpdated(uint16,uint16)": TypedContractEvent<
      ManagementFeeUpdatedEvent.InputTuple,
      ManagementFeeUpdatedEvent.OutputTuple,
      ManagementFeeUpdatedEvent.OutputObject
    >;
    ManagementFeeUpdated: TypedContractEvent<
      ManagementFeeUpdatedEvent.InputTuple,
      ManagementFeeUpdatedEvent.OutputTuple,
      ManagementFeeUpdatedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused()": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "PayoutAddressUpdated(address,address)": TypedContractEvent<
      PayoutAddressUpdatedEvent.InputTuple,
      PayoutAddressUpdatedEvent.OutputTuple,
      PayoutAddressUpdatedEvent.OutputObject
    >;
    PayoutAddressUpdated: TypedContractEvent<
      PayoutAddressUpdatedEvent.InputTuple,
      PayoutAddressUpdatedEvent.OutputTuple,
      PayoutAddressUpdatedEvent.OutputObject
    >;

    "PerformanceFeeUpdated(uint16,uint16)": TypedContractEvent<
      PerformanceFeeUpdatedEvent.InputTuple,
      PerformanceFeeUpdatedEvent.OutputTuple,
      PerformanceFeeUpdatedEvent.OutputObject
    >;
    PerformanceFeeUpdated: TypedContractEvent<
      PerformanceFeeUpdatedEvent.InputTuple,
      PerformanceFeeUpdatedEvent.OutputTuple,
      PerformanceFeeUpdatedEvent.OutputObject
    >;

    "RateProviderUpdated(address,bool,address)": TypedContractEvent<
      RateProviderUpdatedEvent.InputTuple,
      RateProviderUpdatedEvent.OutputTuple,
      RateProviderUpdatedEvent.OutputObject
    >;
    RateProviderUpdated: TypedContractEvent<
      RateProviderUpdatedEvent.InputTuple,
      RateProviderUpdatedEvent.OutputTuple,
      RateProviderUpdatedEvent.OutputObject
    >;

    "Unpaused()": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "UpperBoundUpdated(uint16,uint16)": TypedContractEvent<
      UpperBoundUpdatedEvent.InputTuple,
      UpperBoundUpdatedEvent.OutputTuple,
      UpperBoundUpdatedEvent.OutputObject
    >;
    UpperBoundUpdated: TypedContractEvent<
      UpperBoundUpdatedEvent.InputTuple,
      UpperBoundUpdatedEvent.OutputTuple,
      UpperBoundUpdatedEvent.OutputObject
    >;
  };
}
