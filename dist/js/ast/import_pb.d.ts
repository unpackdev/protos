import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class Import extends jspb.Message {
  getId(): number;
  setId(value: number): Import;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Import;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Import;
  hasSrc(): boolean;
  clearSrc(): Import;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): Import;

  getFile(): string;
  setFile(value: string): Import;

  getScope(): number;
  setScope(value: number): Import;

  getUnitAlias(): string;
  setUnitAlias(value: string): Import;

  getSourceUnit(): number;
  setSourceUnit(value: number): Import;

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
    src?: ast_src_pb.Src.AsObject,
    absolutePath: string,
    file: string,
    scope: number,
    unitAlias: string,
    sourceUnit: number,
  }
}

