import * as jspb from 'google-protobuf'



export class Pragma extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pragma.AsObject;
  static toObject(includeInstance: boolean, msg: Pragma): Pragma.AsObject;
  static serializeBinaryToWriter(message: Pragma, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pragma;
  static deserializeBinaryFromReader(message: Pragma, reader: jspb.BinaryReader): Pragma;
}

export namespace Pragma {
  export type AsObject = {
  }
}

