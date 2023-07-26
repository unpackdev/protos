import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_statement_pb from '../ast/statement_pb';
import * as ast_modifiers_pb from '../ast/modifiers_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class LibraryName extends jspb.Message {
  getId(): number;
  setId(value: number): LibraryName;

  getName(): string;
  setName(value: string): LibraryName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): LibraryName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): LibraryName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): LibraryName;
  hasSrc(): boolean;
  clearSrc(): LibraryName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LibraryName.AsObject;
  static toObject(includeInstance: boolean, msg: LibraryName): LibraryName.AsObject;
  static serializeBinaryToWriter(message: LibraryName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LibraryName;
  static deserializeBinaryFromReader(message: LibraryName, reader: jspb.BinaryReader): LibraryName;
}

export namespace LibraryName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class BaseContractName extends jspb.Message {
  getId(): number;
  setId(value: number): BaseContractName;

  getName(): string;
  setName(value: string): BaseContractName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): BaseContractName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): BaseContractName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): BaseContractName;
  hasSrc(): boolean;
  clearSrc(): BaseContractName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseContractName.AsObject;
  static toObject(includeInstance: boolean, msg: BaseContractName): BaseContractName.AsObject;
  static serializeBinaryToWriter(message: BaseContractName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseContractName;
  static deserializeBinaryFromReader(message: BaseContractName, reader: jspb.BinaryReader): BaseContractName;
}

export namespace BaseContractName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class BaseContract extends jspb.Message {
  getId(): number;
  setId(value: number): BaseContract;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): BaseContract;

  getBaseName(): BaseContractName | undefined;
  setBaseName(value?: BaseContractName): BaseContract;
  hasBaseName(): boolean;
  clearBaseName(): BaseContract;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): BaseContract;
  hasSrc(): boolean;
  clearSrc(): BaseContract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseContract.AsObject;
  static toObject(includeInstance: boolean, msg: BaseContract): BaseContract.AsObject;
  static serializeBinaryToWriter(message: BaseContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseContract;
  static deserializeBinaryFromReader(message: BaseContract, reader: jspb.BinaryReader): BaseContract;
}

export namespace BaseContract {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    baseName?: BaseContractName.AsObject,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class OverrideSpecifier extends jspb.Message {
  getId(): number;
  setId(value: number): OverrideSpecifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): OverrideSpecifier;

  getOverrides(): ast_parameters_pb.ParametersList | undefined;
  setOverrides(value?: ast_parameters_pb.ParametersList): OverrideSpecifier;
  hasOverrides(): boolean;
  clearOverrides(): OverrideSpecifier;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): OverrideSpecifier;
  hasSrc(): boolean;
  clearSrc(): OverrideSpecifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverrideSpecifier.AsObject;
  static toObject(includeInstance: boolean, msg: OverrideSpecifier): OverrideSpecifier.AsObject;
  static serializeBinaryToWriter(message: OverrideSpecifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverrideSpecifier;
  static deserializeBinaryFromReader(message: OverrideSpecifier, reader: jspb.BinaryReader): OverrideSpecifier;
}

export namespace OverrideSpecifier {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    overrides?: ast_parameters_pb.ParametersList.AsObject,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class EnumMember extends jspb.Message {
  getId(): number;
  setId(value: number): EnumMember;

  getName(): string;
  setName(value: string): EnumMember;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): EnumMember;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): EnumMember;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): EnumMember;
  hasSrc(): boolean;
  clearSrc(): EnumMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumMember.AsObject;
  static toObject(includeInstance: boolean, msg: EnumMember): EnumMember.AsObject;
  static serializeBinaryToWriter(message: EnumMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumMember;
  static deserializeBinaryFromReader(message: EnumMember, reader: jspb.BinaryReader): EnumMember;
}

export namespace EnumMember {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
  }
}

export class Node extends jspb.Message {
  getId(): number;
  setId(value: number): Node;

  getName(): string;
  setName(value: string): Node;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Node;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Node;
  hasSrc(): boolean;
  clearSrc(): Node;

  getAbstract(): boolean;
  setAbstract(value: boolean): Node;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Node;

  getFullyImplemented(): boolean;
  setFullyImplemented(value: boolean): Node;

  getImplemented(): boolean;
  setImplemented(value: boolean): Node;

  getLinearizedBaseContractsList(): Array<number>;
  setLinearizedBaseContractsList(value: Array<number>): Node;
  clearLinearizedBaseContractsList(): Node;
  addLinearizedBaseContracts(value: number, index?: number): Node;

