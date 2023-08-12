import * as grpcWeb from 'grpc-web';

import * as health_health_pb from '../health/health_pb';
import * as opcode_service_parameters_pb from '../opcode/service_parameters_pb';


export class ServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: opcode_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: opcode_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<opcode_service_parameters_pb.Response>;

  decompile(
    request: opcode_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: opcode_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<opcode_service_parameters_pb.Response>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: health_health_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<health_health_pb.HealthResponse>;

}

export class ServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: opcode_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<opcode_service_parameters_pb.Response>;

  decompile(
    request: opcode_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<opcode_service_parameters_pb.Response>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_health_pb.HealthResponse>;

}

