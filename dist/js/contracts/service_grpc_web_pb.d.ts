import * as grpcWeb from 'grpc-web';

import * as contracts_service_parameters_pb from '../contracts/service_parameters_pb';
import * as health_health_pb from '../health/health_pb';


export class ServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: contracts_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contracts_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<contracts_service_parameters_pb.Response>;

  unpack(
    request: contracts_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: contracts_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<contracts_service_parameters_pb.Response>;

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
    request: contracts_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<contracts_service_parameters_pb.Response>;

  unpack(
    request: contracts_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<contracts_service_parameters_pb.Response>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_health_pb.HealthResponse>;

}

