import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class For extends jspb.Message {
  getId(): number;
  setId(value: number): For;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): For;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): For;
  hasSrc(): boolean;
  clearSrc(): For;

  getInitialiser(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setInitialiser(value?: xds_type_v3_typed_struct_pb.TypedStruct): For;
  hasInitialiser(): boolean;
  clearInitialiser(): For;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): For;
  hasCondition(): boolean;
  clearCondition(): For;

  getClosure(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setClosure(value?: xds_type_v3_typed_struct_pb.TypedStruct): For;
  hasClosure(): boolean;
  clearClosure(): For;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): For;
  hasBody(): boolean;
  clearBody(): For;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): For.AsObject;
  static toObject(includeInstance: boolean, msg: For): For.AsObject;
  static serializeBinaryToWriter(message: For, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): For;
  static deserializeBinaryFromReader(message: For, reader: jspb.BinaryReader): For;
}

export namespace For {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    initialiser?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    closure?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

