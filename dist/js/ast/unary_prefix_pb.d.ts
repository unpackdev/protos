import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class UnaryPrefix extends jspb.Message {
  getId(): number;
  setId(value: number): UnaryPrefix;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): UnaryPrefix;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): UnaryPrefix;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): UnaryPrefix;
  hasSrc(): boolean;
  clearSrc(): UnaryPrefix;

  getOperator(): ast_types_pb.Operator;
  setOperator(value: ast_types_pb.Operator): UnaryPrefix;

  getPrefix(): boolean;
  setPrefix(value: boolean): UnaryPrefix;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): UnaryPrefix;

  getIsLValue(): boolean;
  setIsLValue(value: boolean): UnaryPrefix;

  getIsPure(): boolean;
  setIsPure(value: boolean): UnaryPrefix;

  getLValueRequested(): boolean;
  setLValueRequested(value: boolean): UnaryPrefix;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): UnaryPrefix;
  hasExpression(): boolean;
  clearExpression(): UnaryPrefix;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): UnaryPrefix;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): UnaryPrefix;
  hasTypeDescription(): boolean;
  clearTypeDescription(): UnaryPrefix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnaryPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: UnaryPrefix): UnaryPrefix.AsObject;
  static serializeBinaryToWriter(message: UnaryPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnaryPrefix;
  static deserializeBinaryFromReader(message: UnaryPrefix, reader: jspb.BinaryReader): UnaryPrefix;
}

export namespace UnaryPrefix {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
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

