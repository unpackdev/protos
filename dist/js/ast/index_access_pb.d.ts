import * as jspb from 'google-protobuf'



export class IndexAccessExpression extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexAccessExpression.AsObject;
  static toObject(includeInstance: boolean, msg: IndexAccessExpression): IndexAccessExpression.AsObject;
  static serializeBinaryToWriter(message: IndexAccessExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexAccessExpression;
  static deserializeBinaryFromReader(message: IndexAccessExpression, reader: jspb.BinaryReader): IndexAccessExpression;
}

export namespace IndexAccessExpression {
  export type AsObject = {
  }
}

