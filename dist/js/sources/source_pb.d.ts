import * as jspb from 'google-protobuf'



export class SourceUnit extends jspb.Message {
  getName(): string;
  setName(value: string): SourceUnit;

  getPath(): string;
  setPath(value: string): SourceUnit;

  getContent(): string;
  setContent(value: string): SourceUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceUnit.AsObject;
  static toObject(includeInstance: boolean, msg: SourceUnit): SourceUnit.AsObject;
  static serializeBinaryToWriter(message: SourceUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceUnit;
  static deserializeBinaryFromReader(message: SourceUnit, reader: jspb.BinaryReader): SourceUnit;
}

export namespace SourceUnit {
  export type AsObject = {
    name: string,
    path: string,
    content: string,
  }
}

export class Sources extends jspb.Message {
  getEntrySourceUnitName(): string;
  setEntrySourceUnitName(value: string): Sources;

  getMaskLocalSourcesPath(): boolean;
  setMaskLocalSourcesPath(value: boolean): Sources;

  getLocalSourcesPath(): string;
  setLocalSourcesPath(value: string): Sources;

  getSourceUnitsList(): Array<SourceUnit>;
  setSourceUnitsList(value: Array<SourceUnit>): Sources;
  clearSourceUnitsList(): Sources;
  addSourceUnits(value?: SourceUnit, index?: number): SourceUnit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sources.AsObject;
  static toObject(includeInstance: boolean, msg: Sources): Sources.AsObject;
  static serializeBinaryToWriter(message: Sources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sources;
  static deserializeBinaryFromReader(message: Sources, reader: jspb.BinaryReader): Sources;
}

export namespace Sources {
  export type AsObject = {
    entrySourceUnitName: string,
    maskLocalSourcesPath: boolean,
    localSourcesPath: string,
    sourceUnitsList: Array<SourceUnit.AsObject>,
  }
}

