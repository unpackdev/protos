import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';
import * as ir_modifier_pb from '../ir/modifier_pb';
import * as ir_override_pb from '../ir/override_pb';


export class Receive extends jspb.Message {
  getId(): number;
  setId(value: number): Receive;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Receive;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Receive;

  getName(): string;
  setName(value: string): Receive;

  getImplemented(): boolean;
  setImplemented(value: boolean): Receive;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Receive;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Receive;

  getVirtual(): boolean;
  setVirtual(value: boolean): Receive;

  getModifiersList(): Array<ir_modifier_pb.Modifier>;
  setModifiersList(value: Array<ir_modifier_pb.Modifier>): Receive;
  clearModifiersList(): Receive;
  addModifiers(value?: ir_modifier_pb.Modifier, index?: number): ir_modifier_pb.Modifier;

  getOverridesList(): Array<ir_override_pb.Override>;
  setOverridesList(value: Array<ir_override_pb.Override>): Receive;
  clearOverridesList(): Receive;
  addOverrides(value?: ir_override_pb.Override, index?: number): ir_override_pb.Override;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Receive;
  clearParametersList(): Receive;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

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
    name: string,
    implemented: boolean,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    virtual: boolean,
    modifiersList: Array<ir_modifier_pb.Modifier.AsObject>,
    overridesList: Array<ir_override_pb.Override.AsObject>,
    parametersList: Array<ir_parameter_pb.Parameter.AsObject>,
  }
}

