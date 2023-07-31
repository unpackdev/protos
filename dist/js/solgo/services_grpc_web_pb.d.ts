import * as grpcWeb from 'grpc-web';

import * as ast_ast_pb from '../ast/ast_pb';
import * as health_health_pb from '../health/health_pb';
import * as metadata_metadata_pb from '../metadata/metadata_pb';


export class SolGoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAst(
    request: ast_ast_pb.AstRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ast_ast_pb.AstResponse) => void
  ): grpcWeb.ClientReadableStream<ast_ast_pb.AstResponse>;

  getAstFromSource(
    request: ast_ast_pb.AstRawRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ast_ast_pb.AstResponse) => void
  ): grpcWeb.ClientReadableStream<ast_ast_pb.AstResponse>;

  getMetadata(
    request: metadata_metadata_pb.MetadataRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: metadata_metadata_pb.MetadataResponse) => void
  ): grpcWeb.ClientReadableStream<metadata_metadata_pb.MetadataResponse>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: health_health_pb.HealthResponse) => void
  ): grpcWeb.ClientReadableStream<health_health_pb.HealthResponse>;

}

export class SolGoServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getAst(
    request: ast_ast_pb.AstRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ast_ast_pb.AstResponse>;

  getAstFromSource(
    request: ast_ast_pb.AstRawRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ast_ast_pb.AstResponse>;

  getMetadata(
    request: metadata_metadata_pb.MetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<metadata_metadata_pb.MetadataResponse>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_health_pb.HealthResponse>;

}

