import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class UnarySuffix extends jspb.Message {
  getId(): number;
  setId(value: number): UnarySuffix;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): UnarySuffix;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): UnarySuffix;
  hasSrc(): boolean;
  clearSrc(): UnarySuffix;

  getOperator(): ast_types_pb.Operator;
  setOperator(value: ast_types_pb.Operator): UnarySuffix;

  getPrefix(): boolean;
  setPrefix(value: boolean): UnarySuffix;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): UnarySuffix;

  getIsLValue(): boolean;
  setIsLValue(value: boolean): UnarySuffix;

  getIsPure(): boolean;
  setIsPure(value: boolean): UnarySuffix;

  getLValueRequested(): boolean;
  setLValueRequested(value: boolean): UnarySuffix;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): UnarySuffix;
  hasExpression(): boolean;
  clearExpression(): UnarySuffix;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): UnarySuffix;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): UnarySuffix;
  hasTypeDescription(): boolean;
  clearTypeDescription(): UnarySuffix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnarySuffix.AsObject;
  static toObject(includeInstance: boolean, msg: UnarySuffix): UnarySuffix.AsObject;
  static serializeBinaryToWriter(message: UnarySuffix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnarySuffix;
  static deserializeBinaryFromReader(message: UnarySuffix, reader: jspb.BinaryReader): UnarySuffix;
}

export namespace UnarySuffix {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    operator: ast_types_pb.Operator,
    prefix: boolean,
    isConstant: boolean,
    isLValue: boolean,
    isPure: boolean,
    lValueRequested: boolean,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

