import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Address extends jspb.Message {
  getId(): number;
  setId(value: number): Address;

  getChainId(): number;
  setChainId(value: number): Address;

  getAddress(): string;
  setAddress(value: string): Address;

  getFirstTransaction(): number;
  setFirstTransaction(value: number): Address;

  getMalicious(): boolean;
  setMalicious(value: boolean): Address;

  getMaliciousReason(): MaliciousAddressReasons;
  setMaliciousReason(value: MaliciousAddressReasons): Address;

  getMaliciousReasonDetails(): string;
  setMaliciousReasonDetails(value: string): Address;

  getStatus(): AddressStatus;
  setStatus(value: AddressStatus): Address;

  getAvailableSinceTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAvailableSinceTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Address;
  hasAvailableSinceTimestamp(): boolean;
  clearAvailableSinceTimestamp(): Address;

  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Address;
  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): Address;

  getProcessedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProcessedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Address;
  hasProcessedTimestamp(): boolean;
  clearProcessedTimestamp(): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    id: number,
    chainId: number,
    address: string,
    firstTransaction: number,
    malicious: boolean,
    maliciousReason: MaliciousAddressReasons,
    maliciousReasonDetails: string,
    status: AddressStatus,
    availableSinceTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    processedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FilterAddressRequest extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterAddressRequest;
  hasStatus(): boolean;
  clearStatus(): FilterAddressRequest;

  getMalicious(): boolean;
  setMalicious(value: boolean): FilterAddressRequest;

  getMaliciousReason(): MaliciousAddressReasons;
  setMaliciousReason(value: MaliciousAddressReasons): FilterAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterAddressRequest): FilterAddressRequest.AsObject;
  static serializeBinaryToWriter(message: FilterAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterAddressRequest;
  static deserializeBinaryFromReader(message: FilterAddressRequest, reader: jspb.BinaryReader): FilterAddressRequest;
}

export namespace FilterAddressRequest {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    malicious: boolean,
    maliciousReason: MaliciousAddressReasons,
  }
}

export class FilterAddressResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterAddressResponse;
  hasStatus(): boolean;
  clearStatus(): FilterAddressResponse;

  getAddressesList(): Array<Address>;
  setAddressesList(value: Array<Address>): FilterAddressResponse;
  clearAddressesList(): FilterAddressResponse;
  addAddresses(value?: Address, index?: number): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterAddressResponse): FilterAddressResponse.AsObject;
  static serializeBinaryToWriter(message: FilterAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterAddressResponse;
  static deserializeBinaryFromReader(message: FilterAddressResponse, reader: jspb.BinaryReader): FilterAddressResponse;
}

export namespace FilterAddressResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    addressesList: Array<Address.AsObject>,
  }
}

export class GetAddressRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GetAddressRequest;

  getId(): number;
  setId(value: number): GetAddressRequest;

  getAddress(): string;
  setAddress(value: string): GetAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressRequest): GetAddressRequest.AsObject;
  static serializeBinaryToWriter(message: GetAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressRequest;
  static deserializeBinaryFromReader(message: GetAddressRequest, reader: jspb.BinaryReader): GetAddressRequest;
}

export namespace GetAddressRequest {
  export type AsObject = {
    chainId: number,
    id: number,
    address: string,
  }
}

export class GetAddressResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): GetAddressResponse;
  hasStatus(): boolean;
  clearStatus(): GetAddressResponse;

  getAddress(): Address | undefined;
  setAddress(value?: Address): GetAddressResponse;
  hasAddress(): boolean;
  clearAddress(): GetAddressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressResponse): GetAddressResponse.AsObject;
  static serializeBinaryToWriter(message: GetAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressResponse;
  static deserializeBinaryFromReader(message: GetAddressResponse, reader: jspb.BinaryReader): GetAddressResponse;
}

export namespace GetAddressResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    address?: Address.AsObject,
  }
}

export enum MaliciousAddressReasons { 
  MAR_NONE = 0,
  MAR_CONTRACT_DEPLOYMENT_FRAUD = 1,
  MAR_TRANSFER_TO_MALICIOUS_ADDR = 2,
  MAR_TRANSFER_FROM_MALICIOUS_ADDR = 3,
}
export enum AddressStatus { 
  AS_NONE = 0,
  AS_QUEUED = 1,
  AS_PROCESSING = 2,
  AS_PROCESSED = 3,
}
