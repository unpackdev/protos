import * as jspb from 'google-protobuf'



export class UnpackRequest extends jspb.Message {
  getNetworkId(): number;
  setNetworkId(value: number): UnpackRequest;

  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): UnpackRequest;
  clearAddressesList(): UnpackRequest;
  addAddresses(value: string, index?: number): UnpackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnpackRequest): UnpackRequest.AsObject;
  static serializeBinaryToWriter(message: UnpackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpackRequest;
  static deserializeBinaryFromReader(message: UnpackRequest, reader: jspb.BinaryReader): UnpackRequest;
}

export namespace UnpackRequest {
  export type AsObject = {
    networkId: number,
    addressesList: Array<string>,
  }
}

export class UnpackResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): UnpackResponse;

  getNetworkId(): number;
  setNetworkId(value: number): UnpackResponse;

  getContractsList(): Array<UnpackResponse.ContractQueueResponse>;
  setContractsList(value: Array<UnpackResponse.ContractQueueResponse>): UnpackResponse;
  clearContractsList(): UnpackResponse;
  addContracts(value?: UnpackResponse.ContractQueueResponse, index?: number): UnpackResponse.ContractQueueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnpackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnpackResponse): UnpackResponse.AsObject;
  static serializeBinaryToWriter(message: UnpackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnpackResponse;
  static deserializeBinaryFromReader(message: UnpackResponse, reader: jspb.BinaryReader): UnpackResponse;
}

export namespace UnpackResponse {
  export type AsObject = {
    status: boolean,
    networkId: number,
    contractsList: Array<UnpackResponse.ContractQueueResponse.AsObject>,
  }

  export class ContractQueueResponse extends jspb.Message {
    getStatus(): UnpackResponse.ContractQueueResponse.ContractQueueStatus;
    setStatus(value: UnpackResponse.ContractQueueResponse.ContractQueueStatus): ContractQueueResponse;

    getAddress(): string;
    setAddress(value: string): ContractQueueResponse;

    getError(): string;
    setError(value: string): ContractQueueResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractQueueResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ContractQueueResponse): ContractQueueResponse.AsObject;
    static serializeBinaryToWriter(message: ContractQueueResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractQueueResponse;
    static deserializeBinaryFromReader(message: ContractQueueResponse, reader: jspb.BinaryReader): ContractQueueResponse;
  }

  export namespace ContractQueueResponse {
    export type AsObject = {
      status: UnpackResponse.ContractQueueResponse.ContractQueueStatus,
      address: string,
      error: string,
    }

    export enum ContractQueueStatus { 
      CQR_UNKNOWN = 0,
      CQR_QUEUED = 1,
      CQR_ERROR = 3,
    }
  }

}

