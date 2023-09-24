import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class ShiftOperation extends jspb.Message {
  getId(): number;
  setId(value: number): ShiftOperation;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ShiftOperation;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ShiftOperation;
  hasSrc(): boolean;
  clearSrc(): ShiftOperation;

  getExpressionsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setExpressionsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): ShiftOperation;
  clearExpressionsList(): ShiftOperation;
  addExpressions(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getTypeDescriptionsList(): Array<ast_type_name_pb.TypeDescription>;
  setTypeDescriptionsList(value: Array<ast_type_name_pb.TypeDescription>): ShiftOperation;
  clearTypeDescriptionsList(): ShiftOperation;
  addTypeDescriptions(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShiftOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ShiftOperation): ShiftOperation.AsObject;
  static serializeBinaryToWriter(message: ShiftOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShiftOperation;
  static deserializeBinaryFromReader(message: ShiftOperation, reader: jspb.BinaryReader): ShiftOperation;
}

export namespace ShiftOperation {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expressionsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    typeDescriptionsList: Array<ast_type_name_pb.TypeDescription.AsObject>,
  }
}

