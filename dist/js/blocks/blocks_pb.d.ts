import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Block extends jspb.Message {
  getId(): number;
  setId(value: number): Block;

  getChainId(): number;
  setChainId(value: number): Block;

  getNumber(): number;
  setNumber(value: number): Block;

  getHash(): string;
  setHash(value: string): Block;

  getParentHash(): string;
  setParentHash(value: string): Block;

  getUncleHash(): string;
  setUncleHash(value: string): Block;

  getMixHash(): string;
  setMixHash(value: string): Block;

  getNonce(): number;
  setNonce(value: number): Block;

  getLogsBloom(): Uint8Array | string;
  getLogsBloom_asU8(): Uint8Array;
  getLogsBloom_asB64(): string;
  setLogsBloom(value: Uint8Array | string): Block;

  getStateRoot(): string;
  setStateRoot(value: string): Block;

  getTransactionsRoot(): string;
  setTransactionsRoot(value: string): Block;

  getReceiptsRoot(): string;
  setReceiptsRoot(value: string): Block;

  getCoinbase(): string;
  setCoinbase(value: string): Block;

  getDifficulty(): number;
  setDifficulty(value: number): Block;

  getSize(): number;
  setSize(value: number): Block;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Block;
  hasTimestamp(): boolean;
  clearTimestamp(): Block;

  getExtraData(): Uint8Array | string;
  getExtraData_asU8(): Uint8Array;
  getExtraData_asB64(): string;
  setExtraData(value: Uint8Array | string): Block;

  getGasLimit(): number;
  setGasLimit(value: number): Block;

  getGasUsed(): number;
  setGasUsed(value: number): Block;

  getBaseFee(): number;
  setBaseFee(value: number): Block;

  getTotalTransactionsCount(): number;
  setTotalTransactionsCount(value: number): Block;

  getProcessedTransactionsCount(): number;
  setProcessedTransactionsCount(value: number): Block;

  getStatus(): BlockStatus;
  setStatus(value: BlockStatus): Block;

  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Block;
  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): Block;

  getProcessedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProcessedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Block;
  hasProcessedTimestamp(): boolean;
  clearProcessedTimestamp(): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    id: number,
    chainId: number,
    number: number,
    hash: string,
    parentHash: string,
    uncleHash: string,
    mixHash: string,
    nonce: number,
    logsBloom: Uint8Array | string,
    stateRoot: string,
    transactionsRoot: string,
    receiptsRoot: string,
    coinbase: string,
    difficulty: number,
    size: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    extraData: Uint8Array | string,
    gasLimit: number,
    gasUsed: number,
    baseFee: number,
    totalTransactionsCount: number,
    processedTransactionsCount: number,
    status: BlockStatus,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    processedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FilterBlockRequest extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterBlockRequest;
  hasStatus(): boolean;
  clearStatus(): FilterBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterBlockRequest): FilterBlockRequest.AsObject;
  static serializeBinaryToWriter(message: FilterBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterBlockRequest;
  static deserializeBinaryFromReader(message: FilterBlockRequest, reader: jspb.BinaryReader): FilterBlockRequest;
}

export namespace FilterBlockRequest {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
  }
}

export class FilterBlockResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterBlockResponse;
  hasStatus(): boolean;
  clearStatus(): FilterBlockResponse;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): FilterBlockResponse;
  clearBlocksList(): FilterBlockResponse;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterBlockResponse): FilterBlockResponse.AsObject;
  static serializeBinaryToWriter(message: FilterBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterBlockResponse;
  static deserializeBinaryFromReader(message: FilterBlockResponse, reader: jspb.BinaryReader): FilterBlockResponse;
}

export namespace FilterBlockResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    blocksList: Array<Block.AsObject>,
  }
}

export class GetBlockRequest extends jspb.Message {
  getBlockId(): number;
  setBlockId(value: number): GetBlockRequest;

  getId(): number;
  setId(value: number): GetBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockRequest): GetBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(message: GetBlockRequest, reader: jspb.BinaryReader): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    blockId: number,
    id: number,
  }
}

export class GetBlockResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): GetBlockResponse;
  hasStatus(): boolean;
  clearStatus(): GetBlockResponse;

  getBlock(): Block | undefined;
  setBlock(value?: Block): GetBlockResponse;
  hasBlock(): boolean;
  clearBlock(): GetBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockResponse): GetBlockResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockResponse;
  static deserializeBinaryFromReader(message: GetBlockResponse, reader: jspb.BinaryReader): GetBlockResponse;
}

export namespace GetBlockResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    block?: Block.AsObject,
  }
}

export enum BlockStatus { 
  BS_NONE = 0,
  BS_QUEUED = 1,
  BS_PROCESSING = 2,
  BS_PROCESSED = 3,
  BS_FAILED = 4,
}
