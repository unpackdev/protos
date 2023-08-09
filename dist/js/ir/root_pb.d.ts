import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_eip_pb from '../ir/eip_pb';
import * as ir_contract_pb from '../ir/contract_pb';


export class Root extends jspb.Message {
  getId(): number;
  setId(value: number): Root;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Root;

  getEntryContractId(): number;
  setEntryContractId(value: number): Root;

  getEntryContractName(): string;
  setEntryContractName(value: string): Root;

  getContractTypesList(): Array<string>;
  setContractTypesList(value: Array<string>): Root;
  clearContractTypesList(): Root;
  addContractTypes(value: string, index?: number): Root;

  getContractsCount(): number;
  setContractsCount(value: number): Root;

  getEipsList(): Array<ir_eip_pb.EIP>;
  setEipsList(value: Array<ir_eip_pb.EIP>): Root;
  clearEipsList(): Root;
  addEips(value?: ir_eip_pb.EIP, index?: number): ir_eip_pb.EIP;

  getContractsList(): Array<ir_contract_pb.Contract>;
  setContractsList(value: Array<ir_contract_pb.Contract>): Root;
  clearContractsList(): Root;
  addContracts(value?: ir_contract_pb.Contract, index?: number): ir_contract_pb.Contract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    entryContractId: number,
    entryContractName: string,
    contractTypesList: Array<string>,
    contractsCount: number,
    eipsList: Array<ir_eip_pb.EIP.AsObject>,
    contractsList: Array<ir_contract_pb.Contract.AsObject>,
  }
}

