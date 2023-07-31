import * as jspb from 'google-protobuf'

import * as common_status_pb from '../common/status_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class BytecodeMetadata extends jspb.Message {
  getExecutionBytecode(): Uint8Array | string;
  getExecutionBytecode_asU8(): Uint8Array;
  getExecutionBytecode_asB64(): string;
  setExecutionBytecode(value: Uint8Array | string): BytecodeMetadata;

  getCborLength(): number;
  setCborLength(value: number): BytecodeMetadata;

  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): BytecodeMetadata;

  getIpfs(): string;
  setIpfs(value: string): BytecodeMetadata;

  getBzzr1(): string;
  setBzzr1(value: string): BytecodeMetadata;

  getBzzr0(): string;
  setBzzr0(value: string): BytecodeMetadata;

  getExperimental(): boolean;
  setExperimental(value: boolean): BytecodeMetadata;

  getSolc(): string;
  setSolc(value: string): BytecodeMetadata;

  getSolgo(): string;
  setSolgo(value: string): BytecodeMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytecodeMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BytecodeMetadata): BytecodeMetadata.AsObject;
  static serializeBinaryToWriter(message: BytecodeMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytecodeMetadata;
  static deserializeBinaryFromReader(message: BytecodeMetadata, reader: jspb.BinaryReader): BytecodeMetadata;
}

export namespace BytecodeMetadata {
  export type AsObject = {
    executionBytecode: Uint8Array | string,
    cborLength: number,
    raw: Uint8Array | string,
    ipfs: string,
    bzzr1: string,
    bzzr0: string,
    experimental: boolean,
    solc: string,
    solgo: string,
  }
}

export class MetadataRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): MetadataRequest;

  getAddress(): string;
  setAddress(value: string): MetadataRequest;

  getBytecode(): string;
  setBytecode(value: string): MetadataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataRequest): MetadataRequest.AsObject;
  static serializeBinaryToWriter(message: MetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataRequest;
  static deserializeBinaryFromReader(message: MetadataRequest, reader: jspb.BinaryReader): MetadataRequest;
}

export namespace MetadataRequest {
  export type AsObject = {
    chainId: number,
    address: string,
    bytecode: string,
  }
}

export class Metadata extends jspb.Message {
  getRaw(): string;
  setRaw(value: string): Metadata;

  getVersion(): number;
  setVersion(value: number): Metadata;

  getCompiler(): Metadata.Compiler | undefined;
  setCompiler(value?: Metadata.Compiler): Metadata;
  hasCompiler(): boolean;
  clearCompiler(): Metadata;

  getLanguage(): string;
  setLanguage(value: string): Metadata;

  getSettings(): Metadata.Settings | undefined;
  setSettings(value?: Metadata.Settings): Metadata;
  hasSettings(): boolean;
  clearSettings(): Metadata;

  getOutput(): Metadata.Output | undefined;
  setOutput(value?: Metadata.Output): Metadata;
  hasOutput(): boolean;
  clearOutput(): Metadata;

