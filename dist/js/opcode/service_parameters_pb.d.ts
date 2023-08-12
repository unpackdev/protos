import * as jspb from 'google-protobuf'

import * as common_status_pb from '../common/status_pb';
import * as opcode_root_pb from '../opcode/root_pb';


export class Request extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): Request;

  getAddress(): string;
  setAddress(value: string): Request;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    chainId: number,
    address: string,
    bytecode: Uint8Array | string,
  }
}

export class Response extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): Response;
  hasStatus(): boolean;
  clearStatus(): Response;

  getChainId(): number;
  setChainId(value: number): Response;

  getAddress(): string;
  setAddress(value: string): Response;

  getBytecode(): string;
  setBytecode(value: string): Response;

  getRoot(): opcode_root_pb.Root | undefined;
  setRoot(value?: opcode_root_pb.Root): Response;
  hasRoot(): boolean;
  clearRoot(): Response;

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
    chainId: number,
    address: string,
    bytecode: string,
    root?: opcode_root_pb.Root.AsObject,
  }
}

