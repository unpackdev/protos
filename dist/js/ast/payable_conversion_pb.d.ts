import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class PayableConversion extends jspb.Message {
  getId(): number;
  setId(value: number): PayableConversion;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): PayableConversion;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): PayableConversion;
  hasSrc(): boolean;
  clearSrc(): PayableConversion;

  getPayable(): boolean;
  setPayable(value: boolean): PayableConversion;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): PayableConversion;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): PayableConversion;
  clearArgumentTypesList(): PayableConversion;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): PayableConversion;
  clearArgumentsList(): PayableConversion;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): PayableConversion;
  hasTypeDescription(): boolean;
  clearTypeDescription(): PayableConversion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayableConversion.AsObject;
  static toObject(includeInstance: boolean, msg: PayableConversion): PayableConversion.AsObject;
  static serializeBinaryToWriter(message: PayableConversion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayableConversion;
  static deserializeBinaryFromReader(message: PayableConversion, reader: jspb.BinaryReader): PayableConversion;
}

export namespace PayableConversion {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    payable: boolean,
    referencedDeclaration: number,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

