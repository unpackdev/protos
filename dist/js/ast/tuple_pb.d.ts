import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class Tuple extends jspb.Message {
  getId(): number;
  setId(value: number): Tuple;

  getName(): string;
  setName(value: string): Tuple;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Tuple;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Tuple;
  hasSrc(): boolean;
  clearSrc(): Tuple;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tuple.AsObject;
  static toObject(includeInstance: boolean, msg: Tuple): Tuple.AsObject;
  static serializeBinaryToWriter(message: Tuple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tuple;
  static deserializeBinaryFromReader(message: Tuple, reader: jspb.BinaryReader): Tuple;
}

export namespace Tuple {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

