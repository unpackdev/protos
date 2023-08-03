import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Return extends jspb.Message {
  getId(): number;
  setId(value: number): Return;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Return;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Return;
  hasSrc(): boolean;
  clearSrc(): Return;

  getFunctionReturnParameters(): number;
  setFunctionReturnParameters(value: number): Return;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Return;
  hasExpression(): boolean;
  clearExpression(): Return;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Return;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Return;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Return.AsObject;
  static toObject(includeInstance: boolean, msg: Return): Return.AsObject;
  static serializeBinaryToWriter(message: Return, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Return;
  static deserializeBinaryFromReader(message: Return, reader: jspb.BinaryReader): Return;
}

export namespace Return {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    functionReturnParameters: number,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

