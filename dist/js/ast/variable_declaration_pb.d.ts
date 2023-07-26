import * as jspb from 'google-protobuf'



export class VariableDeclaration extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VariableDeclaration.AsObject;
  static toObject(includeInstance: boolean, msg: VariableDeclaration): VariableDeclaration.AsObject;
  static serializeBinaryToWriter(message: VariableDeclaration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VariableDeclaration;
  static deserializeBinaryFromReader(message: VariableDeclaration, reader: jspb.BinaryReader): VariableDeclaration;
}

export namespace VariableDeclaration {
  export type AsObject = {
  }
}

