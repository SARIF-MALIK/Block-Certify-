import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  Aadhaar,
  AadhaarMethodNames,
  AadhaarEventsContext,
  AadhaarEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type AadhaarEvents =
  | 'Aadhaar_Created'
  | 'Approval'
  | 'ApprovalForAll'
  | 'OwnershipTransferred'
  | 'RequestFulfilled'
  | 'RequestSent'
  | 'Transfer';
export interface AadhaarEventsContext {
  Aadhaar_Created(...parameters: any): EventFilter;
  Approval(...parameters: any): EventFilter;
  ApprovalForAll(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
  RequestFulfilled(...parameters: any): EventFilter;
  RequestSent(...parameters: any): EventFilter;
  Transfer(...parameters: any): EventFilter;
}
export type AadhaarMethodNames =
  | 'new'
  | 'approve'
  | 'balanceOf'
  | 'count_Of_Created_Nfts'
  | 'creator_Mapped_Token'
  | 'getApproved'
  | 'isApprovedForAll'
  | 'lastRequestId'
  | 'name'
  | 'owner'
  | 'ownerOf'
  | 'rawFulfillRandomWords'
  | 'renounceOwnership'
  | 'requestIds'
  | 's_requests'
  | 'safeTransferFrom'
  | 'safeTransferFrom'
  | 'setApprovalForAll'
  | 'supportsInterface'
  | 'symbol'
  | 'transferFrom'
  | 'transferOwnership'
  | 'totalSupply'
  | 'tokenByIndex'
  | 'tokenURIExists'
  | 'getAadhaar'
  | 'createdAadhaarCount'
  | 'tokenOfCreatorByIndex'
  | 'safeMint'
  | 'getAllAadhaarNfts'
  | 'getCreatedNfts'
  | 'tokenURI'
  | 'requestRandomWords'
  | 'getRequestStatus'
  | 'withdrawLink';
export interface Aadhaar_CreatedEventEmittedResponse {
  tokenId: BigNumberish;
  Name: string;
  Owner: string;
  Addhaar_NO: BigNumberish;
}
export interface ApprovalEventEmittedResponse {
  owner: string;
  approved: string;
  tokenId: BigNumberish;
}
export interface ApprovalForAllEventEmittedResponse {
  owner: string;
  operator: string;
  approved: boolean;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface RequestFulfilledEventEmittedResponse {
  requestId: BigNumberish;
  randomWords: BigNumberish[];
  payment: BigNumberish;
}
export interface RequestSentEventEmittedResponse {
  requestId: BigNumberish;
  numWords: BigNumberish;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  tokenId: BigNumberish;
}
export interface S_requestsResponse {
  paid: BigNumber;
  0: BigNumber;
  fulfilled: boolean;
  1: boolean;
  length: 2;
}
export interface Aadhaar_dataResponse {
  tokenId: BigNumber;
  0: BigNumber;
  Name: string;
  1: string;
  DOB: string;
  2: string;
  Sex: string;
  3: string;
  Address: string;
  4: string;
  Web3_Address: string;
  5: string;
  Aadhaar_NO: BigNumber;
  6: BigNumber;
}
export interface GetRequestStatusResponse {
  paid: BigNumber;
  0: BigNumber;
  fulfilled: boolean;
  1: boolean;
  randomWords: BigNumber[];
  2: BigNumber[];
  length: 3;
}
export interface Aadhaar {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  balanceOf(
    owner: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  count_Of_Created_Nfts(
    parameter0: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  creator_Mapped_Token(
    parameter0: string,
    parameter1: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getApproved(
    tokenId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  lastRequestId(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  ownerOf(
    tokenId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _requestId Type: uint256, Indexed: false
   * @param _randomWords Type: uint256[], Indexed: false
   */
  rawFulfillRandomWords(
    _requestId: BigNumberish,
    _randomWords: BigNumberish[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  requestIds(
    parameter0: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  s_requests(
    parameter0: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<S_requestsResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param approved Type: bool, Indexed: false
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param interfaceId Type: bytes4, Indexed: false
   */
  supportsInterface(
    interfaceId: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param index Type: uint256, Indexed: false
   */
  tokenByIndex(
    index: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param uri Type: string, Indexed: false
   */
  tokenURIExists(
    uri: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getAadhaar(
    tokenId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<Aadhaar_dataResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  createdAadhaarCount(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param creator Type: address, Indexed: false
   * @param index Type: uint256, Indexed: false
   */
  tokenOfCreatorByIndex(
    creator: string,
    index: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param uri Type: string, Indexed: false
   * @param Name Type: string, Indexed: false
   * @param DOB Type: string, Indexed: false
   * @param Sex Type: string, Indexed: false
   * @param Address Type: string, Indexed: false
   * @param Aadhaar_NO Type: uint256, Indexed: false
   */
  safeMint(
    to: string,
    uri: string,
    Name: string,
    DOB: string,
    Sex: string,
    Address: string,
    Aadhaar_NO: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getAllAadhaarNfts(
    overrides?: ContractCallOverrides
  ): Promise<Aadhaar_dataResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCreatedNfts(
    overrides?: ContractCallOverrides
  ): Promise<Aadhaar_dataResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  tokenURI(
    tokenId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  requestRandomWords(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _requestId Type: uint256, Indexed: false
   */
  getRequestStatus(
    _requestId: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<GetRequestStatusResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  withdrawLink(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
