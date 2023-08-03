import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as ast_src_pb from '../ast/src_pb';


export class Catch extends jspb.Message {
  getId(): number;
  setId(value: number): Catch;

  getName(): string;
  setName(value: string): Catch;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Catch;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Catch;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Catch;
  hasSrc(): boolean;
  clearSrc(): Catch;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Catch;
  hasParameters(): boolean;
  clearParameters(): Catch;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Catch;
  hasBody(): boolean;
  clearBody(): Catch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Catch.AsObject;
  static toObject(includeInstance: boolean, msg: Catch): Catch.AsObject;
  static serializeBinaryToWriter(message: Catch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Catch;
  static deserializeBinaryFromReader(message: Catch, reader: jspb.BinaryReader): Catch;
}

export namespace Catch {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

