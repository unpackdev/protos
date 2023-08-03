import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class ModifierName extends jspb.Message {
  getId(): number;
  setId(value: number): ModifierName;

  getName(): string;
  setName(value: string): ModifierName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ModifierName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): ModifierName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ModifierName;
  hasSrc(): boolean;
  clearSrc(): ModifierName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifierName.AsObject;
  static toObject(includeInstance: boolean, msg: ModifierName): ModifierName.AsObject;
  static serializeBinaryToWriter(message: ModifierName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifierName;
  static deserializeBinaryFromReader(message: ModifierName, reader: jspb.BinaryReader): ModifierName;
}

export namespace ModifierName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Modifier extends jspb.Message {
  getId(): number;
  setId(value: number): Modifier;

  getName(): string;
  setName(value: string): Modifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Modifier;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Modifier;
  hasSrc(): boolean;
  clearSrc(): Modifier;

  getVirtual(): boolean;
  setVirtual(value: boolean): Modifier;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Modifier;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Modifier;
  hasParameters(): boolean;
  clearParameters(): Modifier;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Modifier;
  hasBody(): boolean;
  clearBody(): Modifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Modifier.AsObject;
  static toObject(includeInstance: boolean, msg: Modifier): Modifier.AsObject;
  static serializeBinaryToWriter(message: Modifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Modifier;
  static deserializeBinaryFromReader(message: Modifier, reader: jspb.BinaryReader): Modifier;
}

export namespace Modifier {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    virtual: boolean,
    visibility: ast_types_pb.Visibility,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

export class ModifierInvocation extends jspb.Message {
  getId(): number;
  setId(value: number): ModifierInvocation;

  getName(): string;
  setName(value: string): ModifierInvocation;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ModifierInvocation;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): ModifierInvocation;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ModifierInvocation;
  hasSrc(): boolean;
  clearSrc(): ModifierInvocation;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): ModifierInvocation;
  clearArgumentsList(): ModifierInvocation;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): ModifierInvocation;
  clearArgumentTypesList(): ModifierInvocation;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getModifierName(): ModifierName | undefined;
  setModifierName(value?: ModifierName): ModifierInvocation;
  hasModifierName(): boolean;
  clearModifierName(): ModifierInvocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifierInvocation.AsObject;
  static toObject(includeInstance: boolean, msg: ModifierInvocation): ModifierInvocation.AsObject;
  static serializeBinaryToWriter(message: ModifierInvocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifierInvocation;
  static deserializeBinaryFromReader(message: ModifierInvocation, reader: jspb.BinaryReader): ModifierInvocation;
}

export namespace ModifierInvocation {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    modifierName?: ModifierName.AsObject,
  }
}

