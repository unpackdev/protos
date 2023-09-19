import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class Declaration extends jspb.Message {
  getId(): number;
  setId(value: number): Declaration;

  getName(): string;
  setName(value: string): Declaration;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Declaration;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Declaration;
  hasSrc(): boolean;
  clearSrc(): Declaration;

  getScope(): number;
  setScope(value: number): Declaration;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Declaration;

  getIsStateVariable(): boolean;
  setIsStateVariable(value: boolean): Declaration;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Declaration;

  getMutability(): ast_types_pb.Mutability;
  setMutability(value: ast_types_pb.Mutability): Declaration;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Declaration;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): Declaration;
  hasTypeName(): boolean;
  clearTypeName(): Declaration;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): Declaration;
  hasNameLocation(): boolean;
  clearNameLocation(): Declaration;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Declaration;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Declaration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Declaration.AsObject;
  static toObject(includeInstance: boolean, msg: Declaration): Declaration.AsObject;
  static serializeBinaryToWriter(message: Declaration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Declaration;
  static deserializeBinaryFromReader(message: Declaration, reader: jspb.BinaryReader): Declaration;
}

export namespace Declaration {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    scope: number,
    isConstant: boolean,
    isStateVariable: boolean,
    storageLocation: ast_types_pb.StorageLocation,
    mutability: ast_types_pb.Mutability,
    visibility: ast_types_pb.Visibility,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    nameLocation?: ast_src_pb.Src.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

