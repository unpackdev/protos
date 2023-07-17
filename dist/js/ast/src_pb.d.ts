import * as jspb from 'google-protobuf'



export class Src extends jspb.Message {
  getLine(): number;
  setLine(value: number): Src;

  getColumn(): number;
  setColumn(value: number): Src;

  getStart(): number;
  setStart(value: number): Src;

  getEnd(): number;
  setEnd(value: number): Src;

  getLength(): number;
  setLength(value: number): Src;

  getParentIndex(): number;
  setParentIndex(value: number): Src;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Src.AsObject;
  static toObject(includeInstance: boolean, msg: Src): Src.AsObject;
  static serializeBinaryToWriter(message: Src, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Src;
  static deserializeBinaryFromReader(message: Src, reader: jspb.BinaryReader): Src;
}

export namespace Src {
  export type AsObject = {
    line: number,
    column: number,
    start: number,
    end: number,
    length: number,
    parentIndex: number,
  }
}

