import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class ParameterList extends jspb.Message {
  getId(): number;
  setId(value: number): ParameterList;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ParameterList;

  getParametersList(): Array<Parameter>;
  setParametersList(value: Array<Parameter>): ParameterList;
  clearParametersList(): ParameterList;
  addParameters(value?: Parameter, index?: number): Parameter;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ParameterList;
  hasSrc(): boolean;
  clearSrc(): ParameterList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterList.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterList): ParameterList.AsObject;
  static serializeBinaryToWriter(message: ParameterList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterList;
  static deserializeBinaryFromReader(message: ParameterList, reader: jspb.BinaryReader): ParameterList;
}

export namespace ParameterList {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    parametersList: Array<Parameter.AsObject>,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Parameter extends jspb.Message {
  getId(): number;
  setId(value: number): Parameter;

  getName(): string;
  setName(value: string): Parameter;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Parameter;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Parameter;
  hasSrc(): boolean;
  clearSrc(): Parameter;

  getScope(): number;
  setScope(value: number): Parameter;

  getConstant(): boolean;
  setConstant(value: boolean): Parameter;

  getStateVariable(): boolean;
  setStateVariable(value: boolean): Parameter;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Parameter;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Parameter;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Parameter;

  getIndexed(): boolean;
  setIndexed(value: boolean): Parameter;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): Parameter;
  hasTypeName(): boolean;
  clearTypeName(): Parameter;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Parameter;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameter.AsObject;
  static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
  static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameter;
  static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    scope: number,
    constant: boolean,
    stateVariable: boolean,
    stateMutability: ast_types_pb.Mutability,
    visibility: ast_types_pb.Visibility,
    storageLocation: ast_types_pb.StorageLocation,
    indexed: boolean,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

