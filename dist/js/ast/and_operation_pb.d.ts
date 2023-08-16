import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class AndOperation extends jspb.Message {
  getId(): number;
  setId(value: number): AndOperation;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): AndOperation;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): AndOperation;
  hasSrc(): boolean;
  clearSrc(): AndOperation;

  getExpressionsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setExpressionsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): AndOperation;
  clearExpressionsList(): AndOperation;
  addExpressions(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getTypeDescriptionsList(): Array<ast_type_name_pb.TypeDescription>;
  setTypeDescriptionsList(value: Array<ast_type_name_pb.TypeDescription>): AndOperation;
  clearTypeDescriptionsList(): AndOperation;
  addTypeDescriptions(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AndOperation): AndOperation.AsObject;
  static serializeBinaryToWriter(message: AndOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndOperation;
  static deserializeBinaryFromReader(message: AndOperation, reader: jspb.BinaryReader): AndOperation;
}

export namespace AndOperation {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expressionsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    typeDescriptionsList: Array<ast_type_name_pb.TypeDescription.AsObject>,
  }
}

