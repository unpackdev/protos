import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class NetworkRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkRequest): NetworkRequest.AsObject;
  static serializeBinaryToWriter(message: NetworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkRequest;
  static deserializeBinaryFromReader(message: NetworkRequest, reader: jspb.BinaryReader): NetworkRequest;
}

export namespace NetworkRequest {
  export type AsObject = {
  }
}

export class NetworkResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkResponse): NetworkResponse.AsObject;
  static serializeBinaryToWriter(message: NetworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkResponse;
  static deserializeBinaryFromReader(message: NetworkResponse, reader: jspb.BinaryReader): NetworkResponse;
}

export namespace NetworkResponse {
  export type AsObject = {
  }
}

export class AstRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AstRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AstRequest): AstRequest.AsObject;
  static serializeBinaryToWriter(message: AstRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AstRequest;
  static deserializeBinaryFromReader(message: AstRequest, reader: jspb.BinaryReader): AstRequest;
}

export namespace AstRequest {
  export type AsObject = {
  }
}

export class AstResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AstResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AstResponse): AstResponse.AsObject;
  static serializeBinaryToWriter(message: AstResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AstResponse;
  static deserializeBinaryFromReader(message: AstResponse, reader: jspb.BinaryReader): AstResponse;
}

export namespace AstResponse {
  export type AsObject = {
  }
}

export class OpCodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpCodeRequest): OpCodeRequest.AsObject;
  static serializeBinaryToWriter(message: OpCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpCodeRequest;
  static deserializeBinaryFromReader(message: OpCodeRequest, reader: jspb.BinaryReader): OpCodeRequest;
}

export namespace OpCodeRequest {
  export type AsObject = {
  }
}

export class OpCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpCodeResponse): OpCodeResponse.AsObject;
  static serializeBinaryToWriter(message: OpCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpCodeResponse;
  static deserializeBinaryFromReader(message: OpCodeResponse, reader: jspb.BinaryReader): OpCodeResponse;
}

export namespace OpCodeResponse {
  export type AsObject = {
  }
}

export class MethodRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MethodRequest): MethodRequest.AsObject;
  static serializeBinaryToWriter(message: MethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodRequest;
  static deserializeBinaryFromReader(message: MethodRequest, reader: jspb.BinaryReader): MethodRequest;
}

export namespace MethodRequest {
  export type AsObject = {
  }
}

export class MethodResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MethodResponse): MethodResponse.AsObject;
  static serializeBinaryToWriter(message: MethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodResponse;
  static deserializeBinaryFromReader(message: MethodResponse, reader: jspb.BinaryReader): MethodResponse;
}

export namespace MethodResponse {
  export type AsObject = {
  }
}

export class MetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataRequest): MetadataRequest.AsObject;
  static serializeBinaryToWriter(message: MetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataRequest;
  static deserializeBinaryFromReader(message: MetadataRequest, reader: jspb.BinaryReader): MetadataRequest;
}

export namespace MetadataRequest {
  export type AsObject = {
  }
}

export class MetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataResponse): MetadataResponse.AsObject;
  static serializeBinaryToWriter(message: MetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataResponse;
  static deserializeBinaryFromReader(message: MetadataResponse, reader: jspb.BinaryReader): MetadataResponse;
}

export namespace MetadataResponse {
  export type AsObject = {
  }
}

export class AnalysisRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisRequest): AnalysisRequest.AsObject;
  static serializeBinaryToWriter(message: AnalysisRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisRequest;
  static deserializeBinaryFromReader(message: AnalysisRequest, reader: jspb.BinaryReader): AnalysisRequest;
}

export namespace AnalysisRequest {
  export type AsObject = {
  }
}

export class AnalysisResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnalysisResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AnalysisResponse): AnalysisResponse.AsObject;
  static serializeBinaryToWriter(message: AnalysisResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnalysisResponse;
  static deserializeBinaryFromReader(message: AnalysisResponse, reader: jspb.BinaryReader): AnalysisResponse;
}

