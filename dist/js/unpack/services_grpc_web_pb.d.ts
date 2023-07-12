import * as grpcWeb from 'grpc-web';

import * as unpack_types_pb from '../unpack/types_pb';


export class AuthorizationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

}

export class ObserverServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getNetworks(
    request: unpack_types_pb.NetworkRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.NetworkResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.NetworkResponse>;

  getAST(
    request: unpack_types_pb.AstRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.AstResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.AstResponse>;

  getOpCode(
    request: unpack_types_pb.OpCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.OpCodeResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.OpCodeResponse>;

  getMethod(
    request: unpack_types_pb.MethodRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.MethodResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.MethodResponse>;

  getMetadata(
    request: unpack_types_pb.MetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.MetadataResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.MetadataResponse>;

  getAnalysis(
    request: unpack_types_pb.AnalysisRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.AnalysisResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.AnalysisResponse>;

  getContract(
    request: unpack_types_pb.ContractRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.ContractResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.ContractResponse>;

  getVerificationDetails(
    request: unpack_types_pb.VerificationDetailsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.VerificationDetailsResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.VerificationDetailsResponse>;

  getABI(
    request: unpack_types_pb.AbiRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.AbiResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.AbiResponse>;

  getSourceCode(
    request: unpack_types_pb.SourceCodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.SourceCodeResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.SourceCodeResponse>;

  getBytecode(
    request: unpack_types_pb.BytecodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.BytecodeResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.BytecodeResponse>;

  getMethodsBySignature(
    request: unpack_types_pb.MethodsBySignatureRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.MethodsBySignatureResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.MethodsBySignatureResponse>;

  getBlock(
    request: unpack_types_pb.BlockRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.BlockResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.BlockResponse>;

  getTransaction(
    request: unpack_types_pb.TransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.TransactionResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.TransactionResponse>;

  getReceipt(
    request: unpack_types_pb.ReceiptRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.ReceiptResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.ReceiptResponse>;

  getLog(
    request: unpack_types_pb.LogRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.LogResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.LogResponse>;

  getTrace(
    request: unpack_types_pb.TraceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.TraceResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.TraceResponse>;

  queueContract(
    request: unpack_types_pb.QueueContractRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.QueueContractResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.QueueContractResponse>;

  queueMethod(
    request: unpack_types_pb.QueueMethodRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.QueueMethodResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.QueueMethodResponse>;

  queueBytecode(
    request: unpack_types_pb.QueueBytecodeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.QueueBytecodeResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.QueueBytecodeResponse>;

  getStatistics(
    request: unpack_types_pb.StatisticsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.StatisticsResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.StatisticsResponse>;

  getQueueStatus(
    request: unpack_types_pb.QueueStatusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.QueueStatusResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.QueueStatusResponse>;

  getQueueStatistics(
    request: unpack_types_pb.QueueStatisticsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.QueueStatisticsResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.QueueStatisticsResponse>;

  getHealth(
    request: unpack_types_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: unpack_types_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<unpack_types_pb.HealthResponse>;

}

export class AuthorizationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

}

export class ObserverServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getNetworks(
    request: unpack_types_pb.NetworkRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.NetworkResponse>;

  getAST(
    request: unpack_types_pb.AstRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.AstResponse>;

  getOpCode(
    request: unpack_types_pb.OpCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.OpCodeResponse>;

  getMethod(
    request: unpack_types_pb.MethodRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.MethodResponse>;

  getMetadata(
    request: unpack_types_pb.MetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.MetadataResponse>;

  getAnalysis(
    request: unpack_types_pb.AnalysisRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.AnalysisResponse>;

  getContract(
    request: unpack_types_pb.ContractRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.ContractResponse>;

  getVerificationDetails(
    request: unpack_types_pb.VerificationDetailsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.VerificationDetailsResponse>;

  getABI(
    request: unpack_types_pb.AbiRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.AbiResponse>;

  getSourceCode(
    request: unpack_types_pb.SourceCodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.SourceCodeResponse>;

  getBytecode(
    request: unpack_types_pb.BytecodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.BytecodeResponse>;

  getMethodsBySignature(
    request: unpack_types_pb.MethodsBySignatureRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.MethodsBySignatureResponse>;

  getBlock(
    request: unpack_types_pb.BlockRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.BlockResponse>;

  getTransaction(
    request: unpack_types_pb.TransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.TransactionResponse>;

  getReceipt(
    request: unpack_types_pb.ReceiptRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.ReceiptResponse>;

  getLog(
    request: unpack_types_pb.LogRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.LogResponse>;

  getTrace(
    request: unpack_types_pb.TraceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.TraceResponse>;

  queueContract(
    request: unpack_types_pb.QueueContractRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.QueueContractResponse>;

  queueMethod(
    request: unpack_types_pb.QueueMethodRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.QueueMethodResponse>;

  queueBytecode(
    request: unpack_types_pb.QueueBytecodeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.QueueBytecodeResponse>;

  getStatistics(
    request: unpack_types_pb.StatisticsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.StatisticsResponse>;

  getQueueStatus(
    request: unpack_types_pb.QueueStatusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.QueueStatusResponse>;

  getQueueStatistics(
    request: unpack_types_pb.QueueStatisticsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.QueueStatisticsResponse>;

  getHealth(
    request: unpack_types_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<unpack_types_pb.HealthResponse>;

}

