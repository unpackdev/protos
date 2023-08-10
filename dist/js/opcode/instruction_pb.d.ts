import * as jspb from 'google-protobuf'

import * as opcode_codes_pb from '../opcode/codes_pb';


export class Instruction extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): Instruction;

  getOpCode(): opcode_codes_pb.OpCode;
  setOpCode(value: opcode_codes_pb.OpCode): Instruction;

  getArgs(): Uint8Array | string;
  getArgs_asU8(): Uint8Array;
  getArgs_asB64(): string;
  setArgs(value: Uint8Array | string): Instruction;

  getDescription(): string;
  setDescription(value: string): Instruction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instruction.AsObject;
  static toObject(includeInstance: boolean, msg: Instruction): Instruction.AsObject;
  static serializeBinaryToWriter(message: Instruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instruction;
  static deserializeBinaryFromReader(message: Instruction, reader: jspb.BinaryReader): Instruction;
}

export namespace Instruction {
  export type AsObject = {
    offset: number,
    opCode: opcode_codes_pb.OpCode,
    args: Uint8Array | string,
    description: string,
  }
}

