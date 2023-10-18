import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class UserDefinedValueTypeDefinition extends jspb.Message {
  getId(): number;
  setId(value: number): UserDefinedValueTypeDefinition;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): UserDefinedValueTypeDefinition;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): UserDefinedValueTypeDefinition;
  hasSrc(): boolean;
  clearSrc(): UserDefinedValueTypeDefinition;

  getIs(): boolean;
  setIs(value: boolean): UserDefinedValueTypeDefinition;

  getType(): string;
  setType(value: string): UserDefinedValueTypeDefinition;

  getTypeLocation(): ast_src_pb.Src | undefined;
  setTypeLocation(value?: ast_src_pb.Src): UserDefinedValueTypeDefinition;
  hasTypeLocation(): boolean;
  clearTypeLocation(): UserDefinedValueTypeDefinition;

  getName(): string;
  setName(value: string): UserDefinedValueTypeDefinition;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): UserDefinedValueTypeDefinition;
  hasNameLocation(): boolean;
  clearNameLocation(): UserDefinedValueTypeDefinition;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): UserDefinedValueTypeDefinition;
  hasTypeName(): boolean;
  clearTypeName(): UserDefinedValueTypeDefinition;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): UserDefinedValueTypeDefinition;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): UserDefinedValueTypeDefinition;
  hasTypeDescription(): boolean;
  clearTypeDescription(): UserDefinedValueTypeDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDefinedValueTypeDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: UserDefinedValueTypeDefinition): UserDefinedValueTypeDefinition.AsObject;
  static serializeBinaryToWriter(message: UserDefinedValueTypeDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDefinedValueTypeDefinition;
  static deserializeBinaryFromReader(message: UserDefinedValueTypeDefinition, reader: jspb.BinaryReader): UserDefinedValueTypeDefinition;
}

export namespace UserDefinedValueTypeDefinition {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    is: boolean,
    type: string,
    typeLocation?: ast_src_pb.Src.AsObject,
    name: string,
    nameLocation?: ast_src_pb.Src.AsObject,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

