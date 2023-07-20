import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class Statement extends jspb.Message {
  getId(): number;
  setId(value: number): Statement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Statement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Statement;
  hasSrc(): boolean;
  clearSrc(): Statement;

  getExpression(): Expression | undefined;
  setExpression(value?: Expression): Statement;
  hasExpression(): boolean;
  clearExpression(): Statement;

  getFunctionReturnParameters(): number;
  setFunctionReturnParameters(value: number): Statement;

  getDeclarationsList(): Array<Declaration>;
  setDeclarationsList(value: Array<Declaration>): Statement;
  clearDeclarationsList(): Statement;
  addDeclarations(value?: Declaration, index?: number): Declaration;

  getAssignmentsList(): Array<number>;
  setAssignmentsList(value: Array<number>): Statement;
  clearAssignmentsList(): Statement;
  addAssignments(value: number, index?: number): Statement;

  getInitialValue(): Expression | undefined;
  setInitialValue(value?: Expression): Statement;
  hasInitialValue(): boolean;
  clearInitialValue(): Statement;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Statement;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Statement;

  getIsLValue(): boolean;
  setIsLValue(value: boolean): Statement;

  getIsPure(): boolean;
  setIsPure(value: boolean): Statement;

  getLValueRequested(): boolean;
  setLValueRequested(value: boolean): Statement;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): Statement;
  clearNamesList(): Statement;
  addNames(value: string, index?: number): Statement;

  getTryCall(): boolean;
  setTryCall(value: boolean): Statement;

  getTypeDescriptions(): ast_parameters_pb.TypeDescriptions | undefined;
  setTypeDescriptions(value?: ast_parameters_pb.TypeDescriptions): Statement;
  hasTypeDescriptions(): boolean;
  clearTypeDescriptions(): Statement;

  getArgumentsList(): Array<Expression>;
  setArgumentsList(value: Array<Expression>): Statement;
  clearArgumentsList(): Statement;
  addArguments(value?: Expression, index?: number): Expression;

  getCondition(): Expression | undefined;
  setCondition(value?: Expression): Statement;
  hasCondition(): boolean;
  clearCondition(): Statement;

  getTrueBody(): Statement | undefined;
  setTrueBody(value?: Statement): Statement;
  hasTrueBody(): boolean;
  clearTrueBody(): Statement;

  getStatementsList(): Array<Statement>;
  setStatementsList(value: Array<Statement>): Statement;
  clearStatementsList(): Statement;
  addStatements(value?: Statement, index?: number): Statement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Statement.AsObject;
  static toObject(includeInstance: boolean, msg: Statement): Statement.AsObject;
  static serializeBinaryToWriter(message: Statement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Statement;
  static deserializeBinaryFromReader(message: Statement, reader: jspb.BinaryReader): Statement;
}

export namespace Statement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expression?: Expression.AsObject,
    functionReturnParameters: number,
    declarationsList: Array<Declaration.AsObject>,
    assignmentsList: Array<number>,
    initialValue?: Expression.AsObject,
    kind: ast_types_pb.NodeType,
    isConstant: boolean,
    isLValue: boolean,
    isPure: boolean,
    lValueRequested: boolean,
    namesList: Array<string>,
    tryCall: boolean,
    typeDescriptions?: ast_parameters_pb.TypeDescriptions.AsObject,
    argumentsList: Array<Expression.AsObject>,
    condition?: Expression.AsObject,
    trueBody?: Statement.AsObject,
    statementsList: Array<Statement.AsObject>,
  }
}

export class Expression extends jspb.Message {
  getId(): number;
  setId(value: number): Expression;

  getName(): string;
  setName(value: string): Expression;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Expression;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Expression;
  hasSrc(): boolean;
  clearSrc(): Expression;

