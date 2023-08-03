import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Do extends jspb.Message {
  getId(): number;
  setId(value: number): Do;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Do;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Do;
  hasSrc(): boolean;
  clearSrc(): Do;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): Do;
  hasCondition(): boolean;
  clearCondition(): Do;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Do;
  hasBody(): boolean;
  clearBody(): Do;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Do.AsObject;
  static toObject(includeInstance: boolean, msg: Do): Do.AsObject;
  static serializeBinaryToWriter(message: Do, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Do;
  static deserializeBinaryFromReader(message: Do, reader: jspb.BinaryReader): Do;
}

export namespace Do {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

