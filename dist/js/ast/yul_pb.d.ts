import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_body_pb from '../ast/body_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class AssemblyStatement extends jspb.Message {
  getId(): number;
  setId(value: number): AssemblyStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): AssemblyStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): AssemblyStatement;
  hasSrc(): boolean;
  clearSrc(): AssemblyStatement;

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): AssemblyStatement;
  hasBody(): boolean;
  clearBody(): AssemblyStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssemblyStatement.AsObject;
  static toObject(includeInstance: boolean, msg: AssemblyStatement): AssemblyStatement.AsObject;
  static serializeBinaryToWriter(message: AssemblyStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssemblyStatement;
  static deserializeBinaryFromReader(message: AssemblyStatement, reader: jspb.BinaryReader): AssemblyStatement;
}

export namespace AssemblyStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

export class YulBlockStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulBlockStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulBlockStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulBlockStatement;
  hasSrc(): boolean;
  clearSrc(): YulBlockStatement;

  getStatementsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setStatementsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulBlockStatement;
  clearStatementsList(): YulBlockStatement;
  addStatements(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulBlockStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulBlockStatement): YulBlockStatement.AsObject;
  static serializeBinaryToWriter(message: YulBlockStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulBlockStatement;
  static deserializeBinaryFromReader(message: YulBlockStatement, reader: jspb.BinaryReader): YulBlockStatement;
}

export namespace YulBlockStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    statementsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

export class YulStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulStatement;
  hasSrc(): boolean;
  clearSrc(): YulStatement;

  getStatementsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setStatementsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulStatement;
  clearStatementsList(): YulStatement;
  addStatements(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulStatement): YulStatement.AsObject;
  static serializeBinaryToWriter(message: YulStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulStatement;
  static deserializeBinaryFromReader(message: YulStatement, reader: jspb.BinaryReader): YulStatement;
}

export namespace YulStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    statementsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

export class YulIdentifier extends jspb.Message {
  getId(): number;
  setId(value: number): YulIdentifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulIdentifier;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulIdentifier;
  hasSrc(): boolean;
  clearSrc(): YulIdentifier;

  getName(): string;
  setName(value: string): YulIdentifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: YulIdentifier): YulIdentifier.AsObject;
  static serializeBinaryToWriter(message: YulIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulIdentifier;
  static deserializeBinaryFromReader(message: YulIdentifier, reader: jspb.BinaryReader): YulIdentifier;
}

export namespace YulIdentifier {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    name: string,
  }
}

export class YulVariableStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulVariableStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulVariableStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulVariableStatement;
  hasSrc(): boolean;
  clearSrc(): YulVariableStatement;

  getLet(): boolean;
  setLet(value: boolean): YulVariableStatement;

  getValue(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setValue(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulVariableStatement;
  hasValue(): boolean;
  clearValue(): YulVariableStatement;

  getVariablesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setVariablesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulVariableStatement;
  clearVariablesList(): YulVariableStatement;
  addVariables(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulVariableStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulVariableStatement): YulVariableStatement.AsObject;
  static serializeBinaryToWriter(message: YulVariableStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulVariableStatement;
  static deserializeBinaryFromReader(message: YulVariableStatement, reader: jspb.BinaryReader): YulVariableStatement;
}

export namespace YulVariableStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    let: boolean,
    value?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    variablesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

export class YulSwitchCaseStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulSwitchCaseStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulSwitchCaseStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulSwitchCaseStatement;
  hasSrc(): boolean;
  clearSrc(): YulSwitchCaseStatement;

  getCase(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCase(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulSwitchCaseStatement;
  hasCase(): boolean;
  clearCase(): YulSwitchCaseStatement;

  getBody(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setBody(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulSwitchCaseStatement;
  hasBody(): boolean;
  clearBody(): YulSwitchCaseStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulSwitchCaseStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulSwitchCaseStatement): YulSwitchCaseStatement.AsObject;
  static serializeBinaryToWriter(message: YulSwitchCaseStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulSwitchCaseStatement;
  static deserializeBinaryFromReader(message: YulSwitchCaseStatement, reader: jspb.BinaryReader): YulSwitchCaseStatement;
}

export namespace YulSwitchCaseStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    pb_case?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

export class YulSwitchStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulSwitchStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulSwitchStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulSwitchStatement;
  hasSrc(): boolean;
  clearSrc(): YulSwitchStatement;

  getCasesList(): Array<YulSwitchCaseStatement>;
  setCasesList(value: Array<YulSwitchCaseStatement>): YulSwitchStatement;
  clearCasesList(): YulSwitchStatement;
  addCases(value?: YulSwitchCaseStatement, index?: number): YulSwitchCaseStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulSwitchStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulSwitchStatement): YulSwitchStatement.AsObject;
  static serializeBinaryToWriter(message: YulSwitchStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulSwitchStatement;
  static deserializeBinaryFromReader(message: YulSwitchStatement, reader: jspb.BinaryReader): YulSwitchStatement;
}

export namespace YulSwitchStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    casesList: Array<YulSwitchCaseStatement.AsObject>,
  }
}

export class YulLiteralStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulLiteralStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulLiteralStatement;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): YulLiteralStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulLiteralStatement;
  hasSrc(): boolean;
  clearSrc(): YulLiteralStatement;

  getValue(): string;
  setValue(value: string): YulLiteralStatement;

  getHexValue(): string;
  setHexValue(value: string): YulLiteralStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulLiteralStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulLiteralStatement): YulLiteralStatement.AsObject;
  static serializeBinaryToWriter(message: YulLiteralStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulLiteralStatement;
  static deserializeBinaryFromReader(message: YulLiteralStatement, reader: jspb.BinaryReader): YulLiteralStatement;
}

