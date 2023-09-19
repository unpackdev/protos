import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class Enum extends jspb.Message {
  getId(): number;
  setId(value: number): Enum;

  getName(): string;
  setName(value: string): Enum;

  getCanonicalName(): string;
  setCanonicalName(value: string): Enum;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Enum;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Enum;
  hasSrc(): boolean;
  clearSrc(): Enum;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): Enum;
  hasNameLocation(): boolean;
  clearNameLocation(): Enum;

  getMembersList(): Array<ast_parameters_pb.Parameter>;
  setMembersList(value: Array<ast_parameters_pb.Parameter>): Enum;
  clearMembersList(): Enum;
  addMembers(value?: ast_parameters_pb.Parameter, index?: number): ast_parameters_pb.Parameter;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Enum;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Enum;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Enum.AsObject;
  static toObject(includeInstance: boolean, msg: Enum): Enum.AsObject;
  static serializeBinaryToWriter(message: Enum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Enum;
  static deserializeBinaryFromReader(message: Enum, reader: jspb.BinaryReader): Enum;
}

export namespace Enum {
  export type AsObject = {
    id: number,
    name: string,
    canonicalName: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    nameLocation?: ast_src_pb.Src.AsObject,
    membersList: Array<ast_parameters_pb.Parameter.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

