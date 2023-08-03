import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class MemberAccess extends jspb.Message {
  getId(): number;
  setId(value: number): MemberAccess;

  getMemberName(): string;
  setMemberName(value: string): MemberAccess;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): MemberAccess;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): MemberAccess;
  hasSrc(): boolean;
  clearSrc(): MemberAccess;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): MemberAccess;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): MemberAccess;

  getIsLValue(): boolean;
  setIsLValue(value: boolean): MemberAccess;

  getIsPure(): boolean;
  setIsPure(value: boolean): MemberAccess;

  getLValueRequested(): boolean;
  setLValueRequested(value: boolean): MemberAccess;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): MemberAccess;
  hasExpression(): boolean;
  clearExpression(): MemberAccess;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): MemberAccess;
  clearArgumentTypesList(): MemberAccess;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): MemberAccess;
  hasTypeDescription(): boolean;
  clearTypeDescription(): MemberAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberAccess.AsObject;
  static toObject(includeInstance: boolean, msg: MemberAccess): MemberAccess.AsObject;
  static serializeBinaryToWriter(message: MemberAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberAccess;
  static deserializeBinaryFromReader(message: MemberAccess, reader: jspb.BinaryReader): MemberAccess;
}

export namespace MemberAccess {
  export type AsObject = {
    id: number,
    memberName: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    isConstant: boolean,
    isLValue: boolean,
    isPure: boolean,
    lValueRequested: boolean,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

