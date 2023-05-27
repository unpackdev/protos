import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Chain extends jspb.Message {
  getId(): number;
  setId(value: number): Chain;

  getChainId(): number;
  setChainId(value: number): Chain;

  getName(): string;
  setName(value: string): Chain;

  getAddress(): string;
  setAddress(value: string): Chain;

  getLatestBlock(): number;
  setLatestBlock(value: number): Chain;

  getLatestIndexedBlock(): number;
  setLatestIndexedBlock(value: number): Chain;

  getTotalIndexedBlocks(): number;
  setTotalIndexedBlocks(value: number): Chain;

  getAverageIndexTimeMs(): number;
  setAverageIndexTimeMs(value: number): Chain;

  getStatus(): ChainStatus;
  setStatus(value: ChainStatus): Chain;

  getCreationTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Chain;
  hasCreationTimestamp(): boolean;
  clearCreationTimestamp(): Chain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chain.AsObject;
  static toObject(includeInstance: boolean, msg: Chain): Chain.AsObject;
  static serializeBinaryToWriter(message: Chain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chain;
  static deserializeBinaryFromReader(message: Chain, reader: jspb.BinaryReader): Chain;
}

export namespace Chain {
  export type AsObject = {
    id: number,
    chainId: number,
    name: string,
    address: string,
    latestBlock: number,
    latestIndexedBlock: number,
    totalIndexedBlocks: number,
    averageIndexTimeMs: number,
    status: ChainStatus,
    creationTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FilterChainRequest extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterChainRequest;
  hasStatus(): boolean;
  clearStatus(): FilterChainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterChainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterChainRequest): FilterChainRequest.AsObject;
  static serializeBinaryToWriter(message: FilterChainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterChainRequest;
  static deserializeBinaryFromReader(message: FilterChainRequest, reader: jspb.BinaryReader): FilterChainRequest;
}

export namespace FilterChainRequest {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
  }
}

export class FilterChainResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterChainResponse;
  hasStatus(): boolean;
  clearStatus(): FilterChainResponse;

  getChainsList(): Array<Chain>;
  setChainsList(value: Array<Chain>): FilterChainResponse;
  clearChainsList(): FilterChainResponse;
  addChains(value?: Chain, index?: number): Chain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterChainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterChainResponse): FilterChainResponse.AsObject;
  static serializeBinaryToWriter(message: FilterChainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterChainResponse;
  static deserializeBinaryFromReader(message: FilterChainResponse, reader: jspb.BinaryReader): FilterChainResponse;
}

export namespace FilterChainResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    chainsList: Array<Chain.AsObject>,
  }
}

export class GetChainRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GetChainRequest;

  getId(): number;
  setId(value: number): GetChainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainRequest): GetChainRequest.AsObject;
  static serializeBinaryToWriter(message: GetChainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainRequest;
  static deserializeBinaryFromReader(message: GetChainRequest, reader: jspb.BinaryReader): GetChainRequest;
}

export namespace GetChainRequest {
  export type AsObject = {
    chainId: number,
    id: number,
  }
}

export class GetChainResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): GetChainResponse;
  hasStatus(): boolean;
  clearStatus(): GetChainResponse;

  getChain(): Chain | undefined;
  setChain(value?: Chain): GetChainResponse;
  hasChain(): boolean;
  clearChain(): GetChainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChainResponse): GetChainResponse.AsObject;
  static serializeBinaryToWriter(message: GetChainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChainResponse;
  static deserializeBinaryFromReader(message: GetChainResponse, reader: jspb.BinaryReader): GetChainResponse;
}

export namespace GetChainResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    chain?: Chain.AsObject,
  }
}

export enum ChainStatus { 
  CS_NONE = 0,
  CS_OFFLINE = 1,
  CS_ONLINE = 2,
  CS_DISABLED = 3,
  CS_WIP = 4,
}
