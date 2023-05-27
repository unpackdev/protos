import * as grpcWeb from 'grpc-web';

import * as holders_holders_pb from '../holders/holders_pb';


export class HoldersClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: holders_holders_pb.FilterHolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: holders_holders_pb.FilterHolderResponse) => void
  ): grpcWeb.ClientReadableStream<holders_holders_pb.FilterHolderResponse>;

  get(
    request: holders_holders_pb.GetHolderRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: holders_holders_pb.GetHolderResponse) => void
  ): grpcWeb.ClientReadableStream<holders_holders_pb.GetHolderResponse>;

}

export class HoldersPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: holders_holders_pb.FilterHolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<holders_holders_pb.FilterHolderResponse>;

  get(
    request: holders_holders_pb.GetHolderRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<holders_holders_pb.GetHolderResponse>;

}