export namespace YulLiteralStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    value: string,
    hexValue: string,
  }
}

export class YulLeaveStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulLeaveStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulLeaveStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulLeaveStatement;
  hasSrc(): boolean;
  clearSrc(): YulLeaveStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulLeaveStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulLeaveStatement): YulLeaveStatement.AsObject;
  static serializeBinaryToWriter(message: YulLeaveStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulLeaveStatement;
  static deserializeBinaryFromReader(message: YulLeaveStatement, reader: jspb.BinaryReader): YulLeaveStatement;
}

export namespace YulLeaveStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class YulBreakStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulBreakStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulBreakStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulBreakStatement;
  hasSrc(): boolean;
  clearSrc(): YulBreakStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulBreakStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulBreakStatement): YulBreakStatement.AsObject;
  static serializeBinaryToWriter(message: YulBreakStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulBreakStatement;
  static deserializeBinaryFromReader(message: YulBreakStatement, reader: jspb.BinaryReader): YulBreakStatement;
}

export namespace YulBreakStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class YulContinueStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulContinueStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulContinueStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulContinueStatement;
  hasSrc(): boolean;
  clearSrc(): YulContinueStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulContinueStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulContinueStatement): YulContinueStatement.AsObject;
  static serializeBinaryToWriter(message: YulContinueStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulContinueStatement;
  static deserializeBinaryFromReader(message: YulContinueStatement, reader: jspb.BinaryReader): YulContinueStatement;
}

