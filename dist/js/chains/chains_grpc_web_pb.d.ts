import * as grpcWeb from 'grpc-web';

import * as chains_chains_pb from '../chains/chains_pb';


export class ChainsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: chains_chains_pb.FilterChainRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chains_chains_pb.FilterChainResponse) => void
  ): grpcWeb.ClientReadableStream<chains_chains_pb.FilterChainResponse>;

  get(
    request: chains_chains_pb.GetChainRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: chains_chains_pb.GetChainResponse) => void
  ): grpcWeb.ClientReadableStream<chains_chains_pb.GetChainResponse>;

}

export class ChainsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: chains_chains_pb.FilterChainRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chains_chains_pb.FilterChainResponse>;

  get(
    request: chains_chains_pb.GetChainRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<chains_chains_pb.GetChainResponse>;

}

