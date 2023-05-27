import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class QueueBlockRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): QueueBlockRequest;

  getBlockNumber(): number;
  setBlockNumber(value: number): QueueBlockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueBlockRequest): QueueBlockRequest.AsObject;
  static serializeBinaryToWriter(message: QueueBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueBlockRequest;
  static deserializeBinaryFromReader(message: QueueBlockRequest, reader: jspb.BinaryReader): QueueBlockRequest;
}

export namespace QueueBlockRequest {
  export type AsObject = {
    chainId: number,
    blockNumber: number,
  }
}

export class QueueBlockResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): QueueBlockResponse;
  hasStatus(): boolean;
  clearStatus(): QueueBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueBlockResponse): QueueBlockResponse.AsObject;
  static serializeBinaryToWriter(message: QueueBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueBlockResponse;
  static deserializeBinaryFromReader(message: QueueBlockResponse, reader: jspb.BinaryReader): QueueBlockResponse;
}

export namespace QueueBlockResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
  }
}

export enum ProcessorQueueStatus { 
  PQS_NONE = 0,
  PQS_QUEUED = 1,
  PQS_PROCESSING = 2,
  PQS_PROCESSED = 3,
  PQS_FAILED = 4,
}
