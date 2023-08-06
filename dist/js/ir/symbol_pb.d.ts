import * as jspb from 'google-protobuf'



export class Symbol extends jspb.Message {
  getId(): number;
  setId(value: number): Symbol;

  getName(): string;
  setName(value: string): Symbol;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): Symbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    id: number,
    name: string,
    absolutePath: string,
  }
}