export namespace AnalysisResponse {
  export type AsObject = {
  }
}

export class ContractRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): ContractRequest;

  getNetworkId(): number;
  setNetworkId(value: number): ContractRequest;

  getIncludeBytecode(): boolean;
  setIncludeBytecode(value: boolean): ContractRequest;

  getIncludeSourceCode(): boolean;
  setIncludeSourceCode(value: boolean): ContractRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContractRequest): ContractRequest.AsObject;
  static serializeBinaryToWriter(message: ContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractRequest;
  static deserializeBinaryFromReader(message: ContractRequest, reader: jspb.BinaryReader): ContractRequest;
}

export namespace ContractRequest {
  export type AsObject = {
    address: string,
    networkId: number,
    includeBytecode: boolean,
    includeSourceCode: boolean,
  }
}

export class ContractResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContractResponse): ContractResponse.AsObject;
  static serializeBinaryToWriter(message: ContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractResponse;
  static deserializeBinaryFromReader(message: ContractResponse, reader: jspb.BinaryReader): ContractResponse;
}

export namespace ContractResponse {
  export type AsObject = {
  }
}

export class VerificationDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationDetailsRequest): VerificationDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: VerificationDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationDetailsRequest;
  static deserializeBinaryFromReader(message: VerificationDetailsRequest, reader: jspb.BinaryReader): VerificationDetailsRequest;
}

export namespace VerificationDetailsRequest {
  export type AsObject = {
  }
}

export class VerificationDetailsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationDetailsResponse): VerificationDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: VerificationDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationDetailsResponse;
  static deserializeBinaryFromReader(message: VerificationDetailsResponse, reader: jspb.BinaryReader): VerificationDetailsResponse;
}

export namespace VerificationDetailsResponse {
  export type AsObject = {
  }
}

export class AbiRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbiRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AbiRequest): AbiRequest.AsObject;
  static serializeBinaryToWriter(message: AbiRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbiRequest;
  static deserializeBinaryFromReader(message: AbiRequest, reader: jspb.BinaryReader): AbiRequest;
}

export namespace AbiRequest {
  export type AsObject = {
  }
}

export class AbiResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbiResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AbiResponse): AbiResponse.AsObject;
  static serializeBinaryToWriter(message: AbiResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbiResponse;
  static deserializeBinaryFromReader(message: AbiResponse, reader: jspb.BinaryReader): AbiResponse;
}

export namespace AbiResponse {
  export type AsObject = {
  }
}

export class SourceCodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SourceCodeRequest): SourceCodeRequest.AsObject;
  static serializeBinaryToWriter(message: SourceCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceCodeRequest;
  static deserializeBinaryFromReader(message: SourceCodeRequest, reader: jspb.BinaryReader): SourceCodeRequest;
}

export namespace SourceCodeRequest {
  export type AsObject = {
  }
}

export class SourceCodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SourceCodeResponse): SourceCodeResponse.AsObject;
  static serializeBinaryToWriter(message: SourceCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceCodeResponse;
  static deserializeBinaryFromReader(message: SourceCodeResponse, reader: jspb.BinaryReader): SourceCodeResponse;
}

export namespace SourceCodeResponse {
  export type AsObject = {
  }
}

export class BytecodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytecodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BytecodeRequest): BytecodeRequest.AsObject;
  static serializeBinaryToWriter(message: BytecodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytecodeRequest;
  static deserializeBinaryFromReader(message: BytecodeRequest, reader: jspb.BinaryReader): BytecodeRequest;
}

export namespace BytecodeRequest {
  export type AsObject = {
  }
}

export class BytecodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytecodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BytecodeResponse): BytecodeResponse.AsObject;
  static serializeBinaryToWriter(message: BytecodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytecodeResponse;
  static deserializeBinaryFromReader(message: BytecodeResponse, reader: jspb.BinaryReader): BytecodeResponse;
}

