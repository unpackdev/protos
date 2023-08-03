import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Emit extends jspb.Message {
  getId(): number;
  setId(value: number): Emit;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Emit;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Emit;
  hasSrc(): boolean;
  clearSrc(): Emit;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Emit;
  clearArgumentsList(): Emit;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Emit;
  hasExpression(): boolean;
  clearExpression(): Emit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Emit.AsObject;
  static toObject(includeInstance: boolean, msg: Emit): Emit.AsObject;
  static serializeBinaryToWriter(message: Emit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Emit;
  static deserializeBinaryFromReader(message: Emit, reader: jspb.BinaryReader): Emit;
}

export namespace Emit {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

