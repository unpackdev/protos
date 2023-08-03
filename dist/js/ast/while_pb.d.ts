import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class While extends jspb.Message {
  getId(): number;
  setId(value: number): While;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): While;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): While;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): While;
  hasSrc(): boolean;
  clearSrc(): While;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): While;
  hasCondition(): boolean;
  clearCondition(): While;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): While;
  hasBody(): boolean;
  clearBody(): While;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): While.AsObject;
  static toObject(includeInstance: boolean, msg: While): While.AsObject;
  static serializeBinaryToWriter(message: While, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): While;
  static deserializeBinaryFromReader(message: While, reader: jspb.BinaryReader): While;
}

export namespace While {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