  getSourcesMap(): jspb.Map<string, Metadata.Source>;
  clearSourcesMap(): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    raw: string,
    version: number,
    compiler?: Metadata.Compiler.AsObject,
    language: string,
    settings?: Metadata.Settings.AsObject,
    output?: Metadata.Output.AsObject,
    sourcesMap: Array<[string, Metadata.Source.AsObject]>,
  }

  export class Compiler extends jspb.Message {
    getVersion(): string;
    setVersion(value: string): Compiler;

    getKeccak256(): string;
    setKeccak256(value: string): Compiler;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Compiler.AsObject;
    static toObject(includeInstance: boolean, msg: Compiler): Compiler.AsObject;
    static serializeBinaryToWriter(message: Compiler, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Compiler;
    static deserializeBinaryFromReader(message: Compiler, reader: jspb.BinaryReader): Compiler;
  }

  export namespace Compiler {
    export type AsObject = {
      version: string,
      keccak256: string,
    }
  }


  export class Settings extends jspb.Message {
    getEvmVersion(): string;
    setEvmVersion(value: string): Settings;

    getCompilationTargetMap(): jspb.Map<string, string>;
    clearCompilationTargetMap(): Settings;

    getLibrariesMap(): jspb.Map<string, string>;
    clearLibrariesMap(): Settings;

    getRemappingsList(): Array<string>;
    setRemappingsList(value: Array<string>): Settings;
    clearRemappingsList(): Settings;
    addRemappings(value: string, index?: number): Settings;

    getMetadata(): Metadata.Settings.MetadataSettings | undefined;
    setMetadata(value?: Metadata.Settings.MetadataSettings): Settings;
    hasMetadata(): boolean;
    clearMetadata(): Settings;

    getOptimizer(): Metadata.Settings.Optimizer | undefined;
    setOptimizer(value?: Metadata.Settings.Optimizer): Settings;
    hasOptimizer(): boolean;
    clearOptimizer(): Settings;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Settings.AsObject;
    static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
    static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Settings;
    static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
  }

  export namespace Settings {
    export type AsObject = {
      evmVersion: string,
      compilationTargetMap: Array<[string, string]>,
      librariesMap: Array<[string, string]>,
      remappingsList: Array<string>,
      metadata?: Metadata.Settings.MetadataSettings.AsObject,
      optimizer?: Metadata.Settings.Optimizer.AsObject,
    }

    export class MetadataSettings extends jspb.Message {
      getBytecodeHash(): string;
      setBytecodeHash(value: string): MetadataSettings;

      getUseLiteralContent(): boolean;
      setUseLiteralContent(value: boolean): MetadataSettings;

      getAppendCbor(): boolean;
      setAppendCbor(value: boolean): MetadataSettings;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MetadataSettings.AsObject;
      static toObject(includeInstance: boolean, msg: MetadataSettings): MetadataSettings.AsObject;
      static serializeBinaryToWriter(message: MetadataSettings, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MetadataSettings;
      static deserializeBinaryFromReader(message: MetadataSettings, reader: jspb.BinaryReader): MetadataSettings;
    }

    export namespace MetadataSettings {
      export type AsObject = {
        bytecodeHash: string,
        useLiteralContent: boolean,
        appendCbor: boolean,
      }
    }


    export class Optimizer extends jspb.Message {
      getEnabled(): boolean;
      setEnabled(value: boolean): Optimizer;

      getRuns(): number;
      setRuns(value: number): Optimizer;

      getDetails(): Metadata.Settings.Optimizer.Details | undefined;
      setDetails(value?: Metadata.Settings.Optimizer.Details): Optimizer;
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
        details?: Metadata.Settings.Optimizer.Details.AsObject,
      }

      export class Details extends jspb.Message {
        getPeephole(): boolean;
        setPeephole(value: boolean): Details;

        getInliner(): boolean;
        setInliner(value: boolean): Details;

        getJumpdestRemover(): boolean;
        setJumpdestRemover(value: boolean): Details;

        getOrderLiterals(): boolean;
        setOrderLiterals(value: boolean): Details;

        getDeduplicate(): boolean;
        setDeduplicate(value: boolean): Details;

        getCse(): boolean;
        setCse(value: boolean): Details;

        getConstantOptimizer(): boolean;
        setConstantOptimizer(value: boolean): Details;

        getYul(): boolean;
        setYul(value: boolean): Details;

        getYulDetails(): Metadata.Settings.Optimizer.Details.YulDetails | undefined;
        setYulDetails(value?: Metadata.Settings.Optimizer.Details.YulDetails): Details;
        hasYulDetails(): boolean;
        clearYulDetails(): Details;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Details.AsObject;
        static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
        static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Details;
        static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
      }

      export namespace Details {
        export type AsObject = {
          peephole: boolean,
          inliner: boolean,
          jumpdestRemover: boolean,
          orderLiterals: boolean,
          deduplicate: boolean,
          cse: boolean,
          constantOptimizer: boolean,
          yul: boolean,
          yulDetails?: Metadata.Settings.Optimizer.Details.YulDetails.AsObject,
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

      }

    }

  }


  export class Output extends jspb.Message {
    getAbi(): google_protobuf_any_pb.Any | undefined;
    setAbi(value?: google_protobuf_any_pb.Any): Output;
    hasAbi(): boolean;
    clearAbi(): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      abi?: google_protobuf_any_pb.Any.AsObject,
    }
  }


  export class Source extends jspb.Message {
    getContent(): string;
    setContent(value: string): Source;

    getKeccak256(): string;
    setKeccak256(value: string): Source;

    getLicense(): string;
    setLicense(value: string): Source;

    getUrlsList(): Array<string>;
    setUrlsList(value: Array<string>): Source;
    clearUrlsList(): Source;
    addUrls(value: string, index?: number): Source;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
  }

  export namespace Source {
    export type AsObject = {
      content: string,
      keccak256: string,
      license: string,
      urlsList: Array<string>,
    }
  }

}

export class MetadataResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): MetadataResponse;
  hasStatus(): boolean;
  clearStatus(): MetadataResponse;

  getChainId(): number;
  setChainId(value: number): MetadataResponse;

  getAddress(): string;
  setAddress(value: string): MetadataResponse;

  getBytecode(): string;
  setBytecode(value: string): MetadataResponse;

  getBytecodeMetadata(): BytecodeMetadata | undefined;
  setBytecodeMetadata(value?: BytecodeMetadata): MetadataResponse;
  hasBytecodeMetadata(): boolean;
  clearBytecodeMetadata(): MetadataResponse;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): MetadataResponse;
  hasMetadata(): boolean;
  clearMetadata(): MetadataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataResponse): MetadataResponse.AsObject;
  static serializeBinaryToWriter(message: MetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataResponse;
  static deserializeBinaryFromReader(message: MetadataResponse, reader: jspb.BinaryReader): MetadataResponse;
}

export namespace MetadataResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    chainId: number,
    address: string,
    bytecode: string,
    bytecodeMetadata?: BytecodeMetadata.AsObject,
    metadata?: Metadata.AsObject,
  }
}

