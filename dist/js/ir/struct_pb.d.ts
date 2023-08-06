import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';


export class Struct extends jspb.Message {
  getId(): number;
  setId(value: number): Struct;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Struct;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Struct;

  getName(): string;
  setName(value: string): Struct;

  getCanonicalName(): string;
  setCanonicalName(value: string): Struct;

  getReferencedDeclarationId(): number;
  setReferencedDeclarationId(value: number): Struct;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Struct;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Struct;

  getMembersList(): Array<ir_parameter_pb.Parameter>;
  setMembersList(value: Array<ir_parameter_pb.Parameter>): Struct;
  clearMembersList(): Struct;
  addMembers(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getType(): string;
  setType(value: string): Struct;

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
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    name: string,
    canonicalName: string,
    referencedDeclarationId: number,
    visibility: ast_types_pb.Visibility,
    storageLocation: ast_types_pb.StorageLocation,
    membersList: Array<ir_parameter_pb.Parameter.AsObject>,
    type: string,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

