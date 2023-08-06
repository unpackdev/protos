import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';


export class Error extends jspb.Message {
  getId(): number;
  setId(value: number): Error;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Error;

  getName(): string;
  setName(value: string): Error;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Error;
  clearParametersList(): Error;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Error;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    name: string,
    parametersList: Array<ir_parameter_pb.Parameter.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

