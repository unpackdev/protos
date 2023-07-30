import * as grpcWeb from 'grpc-web';

import * as health_health_pb from '../health/health_pb';
import * as metadata_metadata_pb from '../metadata/metadata_pb';


export class SolGoServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

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

  getMetadata(
    request: metadata_metadata_pb.MetadataRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<metadata_metadata_pb.MetadataResponse>;

  getHealth(
    request: health_health_pb.HealthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_health_pb.HealthResponse>;

}

