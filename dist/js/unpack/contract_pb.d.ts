import * as jspb from 'google-protobuf'

import * as unpack_types_pb from '../unpack/types_pb';


export class Metadata extends jspb.Message {
  getLicense(): string;
  setLicense(value: string): Metadata;

  getCompilerVersionRaw(): string;
  setCompilerVersionRaw(value: string): Metadata;

  getCompilerVersion(): string;
  setCompilerVersion(value: string): Metadata;

  getEvmVersion(): string;
  setEvmVersion(value: string): Metadata;

  getLanguage(): ContractLanguage;
  setLanguage(value: ContractLanguage): Metadata;

  getType(): ContractType;
  setType(value: ContractType): Metadata;

  getCborEncoded(): boolean;
  setCborEncoded(value: boolean): Metadata;

  getCborRawMetadata(): Uint8Array | string;
  getCborRawMetadata_asU8(): Uint8Array;
  getCborRawMetadata_asB64(): string;
  setCborRawMetadata(value: Uint8Array | string): Metadata;

  getCborLength(): number;
  setCborLength(value: number): Metadata;

  getIpfs(): string;
  setIpfs(value: string): Metadata;

  getBzzr0(): string;
  setBzzr0(value: string): Metadata;

  getBzzr1(): string;
  setBzzr1(value: string): Metadata;

  getRemappingsList(): Array<string>;
  setRemappingsList(value: Array<string>): Metadata;
  clearRemappingsList(): Metadata;
  addRemappings(value: string, index?: number): Metadata;

  getIsProxy(): boolean;
  setIsProxy(value: boolean): Metadata;

  getProxyConfidence(): number;
  setProxyConfidence(value: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    license: string,
    compilerVersionRaw: string,
    compilerVersion: string,
    evmVersion: string,
    language: ContractLanguage,
    type: ContractType,
    cborEncoded: boolean,
    cborRawMetadata: Uint8Array | string,
    cborLength: number,
    ipfs: string,
    bzzr0: string,
    bzzr1: string,
    remappingsList: Array<string>,
    isProxy: boolean,
    proxyConfidence: number,
  }
}

export class YulDetails extends jspb.Message {
  getStackAllocation(): boolean;
  setStackAllocation(value: boolean): YulDetails;

  getOptimizerSteps(): number;
  setOptimizerSteps(value: number): YulDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YulDetails.AsObject;
  static toObject(includeInstance: boolean, msg: YulDetails): YulDetails.AsObject;
  static serializeBinaryToWriter(message: YulDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YulDetails;
  static deserializeBinaryFromReader(message: YulDetails, reader: jspb.BinaryReader): YulDetails;
}

export namespace YulDetails {
  export type AsObject = {
    stackAllocation: boolean,
    optimizerSteps: number,
  }
}

export class OptimizerDetails extends jspb.Message {
  getPeephole(): boolean;
  setPeephole(value: boolean): OptimizerDetails;

  getInliner(): boolean;
  setInliner(value: boolean): OptimizerDetails;

  getJumpdestRemover(): boolean;
  setJumpdestRemover(value: boolean): OptimizerDetails;

  getOrderLiterals(): boolean;
  setOrderLiterals(value: boolean): OptimizerDetails;

  getDeduplicate(): boolean;
  setDeduplicate(value: boolean): OptimizerDetails;

  getCse(): boolean;
  setCse(value: boolean): OptimizerDetails;

  getConstantOptimizer(): boolean;
  setConstantOptimizer(value: boolean): OptimizerDetails;

  getYul(): boolean;
  setYul(value: boolean): OptimizerDetails;

  getYulDetails(): YulDetails | undefined;
  setYulDetails(value?: YulDetails): OptimizerDetails;
  hasYulDetails(): boolean;
  clearYulDetails(): OptimizerDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptimizerDetails.AsObject;
  static toObject(includeInstance: boolean, msg: OptimizerDetails): OptimizerDetails.AsObject;
  static serializeBinaryToWriter(message: OptimizerDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptimizerDetails;
  static deserializeBinaryFromReader(message: OptimizerDetails, reader: jspb.BinaryReader): OptimizerDetails;
}

export namespace OptimizerDetails {
  export type AsObject = {
    peephole: boolean,
    inliner: boolean,
    jumpdestRemover: boolean,
    orderLiterals: boolean,
    deduplicate: boolean,
    cse: boolean,
    constantOptimizer: boolean,
    yul: boolean,
    yulDetails?: YulDetails.AsObject,
  }
}

export class Optimizer extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): Optimizer;