export namespace BytecodeResponse {
  export type AsObject = {
  }
}

export class MethodsBySignatureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodsBySignatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MethodsBySignatureRequest): MethodsBySignatureRequest.AsObject;
  static serializeBinaryToWriter(message: MethodsBySignatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodsBySignatureRequest;
  static deserializeBinaryFromReader(message: MethodsBySignatureRequest, reader: jspb.BinaryReader): MethodsBySignatureRequest;
}

export namespace MethodsBySignatureRequest {
  export type AsObject = {
  }
}

export class MethodsBySignatureResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodsBySignatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MethodsBySignatureResponse): MethodsBySignatureResponse.AsObject;
  static serializeBinaryToWriter(message: MethodsBySignatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodsBySignatureResponse;
  static deserializeBinaryFromReader(message: MethodsBySignatureResponse, reader: jspb.BinaryReader): MethodsBySignatureResponse;
}

export namespace MethodsBySignatureResponse {
  export type AsObject = {
  }
}

export class BlockRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
  }
}

export class BlockResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
  static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
  }
}

export class TransactionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRequest): TransactionRequest.AsObject;
  static serializeBinaryToWriter(message: TransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRequest;
  static deserializeBinaryFromReader(message: TransactionRequest, reader: jspb.BinaryReader): TransactionRequest;
}

export namespace TransactionRequest {
  export type AsObject = {
  }
}

export class TransactionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
  }
}

export class ReceiptRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptRequest): ReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptRequest;
  static deserializeBinaryFromReader(message: ReceiptRequest, reader: jspb.BinaryReader): ReceiptRequest;
}

export namespace ReceiptRequest {
  export type AsObject = {
  }
}

export class ReceiptResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptResponse): ReceiptResponse.AsObject;
  static serializeBinaryToWriter(message: ReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptResponse;
  static deserializeBinaryFromReader(message: ReceiptResponse, reader: jspb.BinaryReader): ReceiptResponse;
}

export namespace ReceiptResponse {
  export type AsObject = {
  }
}

export class LogRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
  }
}

export class LogResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogResponse): LogResponse.AsObject;
  static serializeBinaryToWriter(message: LogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogResponse;
  static deserializeBinaryFromReader(message: LogResponse, reader: jspb.BinaryReader): LogResponse;
}

export namespace LogResponse {
  export type AsObject = {
  }
}

export class TraceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TraceRequest): TraceRequest.AsObject;
  static serializeBinaryToWriter(message: TraceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceRequest;
  static deserializeBinaryFromReader(message: TraceRequest, reader: jspb.BinaryReader): TraceRequest;
}

export namespace TraceRequest {
  export type AsObject = {
  }
}

export class TraceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TraceResponse): TraceResponse.AsObject;
  static serializeBinaryToWriter(message: TraceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraceResponse;
  static deserializeBinaryFromReader(message: TraceResponse, reader: jspb.BinaryReader): TraceResponse;
}

export namespace TraceResponse {
  export type AsObject = {
  }
}

export class QueueContractRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): QueueContractRequest;

  getAddress(): string;
  setAddress(value: string): QueueContractRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueContractRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueContractRequest): QueueContractRequest.AsObject;
  static serializeBinaryToWriter(message: QueueContractRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueContractRequest;
  static deserializeBinaryFromReader(message: QueueContractRequest, reader: jspb.BinaryReader): QueueContractRequest;
}

export namespace QueueContractRequest {
  export type AsObject = {
    chainId: number,
    address: string,
  }
}

export class QueueContractResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): QueueContractResponse;

  getStatus(): boolean;
  setStatus(value: boolean): QueueContractResponse;

  getMessage(): string;
  setMessage(value: string): QueueContractResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueContractResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueContractResponse): QueueContractResponse.AsObject;
  static serializeBinaryToWriter(message: QueueContractResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueContractResponse;
  static deserializeBinaryFromReader(message: QueueContractResponse, reader: jspb.BinaryReader): QueueContractResponse;
}

