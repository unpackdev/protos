import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class LibraryName extends jspb.Message {
  getId(): number;
  setId(value: number): LibraryName;

  getName(): string;
  setName(value: string): LibraryName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): LibraryName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): LibraryName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): LibraryName;
  hasSrc(): boolean;
  clearSrc(): LibraryName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LibraryName.AsObject;
  static toObject(includeInstance: boolean, msg: LibraryName): LibraryName.AsObject;
  static serializeBinaryToWriter(message: LibraryName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LibraryName;
  static deserializeBinaryFromReader(message: LibraryName, reader: jspb.BinaryReader): LibraryName;
}

export namespace LibraryName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Using extends jspb.Message {
  getId(): number;
  setId(value: number): Using;

  getName(): string;
  setName(value: string): Using;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Using;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Using;
  hasSrc(): boolean;
  clearSrc(): Using;

  getLibraryName(): LibraryName | undefined;
  setLibraryName(value?: LibraryName): Using;
  hasLibraryName(): boolean;
  clearLibraryName(): Using;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): Using;
  hasTypeName(): boolean;
  clearTypeName(): Using;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Using.AsObject;
  static toObject(includeInstance: boolean, msg: Using): Using.AsObject;
  static serializeBinaryToWriter(message: Using, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Using;
  static deserializeBinaryFromReader(message: Using, reader: jspb.BinaryReader): Using;
}

export namespace Using {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    libraryName?: LibraryName.AsObject,
    typeName?: ast_type_name_pb.TypeName.AsObject,
  }
}

