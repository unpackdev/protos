import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class Continue extends jspb.Message {
  getId(): number;
  setId(value: number): Continue;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Continue;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Continue;
  hasSrc(): boolean;
  clearSrc(): Continue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Continue.AsObject;
  static toObject(includeInstance: boolean, msg: Continue): Continue.AsObject;
  static serializeBinaryToWriter(message: Continue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Continue;
  static deserializeBinaryFromReader(message: Continue, reader: jspb.BinaryReader): Continue;
}

export namespace Continue {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

