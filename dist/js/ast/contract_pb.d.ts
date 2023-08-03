import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


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

export class Contract extends jspb.Message {
  getId(): number;
  setId(value: number): Contract;

  getName(): string;
  setName(value: string): Contract;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Contract;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Contract;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Contract;
  hasSrc(): boolean;
  clearSrc(): Contract;

  getAbstract(): boolean;
  setAbstract(value: boolean): Contract;

  getFullyImplemented(): boolean;
  setFullyImplemented(value: boolean): Contract;

  getLinearizedBaseContractsList(): Array<number>;
  setLinearizedBaseContractsList(value: Array<number>): Contract;
  clearLinearizedBaseContractsList(): Contract;
  addLinearizedBaseContracts(value: number, index?: number): Contract;

  getBaseContractsList(): Array<BaseContract>;
  setBaseContractsList(value: Array<BaseContract>): Contract;
  clearBaseContractsList(): Contract;
  addBaseContracts(value?: BaseContract, index?: number): BaseContract;

  getContractDependenciesList(): Array<number>;
  setContractDependenciesList(value: Array<number>): Contract;
  clearContractDependenciesList(): Contract;
  addContractDependencies(value: number, index?: number): Contract;

  getNodesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setNodesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): Contract;
  clearNodesList(): Contract;
  addNodes(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    pb_abstract: boolean,
    fullyImplemented: boolean,
    linearizedBaseContractsList: Array<number>,
    baseContractsList: Array<BaseContract.AsObject>,
    contractDependenciesList: Array<number>,
    nodesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
  }
}

