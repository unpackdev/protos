import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class If extends jspb.Message {
  getId(): number;
  setId(value: number): If;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): If;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): If;
  hasSrc(): boolean;
  clearSrc(): If;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): If;
  hasCondition(): boolean;
  clearCondition(): If;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): If;
  hasBody(): boolean;
  clearBody(): If;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): If.AsObject;
  static toObject(includeInstance: boolean, msg: If): If.AsObject;
  static serializeBinaryToWriter(message: If, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): If;
  static deserializeBinaryFromReader(message: If, reader: jspb.BinaryReader): If;
}

export namespace If {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

