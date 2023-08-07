import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ir_parameter_pb from '../ir/parameter_pb';


export class Override extends jspb.Message {
  getId(): number;
  setId(value: number): Override;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Override;

  getName(): string;
  setName(value: string): Override;

  getOverridesList(): Array<ir_parameter_pb.Parameter>;
  setOverridesList(value: Array<ir_parameter_pb.Parameter>): Override;
  clearOverridesList(): Override;
  addOverrides(value?: ir_parameter_pb.Parameter, index?: number): ir_parameter_pb.Parameter;

  getReferencedDeclarationId(): number;
  setReferencedDeclarationId(value: number): Override;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Override;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Override;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Override.AsObject;
  static toObject(includeInstance: boolean, msg: Override): Override.AsObject;
  static serializeBinaryToWriter(message: Override, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Override;
  static deserializeBinaryFromReader(message: Override, reader: jspb.BinaryReader): Override;
}

export namespace Override {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    name: string,
    overridesList: Array<ir_parameter_pb.Parameter.AsObject>,
    referencedDeclarationId: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

