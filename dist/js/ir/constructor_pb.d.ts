import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';
import * as ir_modifier_pb from '../ir/modifier_pb';


export class Constructor extends jspb.Message {
  getId(): number;
  setId(value: number): Constructor;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Constructor;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Constructor;

  getName(): string;
  setName(value: string): Constructor;

  getImplemented(): boolean;
  setImplemented(value: boolean): Constructor;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Constructor;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Constructor;

  getVirtual(): boolean;
  setVirtual(value: boolean): Constructor;

  getModifiersList(): Array<ir_modifier_pb.Modifier>;
  setModifiersList(value: Array<ir_modifier_pb.Modifier>): Constructor;
  clearModifiersList(): Constructor;
  addModifiers(value?: ir_modifier_pb.Modifier, index?: number): ir_modifier_pb.Modifier;

  getParametersList(): Array<ir_parameter_pb.Parameter>;
  setParametersList(value: Array<ir_parameter_pb.Parameter>): Constructor;
  clearParametersList(): Constructor;
  addParameters(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getReturnList(): Array<ir_parameter_pb.Parameter>;
  setReturnList(value: Array<ir_parameter_pb.Parameter>): Constructor;
  clearReturnList(): Constructor;
  addReturn(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constructor.AsObject;
  static toObject(includeInstance: boolean, msg: Constructor): Constructor.AsObject;
  static serializeBinaryToWriter(message: Constructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constructor;
  static deserializeBinaryFromReader(message: Constructor, reader: jspb.BinaryReader): Constructor;
}

export namespace Constructor {
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

