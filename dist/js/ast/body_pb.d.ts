import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_statement_pb from '../ast/statement_pb';


export class Body extends jspb.Message {
  getId(): number;
  setId(value: number): Body;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Body;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): Body;
  hasSrc(): boolean;
  clearSrc(): Body;

  getStatementsList(): Array<ast_statement_pb.Statement>;
  setStatementsList(value: Array<ast_statement_pb.Statement>): Body;
  clearStatementsList(): Body;
  addStatements(value?: ast_statement_pb.Statement, index?: number): ast_statement_pb.Statement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Body.AsObject;
  static toObject(includeInstance: boolean, msg: Body): Body.AsObject;
  static serializeBinaryToWriter(message: Body, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Body;
  static deserializeBinaryFromReader(message: Body, reader: jspb.BinaryReader): Body;
}

export namespace Body {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    src?: ast_src_pb.Src.AsObject,
    statementsList: Array<ast_statement_pb.Statement.AsObject>,
  }
}

