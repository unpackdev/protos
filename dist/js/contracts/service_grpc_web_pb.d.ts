import * as grpcWeb from 'grpc-web';

import * as contracts_service_parameters_pb from '../contracts/service_parameters_pb';


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

}

