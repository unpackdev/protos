import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';


export class PathNode extends jspb.Message {
  getId(): number;
  setId(value: number): PathNode;

  getName(): string;
  setName(value: string): PathNode;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): PathNode;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): PathNode;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): PathNode;
  hasSrc(): boolean;
  clearSrc(): PathNode;

  getNameLocation(): ast_src_pb.Src | undefined;
  setNameLocation(value?: ast_src_pb.Src): PathNode;
  hasNameLocation(): boolean;
  clearNameLocation(): PathNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathNode.AsObject;
  static toObject(includeInstance: boolean, msg: PathNode): PathNode.AsObject;
  static serializeBinaryToWriter(message: PathNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathNode;
  static deserializeBinaryFromReader(message: PathNode, reader: jspb.BinaryReader): PathNode;
}

export namespace PathNode {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    referencedDeclaration: number,
    src?: ast_src_pb.Src.AsObject,
    nameLocation?: ast_src_pb.Src.AsObject,
  }
}

export class TypeName extends jspb.Message {
  getId(): number;
  setId(value: number): TypeName;

  getName(): string;
  setName(value: string): TypeName;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): TypeName;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): TypeName;
  hasSrc(): boolean;
  clearSrc(): TypeName;

  getTypeDescription(): TypeDescription | undefined;
  setTypeDescription(value?: TypeDescription): TypeName;
  hasTypeDescription(): boolean;
  clearTypeDescription(): TypeName;

  getKeyType(): TypeName | undefined;
  setKeyType(value?: TypeName): TypeName;
  hasKeyType(): boolean;
  clearKeyType(): TypeName;

  getKeyTypeLocation(): ast_src_pb.Src | undefined;
  setKeyTypeLocation(value?: ast_src_pb.Src): TypeName;
  hasKeyTypeLocation(): boolean;
  clearKeyTypeLocation(): TypeName;

  getValueType(): TypeName | undefined;
  setValueType(value?: TypeName): TypeName;
  hasValueType(): boolean;
  clearValueType(): TypeName;

  getValueTypeLocation(): ast_src_pb.Src | undefined;
  setValueTypeLocation(value?: ast_src_pb.Src): TypeName;
  hasValueTypeLocation(): boolean;
  clearValueTypeLocation(): TypeName;

  getPathNode(): PathNode | undefined;
  setPathNode(value?: PathNode): TypeName;
  hasPathNode(): boolean;
  clearPathNode(): TypeName;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): TypeName;

  getStateMutability(): ast_types_pb.Mutability;
  setStateMutability(value: ast_types_pb.Mutability): TypeName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeName.AsObject;
  static toObject(includeInstance: boolean, msg: TypeName): TypeName.AsObject;
  static serializeBinaryToWriter(message: TypeName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeName;
  static deserializeBinaryFromReader(message: TypeName, reader: jspb.BinaryReader): TypeName;
}

export namespace TypeName {
  export type AsObject = {
    id: number,
    name: string,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    typeDescription?: TypeDescription.AsObject,
    keyType?: TypeName.AsObject,
    keyTypeLocation?: ast_src_pb.Src.AsObject,
    valueType?: TypeName.AsObject,
    valueTypeLocation?: ast_src_pb.Src.AsObject,
    pathNode?: PathNode.AsObject,
    referencedDeclaration: number,
    stateMutability: ast_types_pb.Mutability,
  }
}

export class TypeDescription extends jspb.Message {
  getTypeIdentifier(): string;
  setTypeIdentifier(value: string): TypeDescription;

  getTypeString(): string;
  setTypeString(value: string): TypeDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDescription.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDescription): TypeDescription.AsObject;
  static serializeBinaryToWriter(message: TypeDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDescription;
  static deserializeBinaryFromReader(message: TypeDescription, reader: jspb.BinaryReader): TypeDescription;
}

export namespace TypeDescription {
  export type AsObject = {
    typeIdentifier: string,
    typeString: string,
  }
}

