import * as grpcWeb from 'grpc-web';

import * as transactions_transactions_pb from '../transactions/transactions_pb';


export class TransactionsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: transactions_transactions_pb.FilterTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: transactions_transactions_pb.FilterTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<transactions_transactions_pb.FilterTransactionResponse>;

  get(
    request: transactions_transactions_pb.GetTransactionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: transactions_transactions_pb.GetTransactionResponse) => void
  ): grpcWeb.ClientReadableStream<transactions_transactions_pb.GetTransactionResponse>;

}

export class TransactionsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  filter(
    request: transactions_transactions_pb.FilterTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<transactions_transactions_pb.FilterTransactionResponse>;

  get(
    request: transactions_transactions_pb.GetTransactionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<transactions_transactions_pb.GetTransactionResponse>;

}

