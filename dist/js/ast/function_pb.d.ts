import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_modifiers_pb from '../ast/modifiers_pb';
import * as ast_overrides_pb from '../ast/overrides_pb';
import * as ast_body_pb from '../ast/body_pb';


export class Function extends jspb.Message {
  getId(): number;
  setId(value: number): Function;

  getName(): string;
  setName(value: string): Function;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Function;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Function;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Function;
  hasSrc(): boolean;
  clearSrc(): Function;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): Function;
  hasNameLocation(): boolean;
  clearNameLocation(): Function;

  getImplemented(): boolean;
  setImplemented(value: boolean): Function;

  getScope(): number;
  setScope(value: number): Function;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Function;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Function;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Function;

  getVirtual(): boolean;
  setVirtual(value: boolean): Function;

  getModifiersList(): Array<ast_modifiers_pb.ModifierInvocation>;
  setModifiersList(value: Array<ast_modifiers_pb.ModifierInvocation>): Function;
  clearModifiersList(): Function;
  addModifiers(value?: ast_modifiers_pb.ModifierInvocation, index?: number): ast_modifiers_pb.ModifierInvocation;

  getOverridesList(): Array<ast_overrides_pb.OverrideSpecifier>;
  setOverridesList(value: Array<ast_overrides_pb.OverrideSpecifier>): Function;
  clearOverridesList(): Function;
  addOverrides(value?: ast_overrides_pb.OverrideSpecifier, index?: number): ast_overrides_pb.OverrideSpecifier;

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Function;
  hasParameters(): boolean;
  clearParameters(): Function;

  getReturnParameters(): ast_parameters_pb.ParameterList | undefined;
  setReturnParameters(value?: ast_parameters_pb.ParameterList): Function;
  hasReturnParameters(): boolean;
  clearReturnParameters(): Function;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Function;
  hasBody(): boolean;
  clearBody(): Function;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Function;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Function;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Function.AsObject;
  static toObject(includeInstance: boolean, msg: Function): Function.AsObject;
  static serializeBinaryToWriter(message: Function, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Function;
  static deserializeBinaryFromReader(message: Function, reader: jspb.BinaryReader): Function;
}

export namespace Function {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    nameLocation?: ast_src_pb.Src.AsObject,
    implemented: boolean,
    scope: number,
    referencedDeclaration: number,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    virtual: boolean,
    modifiersList: Array<ast_modifiers_pb.ModifierInvocation.AsObject>,
    overridesList: Array<ast_overrides_pb.OverrideSpecifier.AsObject>,
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    returnParameters?: ast_parameters_pb.ParameterList.AsObject,
    body?: ast_body_pb.Body.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