  getRuns(): number;
  setRuns(value: number): Optimizer;

  getDetails(): OptimizerDetails | undefined;
  setDetails(value?: OptimizerDetails): Optimizer;
  hasDetails(): boolean;
  clearDetails(): Optimizer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Optimizer.AsObject;
  static toObject(includeInstance: boolean, msg: Optimizer): Optimizer.AsObject;
  static serializeBinaryToWriter(message: Optimizer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Optimizer;
  static deserializeBinaryFromReader(message: Optimizer, reader: jspb.BinaryReader): Optimizer;
}

export namespace Optimizer {
  export type AsObject = {
    enabled: boolean,
    runs: number,
    details?: OptimizerDetails.AsObject,
  }
}

export class SourceDetails extends jspb.Message {
  getCommentsList(): Array<string>;
  setCommentsList(value: Array<string>): SourceDetails;
  clearCommentsList(): SourceDetails;
  addComments(value: string, index?: number): SourceDetails;

  getPragmasList(): Array<string>;
  setPragmasList(value: Array<string>): SourceDetails;
  clearPragmasList(): SourceDetails;
  addPragmas(value: string, index?: number): SourceDetails;

  getImportsList(): Array<string>;
  setImportsList(value: Array<string>): SourceDetails;
  clearImportsList(): SourceDetails;
  addImports(value: string, index?: number): SourceDetails;

  getInheritsList(): Array<string>;
  setInheritsList(value: Array<string>): SourceDetails;
  clearInheritsList(): SourceDetails;
  addInherits(value: string, index?: number): SourceDetails;

  getIsInterface(): boolean;
  setIsInterface(value: boolean): SourceDetails;

  getIsLibrary(): boolean;
  setIsLibrary(value: boolean): SourceDetails;

  getIsAbstract(): boolean;
  setIsAbstract(value: boolean): SourceDetails;

  getIsContract(): boolean;
  setIsContract(value: boolean): SourceDetails;

  getSyntaxErrorsList(): Array<SyntaxError>;
  setSyntaxErrorsList(value: Array<SyntaxError>): SourceDetails;
  clearSyntaxErrorsList(): SourceDetails;
  addSyntaxErrors(value?: SyntaxError, index?: number): SyntaxError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceDetails.AsObject;
  static toObject(includeInstance: boolean, msg: SourceDetails): SourceDetails.AsObject;
  static serializeBinaryToWriter(message: SourceDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceDetails;
  static deserializeBinaryFromReader(message: SourceDetails, reader: jspb.BinaryReader): SourceDetails;
}

export namespace SourceDetails {
  export type AsObject = {
    commentsList: Array<string>,
    pragmasList: Array<string>,
    importsList: Array<string>,
    inheritsList: Array<string>,
    isInterface: boolean,
    isLibrary: boolean,
    isAbstract: boolean,
    isContract: boolean,
    syntaxErrorsList: Array<SyntaxError.AsObject>,
  }
}

export class Source extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Source;

  getName(): string;
  setName(value: string): Source;

  getPath(): string;
  setPath(value: string): Source;

  getLicense(): string;
  setLicense(value: string): Source;

  getSource(): string;
  setSource(value: string): Source;

  getEntrypoint(): boolean;
  setEntrypoint(value: boolean): Source;

  getAbi(): string;
  setAbi(value: string): Source;

  getAst(): string;
  setAst(value: string): Source;

  getDetails(): SourceDetails | undefined;
  setDetails(value?: SourceDetails): Source;
  hasDetails(): boolean;
  clearDetails(): Source;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Source.AsObject;
  static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
  static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Source;
  static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
  export type AsObject = {
    uuid: string,
    name: string,
    path: string,
    license: string,
    source: string,
    entrypoint: boolean,
    abi: string,
    ast: string,
    details?: SourceDetails.AsObject,
  }
}

export class Company extends jspb.Message {
  getName(): string;
  setName(value: string): Company;

  getSymbol(): string;
  setSymbol(value: string): Company;

  getCountry(): string;
  setCountry(value: string): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    name: string,
    symbol: string,
    country: string,
  }
}

export class Social extends jspb.Message {
  getTwitter(): string;
  setTwitter(value: string): Social;

  getGithub(): string;
  setGithub(value: string): Social;

