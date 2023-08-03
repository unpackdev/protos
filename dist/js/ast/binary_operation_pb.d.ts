import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class BinaryOperation extends jspb.Message {
  getId(): number;
  setId(value: number): BinaryOperation;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): BinaryOperation;

  getIsPure(): boolean;
  setIsPure(value: boolean): BinaryOperation;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): BinaryOperation;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): BinaryOperation;
  hasSrc(): boolean;
  clearSrc(): BinaryOperation;

  getOperator(): ast_types_pb.Operator;
  setOperator(value: ast_types_pb.Operator): BinaryOperation;

  getLeftExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setLeftExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): BinaryOperation;
  hasLeftExpression(): boolean;
  clearLeftExpression(): BinaryOperation;

  getRightExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setRightExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): BinaryOperation;
  hasRightExpression(): boolean;
  clearRightExpression(): BinaryOperation;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): BinaryOperation;
  hasTypeDescription(): boolean;
  clearTypeDescription(): BinaryOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryOperation): BinaryOperation.AsObject;
  static serializeBinaryToWriter(message: BinaryOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryOperation;
  static deserializeBinaryFromReader(message: BinaryOperation, reader: jspb.BinaryReader): BinaryOperation;
}

export namespace BinaryOperation {
  export type AsObject = {
    id: number,
    isConstant: boolean,
    isPure: boolean,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    operator: ast_types_pb.Operator,
    leftExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    rightExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

