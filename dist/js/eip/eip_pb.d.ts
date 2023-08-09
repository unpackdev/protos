import * as jspb from 'google-protobuf'

import * as eip_standards_pb from '../eip/standards_pb';


export class Input extends jspb.Message {
  getType(): string;
  setType(value: string): Input;

  getIndexed(): boolean;
  setIndexed(value: boolean): Input;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    type: string,
    indexed: boolean,
  }
}

export class Function extends jspb.Message {
  getName(): string;
  setName(value: string): Function;

  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): Function;
  clearInputsList(): Function;
  addInputs(value?: Input, index?: number): Input;

  getOutputsList(): Array<string>;
  setOutputsList(value: Array<string>): Function;
  clearOutputsList(): Function;
  addOutputs(value: string, index?: number): Function;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Function.AsObject;
  static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
  static serializeBinaryToWriter(message: Function, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Function;
  static deserializeBinaryFromReader(message: Function, reader: jspb.BinaryReader): Function;
}

export namespace Function {
  export type AsObject = {
    name: string,
    inputsList: Array<Input.AsObject>,
    outputsList: Array<string>,
  }
}

export class Event extends jspb.Message {
  getName(): string;
  setName(value: string): Event;

  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): Event;
  clearInputsList(): Event;
  addInputs(value?: Input, index?: number): Input;

  getOutputsList(): Array<string>;
  setOutputsList(value: Array<string>): Event;
  clearOutputsList(): Event;
  addOutputs(value: string, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    name: string,
    inputsList: Array<Input.AsObject>,
    outputsList: Array<string>,
  }
}

export class ContractStandard extends jspb.Message {
  getName(): string;
  setName(value: string): ContractStandard;

  getType(): eip_standards_pb.Standard;
  setType(value: eip_standards_pb.Standard): ContractStandard;

  getFunctionsList(): Array<Function>;
  setFunctionsList(value: Array<Function>): ContractStandard;
  clearFunctionsList(): ContractStandard;
  addFunctions(value?: Function, index?: number): Function;

  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): ContractStandard;
  clearEventsList(): ContractStandard;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractStandard.AsObject;
  static toObject(includeInstance: boolean, msg: ContractStandard): ContractStandard.AsObject;
  static serializeBinaryToWriter(message: ContractStandard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractStandard;
  static deserializeBinaryFromReader(message: ContractStandard, reader: jspb.BinaryReader): ContractStandard;
}

export namespace ContractStandard {
  export type AsObject = {
    name: string,
    type: eip_standards_pb.Standard,
    functionsList: Array<Function.AsObject>,
    eventsList: Array<Event.AsObject>,
  }
}

