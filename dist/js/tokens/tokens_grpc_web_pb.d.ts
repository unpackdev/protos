import * as grpcWeb from 'grpc-web';

import * as tokens_tokens_pb from '../tokens/tokens_pb';


export class TokensClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: tokens_tokens_pb.FilterTokensRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: tokens_tokens_pb.FilterTokensResponse) => void
  ): grpcWeb.ClientReadableStream<tokens_tokens_pb.FilterTokensResponse>;

  get(
    request: tokens_tokens_pb.GetTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: tokens_tokens_pb.GetTokenResponse) => void
  ): grpcWeb.ClientReadableStream<tokens_tokens_pb.GetTokenResponse>;

  queue(
    request: tokens_tokens_pb.QueueTokenRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: tokens_tokens_pb.QueueTokenResponse) => void
  ): grpcWeb.ClientReadableStream<tokens_tokens_pb.QueueTokenResponse>;

  subscribe(
    request: tokens_tokens_pb.SubscribeTokensRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tokens_tokens_pb.SubscriptionTokenResponse>;

}

export class TokensPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: tokens_tokens_pb.FilterTokensRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<tokens_tokens_pb.FilterTokensResponse>;

  get(
    request: tokens_tokens_pb.GetTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<tokens_tokens_pb.GetTokenResponse>;

  queue(
    request: tokens_tokens_pb.QueueTokenRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<tokens_tokens_pb.QueueTokenResponse>;

  subscribe(
    request: tokens_tokens_pb.SubscribeTokensRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<tokens_tokens_pb.SubscriptionTokenResponse>;

}

