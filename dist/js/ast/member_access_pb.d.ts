import * as jspb from 'google-protobuf'



export class MemberAccessExpression extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberAccessExpression.AsObject;
  static toObject(includeInstance: boolean, msg: MemberAccessExpression): MemberAccessExpression.AsObject;
  static serializeBinaryToWriter(message: MemberAccessExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberAccessExpression;
  static deserializeBinaryFromReader(message: MemberAccessExpression, reader: jspb.BinaryReader): MemberAccessExpression;
}

export namespace MemberAccessExpression {
  export type AsObject = {
  }
}

