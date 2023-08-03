import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class StateVariable extends jspb.Message {
  getId(): number;
  setId(value: number): StateVariable;

  getName(): string;
  setName(value: string): StateVariable;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): StateVariable;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): StateVariable;
  hasSrc(): boolean;
  clearSrc(): StateVariable;

  getScope(): number;
  setScope(value: number): StateVariable;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): StateVariable;

  getIsStateVariable(): boolean;
  setIsStateVariable(value: boolean): StateVariable;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): StateVariable;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): StateVariable;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): StateVariable;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): StateVariable;
  hasTypeName(): boolean;
  clearTypeName(): StateVariable;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): StateVariable;
  hasTypeDescription(): boolean;
  clearTypeDescription(): StateVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StateVariable.AsObject;
  static toObject(includeInstance: boolean, msg: StateVariable): StateVariable.AsObject;
  static serializeBinaryToWriter(message: StateVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StateVariable;
  static deserializeBinaryFromReader(message: StateVariable, reader: jspb.BinaryReader): StateVariable;
}

export namespace StateVariable {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    scope: number,
    isConstant: boolean,
    isStateVariable: boolean,
    visibility: ast_types_pb.Visibility,
    storageLocation: ast_types_pb.StorageLocation,
    stateMutability: ast_types_pb.Mutability,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

