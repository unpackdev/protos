import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class IndexRange extends jspb.Message {
  getId(): number;
  setId(value: number): IndexRange;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): IndexRange;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): IndexRange;
  hasSrc(): boolean;
  clearSrc(): IndexRange;

  getLeftExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setLeftExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): IndexRange;
  hasLeftExpression(): boolean;
  clearLeftExpression(): IndexRange;

  getRightExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setRightExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): IndexRange;
  hasRightExpression(): boolean;
  clearRightExpression(): IndexRange;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): IndexRange;
  hasTypeDescription(): boolean;
  clearTypeDescription(): IndexRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexRange.AsObject;
  static toObject(includeInstance: boolean, msg: IndexRange): IndexRange.AsObject;
  static serializeBinaryToWriter(message: IndexRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexRange;
  static deserializeBinaryFromReader(message: IndexRange, reader: jspb.BinaryReader): IndexRange;
}

export namespace IndexRange {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    leftExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    rightExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

