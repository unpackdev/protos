import * as grpcWeb from 'grpc-web';

import * as ast_service_parameters_pb from '../ast/service_parameters_pb';


export class ServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ast_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ast_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<ast_service_parameters_pb.Response>;

  decompile(
    request: ast_service_parameters_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ast_service_parameters_pb.Response) => void
  ): grpcWeb.ClientReadableStream<ast_service_parameters_pb.Response>;

}

export class ServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: ast_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<ast_service_parameters_pb.Response>;

  decompile(
    request: ast_service_parameters_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<ast_service_parameters_pb.Response>;

}

