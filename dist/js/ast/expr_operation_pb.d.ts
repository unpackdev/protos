import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class ExprOperation extends jspb.Message {
  getId(): number;
  setId(value: number): ExprOperation;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ExprOperation;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ExprOperation;
  hasSrc(): boolean;
  clearSrc(): ExprOperation;

  getLeftExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setLeftExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): ExprOperation;
  hasLeftExpression(): boolean;
  clearLeftExpression(): ExprOperation;

  getRightExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setRightExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): ExprOperation;
  hasRightExpression(): boolean;
  clearRightExpression(): ExprOperation;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): ExprOperation;
  hasTypeDescription(): boolean;
  clearTypeDescription(): ExprOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExprOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ExprOperation): ExprOperation.AsObject;
  static serializeBinaryToWriter(message: ExprOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExprOperation;
  static deserializeBinaryFromReader(message: ExprOperation, reader: jspb.BinaryReader): ExprOperation;
}

export namespace ExprOperation {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    leftExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    rightExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

