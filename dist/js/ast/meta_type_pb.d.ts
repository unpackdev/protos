import * as jspb from 'google-protobuf'



export class MetaTypeExpression extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetaTypeExpression.AsObject;
  static toObject(includeInstance: boolean, msg: MetaTypeExpression): MetaTypeExpression.AsObject;
  static serializeBinaryToWriter(message: MetaTypeExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetaTypeExpression;
  static deserializeBinaryFromReader(message: MetaTypeExpression, reader: jspb.BinaryReader): MetaTypeExpression;
}

export namespace MetaTypeExpression {
  export type AsObject = {
  }
}

