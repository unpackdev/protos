import * as jspb from 'google-protobuf'



export class Emit extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Emit.AsObject;
  static toObject(includeInstance: boolean, msg: Emit): Emit.AsObject;
  static serializeBinaryToWriter(message: Emit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Emit;
  static deserializeBinaryFromReader(message: Emit, reader: jspb.BinaryReader): Emit;
}

export namespace Emit {
  export type AsObject = {
  }
}

