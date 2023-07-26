import * as jspb from 'google-protobuf'



export class BinaryOperationExpression extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BinaryOperationExpression.AsObject;
  static toObject(includeInstance: boolean, msg: BinaryOperationExpression): BinaryOperationExpression.AsObject;
  static serializeBinaryToWriter(message: BinaryOperationExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BinaryOperationExpression;
  static deserializeBinaryFromReader(message: BinaryOperationExpression, reader: jspb.BinaryReader): BinaryOperationExpression;
}

export namespace BinaryOperationExpression {
  export type AsObject = {
  }
}

