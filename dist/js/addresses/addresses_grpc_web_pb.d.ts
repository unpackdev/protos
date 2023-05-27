import * as grpcWeb from 'grpc-web';

import * as addresses_addresses_pb from '../addresses/addresses_pb';


export class AddressesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: addresses_addresses_pb.FilterAddressRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: addresses_addresses_pb.FilterAddressResponse) => void
  ): grpcWeb.ClientReadableStream<addresses_addresses_pb.FilterAddressResponse>;

  get(
    request: addresses_addresses_pb.GetAddressRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: addresses_addresses_pb.GetAddressResponse) => void
  ): grpcWeb.ClientReadableStream<addresses_addresses_pb.GetAddressResponse>;

}

export class AddressesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: addresses_addresses_pb.FilterAddressRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<addresses_addresses_pb.FilterAddressResponse>;

  get(
    request: addresses_addresses_pb.GetAddressRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<addresses_addresses_pb.GetAddressResponse>;

}

