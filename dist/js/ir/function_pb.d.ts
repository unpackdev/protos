import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';
import * as ir_modifier_pb from '../ir/modifier_pb';


export class Function extends jspb.Message {
  getId(): number;
  setId(value: number): Function;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Function;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Function;

  getName(): string;
  setName(value: string): Function;

  getImplemented(): boolean;
  setImplemented(value: boolean): Function;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Function;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Function;

  getVirtual(): boolean;
  setVirtual(value: boolean): Function;

  getReferencedDeclarationId(): number;
  setReferencedDeclarationId(value: number): Function;

  getModifiersList(): Array<ir_modifier_pb.Modifier>;
  setModifiersList(value: Array<ir_modifier_pb.Modifier>): Function;
  clearModifiersList(): Function;
  addModifiers(value?: ir_modifier_pb.Modifier, index?: number): ir_modifier_pb.Modifier;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Function;
  clearParametersList(): Function;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getReturnList(): Array<ir_parameter_pb.Parameter>;
  setReturnList(value: Array<ir_parameter_pb.Parameter>): Function;
  clearReturnList(): Function;
  addReturn(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

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
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    name: string,
    implemented: boolean,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    virtual: boolean,
    referencedDeclarationId: number,
    modifiersList: Array<ir_modifier_pb.Modifier.AsObject>,
    parametersList: Array<ir_parameter_pb.Parameter.AsObject>,
    returnList: Array<ir_parameter_pb.Parameter.AsObject>,
  }
}

