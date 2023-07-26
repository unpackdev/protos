import * as jspb from 'google-protobuf'



export class Receive extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receive.AsObject;
  static toObject(includeInstance: boolean, msg: Receive): Receive.AsObject;
  static serializeBinaryToWriter(message: Receive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receive;
  static deserializeBinaryFromReader(message: Receive, reader: jspb.BinaryReader): Receive;
}

export namespace Receive {
  export type AsObject = {
  }
}

