import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';


export class PrimaryExpression extends jspb.Message {
  getId(): number;
  setId(value: number): PrimaryExpression;

  getName(): string;
  setName(value: string): PrimaryExpression;

  getValue(): string;
  setValue(value: string): PrimaryExpression;

  getHexValue(): string;
  setHexValue(value: string): PrimaryExpression;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): PrimaryExpression;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): PrimaryExpression;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): PrimaryExpression;
  hasSrc(): boolean;
  clearSrc(): PrimaryExpression;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): PrimaryExpression;

  getIsPure(): boolean;
  setIsPure(value: boolean): PrimaryExpression;

  getOverloadedDeclarationsList(): Array<number>;
  setOverloadedDeclarationsList(value: Array<number>): PrimaryExpression;
  clearOverloadedDeclarationsList(): PrimaryExpression;
  addOverloadedDeclarations(value: number, index?: number): PrimaryExpression;

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): PrimaryExpression;
  hasTypeName(): boolean;
  clearTypeName(): PrimaryExpression;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): PrimaryExpression;
  clearArgumentTypesList(): PrimaryExpression;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): PrimaryExpression;
  hasTypeDescription(): boolean;
  clearTypeDescription(): PrimaryExpression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimaryExpression.AsObject;
  static toObject(includeInstance: boolean, msg: PrimaryExpression): PrimaryExpression.AsObject;
  static serializeBinaryToWriter(message: PrimaryExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimaryExpression;
  static deserializeBinaryFromReader(message: PrimaryExpression, reader: jspb.BinaryReader): PrimaryExpression;
}

export namespace PrimaryExpression {
  export type AsObject = {
    id: number,
    name: string,
    value: string,
    hexValue: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    isPure: boolean,
    overloadedDeclarationsList: Array<number>,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

