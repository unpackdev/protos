import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';


export class Import extends jspb.Message {
  getId(): number;
  setId(value: number): Import;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Import;

  getSourceUnitId(): number;
  setSourceUnitId(value: number): Import;

  getContractId(): number;
  setContractId(value: number): Import;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): Import;

  getFile(): string;
  setFile(value: string): Import;

  getUnitAlias(): string;
  setUnitAlias(value: string): Import;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Import.AsObject;
  static toObject(includeInstance: boolean, msg: Import): Import.AsObject;
  static serializeBinaryToWriter(message: Import, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Import;
  static deserializeBinaryFromReader(message: Import, reader: jspb.BinaryReader): Import;
}

export namespace Import {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    sourceUnitId: number,
    contractId: number,
    absolutePath: string,
    file: string,
    unitAlias: string,
  }
}

