import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class TokenUrls extends jspb.Message {
  getWebsite(): string;
  setWebsite(value: string): TokenUrls;

  getTechnicalDocumentation(): string;
  setTechnicalDocumentation(value: string): TokenUrls;

  getExplorer(): string;
  setExplorer(value: string): TokenUrls;

  getRepository(): string;
  setRepository(value: string): TokenUrls;

  getTelegram(): string;
  setTelegram(value: string): TokenUrls;

  getDiscord(): string;
  setDiscord(value: string): TokenUrls;

  getMedium(): string;
  setMedium(value: string): TokenUrls;

  getTwitter(): string;
  setTwitter(value: string): TokenUrls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenUrls.AsObject;
  static toObject(includeInstance: boolean, msg: TokenUrls): TokenUrls.AsObject;
  static serializeBinaryToWriter(message: TokenUrls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenUrls;
  static deserializeBinaryFromReader(message: TokenUrls, reader: jspb.BinaryReader): TokenUrls;
}

export namespace TokenUrls {
  export type AsObject = {
    website: string,
    technicalDocumentation: string,
    explorer: string,
    repository: string,
    telegram: string,
    discord: string,
    medium: string,
    twitter: string,
  }
}

export class TokenSecurityInfo extends jspb.Message {
  getOwnershipRenounced(): boolean;
  setOwnershipRenounced(value: boolean): TokenSecurityInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenSecurityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenSecurityInfo): TokenSecurityInfo.AsObject;
  static serializeBinaryToWriter(message: TokenSecurityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenSecurityInfo;
  static deserializeBinaryFromReader(message: TokenSecurityInfo, reader: jspb.BinaryReader): TokenSecurityInfo;
}

export namespace TokenSecurityInfo {
  export type AsObject = {
    ownershipRenounced: boolean,
  }
}

export class Token extends jspb.Message {
  getId(): number;
  setId(value: number): Token;

  getChainId(): number;
  setChainId(value: number): Token;

  getAddress(): string;
  setAddress(value: string): Token;

  getCreatorAddress(): string;
  setCreatorAddress(value: string): Token;

  getOwnerAddress(): string;
  setOwnerAddress(value: string): Token;

  getName(): string;
  setName(value: string): Token;

  getDescription(): string;
  setDescription(value: string): Token;

  getSymbol(): string;
  setSymbol(value: string): Token;

  getDecimals(): number;
  setDecimals(value: number): Token;

  getCreationBlockNumber(): number;
  setCreationBlockNumber(value: number): Token;

  getCreationTransactionHash(): string;
  setCreationTransactionHash(value: string): Token;

  getCreationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Token;
  hasCreationTimestamp(): boolean;
  clearCreationTimestamp(): Token;

  getTotalSupply(): string;
  setTotalSupply(value: string): Token;

  getTotalSupplyInCirculation(): string;
  setTotalSupplyInCirculation(value: string): Token;

  getUrls(): TokenUrls | undefined;
  setUrls(value?: TokenUrls): Token;
  hasUrls(): boolean;
  clearUrls(): Token;

  getSecurity(): TokenSecurityInfo | undefined;
  setSecurity(value?: TokenSecurityInfo): Token;
  hasSecurity(): boolean;
  clearSecurity(): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    id: number,
    chainId: number,
    address: string,
    creatorAddress: string,
    ownerAddress: string,
    name: string,
    description: string,
    symbol: string,
    decimals: number,
    creationBlockNumber: number,
    creationTransactionHash: string,
    creationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    totalSupply: string,
    totalSupplyInCirculation: string,
    urls?: TokenUrls.AsObject,
    security?: TokenSecurityInfo.AsObject,
  }
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getReason(): string;
  setReason(value: string): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetailsList(): Array<google_protobuf_any_pb.Any>;
  setDetailsList(value: Array<google_protobuf_any_pb.Any>): Status;
  clearDetailsList(): Status;
  addDetails(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    reason: string,
    message: string,
    detailsList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

export class FilterTokensRequest extends jspb.Message {
  getStartBlock(): number;
  setStartBlock(value: number): FilterTokensRequest;

  getEndBlock(): number;
  setEndBlock(value: number): FilterTokensRequest;

  getPage(): number;
  setPage(value: number): FilterTokensRequest;

  getPageSize(): number;
  setPageSize(value: number): FilterTokensRequest;

  getStatus(): number;
  setStatus(value: number): FilterTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterTokensRequest): FilterTokensRequest.AsObject;
  static serializeBinaryToWriter(message: FilterTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterTokensRequest;
  static deserializeBinaryFromReader(message: FilterTokensRequest, reader: jspb.BinaryReader): FilterTokensRequest;
}

export namespace FilterTokensRequest {
  export type AsObject = {
    startBlock: number,
    endBlock: number,
    page: number,
    pageSize: number,
    status: number,
  }
}

export class FilterTokensResponse extends jspb.Message {
  getStatus(): Status | undefined;
  setStatus(value?: Status): FilterTokensResponse;
  hasStatus(): boolean;
  clearStatus(): FilterTokensResponse;

  getTokenList(): Array<Token>;
  setTokenList(value: Array<Token>): FilterTokensResponse;
  clearTokenList(): FilterTokensResponse;
  addToken(value?: Token, index?: number): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterTokensResponse): FilterTokensResponse.AsObject;
  static serializeBinaryToWriter(message: FilterTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterTokensResponse;
  static deserializeBinaryFromReader(message: FilterTokensResponse, reader: jspb.BinaryReader): FilterTokensResponse;
}

export namespace FilterTokensResponse {
  export type AsObject = {
    status?: Status.AsObject,
    tokenList: Array<Token.AsObject>,
  }
}

export class GetTokenRequest extends jspb.Message {
  getTokenId(): number;
  setTokenId(value: number): GetTokenRequest;

  getAddress(): string;
  setAddress(value: string): GetTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenRequest): GetTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenRequest;
  static deserializeBinaryFromReader(message: GetTokenRequest, reader: jspb.BinaryReader): GetTokenRequest;
}

export namespace GetTokenRequest {
  export type AsObject = {
    tokenId: number,
    address: string,
  }
}

export class GetTokenResponse extends jspb.Message {
  getBlock(): Token | undefined;
  setBlock(value?: Token): GetTokenResponse;
  hasBlock(): boolean;
  clearBlock(): GetTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenResponse): GetTokenResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenResponse;
  static deserializeBinaryFromReader(message: GetTokenResponse, reader: jspb.BinaryReader): GetTokenResponse;
}

