import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Body extends jspb.Message {
  getId(): number;
  setId(value: number): Body;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Body;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Body;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Body;
  hasSrc(): boolean;
  clearSrc(): Body;

  getImplemented(): boolean;
  setImplemented(value: boolean): Body;

  getStatementsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setStatementsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Body;
  clearStatementsList(): Body;
  addStatements(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Body.AsObject;
  static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
  static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Body;
  static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
}

export namespace Body {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    implemented: boolean,
    statementsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

