import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class StateVariable extends jspb.Message {
  getId(): number;
  setId(value: number): StateVariable;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): StateVariable;

  getName(): string;
  setName(value: string): StateVariable;

  getContractId(): number;
  setContractId(value: number): StateVariable;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): StateVariable;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): StateVariable;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): StateVariable;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): StateVariable;

  getType(): string;
  setType(value: string): StateVariable;

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
    nodeType: ast_types_pb.NodeType,
    name: string,
    contractId: number,
    visibility: ast_types_pb.Visibility,
    isConstant: boolean,
    storageLocation: ast_types_pb.StorageLocation,
    stateMutability: ast_types_pb.Mutability,
    type: string,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