export namespace GetTokenResponse {
  export type AsObject = {
    block?: Token.AsObject,
  }
}

export class SubscribeTokensRequest extends jspb.Message {
  getStartBlock(): number;
  setStartBlock(value: number): SubscribeTokensRequest;

  getStatus(): TokenStatus;
  setStatus(value: TokenStatus): SubscribeTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTokensRequest): SubscribeTokensRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTokensRequest;
  static deserializeBinaryFromReader(message: SubscribeTokensRequest, reader: jspb.BinaryReader): SubscribeTokensRequest;
}

export namespace SubscribeTokensRequest {
  export type AsObject = {
    startBlock: number,
    status: TokenStatus,
  }
}

export class QueueTokenRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): QueueTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueTokenRequest): QueueTokenRequest.AsObject;
  static serializeBinaryToWriter(message: QueueTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueTokenRequest;
  static deserializeBinaryFromReader(message: QueueTokenRequest, reader: jspb.BinaryReader): QueueTokenRequest;
}

export namespace QueueTokenRequest {
  export type AsObject = {
    address: string,
  }
}

export class QueueTokenResponse extends jspb.Message {
  getStatus(): Status | undefined;
  setStatus(value?: Status): QueueTokenResponse;
  hasStatus(): boolean;
  clearStatus(): QueueTokenResponse;

  getTokenQueueStatus(): TokenStatus;
  setTokenQueueStatus(value: TokenStatus): QueueTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueTokenResponse): QueueTokenResponse.AsObject;
  static serializeBinaryToWriter(message: QueueTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueTokenResponse;
  static deserializeBinaryFromReader(message: QueueTokenResponse, reader: jspb.BinaryReader): QueueTokenResponse;
}

export namespace QueueTokenResponse {
  export type AsObject = {
    status?: Status.AsObject,
    tokenQueueStatus: TokenStatus,
  }
}

export class SubscriptionTokenResponse extends jspb.Message {
  getStatus(): Status | undefined;
  setStatus(value?: Status): SubscriptionTokenResponse;
  hasStatus(): boolean;
  clearStatus(): SubscriptionTokenResponse;

  getTokenDiscoveryStatus(): TokenStatus;
  setTokenDiscoveryStatus(value: TokenStatus): SubscriptionTokenResponse;

  getToken(): Token | undefined;
  setToken(value?: Token): SubscriptionTokenResponse;
  hasToken(): boolean;
  clearToken(): SubscriptionTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionTokenResponse): SubscriptionTokenResponse.AsObject;
  static serializeBinaryToWriter(message: SubscriptionTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionTokenResponse;
  static deserializeBinaryFromReader(message: SubscriptionTokenResponse, reader: jspb.BinaryReader): SubscriptionTokenResponse;
}

export namespace SubscriptionTokenResponse {
  export type AsObject = {
    status?: Status.AsObject,
    tokenDiscoveryStatus: TokenStatus,
    token?: Token.AsObject,
  }
}

export enum TokenStatus { 
  ANY = 0,
  QUEUED = 1,
  PROCESSING = 2,
  PROCESSED = 3,
  FAILED = 4,
}
