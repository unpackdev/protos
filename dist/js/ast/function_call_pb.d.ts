import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class FunctionCall extends jspb.Message {
  getId(): number;
  setId(value: number): FunctionCall;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): FunctionCall;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): FunctionCall;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): FunctionCall;
  hasSrc(): boolean;
  clearSrc(): FunctionCall;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): FunctionCall;
  clearArgumentTypesList(): FunctionCall;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): FunctionCall;
  clearArgumentsList(): FunctionCall;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): FunctionCall;
  hasExpression(): boolean;
  clearExpression(): FunctionCall;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): FunctionCall;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): FunctionCall;
  hasTypeDescription(): boolean;
  clearTypeDescription(): FunctionCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

export namespace FunctionCall {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

export class FunctionCallOption extends jspb.Message {
  getId(): number;
  setId(value: number): FunctionCallOption;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): FunctionCallOption;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): FunctionCallOption;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): FunctionCallOption;
  hasSrc(): boolean;
  clearSrc(): FunctionCallOption;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): FunctionCallOption;
  hasExpression(): boolean;
  clearExpression(): FunctionCallOption;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): FunctionCallOption;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): FunctionCallOption;
  hasTypeDescription(): boolean;
  clearTypeDescription(): FunctionCallOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCallOption.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCallOption): FunctionCallOption.AsObject;
  static serializeBinaryToWriter(message: FunctionCallOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCallOption;
  static deserializeBinaryFromReader(message: FunctionCallOption, reader: jspb.BinaryReader): FunctionCallOption;
}

export namespace FunctionCallOption {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

