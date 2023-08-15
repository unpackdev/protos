import * as jspb from 'google-protobuf'



export class ConstructorArgument extends jspb.Message {
  getName(): string;
  setName(value: string): ConstructorArgument;

  getType(): string;
  setType(value: string): ConstructorArgument;

  getValue(): string;
  setValue(value: string): ConstructorArgument;

  getIndexed(): boolean;
  setIndexed(value: boolean): ConstructorArgument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstructorArgument.AsObject;
  static toObject(includeInstance: boolean, msg: ConstructorArgument): ConstructorArgument.AsObject;
  static serializeBinaryToWriter(message: ConstructorArgument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstructorArgument;
  static deserializeBinaryFromReader(message: ConstructorArgument, reader: jspb.BinaryReader): ConstructorArgument;
}

export namespace ConstructorArgument {
  export type AsObject = {
    name: string,
    type: string,
    value: string,
    indexed: boolean,
  }
}

export class Constructor extends jspb.Message {
  getSignatureRaw(): string;
  setSignatureRaw(value: string): Constructor;

  getArgumentsList(): Array<ConstructorArgument>;
  setArgumentsList(value: Array<ConstructorArgument>): Constructor;
  clearArgumentsList(): Constructor;
  addArguments(value?: ConstructorArgument, index?: number): ConstructorArgument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constructor.AsObject;
  static toObject(includeInstance: boolean, msg: Constructor): Constructor.AsObject;
  static serializeBinaryToWriter(message: Constructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constructor;
  static deserializeBinaryFromReader(message: Constructor, reader: jspb.BinaryReader): Constructor;
}

export namespace Constructor {
  export type AsObject = {
    signatureRaw: string,
    argumentsList: Array<ConstructorArgument.AsObject>,
  }
}

