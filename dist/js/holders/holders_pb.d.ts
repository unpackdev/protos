import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../google/api/annotations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as common_status_pb from '../common/status_pb';


export class Holder extends jspb.Message {
  getId(): number;
  setId(value: number): Holder;

  getChainId(): number;
  setChainId(value: number): Holder;

  getTokenId(): number;
  setTokenId(value: number): Holder;

  getAddressId(): number;
  setAddressId(value: number): Holder;

  getAmount(): string;
  setAmount(value: string): Holder;

  getPercentageOwned(): number;
  setPercentageOwned(value: number): Holder;

  getStatus(): HolderStatus;
  setStatus(value: HolderStatus): Holder;

  getHolderSinceTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setHolderSinceTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Holder;
  hasHolderSinceTimestamp(): boolean;
  clearHolderSinceTimestamp(): Holder;

  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Holder;
  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): Holder;

  getProcessedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProcessedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Holder;
  hasProcessedTimestamp(): boolean;
  clearProcessedTimestamp(): Holder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Holder.AsObject;
  static toObject(includeInstance: boolean, msg: Holder): Holder.AsObject;
  static serializeBinaryToWriter(message: Holder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Holder;
  static deserializeBinaryFromReader(message: Holder, reader: jspb.BinaryReader): Holder;
}

export namespace Holder {
  export type AsObject = {
    id: number,
    chainId: number,
    tokenId: number,
    addressId: number,
    amount: string,
    percentageOwned: number,
    status: HolderStatus,
    holderSinceTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    processedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FilterHolderRequest extends jspb.Message {
  getPercentageOwned(): number;
  setPercentageOwned(value: number): FilterHolderRequest;

  getTokenId(): number;
  setTokenId(value: number): FilterHolderRequest;

  getStatus(): HolderStatus;
  setStatus(value: HolderStatus): FilterHolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterHolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterHolderRequest): FilterHolderRequest.AsObject;
  static serializeBinaryToWriter(message: FilterHolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterHolderRequest;
  static deserializeBinaryFromReader(message: FilterHolderRequest, reader: jspb.BinaryReader): FilterHolderRequest;
}

export namespace FilterHolderRequest {
  export type AsObject = {
    percentageOwned: number,
    tokenId: number,
    status: HolderStatus,
  }
}

export class FilterHolderResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): FilterHolderResponse;
  hasStatus(): boolean;
  clearStatus(): FilterHolderResponse;

  getHoldersList(): Array<Holder>;
  setHoldersList(value: Array<Holder>): FilterHolderResponse;
  clearHoldersList(): FilterHolderResponse;
  addHolders(value?: Holder, index?: number): Holder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterHolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterHolderResponse): FilterHolderResponse.AsObject;
  static serializeBinaryToWriter(message: FilterHolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterHolderResponse;
  static deserializeBinaryFromReader(message: FilterHolderResponse, reader: jspb.BinaryReader): FilterHolderResponse;
}

export namespace FilterHolderResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    holdersList: Array<Holder.AsObject>,
  }
}

export class GetHolderRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GetHolderRequest;

  getId(): number;
  setId(value: number): GetHolderRequest;

  getAddress(): string;
  setAddress(value: string): GetHolderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHolderRequest): GetHolderRequest.AsObject;
  static serializeBinaryToWriter(message: GetHolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHolderRequest;
  static deserializeBinaryFromReader(message: GetHolderRequest, reader: jspb.BinaryReader): GetHolderRequest;
}

export namespace GetHolderRequest {
  export type AsObject = {
    chainId: number,
    id: number,
    address: string,
  }
}

export class GetHolderResponse extends jspb.Message {
  getStatus(): common_status_pb.Status | undefined;
  setStatus(value?: common_status_pb.Status): GetHolderResponse;
  hasStatus(): boolean;
  clearStatus(): GetHolderResponse;

  getHolder(): Holder | undefined;
  setHolder(value?: Holder): GetHolderResponse;
  hasHolder(): boolean;
  clearHolder(): GetHolderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHolderResponse): GetHolderResponse.AsObject;
  static serializeBinaryToWriter(message: GetHolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHolderResponse;
  static deserializeBinaryFromReader(message: GetHolderResponse, reader: jspb.BinaryReader): GetHolderResponse;
}

export namespace GetHolderResponse {
  export type AsObject = {
    status?: common_status_pb.Status.AsObject,
    holder?: Holder.AsObject,
  }
}

export enum HolderStatus { 
  HS_NONE = 0,
}