  getLiteralsList(): Array<string>;
  setLiteralsList(value: Array<string>): Node;
  clearLiteralsList(): Node;
  addLiterals(value: string, index?: number): Node;

  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): Node;
  clearNodesList(): Node;
  addNodes(value?: Node, index?: number): Node;

  getVisibility(): ast_types_pb.Visibility;
  setVisibility(value: ast_types_pb.Visibility): Node;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): Node;

  getVirtual(): boolean;
  setVirtual(value: boolean): Node;

  getParameters(): ast_parameters_pb.ParametersList | undefined;
  setParameters(value?: ast_parameters_pb.ParametersList): Node;
  hasParameters(): boolean;
  clearParameters(): Node;

  getReturnParameters(): ast_parameters_pb.ParametersList | undefined;
  setReturnParameters(value?: ast_parameters_pb.ParametersList): Node;
  hasReturnParameters(): boolean;
  clearReturnParameters(): Node;

  getBody(): ast_statement_pb.Body | undefined;
  setBody(value?: ast_statement_pb.Body): Node;
  hasBody(): boolean;
  clearBody(): Node;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): Node;

  getFile(): string;
  setFile(value: string): Node;

  getScope(): number;
  setScope(value: number): Node;

  getSourceUnit(): number;
  setSourceUnit(value: number): Node;

  getSymbolAliasesList(): Array<string>;
  setSymbolAliasesList(value: Array<string>): Node;
  clearSymbolAliasesList(): Node;
  addSymbolAliases(value: string, index?: number): Node;

  getUnitAlias(): string;
  setUnitAlias(value: string): Node;

  getLibraryName(): LibraryName | undefined;
  setLibraryName(value?: LibraryName): Node;
  hasLibraryName(): boolean;
  clearLibraryName(): Node;

  getTypeName(): ast_parameters_pb.TypeName | undefined;
  setTypeName(value?: ast_parameters_pb.TypeName): Node;
  hasTypeName(): boolean;
  clearTypeName(): Node;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Node;

  getIsStateVariable(): boolean;
  setIsStateVariable(value: boolean): Node;

  getTypeDescriptions(): ast_parameters_pb.TypeDescriptions | undefined;
  setTypeDescriptions(value?: ast_parameters_pb.TypeDescriptions): Node;
  hasTypeDescriptions(): boolean;
  clearTypeDescriptions(): Node;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Node;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): Node;

  getContractDependenciesList(): Array<number>;
  setContractDependenciesList(value: Array<number>): Node;
  clearContractDependenciesList(): Node;
  addContractDependencies(value: number, index?: number): Node;

  getBaseContractsList(): Array<BaseContract>;
  setBaseContractsList(value: Array<BaseContract>): Node;
  clearBaseContractsList(): Node;
  addBaseContracts(value?: BaseContract, index?: number): BaseContract;

  getOverrideSpecifier(): OverrideSpecifier | undefined;
  setOverrideSpecifier(value?: OverrideSpecifier): Node;
  hasOverrideSpecifier(): boolean;
  clearOverrideSpecifier(): Node;

  getCanonicalName(): string;
  setCanonicalName(value: string): Node;

  getMembersList(): Array<ast_parameters_pb.Parameter>;
  setMembersList(value: Array<ast_parameters_pb.Parameter>): Node;
  clearMembersList(): Node;
  addMembers(value?: ast_parameters_pb.Parameter, index?: number): ast_parameters_pb.Parameter;

  getModifiersList(): Array<ast_modifiers_pb.Modifier>;
  setModifiersList(value: Array<ast_modifiers_pb.Modifier>): Node;
  clearModifiersList(): Node;
  addModifiers(value?: ast_modifiers_pb.Modifier, index?: number): ast_modifiers_pb.Modifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Node.AsObject;
  static toObject(includeInstance: boolean, msg: Node): Node.AsObject;
  static serializeBinaryToWriter(message: Node, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Node;
  static deserializeBinaryFromReader(message: Node, reader: jspb.BinaryReader): Node;
}

export namespace Node {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    pb_abstract: boolean,
    kind: ast_types_pb.NodeType,
    fullyImplemented: boolean,
    implemented: boolean,
    linearizedBaseContractsList: Array<number>,
    literalsList: Array<string>,
    nodesList: Array<Node.AsObject>,
    visibility: ast_types_pb.Visibility,
    stateMutability: ast_types_pb.Mutability,
    virtual: boolean,
    parameters?: ast_parameters_pb.ParametersList.AsObject,
    returnParameters?: ast_parameters_pb.ParametersList.AsObject,
    body?: ast_statement_pb.Body.AsObject,
    absolutePath: string,
    file: string,
    scope: number,
    sourceUnit: number,
    symbolAliasesList: Array<string>,
    unitAlias: string,
    libraryName?: LibraryName.AsObject,
    typeName?: ast_parameters_pb.TypeName.AsObject,
    isConstant: boolean,
    isStateVariable: boolean,
    typeDescriptions?: ast_parameters_pb.TypeDescriptions.AsObject,
    storageLocation: ast_types_pb.StorageLocation,
    anonymous: boolean,
    contractDependenciesList: Array<number>,
    baseContractsList: Array<BaseContract.AsObject>,
    overrideSpecifier?: OverrideSpecifier.AsObject,
    canonicalName: string,
    membersList: Array<ast_parameters_pb.Parameter.AsObject>,
    modifiersList: Array<ast_modifiers_pb.Modifier.AsObject>,
  }
}

export class RootNode extends jspb.Message {
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): RootNode;
  clearNodesList(): RootNode;
  addNodes(value?: Node, index?: number): Node;

  getNodesNewList(): Array<google_protobuf_any_pb.Any>;
  setNodesNewList(value: Array<google_protobuf_any_pb.Any>): RootNode;
  clearNodesNewList(): RootNode;
  addNodesNew(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootNode.AsObject;
  static toObject(includeInstance: boolean, msg: RootNode): RootNode.AsObject;
  static serializeBinaryToWriter(message: RootNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootNode;
  static deserializeBinaryFromReader(message: RootNode, reader: jspb.BinaryReader): RootNode;
}

export namespace RootNode {
  export type AsObject = {
    nodesList: Array<Node.AsObject>,
    nodesNewList: Array<google_protobuf_any_pb.Any.AsObject>,
  }
}

