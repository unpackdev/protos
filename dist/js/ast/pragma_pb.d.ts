import * as jspb from 'google-protobuf'

import * as ast_src_pb from '../ast/src_pb';
import * as ast_types_pb from '../ast/types_pb';


export class Pragma extends jspb.Message {
  getId(): number;
  setId(value: number): Pragma;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Pragma;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Pragma;
  hasSrc(): boolean;
  clearSrc(): Pragma;

  getLiteralsList(): Array<string>;
  setLiteralsList(value: Array<string>): Pragma;
  clearLiteralsList(): Pragma;
  addLiterals(value: string, index?: number): Pragma;

  getText(): string;
  setText(value: string): Pragma;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pragma.AsObject;
  static toObject(includeInstance: boolean, msg: Pragma): Pragma.AsObject;
  static serializeBinaryToWriter(message: Pragma, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pragma;
  static deserializeBinaryFromReader(message: Pragma, reader: jspb.BinaryReader): Pragma;
}

export namespace Pragma {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    literalsList: Array<string>,
    text: string,
  }
}

