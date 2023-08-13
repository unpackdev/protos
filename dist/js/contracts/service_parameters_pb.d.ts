import * as jspb from 'google-protobuf'

import * as common_status_pb from '../common/status_pb';
import * as contracts_contract_pb from '../contracts/contract_pb';


export class Request extends jspb.Message {
  getNetworkId(): number;
  setNetworkId(value: number): Request;

  getAddressList(): Array<string>;
  setAddressList(value: Array<string>): Request;
  clearAddressList(): Request;
  addAddress(value: string, index?: number): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    networkId: number,
    addressList: Array<string>,
  }
}

export class Response extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): Response;
  hasStatus(): boolean;
  clearStatus(): Response;

  getNetworkId(): number;
  setNetworkId(value: number): Response;

  getAddress(): string;
  setAddress(value: string): Response;

  getContractsList(): Array<contracts_contract_pb.Contract>;
  setContractsList(value: Array<contracts_contract_pb.Contract>): Response;
  clearContractsList(): Response;
  addContracts(value?: contracts_contract_pb.Contract, index?: number): contracts_contract_pb.Contract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    networkId: number,
    address: string,
    contractsList: Array<contracts_contract_pb.Contract.AsObject>,
  }
}

