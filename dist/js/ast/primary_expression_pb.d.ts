import * as jspb from 'google-protobuf'



export class PrimaryExpression extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimaryExpression.AsObject;
  static toObject(includeInstance: boolean, msg: PrimaryExpression): PrimaryExpression.AsObject;
  static serializeBinaryToWriter(message: PrimaryExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimaryExpression;
  static deserializeBinaryFromReader(message: PrimaryExpression, reader: jspb.BinaryReader): PrimaryExpression;
}

export namespace PrimaryExpression {
  export type AsObject = {
  }
}

