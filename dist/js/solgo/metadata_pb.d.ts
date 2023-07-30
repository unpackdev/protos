import * as jspb from 'google-protobuf'



export class MetadataRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): MetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataRequest): MetadataRequest.AsObject;
  static serializeBinaryToWriter(message: MetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataRequest;
  static deserializeBinaryFromReader(message: MetadataRequest, reader: jspb.BinaryReader): MetadataRequest;
}

export namespace MetadataRequest {
  export type AsObject = {
    address: string,
  }
}

export class MetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataResponse): MetadataResponse.AsObject;
  static serializeBinaryToWriter(message: MetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataResponse;
  static deserializeBinaryFromReader(message: MetadataResponse, reader: jspb.BinaryReader): MetadataResponse;
}

export namespace MetadataResponse {
  export type AsObject = {
  }
}

