import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';


export class Enum extends jspb.Message {
  getId(): number;
  setId(value: number): Enum;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Enum;

  getName(): string;
  setName(value: string): Enum;

  getCanonicalName(): string;
  setCanonicalName(value: string): Enum;

  getMembersList(): Array<ir_parameter_pb.Parameter>;
  setMembersList(value: Array<ir_parameter_pb.Parameter>): Enum;
  clearMembersList(): Enum;
  addMembers(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

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
    nodeType: ast_types_pb.NodeType,
    name: string,
    canonicalName: string,
    membersList: Array<ir_parameter_pb.Parameter.AsObject>,
  }
}

