import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Transaction extends jspb.Message {
  getId(): number;
  setId(value: number): Transaction;

  getChainId(): number;
  setChainId(value: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: number,
    chainId: number,
  }
}

export class FilterTransactionRequest extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterTransactionRequest;
  hasStatus(): boolean;
  clearStatus(): FilterTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterTransactionRequest): FilterTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: FilterTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterTransactionRequest;
  static deserializeBinaryFromReader(message: FilterTransactionRequest, reader: jspb.BinaryReader): FilterTransactionRequest;
}

export namespace FilterTransactionRequest {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
  }
}

export class FilterTransactionResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterTransactionResponse;
  hasStatus(): boolean;
  clearStatus(): FilterTransactionResponse;

  getTransactionList(): Array<Transaction>;
  setTransactionList(value: Array<Transaction>): FilterTransactionResponse;
  clearTransactionList(): FilterTransactionResponse;
  addTransaction(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterTransactionResponse): FilterTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: FilterTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterTransactionResponse;
  static deserializeBinaryFromReader(message: FilterTransactionResponse, reader: jspb.BinaryReader): FilterTransactionResponse;
}

export namespace FilterTransactionResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    transactionList: Array<Transaction.AsObject>,
  }
}

export class GetTransactionRequest extends jspb.Message {
  getTransactionId(): number;
  setTransactionId(value: number): GetTransactionRequest;

  getId(): number;
  setId(value: number): GetTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    transactionId: number,
    id: number,
  }
}

export class GetTransactionResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): GetTransactionResponse;
  hasStatus(): boolean;
  clearStatus(): GetTransactionResponse;

  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): GetTransactionResponse;
  hasTransaction(): boolean;
  clearTransaction(): GetTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
  static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    transaction?: Transaction.AsObject,
  }
}

