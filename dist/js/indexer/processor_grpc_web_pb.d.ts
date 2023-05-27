import * as grpcWeb from 'grpc-web';

import * as indexer_processor_pb from '../indexer/processor_pb';


export class ProcessorClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  queueBlock(
    request: indexer_processor_pb.QueueBlockRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: indexer_processor_pb.QueueBlockResponse) => void
  ): grpcWeb.ClientReadableStream<indexer_processor_pb.QueueBlockResponse>;

}

export class ProcessorPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  queueBlock(
    request: indexer_processor_pb.QueueBlockRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<indexer_processor_pb.QueueBlockResponse>;

}

