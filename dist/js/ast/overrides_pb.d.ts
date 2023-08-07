import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ast_type_name_pb from '../ast/type_name_pb';
import * as ast_src_pb from '../ast/src_pb';
import * as ast_parameters_pb from '../ast/parameters_pb';


export class OverrideSpecifier extends jspb.Message {
  getId(): number;
  setId(value: number): OverrideSpecifier;

  getName(): string;
  setName(value: string): OverrideSpecifier;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): OverrideSpecifier;

  getOverrides(): ast_parameters_pb.ParameterList | undefined;
  setOverrides(value?: ast_parameters_pb.ParameterList): OverrideSpecifier;
  hasOverrides(): boolean;
  clearOverrides(): OverrideSpecifier;

  getSrc(): ast_src_pb.Src | undefined;
  setSrc(value?: ast_src_pb.Src): OverrideSpecifier;
  hasSrc(): boolean;
  clearSrc(): OverrideSpecifier;

  getReferencedDeclaration(): number;
  setReferencedDeclaration(value: number): OverrideSpecifier;

  getTypeDescription(): ast_type_name_pb.TypeDescription | undefined;
  setTypeDescription(value?: ast_type_name_pb.TypeDescription): OverrideSpecifier;
  hasTypeDescription(): boolean;
  clearTypeDescription(): OverrideSpecifier;

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
    name: string,
    nodeType: ast_types_pb.NodeType,
    overrides?: ast_parameters_pb.ParameterList.AsObject,
    src?: ast_src_pb.Src.AsObject,
    referencedDeclaration: number,
    typeDescription?: ast_type_name_pb.TypeDescription.AsObject,
  }
}

