import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';
import * as ir_modifier_pb from '../ir/modifier_pb';


export class Fallback extends jspb.Message {
  getId(): number;
  setId(value: number): Fallback;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Fallback;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Fallback;

  getName(): string;
  setName(value: string): Fallback;

  getImplemented(): boolean;
  setImplemented(value: boolean): Fallback;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Fallback;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Fallback;

  getVirtual(): boolean;
  setVirtual(value: boolean): Fallback;

  getModifiersList(): Array<ir_modifier_pb.Modifier>;
  setModifiersList(value: Array<ir_modifier_pb.Modifier>): Fallback;
  clearModifiersList(): Fallback;
  addModifiers(value?: ir_modifier_pb.Modifier, index?: number): ir_modifier_pb.Modifier;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Fallback;
  clearParametersList(): Fallback;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getReturnList(): Array<ir_parameter_pb.Parameter>;
  setReturnList(value: Array<ir_parameter_pb.Parameter>): Fallback;
  clearReturnList(): Fallback;
  addReturn(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

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
    name: string,
    implemented: boolean,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    virtual: boolean,
    modifiersList: Array<ir_modifier_pb.Modifier.AsObject>,
    parametersList: Array<ir_parameter_pb.Parameter.AsObject>,
    returnList: Array<ir_parameter_pb.Parameter.AsObject>,
  }
}

