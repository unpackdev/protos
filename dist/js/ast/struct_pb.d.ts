import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class Struct extends jspb.Message {
  getId(): number;
  setId(value: number): Struct;

  getName(): string;
  setName(value: string): Struct;

  getCanonicalName(): string;
  setCanonicalName(value: string): Struct;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Struct;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Struct;
  hasSrc(): boolean;
  clearSrc(): Struct;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Struct;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Struct;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Struct;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Struct;

  getMembersList(): Array<ast_parameters_pb.Parameter>;
  setMembersList(value: Array<ast_parameters_pb.Parameter>): Struct;
  clearMembersList(): Struct;
  addMembers(value?: ast_parameters_pb.Parameter, index?: number): ast_parameters_pb.Parameter;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Struct;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Struct.AsObject;
  static toObject(includeInstance: boolean, msg: Struct): Struct.AsObject;
  static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Struct;
  static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export namespace Struct {
  export type AsObject = {
    id: number,
    name: string,
    canonicalName: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    kind: ast_types_pb.NodeType,
    referencedDeclaration: number,
    visibility: ast_types_pb.Visibility,
    storageLocation: ast_types_pb.StorageLocation,
    membersList: Array<ast_parameters_pb.Parameter.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

