import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';
import * as ast_body_pb from '../ast/body_pb';


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

  getVisibility(): string;
  setVisibility(value: string): Node;

  getStateMutability(): string;
  setStateMutability(value: string): Node;

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

  getBody(): ast_body_pb.Body | undefined;
  setBody(value?: ast_body_pb.Body): Node;
  hasBody(): boolean;
  clearBody(): Node;

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
    visibility: string,
    stateMutability: string,
    virtual: boolean,
    parameters?: ast_parameters_pb.ParametersList.AsObject,
    returnParameters?: ast_parameters_pb.ParametersList.AsObject,
    body?: ast_body_pb.Body.AsObject,
  }
}

export class RootNode extends jspb.Message {
  getNodesList(): Array<Node>;
  setNodesList(value: Array<Node>): RootNode;
  clearNodesList(): RootNode;
  addNodes(value?: Node, index?: number): Node;

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
  }
}

