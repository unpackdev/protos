import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ir_argument_pb from '../ir/argument_pb';


export class FunctionCall extends jspb.Message {
  getId(): number;
  setId(value: number): FunctionCall;

  getName(): string;
  setName(value: string): FunctionCall;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): FunctionCall;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): FunctionCall;

  getArgumentTypesList(): Array<ast_type_name_pb.TypeDescription>;
  setArgumentTypesList(value: Array<ast_type_name_pb.TypeDescription>): FunctionCall;
  clearArgumentTypesList(): FunctionCall;
  addArgumentTypes(value?: ast_type_name_pb.TypeDescription, index?: number): ast_type_name_pb.TypeDescription;

  getArgumentsList(): Array<ir_argument_pb.Argument>;
  setArgumentsList(value: Array<ir_argument_pb.Argument>): FunctionCall;
  clearArgumentsList(): FunctionCall;
  addArguments(value?: ir_argument_pb.Argument, index?: number): ir_argument_pb.Argument;

  getIsExternal(): boolean;
  setIsExternal(value: boolean): FunctionCall;

  getExternalContractId(): number;
  setExternalContractId(value: number): FunctionCall;

  getExternalContractName(): string;
  setExternalContractName(value: string): FunctionCall;

  getReferenceStatementId(): number;
  setReferenceStatementId(value: number): FunctionCall;

  getReferencedDeclarationId(): number;
  setReferencedDeclarationId(value: number): FunctionCall;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): FunctionCall;
  hasTypeDescription(): boolean;
  clearTypeDescription(): FunctionCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

export namespace FunctionCall {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    argumentTypesList: Array<ast_type_name_pb.TypeDescription.AsObject>,
    argumentsList: Array<ir_argument_pb.Argument.AsObject>,
    isExternal: boolean,
    externalContractId: number,
    externalContractName: string,
    referenceStatementId: number,
    referencedDeclarationId: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

