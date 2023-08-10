import * as jspb from 'google-protobuf'

import * as opcode_instruction_pb from '../opcode/instruction_pb';


export class Root extends jspb.Message {
  getInstructionsList(): Array<opcode_instruction_pb.Instruction>;
  setInstructionsList(value: Array<opcode_instruction_pb.Instruction>): Root;
  clearInstructionsList(): Root;
  addInstructions(value?: opcode_instruction_pb.Instruction, index?: number): opcode_instruction_pb.Instruction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    instructionsList: Array<opcode_instruction_pb.Instruction.AsObject>,
  }
}

