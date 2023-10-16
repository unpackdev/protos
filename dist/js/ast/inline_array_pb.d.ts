import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class InlineArray extends jspb.Message {
  getId(): number;
  setId(value: number): InlineArray;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): InlineArray;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): InlineArray;
  hasSrc(): boolean;
  clearSrc(): InlineArray;

  getIsEmpty(): boolean;
  setIsEmpty(value: boolean): InlineArray;

  getExpressionsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setExpressionsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): InlineArray;
  clearExpressionsList(): InlineArray;
  addExpressions(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getTypeDescriptionsList(): Array<ast_type_name_pb.TypeDescription>;
  setTypeDescriptionsList(value: Array<ast_type_name_pb.TypeDescription>): InlineArray;
  clearTypeDescriptionsList(): InlineArray;
  addTypeDescriptions(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): InlineArray;
  hasTypeDescription(): boolean;
  clearTypeDescription(): InlineArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InlineArray.AsObject;
  static toObject(includeInstance: boolean, msg: InlineArray): InlineArray.AsObject;
  static serializeBinaryToWriter(message: InlineArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InlineArray;
  static deserializeBinaryFromReader(message: InlineArray, reader: jspb.BinaryReader): InlineArray;
}

export namespace InlineArray {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    isEmpty: boolean,
    expressionsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    typeDescriptionsList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