export namespace YulContinueStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class YulIfStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulIfStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulIfStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulIfStatement;
  hasSrc(): boolean;
  clearSrc(): YulIfStatement;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulIfStatement;
  hasCondition(): boolean;
  clearCondition(): YulIfStatement;

  getBody(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setBody(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulIfStatement;
  hasBody(): boolean;
  clearBody(): YulIfStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulIfStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulIfStatement): YulIfStatement.AsObject;
  static serializeBinaryToWriter(message: YulIfStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulIfStatement;
  static deserializeBinaryFromReader(message: YulIfStatement, reader: jspb.BinaryReader): YulIfStatement;
}

export namespace YulIfStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

export class YulFunctionDefinition extends jspb.Message {
  getId(): number;
  setId(value: number): YulFunctionDefinition;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulFunctionDefinition;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulFunctionDefinition;
  hasSrc(): boolean;
  clearSrc(): YulFunctionDefinition;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulFunctionDefinition;
  clearArgumentsList(): YulFunctionDefinition;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getBody(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setBody(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulFunctionDefinition;
  hasBody(): boolean;
  clearBody(): YulFunctionDefinition;

  getReturnParametersList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setReturnParametersList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulFunctionDefinition;
  clearReturnParametersList(): YulFunctionDefinition;
  addReturnParameters(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulFunctionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: YulFunctionDefinition): YulFunctionDefinition.AsObject;
  static serializeBinaryToWriter(message: YulFunctionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulFunctionDefinition;
  static deserializeBinaryFromReader(message: YulFunctionDefinition, reader: jspb.BinaryReader): YulFunctionDefinition;
}

export namespace YulFunctionDefinition {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    body?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    returnParametersList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

export class YulFunctionCallStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulFunctionCallStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulFunctionCallStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulFunctionCallStatement;
  hasSrc(): boolean;
  clearSrc(): YulFunctionCallStatement;

  getFunctionName(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setFunctionName(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulFunctionCallStatement;
  hasFunctionName(): boolean;
  clearFunctionName(): YulFunctionCallStatement;

  getArgumentsList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setArgumentsList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulFunctionCallStatement;
  clearArgumentsList(): YulFunctionCallStatement;
  addArguments(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulFunctionCallStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulFunctionCallStatement): YulFunctionCallStatement.AsObject;
  static serializeBinaryToWriter(message: YulFunctionCallStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulFunctionCallStatement;
  static deserializeBinaryFromReader(message: YulFunctionCallStatement, reader: jspb.BinaryReader): YulFunctionCallStatement;
}

export namespace YulFunctionCallStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    functionName?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    argumentsList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

export class YulAssignmentStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulAssignmentStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulAssignmentStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulAssignmentStatement;
  hasSrc(): boolean;
  clearSrc(): YulAssignmentStatement;

  getVariableNamesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setVariableNamesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): YulAssignmentStatement;
  clearVariableNamesList(): YulAssignmentStatement;
  addVariableNames(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getValue(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setValue(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulAssignmentStatement;
  hasValue(): boolean;
  clearValue(): YulAssignmentStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulAssignmentStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulAssignmentStatement): YulAssignmentStatement.AsObject;
  static serializeBinaryToWriter(message: YulAssignmentStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulAssignmentStatement;
  static deserializeBinaryFromReader(message: YulAssignmentStatement, reader: jspb.BinaryReader): YulAssignmentStatement;
}

export namespace YulAssignmentStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    variableNamesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    value?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

export class YulExpressionStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulExpressionStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulExpressionStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulExpressionStatement;
  hasSrc(): boolean;
  clearSrc(): YulExpressionStatement;

  getExpression(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setExpression(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulExpressionStatement;
  hasExpression(): boolean;
  clearExpression(): YulExpressionStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulExpressionStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulExpressionStatement): YulExpressionStatement.AsObject;
  static serializeBinaryToWriter(message: YulExpressionStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulExpressionStatement;
  static deserializeBinaryFromReader(message: YulExpressionStatement, reader: jspb.BinaryReader): YulExpressionStatement;
}

export namespace YulExpressionStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    expression?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

export class YulForStatement extends jspb.Message {
  getId(): number;
  setId(value: number): YulForStatement;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): YulForStatement;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): YulForStatement;
  hasSrc(): boolean;
  clearSrc(): YulForStatement;

  getPre(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setPre(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulForStatement;
  hasPre(): boolean;
  clearPre(): YulForStatement;

  getPost(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setPost(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulForStatement;
  hasPost(): boolean;
  clearPost(): YulForStatement;

  getCondition(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setCondition(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulForStatement;
  hasCondition(): boolean;
  clearCondition(): YulForStatement;

  getBody(): xds_type_v3_typed_struct_pb.TypedStruct | undefined;
  setBody(value?: xds_type_v3_typed_struct_pb.TypedStruct): YulForStatement;
  hasBody(): boolean;
  clearBody(): YulForStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulForStatement.AsObject;
  static toObject(includeInstance: boolean, msg: YulForStatement): YulForStatement.AsObject;
  static serializeBinaryToWriter(message: YulForStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulForStatement;
  static deserializeBinaryFromReader(message: YulForStatement, reader: jspb.BinaryReader): YulForStatement;
}

export namespace YulForStatement {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    pre?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    post?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    condition?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
    body?: xds_type_v3_typed_struct_pb.TypedStruct.AsObject,
  }
}