  getReddit(): string;
  setReddit(value: string): Social;

  getSlack(): string;
  setSlack(value: string): Social;

  getDiscord(): string;
  setDiscord(value: string): Social;

  getTelegram(): string;
  setTelegram(value: string): Social;

  getWebsite(): string;
  setWebsite(value: string): Social;

  getEmail(): string;
  setEmail(value: string): Social;

  getMedium(): string;
  setMedium(value: string): Social;

  getLinkedin(): string;
  setLinkedin(value: string): Social;

  getFacebook(): string;
  setFacebook(value: string): Social;

  getYoutube(): string;
  setYoutube(value: string): Social;

  getInstagram(): string;
  setInstagram(value: string): Social;

  getWhatsapp(): string;
  setWhatsapp(value: string): Social;

  getViber(): string;
  setViber(value: string): Social;

  getSnapchat(): string;
  setSnapchat(value: string): Social;

  getTiktok(): string;
  setTiktok(value: string): Social;

  getPinterest(): string;
  setPinterest(value: string): Social;

  getTumblr(): string;
  setTumblr(value: string): Social;

  getTwitch(): string;
  setTwitch(value: string): Social;

  getCohost(): string;
  setCohost(value: string): Social;

  getCompaniesList(): Array<Company>;
  setCompaniesList(value: Array<Company>): Social;
  clearCompaniesList(): Social;
  addCompanies(value?: Company, index?: number): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Social.AsObject;
  static toObject(includeInstance: boolean, msg: Social): Social.AsObject;
  static serializeBinaryToWriter(message: Social, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Social;
  static deserializeBinaryFromReader(message: Social, reader: jspb.BinaryReader): Social;
}

export namespace Social {
  export type AsObject = {
    twitter: string,
    github: string,
    reddit: string,
    slack: string,
    discord: string,
    telegram: string,
    website: string,
    email: string,
    medium: string,
    linkedin: string,
    facebook: string,
    youtube: string,
    instagram: string,
    whatsapp: string,
    viber: string,
    snapchat: string,
    tiktok: string,
    pinterest: string,
    tumblr: string,
    twitch: string,
    cohost: string,
    companiesList: Array<Company.AsObject>,
  }
}

export class SyntaxError extends jspb.Message {
  getLine(): number;
  setLine(value: number): SyntaxError;

  getColumn(): number;
  setColumn(value: number): SyntaxError;

  getMessage(): string;
  setMessage(value: string): SyntaxError;

  getSeverity(): string;
  setSeverity(value: string): SyntaxError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SyntaxError.AsObject;
  static toObject(includeInstance: boolean, msg: SyntaxError): SyntaxError.AsObject;
  static serializeBinaryToWriter(message: SyntaxError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SyntaxError;
  static deserializeBinaryFromReader(message: SyntaxError, reader: jspb.BinaryReader): SyntaxError;
}

export namespace SyntaxError {
  export type AsObject = {
    line: number,
    column: number,
    message: string,
    severity: string,
  }
}

export class ConstructorArgument extends jspb.Message {
  getName(): string;
  setName(value: string): ConstructorArgument;

  getType(): string;
  setType(value: string): ConstructorArgument;

  getValue(): string;
  setValue(value: string): ConstructorArgument;

  getIndexed(): boolean;
  setIndexed(value: boolean): ConstructorArgument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstructorArgument.AsObject;
  static toObject(includeInstance: boolean, msg: ConstructorArgument): ConstructorArgument.AsObject;
  static serializeBinaryToWriter(message: ConstructorArgument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstructorArgument;
  static deserializeBinaryFromReader(message: ConstructorArgument, reader: jspb.BinaryReader): ConstructorArgument;
}

export namespace ConstructorArgument {
  export type AsObject = {
    name: string,
    type: string,
    value: string,
    indexed: boolean,
  }
}

export class Constructor extends jspb.Message {
  getAbi(): string;
  setAbi(value: string): Constructor;

  getSignatureRaw(): string;
  setSignatureRaw(value: string): Constructor;

