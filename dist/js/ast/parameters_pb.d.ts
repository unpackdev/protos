import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class ParametersList extends jspb.Message {
  getId(): number;
  setId(value: number): ParametersList;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ParametersList;

  getParametersList(): Array<Parameter>;
  setParametersList(value: Array<Parameter>): ParametersList;
  clearParametersList(): ParametersList;
  addParameters(value?: Parameter, index?: number): Parameter;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ParametersList;
  hasSrc(): boolean;
  clearSrc(): ParametersList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParametersList.AsObject;
  static toObject(includeInstance: boolean, msg: ParametersList): ParametersList.AsObject;
  static serializeBinaryToWriter(message: ParametersList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParametersList;
  static deserializeBinaryFromReader(message: ParametersList, reader: jspb.BinaryReader): ParametersList;
}

export namespace ParametersList {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    parametersList: Array<Parameter.AsObject>,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Parameter extends jspb.Message {
  getConstant(): boolean;
  setConstant(value: boolean): Parameter;

  getId(): number;
  setId(value: number): Parameter;

  getMutability(): ast_types_pb.Mutability;
  setMutability(value: ast_types_pb.Mutability): Parameter;

  getName(): string;
  setName(value: string): Parameter;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Parameter;

  getScope(): number;
  setScope(value: number): Parameter;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Parameter;
  hasSrc(): boolean;
  clearSrc(): Parameter;

  getStateVariable(): boolean;
  setStateVariable(value: boolean): Parameter;

  getStorageLocation(): string;
  setStorageLocation(value: string): Parameter;

  getTypeDescriptions(): TypeDescriptions | undefined;
  setTypeDescriptions(value?: TypeDescriptions): Parameter;
  hasTypeDescriptions(): boolean;
  clearTypeDescriptions(): Parameter;

  getTypeName(): TypeName | undefined;
  setTypeName(value?: TypeName): Parameter;
  hasTypeName(): boolean;
  clearTypeName(): Parameter;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameter.AsObject;
  static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
  static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameter;
  static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
}

export namespace Parameter {
  export type AsObject = {
    constant: boolean,
    id: number,
    mutability: ast_types_pb.Mutability,
    name: string,
    nodeType: ast_types_pb.NodeType,
    scope: number,
    src?: ast_src_pb.Src.AsObject,
    stateVariable: boolean,
    storageLocation: string,
    typeDescriptions?: TypeDescriptions.AsObject,
    typeName?: TypeName.AsObject,
    visibility: ast_types_pb.Visibility,
  }
}

export class FunctionReturnParameters extends jspb.Message {
  getId(): number;
  setId(value: number): FunctionReturnParameters;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): FunctionReturnParameters;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): FunctionReturnParameters;
  hasSrc(): boolean;
  clearSrc(): FunctionReturnParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionReturnParameters.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionReturnParameters): FunctionReturnParameters.AsObject;
  static serializeBinaryToWriter(message: FunctionReturnParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionReturnParameters;
  static deserializeBinaryFromReader(message: FunctionReturnParameters, reader: jspb.BinaryReader): FunctionReturnParameters;
}

export namespace FunctionReturnParameters {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class TypeName extends jspb.Message {
  getId(): number;
  setId(value: number): TypeName;

  getName(): string;
  setName(value: string): TypeName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): TypeName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): TypeName;
  hasSrc(): boolean;
  clearSrc(): TypeName;

  getTypeDescriptions(): TypeDescriptions | undefined;
  setTypeDescriptions(value?: TypeDescriptions): TypeName;
  hasTypeDescriptions(): boolean;
  clearTypeDescriptions(): TypeName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeName.AsObject;
  static toObject(includeInstance: boolean, msg: TypeName): TypeName.AsObject;
  static serializeBinaryToWriter(message: TypeName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeName;
  static deserializeBinaryFromReader(message: TypeName, reader: jspb.BinaryReader): TypeName;
}

export namespace TypeName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    typeDescriptions?: TypeDescriptions.AsObject,
  }
}

export class TypeDescriptions extends jspb.Message {
  getTypeIdentifier(): string;
  setTypeIdentifier(value: string): TypeDescriptions;

  getTypeString(): string;
  setTypeString(value: string): TypeDescriptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDescriptions.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDescriptions): TypeDescriptions.AsObject;
  static serializeBinaryToWriter(message: TypeDescriptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDescriptions;
  static deserializeBinaryFromReader(message: TypeDescriptions, reader: jspb.BinaryReader): TypeDescriptions;
}

export namespace TypeDescriptions {
  export type AsObject = {
    typeIdentifier: string,
    typeString: string,
  }
}

