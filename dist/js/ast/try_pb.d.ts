import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Try extends jspb.Message {
  getId(): number;
  setId(value: number): Try;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Try;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Try;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Try;
  hasSrc(): boolean;
  clearSrc(): Try;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): Try;
  hasExpression(): boolean;
  clearExpression(): Try;

  getClausesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setClausesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Try;
  clearClausesList(): Try;
  addClauses(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Try;
  hasBody(): boolean;
  clearBody(): Try;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Try.AsObject;
  static toObject(includeInstance: boolean, msg: Try): Try.AsObject;
  static serializeBinaryToWriter(message: Try, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Try;
  static deserializeBinaryFromReader(message: Try, reader: jspb.BinaryReader): Try;
}

export namespace Try {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    clausesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    body?: ast_body_pb.Body.AsObject,
  }
}

