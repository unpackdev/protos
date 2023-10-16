import * as grpcWeb from 'grpc-web';

import * as server_parameters_pb from '../server/parameters_pb';


export class UnpackClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  unpack(
    request: server_parameters_pb.UnpackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: server_parameters_pb.UnpackResponse) => void
  ): grpcWeb.ClientReadableStream<server_parameters_pb.UnpackResponse>;

}

export class UnpackPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  unpack(
    request: server_parameters_pb.UnpackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<server_parameters_pb.UnpackResponse>;

}

