import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class IndexAccess extends jspb.Message {
  getId(): number;
  setId(value: number): IndexAccess;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): IndexAccess;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): IndexAccess;
  hasSrc(): boolean;
  clearSrc(): IndexAccess;

  getIndexExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setIndexExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): IndexAccess;
  hasIndexExpression(): boolean;
  clearIndexExpression(): IndexAccess;

  getBaseExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setBaseExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): IndexAccess;
  hasBaseExpression(): boolean;
  clearBaseExpression(): IndexAccess;

  getTypeDescriptionsList(): Array<ast_type_name_pb.TypeDescription>;
  setTypeDescriptionsList(value: Array<ast_type_name_pb.TypeDescription>): IndexAccess;
  clearTypeDescriptionsList(): IndexAccess;
  addTypeDescriptions(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): IndexAccess;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): IndexAccess;
  hasTypeDescription(): boolean;
  clearTypeDescription(): IndexAccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexAccess.AsObject;
  static toObject(includeInstance: boolean, msg: IndexAccess): IndexAccess.AsObject;
  static serializeBinaryToWriter(message: IndexAccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexAccess;
  static deserializeBinaryFromReader(message: IndexAccess, reader: jspb.BinaryReader): IndexAccess;
}

export namespace IndexAccess {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    indexExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    baseExpression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    typeDescriptionsList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

