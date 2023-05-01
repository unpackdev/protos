import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from './google/api/annotations_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class Token extends jspb.Message {
  getId(): number;
  setId(value: number): Token;

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

export enum TokenStatus { 
  ANY = 0,
  QUEUED = 1,
  PROCESSING = 2,
  PROCESSED = 3,
  FAILED = 4,
}
