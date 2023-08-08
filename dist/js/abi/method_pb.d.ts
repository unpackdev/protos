import * as jspb from 'google-protobuf'



export class MethodIO extends jspb.Message {
  getIndexed(): boolean;
  setIndexed(value: boolean): MethodIO;

  getInternaltype(): string;
  setInternaltype(value: string): MethodIO;

  getName(): string;
  setName(value: string): MethodIO;

  getType(): string;
  setType(value: string): MethodIO;

  getComponentsList(): Array<MethodIO>;
  setComponentsList(value: Array<MethodIO>): MethodIO;
  clearComponentsList(): MethodIO;
  addComponents(value?: MethodIO, index?: number): MethodIO;

  getStatemutability(): string;
  setStatemutability(value: string): MethodIO;

  getInputsList(): Array<MethodIO>;
  setInputsList(value: Array<MethodIO>): MethodIO;
  clearInputsList(): MethodIO;
  addInputs(value?: MethodIO, index?: number): MethodIO;

  getOutputsList(): Array<MethodIO>;
  setOutputsList(value: Array<MethodIO>): MethodIO;
  clearOutputsList(): MethodIO;
  addOutputs(value?: MethodIO, index?: number): MethodIO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodIO.AsObject;
  static toObject(includeInstance: boolean, msg: MethodIO): MethodIO.AsObject;
  static serializeBinaryToWriter(message: MethodIO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodIO;
  static deserializeBinaryFromReader(message: MethodIO, reader: jspb.BinaryReader): MethodIO;
}

export namespace MethodIO {
  export type AsObject = {
    indexed: boolean,
    internaltype: string,
    name: string,
    type: string,
    componentsList: Array<MethodIO.AsObject>,
    statemutability: string,
    inputsList: Array<MethodIO.AsObject>,
    outputsList: Array<MethodIO.AsObject>,
  }
}

export class Method extends jspb.Message {
  getComponentsList(): Array<MethodIO>;
  setComponentsList(value: Array<MethodIO>): Method;
  clearComponentsList(): Method;
  addComponents(value?: MethodIO, index?: number): MethodIO;

  getInputsList(): Array<MethodIO>;
  setInputsList(value: Array<MethodIO>): Method;
  clearInputsList(): Method;
  addInputs(value?: MethodIO, index?: number): MethodIO;

  getOutputsList(): Array<MethodIO>;
  setOutputsList(value: Array<MethodIO>): Method;
  clearOutputsList(): Method;
  addOutputs(value?: MethodIO, index?: number): MethodIO;

  getName(): string;
  setName(value: string): Method;

  getType(): string;
  setType(value: string): Method;

  getStatemutability(): string;
  setStatemutability(value: string): Method;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Method.AsObject;
  static toObject(includeInstance: boolean, msg: Method): Method.AsObject;
  static serializeBinaryToWriter(message: Method, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Method;
  static deserializeBinaryFromReader(message: Method, reader: jspb.BinaryReader): Method;
}

export namespace Method {
  export type AsObject = {
    componentsList: Array<MethodIO.AsObject>,
    inputsList: Array<MethodIO.AsObject>,
    outputsList: Array<MethodIO.AsObject>,
    name: string,
    type: string,
    statemutability: string,
  }
}

