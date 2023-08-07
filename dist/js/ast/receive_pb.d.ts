import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as ast_modifiers_pb from '../ast/modifiers_pb';
import * as ast_overrides_pb from '../ast/overrides_pb';


export class Receive extends jspb.Message {
  getId(): number;
  setId(value: number): Receive;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Receive;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Receive;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Receive;
  hasSrc(): boolean;
  clearSrc(): Receive;

  getVirtual(): boolean;
  setVirtual(value: boolean): Receive;

  getImplemented(): boolean;
  setImplemented(value: boolean): Receive;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Receive;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Receive;

  getModifiersList(): Array<ast_modifiers_pb.ModifierInvocation>;
  setModifiersList(value: Array<ast_modifiers_pb.ModifierInvocation>): Receive;
  clearModifiersList(): Receive;
  addModifiers(value?: ast_modifiers_pb.ModifierInvocation, index?: number): ast_modifiers_pb.ModifierInvocation;

  getOverridesList(): Array<ast_overrides_pb.OverrideSpecifier>;
  setOverridesList(value: Array<ast_overrides_pb.OverrideSpecifier>): Receive;
  clearOverridesList(): Receive;
  addOverrides(value?: ast_overrides_pb.OverrideSpecifier, index?: number): ast_overrides_pb.OverrideSpecifier;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Receive;
  hasParameters(): boolean;
  clearParameters(): Receive;

  getReturnParameters(): ast_parameters_pb.ParameterList | undefined;
  setReturnParameters(value?: ast_parameters_pb.ParameterList): Receive;
  hasReturnParameters(): boolean;
  clearReturnParameters(): Receive;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Receive;
  hasBody(): boolean;
  clearBody(): Receive;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receive.AsObject;
  static toObject(includeInstance: boolean, msg: Receive): Receive.AsObject;
  static serializeBinaryToWriter(message: Receive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receive;
  static deserializeBinaryFromReader(message: Receive, reader: jspb.BinaryReader): Receive;
}

export namespace Receive {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    virtual: boolean,
    implemented: boolean,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    modifiersList: Array<ast_modifiers_pb.ModifierInvocation.AsObject>,
    overridesList: Array<ast_overrides_pb.OverrideSpecifier.AsObject>,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    returnParameters?: ast_parameters_pb.ParameterList.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

