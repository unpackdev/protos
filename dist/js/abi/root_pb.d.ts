import * as jspb from 'google-protobuf'

import * as abi_contract_pb from '../abi/contract_pb';


export class Root extends jspb.Message {
  getEntrycontractid(): number;
  setEntrycontractid(value: number): Root;

  getEntrycontractname(): string;
  setEntrycontractname(value: string): Root;

  getContractscount(): number;
  setContractscount(value: number): Root;

  getContractsMap(): jspb.Map<string, abi_contract_pb.Contract>;
  clearContractsMap(): Root;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    entrycontractid: number,
    entrycontractname: string,
    contractscount: number,
    contractsMap: Array<[string, abi_contract_pb.Contract.AsObject]>,
  }
}

