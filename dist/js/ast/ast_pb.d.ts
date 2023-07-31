import * as jspb from 'google-protobuf'

import * as common_status_pb from '../common/status_pb';
import * as ast_source_unit_pb from '../ast/source_unit_pb';


export class SourceUnits extends jspb.Message {
  getName(): string;
  setName(value: string): SourceUnits;

  getSource(): string;
  setSource(value: string): SourceUnits;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceUnits.AsObject;
  static toObject(includeInstance: boolean, msg: SourceUnits): SourceUnits.AsObject;
  static serializeBinaryToWriter(message: SourceUnits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceUnits;
  static deserializeBinaryFromReader(message: SourceUnits, reader: jspb.BinaryReader): SourceUnits;
}

export namespace SourceUnits {
  export type AsObject = {
    name: string,
    source: string,
  }
}

export class AstRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): AstRequest;

  getAddress(): string;
  setAddress(value: string): AstRequest;

  getBytecode(): string;
  setBytecode(value: string): AstRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AstRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AstRequest): AstRequest.AsObject;
  static serializeBinaryToWriter(message: AstRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AstRequest;
  static deserializeBinaryFromReader(message: AstRequest, reader: jspb.BinaryReader): AstRequest;
}

export namespace AstRequest {
  export type AsObject = {
    chainId: number,
    address: string,
    bytecode: string,
  }
}

export class AstRawRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): AstRawRequest;

  getAddress(): string;
  setAddress(value: string): AstRawRequest;

  getEntrySourceUnit(): string;
  setEntrySourceUnit(value: string): AstRawRequest;

  getSourcesList(): Array<SourceUnits>;
  setSourcesList(value: Array<SourceUnits>): AstRawRequest;
  clearSourcesList(): AstRawRequest;
  addSources(value?: SourceUnits, index?: number): SourceUnits;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AstRawRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AstRawRequest): AstRawRequest.AsObject;
  static serializeBinaryToWriter(message: AstRawRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AstRawRequest;
  static deserializeBinaryFromReader(message: AstRawRequest, reader: jspb.BinaryReader): AstRawRequest;
}

export namespace AstRawRequest {
  export type AsObject = {
    chainId: number,
    address: string,
    entrySourceUnit: string,
    sourcesList: Array<SourceUnits.AsObject>,
  }
}

export class AstResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): AstResponse;
  hasStatus(): boolean;
  clearStatus(): AstResponse;

  getChainId(): number;
  setChainId(value: number): AstResponse;

  getAddress(): string;
  setAddress(value: string): AstResponse;

  getRoot(): ast_source_unit_pb.RootSourceUnit | undefined;
  setRoot(value?: ast_source_unit_pb.RootSourceUnit): AstResponse;
  hasRoot(): boolean;
  clearRoot(): AstResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AstResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AstResponse): AstResponse.AsObject;
  static serializeBinaryToWriter(message: AstResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AstResponse;
  static deserializeBinaryFromReader(message: AstResponse, reader: jspb.BinaryReader): AstResponse;
}

export namespace AstResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    chainId: number,
    address: string,
    root?: ast_source_unit_pb.RootSourceUnit.AsObject,
  }
}