export namespace QueueContractResponse {
  export type AsObject = {
    code: number,
    status: boolean,
    message: string,
  }
}

export class QueueMethodRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueMethodRequest): QueueMethodRequest.AsObject;
  static serializeBinaryToWriter(message: QueueMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueMethodRequest;
  static deserializeBinaryFromReader(message: QueueMethodRequest, reader: jspb.BinaryReader): QueueMethodRequest;
}

export namespace QueueMethodRequest {
  export type AsObject = {
  }
}

export class QueueMethodResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueMethodResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueMethodResponse): QueueMethodResponse.AsObject;
  static serializeBinaryToWriter(message: QueueMethodResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueMethodResponse;
  static deserializeBinaryFromReader(message: QueueMethodResponse, reader: jspb.BinaryReader): QueueMethodResponse;
}

export namespace QueueMethodResponse {
  export type AsObject = {
  }
}

export class QueueBytecodeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueBytecodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueBytecodeRequest): QueueBytecodeRequest.AsObject;
  static serializeBinaryToWriter(message: QueueBytecodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueBytecodeRequest;
  static deserializeBinaryFromReader(message: QueueBytecodeRequest, reader: jspb.BinaryReader): QueueBytecodeRequest;
}

export namespace QueueBytecodeRequest {
  export type AsObject = {
  }
}

export class QueueBytecodeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueBytecodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueBytecodeResponse): QueueBytecodeResponse.AsObject;
  static serializeBinaryToWriter(message: QueueBytecodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueBytecodeResponse;
  static deserializeBinaryFromReader(message: QueueBytecodeResponse, reader: jspb.BinaryReader): QueueBytecodeResponse;
}

export namespace QueueBytecodeResponse {
  export type AsObject = {
  }
}

export class StatisticsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsRequest): StatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: StatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsRequest;
  static deserializeBinaryFromReader(message: StatisticsRequest, reader: jspb.BinaryReader): StatisticsRequest;
}

export namespace StatisticsRequest {
  export type AsObject = {
  }
}

export class StatisticsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsResponse): StatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: StatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsResponse;
  static deserializeBinaryFromReader(message: StatisticsResponse, reader: jspb.BinaryReader): StatisticsResponse;
}

export namespace StatisticsResponse {
  export type AsObject = {
  }
}

export class QueueStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueStatusRequest): QueueStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueueStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueStatusRequest;
  static deserializeBinaryFromReader(message: QueueStatusRequest, reader: jspb.BinaryReader): QueueStatusRequest;
}

export namespace QueueStatusRequest {
  export type AsObject = {
  }
}

export class QueueStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueStatusResponse): QueueStatusResponse.AsObject;
  static serializeBinaryToWriter(message: QueueStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueStatusResponse;
  static deserializeBinaryFromReader(message: QueueStatusResponse, reader: jspb.BinaryReader): QueueStatusResponse;
}

export namespace QueueStatusResponse {
  export type AsObject = {
  }
}

export class QueueStatisticsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueueStatisticsRequest): QueueStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: QueueStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueStatisticsRequest;
  static deserializeBinaryFromReader(message: QueueStatisticsRequest, reader: jspb.BinaryReader): QueueStatisticsRequest;
}

export namespace QueueStatisticsRequest {
  export type AsObject = {
  }
}

export class QueueStatisticsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueueStatisticsResponse): QueueStatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: QueueStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueStatisticsResponse;
  static deserializeBinaryFromReader(message: QueueStatisticsResponse, reader: jspb.BinaryReader): QueueStatisticsResponse;
}

export namespace QueueStatisticsResponse {
  export type AsObject = {
  }
}

export class HealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
  static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
  }
}

export class HealthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
  static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthResponse;
  static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
  export type AsObject = {
  }
}