  getOverloadedDeclarationsList(): Array<number>;
  setOverloadedDeclarationsList(value: Array<number>): Expression;
  clearOverloadedDeclarationsList(): Expression;
  addOverloadedDeclarations(value: number, index?: number): Expression;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): Expression;

  getTypeDescriptions(): ast_parameters_pb.TypeDescriptions | undefined;
  setTypeDescriptions(value?: ast_parameters_pb.TypeDescriptions): Expression;
  hasTypeDescriptions(): boolean;
  clearTypeDescriptions(): Expression;

  getExpression(): Expression | undefined;
  setExpression(value?: Expression): Expression;
  hasExpression(): boolean;
  clearExpression(): Expression;

  getCommonType(): ast_parameters_pb.TypeDescriptions | undefined;
  setCommonType(value?: ast_parameters_pb.TypeDescriptions): Expression;
  hasCommonType(): boolean;
  clearCommonType(): Expression;

  getArgumentTypesList(): Array<ast_parameters_pb.TypeDescriptions>;
  setArgumentTypesList(value: Array<ast_parameters_pb.TypeDescriptions>): Expression;
  clearArgumentTypesList(): Expression;
  addArgumentTypes(value?: ast_parameters_pb.TypeDescriptions, index?: number): ast_parameters_pb.TypeDescriptions;

  getOperator(): ast_types_pb.Operator;
  setOperator(value: ast_types_pb.Operator): Expression;

  getLeftExpression(): Expression | undefined;
  setLeftExpression(value?: Expression): Expression;
  hasLeftExpression(): boolean;
  clearLeftExpression(): Expression;

  getRightExpression(): Expression | undefined;
  setRightExpression(value?: Expression): Expression;
  hasRightExpression(): boolean;
  clearRightExpression(): Expression;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Expression;

  getValue(): string;
  setValue(value: string): Expression;

  getHexValue(): string;
  setHexValue(value: string): Expression;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Expression;

  getIsLValue(): boolean;
  setIsLValue(value: boolean): Expression;

  getIsPure(): boolean;
  setIsPure(value: boolean): Expression;

  getLValueRequested(): boolean;
  setLValueRequested(value: boolean): Expression;

  getArgumentsList(): Array<Expression>;
  setArgumentsList(value: Array<Expression>): Expression;
  clearArgumentsList(): Expression;
  addArguments(value?: Expression, index?: number): Expression;

  getMemberName(): string;
  setMemberName(value: string): Expression;

  getComponentsList(): Array<Expression>;
  setComponentsList(value: Array<Expression>): Expression;
  clearComponentsList(): Expression;
  addComponents(value?: Expression, index?: number): Expression;

  getFunctionReturnParameters(): number;
  setFunctionReturnParameters(value: number): Expression;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expression.AsObject;
  static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
  static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expression;
  static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
}

export namespace Expression {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    overloadedDeclarationsList: Array<number>,
    referencedDeclaration: number,
    typeDescriptions?: ast_parameters_pb.TypeDescriptions.AsObject,
    expression?: Expression.AsObject,
    commonType?: ast_parameters_pb.TypeDescriptions.AsObject,
    argumentTypesList: Array<ast_parameters_pb.TypeDescriptions.AsObject>,
    operator: ast_types_pb.Operator,
    leftExpression?: Expression.AsObject,
    rightExpression?: Expression.AsObject,
    kind: ast_types_pb.NodeType,
    value: string,
    hexValue: string,
    isConstant: boolean,
    isLValue: boolean,
    isPure: boolean,
    lValueRequested: boolean,
    argumentsList: Array<Expression.AsObject>,
    memberName: string,
    componentsList: Array<Expression.AsObject>,
    functionReturnParameters: number,
  }
}

export class Declaration extends jspb.Message {
  getIsConstant(): boolean;
  setIsConstant(value: boolean): Declaration;

  getId(): number;
  setId(value: number): Declaration;

  getMutability(): ast_types_pb.Mutability;
  setMutability(value: ast_types_pb.Mutability): Declaration;

  getName(): string;
  setName(value: string): Declaration;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Declaration;

  getScope(): number;
  setScope(value: number): Declaration;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Declaration;
  hasSrc(): boolean;
  clearSrc(): Declaration;

  getIsStateVariable(): boolean;
  setIsStateVariable(value: boolean): Declaration;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Declaration;

  getTypeName(): ast_parameters_pb.TypeName | undefined;
  setTypeName(value?: ast_parameters_pb.TypeName): Declaration;
  hasTypeName(): boolean;
  clearTypeName(): Declaration;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Declaration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Declaration.AsObject;
  static toObject(includeInstance: boolean, msg: Declaration): Declaration.AsObject;
  static serializeBinaryToWriter(message: Declaration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Declaration;
  static deserializeBinaryFromReader(message: Declaration, reader: jspb.BinaryReader): Declaration;
}

export namespace Declaration {
  export type AsObject = {
    isConstant: boolean,
    id: number,
    mutability: ast_types_pb.Mutability,
    name: string,
    nodeType: ast_types_pb.NodeType,
    scope: number,
    src?: ast_src_pb.Src.AsObject,
    isStateVariable: boolean,
    storageLocation: ast_types_pb.StorageLocation,
    typeName?: ast_parameters_pb.TypeName.AsObject,
    visibility: ast_types_pb.Visibility,
  }
}

