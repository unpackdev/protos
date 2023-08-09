import * as jspb from 'google-protobuf'

import * as eip_discovery_pb from '../eip/discovery_pb';
import * as eip_eip_pb from '../eip/eip_pb';


export class EIP extends jspb.Message {
  getContractId(): number;
  setContractId(value: number): EIP;

  getContractName(): string;
  setContractName(value: string): EIP;

  getConfidence(): eip_discovery_pb.Discovery | undefined;
  setConfidence(value?: eip_discovery_pb.Discovery): EIP;
  hasConfidence(): boolean;
  clearConfidence(): EIP;

  getStandard(): eip_eip_pb.ContractStandard | undefined;
  setStandard(value?: eip_eip_pb.ContractStandard): EIP;
  hasStandard(): boolean;
  clearStandard(): EIP;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EIP.AsObject;
  static toObject(includeInstance: boolean, msg: EIP): EIP.AsObject;
  static serializeBinaryToWriter(message: EIP, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EIP;
  static deserializeBinaryFromReader(message: EIP, reader: jspb.BinaryReader): EIP;
}

export namespace EIP {
  export type AsObject = {
    contractId: number,
    contractName: string,
    confidence?: eip_discovery_pb.Discovery.AsObject,
    standard?: eip_eip_pb.ContractStandard.AsObject,
  }
}

