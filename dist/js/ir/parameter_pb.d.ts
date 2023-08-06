import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class Parameter extends jspb.Message {
  getId(): number;
  setId(value: number): Parameter;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Parameter;

  getName(): string;
  setName(value: string): Parameter;

  getType(): string;
  setType(value: string): Parameter;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Parameter;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameter.AsObject;
  static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
  static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameter;
  static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    name: string,
    type: string,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

