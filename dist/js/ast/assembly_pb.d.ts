import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class Assembly extends jspb.Message {
  getId(): number;
  setId(value: number): Assembly;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Assembly;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Assembly;
  hasSrc(): boolean;
  clearSrc(): Assembly;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assembly.AsObject;
  static toObject(includeInstance: boolean, msg: Assembly): Assembly.AsObject;
  static serializeBinaryToWriter(message: Assembly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assembly;
  static deserializeBinaryFromReader(message: Assembly, reader: jspb.BinaryReader): Assembly;
}

export namespace Assembly {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

