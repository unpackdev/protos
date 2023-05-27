import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Transaction extends jspb.Message {
  getId(): number;
  setId(value: number): Transaction;

  getChainId(): number;
  setChainId(value: number): Transaction;

  getBlockId(): number;
  setBlockId(value: number): Transaction;

  getTransactionIndex(): number;
  setTransactionIndex(value: number): Transaction;

  getHash(): string;
  setHash(value: string): Transaction;

  getNonce(): number;
  setNonce(value: number): Transaction;

  getFromAddress(): string;
  setFromAddress(value: string): Transaction;

  getToAddress(): string;
  setToAddress(value: string): Transaction;

  getMethod(): string;
  setMethod(value: string): Transaction;

  getMethodDetails(): string;
  setMethodDetails(value: string): Transaction;

  getData(): string;
  setData(value: string): Transaction;

  getValue(): string;
  setValue(value: string): Transaction;

  getGas(): number;
  setGas(value: number): Transaction;

  getGasUsed(): number;
  setGasUsed(value: number): Transaction;

  getCumulativeGasUsed(): number;
  setCumulativeGasUsed(value: number): Transaction;

  getGasFeeCap(): string;
  setGasFeeCap(value: string): Transaction;

  getGasTipCap(): string;
  setGasTipCap(value: string): Transaction;

  getGasPrice(): string;
  setGasPrice(value: string): Transaction;

  getPrice(): string;
  setPrice(value: string): Transaction;

  getType(): number;
  setType(value: number): Transaction;

  getSize(): number;
  setSize(value: number): Transaction;

  getProtected(): boolean;
  setProtected(value: boolean): Transaction;

  getLogsCount(): number;
  setLogsCount(value: number): Transaction;

  getStatus(): TransactionStatus;
  setStatus(value: TransactionStatus): Transaction;

  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): Transaction;

  getProcessedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProcessedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasProcessedTimestamp(): boolean;
  clearProcessedTimestamp(): Transaction;

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
    blockId: number,
    transactionIndex: number,
    hash: string,
    nonce: number,
    fromAddress: string,
    toAddress: string,
    method: string,
    methodDetails: string,
    data: string,
    value: string,
    gas: number,
    gasUsed: number,
    cumulativeGasUsed: number,
    gasFeeCap: string,
    gasTipCap: string,
    gasPrice: string,
    price: string,
    type: number,
    size: number,
    pb_protected: boolean,
    logsCount: number,
    status: TransactionStatus,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    processedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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

export enum TransactionStatus { 
  TS_NONE = 0,
  TS_QUEUED = 1,
  TS_PROCESSING = 2,
  TS_PROCESSED = 3,
  TS_FAILED = 4,
}
