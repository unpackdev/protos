import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_modifiers_pb from '../ast/modifiers_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


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

  getParameters(): ast_parameters_pb.ParameterList | undefined;
  setParameters(value?: ast_parameters_pb.ParameterList): Node;
  hasParameters(): boolean;
  clearParameters(): Node;

  getReturnParameters(): ast_parameters_pb.ParameterList | undefined;
  setReturnParameters(value?: ast_parameters_pb.ParameterList): Node;
  hasReturnParameters(): boolean;
  clearReturnParameters(): Node;

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

  getTypeName(): ast_type_name_pb.TypeName | undefined;
  setTypeName(value?: ast_type_name_pb.TypeName): Node;
  hasTypeName(): boolean;
  clearTypeName(): Node;

  getIsConstant(): boolean;
  setIsConstant(value: boolean): Node;

  getIsStateVariable(): boolean;
  setIsStateVariable(value: boolean): Node;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): Node;
  hasTypeDescription(): boolean;
  clearTypeDescription(): Node;

  getStorageLocation(): ast_types_pb.StorageLocation;
  setStorageLocation(value: ast_types_pb.StorageLocation): Node;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): Node;

  getContractDependenciesList(): Array<number>;
  setContractDependenciesList(value: Array<number>): Node;
  clearContractDependenciesList(): Node;
  addContractDependencies(value: number, index?: number): Node;

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
    parameters?: ast_parameters_pb.ParameterList.AsObject,
    returnParameters?: ast_parameters_pb.ParameterList.AsObject,
    absolutePath: string,
    file: string,
    scope: number,
    sourceUnit: number,
    symbolAliasesList: Array<string>,
    unitAlias: string,
    typeName?: ast_type_name_pb.TypeName.AsObject,
    isConstant: boolean,
    isStateVariable: boolean,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
    storageLocation: ast_types_pb.StorageLocation,
    anonymous: boolean,
    contractDependenciesList: Array<number>,
    canonicalName: string,
    membersList: Array<ast_parameters_pb.Parameter.AsObject>,
    modifiersList: Array<ast_modifiers_pb.Modifier.AsObject>,
  }
}

export class RootNode extends jspb.Message {
  getNodesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setNodesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): RootNode;
  clearNodesList(): RootNode;
  addNodes(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootNode.AsObject;
  static toObject(includeInstance: boolean, msg: RootNode): RootNode.AsObject;
  static serializeBinaryToWriter(message: RootNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootNode;
  static deserializeBinaryFromReader(message: RootNode, reader: jspb.BinaryReader): RootNode;
}

export namespace RootNode {
  export type AsObject = {
    nodesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

