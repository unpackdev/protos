import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_src_pb from '../ast/src_pb';


export class OverridePath extends jspb.Message {
  getId(): number;
  setId(value: number): OverridePath;

  getName(): string;
  setName(value: string): OverridePath;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): OverridePath;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): OverridePath;
  hasSrc(): boolean;
  clearSrc(): OverridePath;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): OverridePath;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): OverridePath;
  hasTypeDescription(): boolean;
  clearTypeDescription(): OverridePath;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverridePath.AsObject;
  static toObject(includeInstance: boolean, msg: OverridePath): OverridePath.AsObject;
  static serializeBinaryToWriter(message: OverridePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverridePath;
  static deserializeBinaryFromReader(message: OverridePath, reader: jspb.BinaryReader): OverridePath;
}

export namespace OverridePath {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

export class OverrideSpecifier extends jspb.Message {
  getId(): number;
  setId(value: number): OverrideSpecifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): OverrideSpecifier;

  getOverridesList(): Array<OverridePath>;
  setOverridesList(value: Array<OverridePath>): OverrideSpecifier;
  clearOverridesList(): OverrideSpecifier;
  addOverrides(value?: OverridePath, index?: number): OverridePath;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): OverrideSpecifier;
  hasSrc(): boolean;
  clearSrc(): OverrideSpecifier;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): OverrideSpecifier;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): OverrideSpecifier;
  hasTypeDescription(): boolean;
  clearTypeDescription(): OverrideSpecifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverrideSpecifier.AsObject;
  static toObject(includeInstance: boolean, msg: OverrideSpecifier): OverrideSpecifier.AsObject;
  static serializeBinaryToWriter(message: OverrideSpecifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverrideSpecifier;
  static deserializeBinaryFromReader(message: OverrideSpecifier, reader: jspb.BinaryReader): OverrideSpecifier;
}

export namespace OverrideSpecifier {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    overridesList: Array<OverridePath.AsObject>,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

