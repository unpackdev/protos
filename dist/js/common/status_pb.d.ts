import * as jspb from 'google-protobuf'



export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getReason(): string;
  setReason(value: string): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    reason: string,
    message: string,
  }
}

