import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class Error extends jspb.Message {
  getId(): number;
  setId(value: number): Error;

  getName(): string;
  setName(value: string): Error;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Error;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Error;
  hasSrc(): boolean;
  clearSrc(): Error;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): Error;
  hasNameLocation(): boolean;
  clearNameLocation(): Error;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Error;
  hasParameters(): boolean;
  clearParameters(): Error;

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
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    nameLocation?: ast_src_pb.Src.AsObject,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

