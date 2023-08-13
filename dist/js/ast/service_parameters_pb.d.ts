import * as jspb from 'google-protobuf'

import * as common_status_pb from '../common/status_pb';
import * as ast_source_unit_pb from '../ast/source_unit_pb';
import * as sources_source_pb from '../sources/source_pb';


export class Request extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): Request;

  getAddress(): string;
  setAddress(value: string): Request;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): Request;

  getSources(): sources_source_pb.Sources | undefined;
  setSources(value?: sources_source_pb.Sources): Request;
  hasSources(): boolean;
  clearSources(): Request;

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
    sources?: sources_source_pb.Sources.AsObject,
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

  getRoot(): ast_source_unit_pb.RootSourceUnit | undefined;
  setRoot(value?: ast_source_unit_pb.RootSourceUnit): Response;
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
    root?: ast_source_unit_pb.RootSourceUnit.AsObject,
  }
}

