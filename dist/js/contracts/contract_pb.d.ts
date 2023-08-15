import * as jspb from 'google-protobuf'

import * as ir_eip_pb from '../ir/eip_pb';
import * as contracts_vulnerability_pb from '../contracts/vulnerability_pb';
import * as contracts_constructor_pb from '../contracts/constructor_pb';


export class Contract extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Contract;

  getNetworkId(): number;
  setNetworkId(value: number): Contract;

  getName(): string;
  setName(value: string): Contract;

  getAddress(): string;
  setAddress(value: string): Contract;

  getLicense(): string;
  setLicense(value: string): Contract;

  getLanguage(): string;
  setLanguage(value: string): Contract;

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

  getCompilerVersion(): string;
  setCompilerVersion(value: string): Contract;

  getOptimized(): boolean;
  setOptimized(value: boolean): Contract;

  getOptimizationRuns(): number;
  setOptimizationRuns(value: number): Contract;

  getPossibleContractTypesList(): Array<string>;
  setPossibleContractTypesList(value: Array<string>): Contract;
  clearPossibleContractTypesList(): Contract;
  addPossibleContractTypes(value: string, index?: number): Contract;

  getContractsCount(): number;
  setContractsCount(value: number): Contract;

  getEipsList(): Array<ir_eip_pb.EIP>;
  setEipsList(value: Array<ir_eip_pb.EIP>): Contract;
  clearEipsList(): Contract;
  addEips(value?: ir_eip_pb.EIP, index?: number): ir_eip_pb.EIP;

  getMetadataUrlsList(): Array<string>;
  setMetadataUrlsList(value: Array<string>): Contract;
  clearMetadataUrlsList(): Contract;
  addMetadataUrls(value: string, index?: number): Contract;

  getImplementsList(): Array<contracts_vulnerability_pb.Implements>;
  setImplementsList(value: Array<contracts_vulnerability_pb.Implements>): Contract;
  clearImplementsList(): Contract;
  addImplements(value?: contracts_vulnerability_pb.Implements, index?: number): contracts_vulnerability_pb.Implements;

  getConstructor(): contracts_constructor_pb.Constructor | undefined;
  setConstructor(value?: contracts_constructor_pb.Constructor): Contract;
  hasConstructor(): boolean;
  clearConstructor(): Contract;

  getHasVulnerabilities(): boolean;
  setHasVulnerabilities(value: boolean): Contract;

  getVulnerabilityMetricsList(): Array<contracts_vulnerability_pb.VulnerabilityMetric>;
  setVulnerabilityMetricsList(value: Array<contracts_vulnerability_pb.VulnerabilityMetric>): Contract;
  clearVulnerabilityMetricsList(): Contract;
  addVulnerabilityMetrics(value?: contracts_vulnerability_pb.VulnerabilityMetric, index?: number): contracts_vulnerability_pb.VulnerabilityMetric;

  getVulnerabilitiesList(): Array<contracts_vulnerability_pb.Vulnerability>;
  setVulnerabilitiesList(value: Array<contracts_vulnerability_pb.Vulnerability>): Contract;
  clearVulnerabilitiesList(): Contract;
  addVulnerabilities(value?: contracts_vulnerability_pb.Vulnerability, index?: number): contracts_vulnerability_pb.Vulnerability;

  getAbi(): string;
  setAbi(value: string): Contract;

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
    networkId: number,
    name: string,
    address: string,
    license: string,
    language: string,
    executionBytecode: string,
    deployedBytecode: string,
    blockNumber: number,
    blockHash: string,
    transactionHash: string,
    verified: boolean,
    compilerVersion: string,
    optimized: boolean,
    optimizationRuns: number,
    possibleContractTypesList: Array<string>,
    contractsCount: number,
    eipsList: Array<ir_eip_pb.EIP.AsObject>,
    metadataUrlsList: Array<string>,
    implementsList: Array<contracts_vulnerability_pb.Implements.AsObject>,
    constructor?: contracts_constructor_pb.Constructor.AsObject,
    hasVulnerabilities: boolean,
    vulnerabilityMetricsList: Array<contracts_vulnerability_pb.VulnerabilityMetric.AsObject>,
    vulnerabilitiesList: Array<contracts_vulnerability_pb.Vulnerability.AsObject>,
    abi: string,
  }
}