  getArgumentsList(): Array<ConstructorArgument>;
  setArgumentsList(value: Array<ConstructorArgument>): Constructor;
  clearArgumentsList(): Constructor;
  addArguments(value?: ConstructorArgument, index?: number): ConstructorArgument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constructor.AsObject;
  static toObject(includeInstance: boolean, msg: Constructor): Constructor.AsObject;
  static serializeBinaryToWriter(message: Constructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constructor;
  static deserializeBinaryFromReader(message: Constructor, reader: jspb.BinaryReader): Constructor;
}

export namespace Constructor {
  export type AsObject = {
    abi: string,
    signatureRaw: string,
    argumentsList: Array<ConstructorArgument.AsObject>,
  }
}

export class Contract extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Contract;

  getNetworkId(): number;
  setNetworkId(value: number): Contract;

  getAddress(): string;
  setAddress(value: string): Contract;

  getName(): string;
  setName(value: string): Contract;

  getBlockNumber(): number;
  setBlockNumber(value: number): Contract;

  getBlockHash(): string;
  setBlockHash(value: string): Contract;

  getTransactionHash(): string;
  setTransactionHash(value: string): Contract;

  getReceiptStatus(): ReceiptStatus;
  setReceiptStatus(value: ReceiptStatus): Contract;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): Contract;
  hasMetadata(): boolean;
  clearMetadata(): Contract;

  getOptimizer(): Optimizer | undefined;
  setOptimizer(value?: Optimizer): Contract;
  hasOptimizer(): boolean;
  clearOptimizer(): Contract;

  getBytecode(): Uint8Array | string;
  getBytecode_asU8(): Uint8Array;
  getBytecode_asB64(): string;
  setBytecode(value: Uint8Array | string): Contract;

  getBytecodeSize(): number;
  setBytecodeSize(value: number): Contract;

  getCreationBytecode(): Uint8Array | string;
  getCreationBytecode_asU8(): Uint8Array;
  getCreationBytecode_asB64(): string;
  setCreationBytecode(value: Uint8Array | string): Contract;

  getCreationBytecodeSize(): number;
  setCreationBytecodeSize(value: number): Contract;

  getGasUsed(): number;
  setGasUsed(value: number): Contract;

  getEffectiveGasPrice(): number;
  setEffectiveGasPrice(value: number): Contract;

  getVerificationStatus(): VerificationStatus;
  setVerificationStatus(value: VerificationStatus): Contract;

  getAbi(): string;
  setAbi(value: string): Contract;

  getSourceEntryPoint(): string;
  setSourceEntryPoint(value: string): Contract;

  getCompilationTargetsMap(): jspb.Map<string, string>;
  clearCompilationTargetsMap(): Contract;

  getConstructor(): Constructor | undefined;
  setConstructor(value?: Constructor): Contract;
  hasConstructor(): boolean;
  clearConstructor(): Contract;

  getSourcesList(): Array<Source>;
  setSourcesList(value: Array<Source>): Contract;
  clearSourcesList(): Contract;
  addSources(value?: Source, index?: number): Source;

  getSocial(): Social | undefined;
  setSocial(value?: Social): Contract;
  hasSocial(): boolean;
  clearSocial(): Contract;

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
    address: string,
    name: string,
    blockNumber: number,
    blockHash: string,
    transactionHash: string,
    receiptStatus: ReceiptStatus,
    metadata?: Metadata.AsObject,
    optimizer?: Optimizer.AsObject,
    bytecode: Uint8Array | string,
    bytecodeSize: number,
    creationBytecode: Uint8Array | string,
    creationBytecodeSize: number,
    gasUsed: number,
    effectiveGasPrice: number,
    verificationStatus: VerificationStatus,
    abi: string,
    sourceEntryPoint: string,
    compilationTargetsMap: Array<[string, string]>,
    constructor?: Constructor.AsObject,
    sourcesList: Array<Source.AsObject>,
    social?: Social.AsObject,
  }
}

export enum ReceiptStatus { 
  RS_UNKNOWN = 0,
  RS_SUCCESS = 1,
  RS_FAILURE = 2,
}
export enum VerificationStatus { 
  VS_UNKNOWN = 0,
  VS_VERIFIED = 1,
  VS_PARTIAL = 2,
  VS_UNVERIFIED = 3,
}
export enum ContractType { 
  CT_UNKNOWN = 0,
  CT_ERC20 = 1,
  CT_ERC721 = 2,
  CT_ERC1155 = 3,
  CT_BEP20 = 4,
  CT_BEP721 = 5,
  CT_BEP1155 = 6,
}
export enum ContractLanguage { 
  CL_UNKNOWN = 0,
  CL_SOLIDITY = 1,
  CL_VYPER = 2,
  CL_OTHER = 3,
}
