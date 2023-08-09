import * as jspb from 'google-protobuf'

import * as eip_standards_pb from '../eip/standards_pb';


export class Input extends jspb.Message {
  getType(): string;
  setType(value: string): Input;

  getIndexed(): boolean;
  setIndexed(value: boolean): Input;

  getMatched(): boolean;
  setMatched(value: boolean): Input;

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
    matched: boolean,
  }
}

export class Output extends jspb.Message {
  getType(): string;
  setType(value: string): Output;

  getMatched(): boolean;
  setMatched(value: boolean): Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
  export type AsObject = {
    type: string,
    matched: boolean,
  }
}

export class Function extends jspb.Message {
  getName(): string;
  setName(value: string): Function;

  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): Function;
  clearInputsList(): Function;
  addInputs(value?: Input, index?: number): Input;

  getOutputsList(): Array<Output>;
  setOutputsList(value: Array<Output>): Function;
  clearOutputsList(): Function;
  addOutputs(value?: Output, index?: number): Output;

  getMatched(): boolean;
  setMatched(value: boolean): Function;

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
    outputsList: Array<Output.AsObject>,
    matched: boolean,
  }
}

export class Event extends jspb.Message {
  getName(): string;
  setName(value: string): Event;

  getInputsList(): Array<Input>;
  setInputsList(value: Array<Input>): Event;
  clearInputsList(): Event;
  addInputs(value?: Input, index?: number): Input;

  getOutputsList(): Array<Output>;
  setOutputsList(value: Array<Output>): Event;
  clearOutputsList(): Event;
  addOutputs(value?: Output, index?: number): Output;

  getMatched(): boolean;
  setMatched(value: boolean): Event;

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
    outputsList: Array<Output.AsObject>,
    matched: boolean,
  }
}

export class Contract extends jspb.Message {
  getName(): string;
  setName(value: string): Contract;

  getFunctionsList(): Array<Function>;
  setFunctionsList(value: Array<Function>): Contract;
  clearFunctionsList(): Contract;
  addFunctions(value?: Function, index?: number): Function;

  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): Contract;
  clearEventsList(): Contract;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    name: string,
    functionsList: Array<Function.AsObject>,
    eventsList: Array<Event.AsObject>,
  }
}

export class ContractStandard extends jspb.Message {
  getName(): string;
  setName(value: string): ContractStandard;

  getUrl(): string;
  setUrl(value: string): ContractStandard;

  getType(): eip_standards_pb.Standard;
  setType(value: eip_standards_pb.Standard): ContractStandard;

  getStagnant(): boolean;
  setStagnant(value: boolean): ContractStandard;

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
    url: string,
    type: eip_standards_pb.Standard,
    stagnant: boolean,
    functionsList: Array<Function.AsObject>,
    eventsList: Array<Event.AsObject>,
  }
}

export class Standards extends jspb.Message {
  getStandardsList(): Array<ContractStandard>;
  setStandardsList(value: Array<ContractStandard>): Standards;
  clearStandardsList(): Standards;
  addStandards(value?: ContractStandard, index?: number): ContractStandard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Standards.AsObject;
  static toObject(includeInstance: boolean, msg: Standards): Standards.AsObject;
  static serializeBinaryToWriter(message: Standards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Standards;
  static deserializeBinaryFromReader(message: Standards, reader: jspb.BinaryReader): Standards;
}

export namespace Standards {
  export type AsObject = {
    standardsList: Array<ContractStandard.AsObject>,
  }
}

