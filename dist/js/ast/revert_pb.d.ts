import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Revert extends jspb.Message {
  getId(): number;
  setId(value: number): Revert;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Revert;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Revert;
  hasSrc(): boolean;
  clearSrc(): Revert;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Revert;
  clearArgumentsList(): Revert;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Revert;
  hasExpression(): boolean;
  clearExpression(): Revert;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Revert.AsObject;
  static toObject(includeInstance: boolean, msg: Revert): Revert.AsObject;
  static serializeBinaryToWriter(message: Revert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Revert;
  static deserializeBinaryFromReader(message: Revert, reader: jspb.BinaryReader): Revert;
}

export namespace Revert {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

