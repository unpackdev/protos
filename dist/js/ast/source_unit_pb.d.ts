import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_node_pb from '../ast/node_pb';
import * as ast_comment_pb from '../ast/comment_pb';
import * as xds_type_v3_typed_struct_pb from '../xds/type/v3/typed_struct_pb';


export class RootSourceUnit extends jspb.Message {
  getId(): number;
  setId(value: number): RootSourceUnit;

  getEntrySourceUnit(): number;
  setEntrySourceUnit(value: number): RootSourceUnit;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): RootSourceUnit;

  getGlobalNodesList(): Array<xds_type_v3_typed_struct_pb.TypedStruct>;
  setGlobalNodesList(value: Array<xds_type_v3_typed_struct_pb.TypedStruct>): RootSourceUnit;
  clearGlobalNodesList(): RootSourceUnit;
  addGlobalNodes(value?: xds_type_v3_typed_struct_pb.TypedStruct, index?: number): xds_type_v3_typed_struct_pb.TypedStruct;

  getSourceUnitsList(): Array<SourceUnit>;
  setSourceUnitsList(value: Array<SourceUnit>): RootSourceUnit;
  clearSourceUnitsList(): RootSourceUnit;
  addSourceUnits(value?: SourceUnit, index?: number): SourceUnit;

  getCommentsList(): Array<ast_comment_pb.Comment>;
  setCommentsList(value: Array<ast_comment_pb.Comment>): RootSourceUnit;
  clearCommentsList(): RootSourceUnit;
  addComments(value?: ast_comment_pb.Comment, index?: number): ast_comment_pb.Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RootSourceUnit.AsObject;
  static toObject(includeInstance: boolean, msg: RootSourceUnit): RootSourceUnit.AsObject;
  static serializeBinaryToWriter(message: RootSourceUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RootSourceUnit;
  static deserializeBinaryFromReader(message: RootSourceUnit, reader: jspb.BinaryReader): RootSourceUnit;
}

export namespace RootSourceUnit {
  export type AsObject = {
    id: number,
    entrySourceUnit: number,
    nodeType: ast_types_pb.NodeType,
    globalNodesList: Array<xds_type_v3_typed_struct_pb.TypedStruct.AsObject>,
    sourceUnitsList: Array<SourceUnit.AsObject>,
    commentsList: Array<ast_comment_pb.Comment.AsObject>,
  }
}

export class SourceUnit extends jspb.Message {
  getId(): number;
  setId(value: number): SourceUnit;

  getLicense(): string;
  setLicense(value: string): SourceUnit;

  getName(): string;
  setName(value: string): SourceUnit;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): SourceUnit;

  getExportedSymbolsList(): Array<ExportedSymbol>;
  setExportedSymbolsList(value: Array<ExportedSymbol>): SourceUnit;
  clearExportedSymbolsList(): SourceUnit;
  addExportedSymbols(value?: ExportedSymbol, index?: number): ExportedSymbol;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): SourceUnit;

  getRoot(): ast_node_pb.RootNode | undefined;
  setRoot(value?: ast_node_pb.RootNode): SourceUnit;
  hasRoot(): boolean;
  clearRoot(): SourceUnit;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): SourceUnit;
  hasSrc(): boolean;
  clearSrc(): SourceUnit;

  getCommentsList(): Array<ast_comment_pb.Comment>;
  setCommentsList(value: Array<ast_comment_pb.Comment>): SourceUnit;
  clearCommentsList(): SourceUnit;
  addComments(value?: ast_comment_pb.Comment, index?: number): ast_comment_pb.Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceUnit.AsObject;
  static toObject(includeInstance: boolean, msg: SourceUnit): SourceUnit.AsObject;
  static serializeBinaryToWriter(message: SourceUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceUnit;
  static deserializeBinaryFromReader(message: SourceUnit, reader: jspb.BinaryReader): SourceUnit;
}

export namespace SourceUnit {
  export type AsObject = {
    id: number,
    license: string,
    name: string,
    absolutePath: string,
    exportedSymbolsList: Array<ExportedSymbol.AsObject>,
    nodeType: ast_types_pb.NodeType,
    root?: ast_node_pb.RootNode.AsObject,
    src?: ast_src_pb.Src.AsObject,
    commentsList: Array<ast_comment_pb.Comment.AsObject>,
  }
}

export class ExportedSymbol extends jspb.Message {
  getId(): number;
  setId(value: number): ExportedSymbol;

  getName(): string;
  setName(value: string): ExportedSymbol;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): ExportedSymbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExportedSymbol.AsObject;
  static toObject(includeInstance: boolean, msg: ExportedSymbol): ExportedSymbol.AsObject;
  static serializeBinaryToWriter(message: ExportedSymbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExportedSymbol;
  static deserializeBinaryFromReader(message: ExportedSymbol, reader: jspb.BinaryReader): ExportedSymbol;
}

export namespace ExportedSymbol {
  export type AsObject = {
    id: number,
    name: string,
    absolutePath: string,
  }
}

