import * as grpcWeb from 'grpc-web';

import * as blocks_blocks_pb from '../blocks/blocks_pb';


export class BlocksClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: blocks_blocks_pb.FilterBlockRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: blocks_blocks_pb.FilterBlockResponse) => void
  ): grpcWeb.ClientReadableStream<blocks_blocks_pb.FilterBlockResponse>;

  get(
    request: blocks_blocks_pb.GetBlockRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: blocks_blocks_pb.GetBlockResponse) => void
  ): grpcWeb.ClientReadableStream<blocks_blocks_pb.GetBlockResponse>;

}

export class BlocksPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: blocks_blocks_pb.FilterBlockRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<blocks_blocks_pb.FilterBlockResponse>;

  get(
    request: blocks_blocks_pb.GetBlockRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<blocks_blocks_pb.GetBlockResponse>;

}

