import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Tuple extends jspb.Message {
  getId(): number;
  setId(value: number): Tuple;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Tuple;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Tuple;
  hasSrc(): boolean;
  clearSrc(): Tuple;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Tuple;

  getIsPure(): boolean;
  setIsPure(value: boolean): Tuple;

  getComponentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setComponentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Tuple;
  clearComponentsList(): Tuple;
  addComponents(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Tuple;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Tuple;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Tuple;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tuple.AsObject;
  static toObject(includeInstance: boolean, msg: Tuple): Tuple.AsObject;
  static serializeBinaryToWriter(message: Tuple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tuple;
  static deserializeBinaryFromReader(message: Tuple, reader: jspb.BinaryReader): Tuple;
}

export namespace Tuple {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    isConstant: boolean,
    isPure: boolean,
    componentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

