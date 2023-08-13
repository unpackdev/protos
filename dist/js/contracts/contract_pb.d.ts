import * as jspb from 'google-protobuf'



export class Contract extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Contract;

  getName(): string;
  setName(value: string): Contract;

  getAddress(): string;
  setAddress(value: string): Contract;

  getLicense(): string;
  setLicense(value: string): Contract;

  getExecutionBytecode(): string;
  setExecutionBytecode(value: string): Contract;

  getDeployedBytecode(): string;
  setDeployedBytecode(value: string): Contract;

  getBlockNumber(): number;
  setBlockNumber(value: number): Contract;

  getBlockHash(): string;
  setBlockHash(value: string): Contract;

  getTransactionHash(): string;
  setTransactionHash(value: string): Contract;

  getVerified(): boolean;
  setVerified(value: boolean): Contract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    uuid: string,
    name: string,
    address: string,
    license: string,
    executionBytecode: string,
    deployedBytecode: string,
    blockNumber: number,
    blockHash: string,
    transactionHash: string,
    verified: boolean,
  }
}

