import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class MetaType extends jspb.Message {
  getId(): number;
  setId(value: number): MetaType;

  getName(): string;
  setName(value: string): MetaType;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): MetaType;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): MetaType;
  hasSrc(): boolean;
  clearSrc(): MetaType;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): MetaType;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): MetaType;
  hasTypeDescription(): boolean;
  clearTypeDescription(): MetaType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaType.AsObject;
  static toObject(includeInstance: boolean, msg: MetaType): MetaType.AsObject;
  static serializeBinaryToWriter(message: MetaType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaType;
  static deserializeBinaryFromReader(message: MetaType, reader: jspb.BinaryReader): MetaType;
}

export namespace MetaType {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

