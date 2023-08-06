import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';


export class Event extends jspb.Message {
  getId(): number;
  setId(value: number): Event;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Event;

  getName(): string;
  setName(value: string): Event;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): Event;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Event;
  clearParametersList(): Event;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    name: string,
    anonymous: boolean,
    parametersList: Array<ir_parameter_pb.Parameter.AsObject>,
  }
}

