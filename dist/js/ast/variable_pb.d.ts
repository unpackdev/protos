import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_declaration_pb from '../ast/declaration_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class Variable extends jspb.Message {
  getId(): number;
  setId(value: number): Variable;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Variable;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Variable;
  hasSrc(): boolean;
  clearSrc(): Variable;

  getAssignmentsList(): Array<number>;
  setAssignmentsList(value: Array<number>): Variable;
  clearAssignmentsList(): Variable;
  addAssignments(value: number, index?: number): Variable;

  getDeclarationsList(): Array<ast_declaration_pb.Declaration>;
  setDeclarationsList(value: Array<ast_declaration_pb.Declaration>): Variable;
  clearDeclarationsList(): Variable;
  addDeclarations(value?: ast_declaration_pb.Declaration, index?: number): ast_declaration_pb.Declaration;

  getInitialValue(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setInitialValue(value?: xds_type_v3_typed_struct_pb.TypedStruct): Variable;
  hasInitialValue(): boolean;
  clearInitialValue(): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    assignmentsList: Array<number>,
    declarationsList: Array<ast_declaration_pb.Declaration.AsObject>,
    initialValue?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

