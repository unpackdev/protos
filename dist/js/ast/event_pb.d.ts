import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class Event extends jspb.Message {
  getId(): number;
  setId(value: number): Event;

  getName(): string;
  setName(value: string): Event;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Event;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Event;
  hasSrc(): boolean;
  clearSrc(): Event;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): Event;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Event;
  hasParameters(): boolean;
  clearParameters(): Event;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Event;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Event;

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
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    anonymous: boolean,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

