import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class NewExpression extends jspb.Message {
  getId(): number;
  setId(value: number): NewExpression;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): NewExpression;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): NewExpression;
  hasSrc(): boolean;
  clearSrc(): NewExpression;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): NewExpression;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): NewExpression;
  clearArgumentTypesList(): NewExpression;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): NewExpression;
  hasTypeName(): boolean;
  clearTypeName(): NewExpression;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): NewExpression;
  hasTypeDescription(): boolean;
  clearTypeDescription(): NewExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewExpression.AsObject;
  static toObject(includeInstance: boolean, msg: NewExpression): NewExpression.AsObject;
  static serializeBinaryToWriter(message: NewExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewExpression;
  static deserializeBinaryFromReader(message: NewExpression, reader: jspb.BinaryReader): NewExpression;
}

export namespace NewExpression {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

