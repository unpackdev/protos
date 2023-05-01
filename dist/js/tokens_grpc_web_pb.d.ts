import * as grpcWeb from 'grpc-web';

import * as tokens_pb from './tokens_pb';


export class TokensClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: tokens_pb.FilterTokensRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: tokens_pb.FilterTokensResponse) => void
  ): grpcWeb.ClientReadableStream<tokens_pb.FilterTokensResponse>;

  get(
    request: tokens_pb.GetTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: tokens_pb.GetTokenResponse) => void
  ): grpcWeb.ClientReadableStream<tokens_pb.GetTokenResponse>;

  subscribe(
    request: tokens_pb.SubscribeTokensRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tokens_pb.Token>;

}

export class TokensPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: tokens_pb.FilterTokensRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<tokens_pb.FilterTokensResponse>;

  get(
    request: tokens_pb.GetTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<tokens_pb.GetTokenResponse>;

  subscribe(
    request: tokens_pb.SubscribeTokensRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tokens_pb.Token>;

}

