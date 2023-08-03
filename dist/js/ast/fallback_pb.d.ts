import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_body_pb from '../ast/body_pb';


export class Fallback extends jspb.Message {
  getId(): number;
  setId(value: number): Fallback;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Fallback;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Fallback;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Fallback;
  hasSrc(): boolean;
  clearSrc(): Fallback;

  getVirtual(): boolean;
  setVirtual(value: boolean): Fallback;

  getImplemented(): boolean;
  setImplemented(value: boolean): Fallback;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Fallback;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Fallback;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Fallback;
  hasParameters(): boolean;
  clearParameters(): Fallback;

  getReturnParameters(): ast_parameters_pb.ParameterList | undefined;
  setReturnParameters(value?: ast_parameters_pb.ParameterList): Fallback;
  hasReturnParameters(): boolean;
  clearReturnParameters(): Fallback;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Fallback;
  hasBody(): boolean;
  clearBody(): Fallback;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fallback.AsObject;
  static toObject(includeInstance: boolean, msg: Fallback): Fallback.AsObject;
  static serializeBinaryToWriter(message: Fallback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fallback;
  static deserializeBinaryFromReader(message: Fallback, reader: jspb.BinaryReader): Fallback;
}

export namespace Fallback {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    virtual: boolean,
    implemented: boolean,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    returnParameters?: ast_parameters_pb.ParameterList.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

