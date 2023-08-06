import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class Modifier extends jspb.Message {
  getId(): number;
  setId(value: number): Modifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Modifier;

  getName(): string;
  setName(value: string): Modifier;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): Modifier;
  clearArgumentTypesList(): Modifier;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Modifier.AsObject;
  static toObject(includeInstance: boolean, msg: Modifier): Modifier.AsObject;
  static serializeBinaryToWriter(message: Modifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Modifier;
  static deserializeBinaryFromReader(message: Modifier, reader: jspb.BinaryReader): Modifier;
}

export namespace Modifier {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    name: string,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
  }
}

