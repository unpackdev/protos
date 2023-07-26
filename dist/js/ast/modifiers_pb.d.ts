import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_statement_pb from '../ast/statement_pb';


export class ModifierName extends jspb.Message {
  getId(): number;
  setId(value: number): ModifierName;

  getName(): string;
  setName(value: string): ModifierName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): ModifierName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): ModifierName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): ModifierName;
  hasSrc(): boolean;
  clearSrc(): ModifierName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifierName.AsObject;
  static toObject(includeInstance: boolean, msg: ModifierName): ModifierName.AsObject;
  static serializeBinaryToWriter(message: ModifierName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifierName;
  static deserializeBinaryFromReader(message: ModifierName, reader: jspb.BinaryReader): ModifierName;
}

export namespace ModifierName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Modifier extends jspb.Message {
  getId(): number;
  setId(value: number): Modifier;

  getName(): string;
  setName(value: string): Modifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Modifier;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Modifier;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Modifier;
  hasSrc(): boolean;
  clearSrc(): Modifier;

  getArgumentsList(): Array<ast_statement_pb.Expression>;
  setArgumentsList(value: Array<ast_statement_pb.Expression>): Modifier;
  clearArgumentsList(): Modifier;
  addArguments(value?: ast_statement_pb.Expression, index?: number): ast_statement_pb.Expression;

  getArgumentTypesList(): Array<ast_parameters_pb.TypeDescriptions>;
  setArgumentTypesList(value: Array<ast_parameters_pb.TypeDescriptions>): Modifier;
  clearArgumentTypesList(): Modifier;
  addArgumentTypes(value?: ast_parameters_pb.TypeDescriptions, index?: number): ast_parameters_pb.TypeDescriptions;

  getModifierName(): ModifierName | undefined;
  setModifierName(value?: ModifierName): Modifier;
  hasModifierName(): boolean;
  clearModifierName(): Modifier;

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
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
    argumentsList: Array<ast_statement_pb.Expression.AsObject>,
    argumentTypesList: Array<ast_parameters_pb.TypeDescriptions.AsObject>,
    modifierName?: ModifierName.AsObject,
  }
}

