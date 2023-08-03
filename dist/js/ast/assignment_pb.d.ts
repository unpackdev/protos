import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Assignment extends jspb.Message {
  getId(): number;
  setId(value: number): Assignment;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Assignment;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Assignment;
  hasSrc(): boolean;
  clearSrc(): Assignment;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Assignment;
  hasExpression(): boolean;
  clearExpression(): Assignment;

  getOperator(): ast_types_pb.Operator;
  setOperator(value: ast_types_pb.Operator): Assignment;

  getLeftExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setLeftExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Assignment;
  hasLeftExpression(): boolean;
  clearLeftExpression(): Assignment;

  getRightExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setRightExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Assignment;
  hasRightExpression(): boolean;
  clearRightExpression(): Assignment;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Assignment;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Assignment;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Assignment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assignment.AsObject;
  static toObject(includeInstance: boolean, msg: Assignment): Assignment.AsObject;
  static serializeBinaryToWriter(message: Assignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assignment;
  static deserializeBinaryFromReader(message: Assignment, reader: jspb.BinaryReader): Assignment;
}

export namespace Assignment {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    operator: ast_types_pb.Operator,
    leftExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    rightExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

