import * as jspb from 'google-protobuf'

import * as ast_src_pb from '../ast/src_pb';
import * as ast_types_pb from '../ast/types_pb';


export class Break extends jspb.Message {
  getId(): number;
  setId(value: number): Break;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Break;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Break;
  hasSrc(): boolean;
  clearSrc(): Break;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Break.AsObject;
  static toObject(includeInstance: boolean, msg: Break): Break.AsObject;
  static serializeBinaryToWriter(message: Break, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Break;
  static deserializeBinaryFromReader(message: Break, reader: jspb.BinaryReader): Break;
}

export namespace Break {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

