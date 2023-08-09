import * as jspb from 'google-protobuf'

import * as eip_standards_pb from '../eip/standards_pb';
import * as eip_eip_pb from '../eip/eip_pb';


export class Discovery extends jspb.Message {
  getStandard(): eip_standards_pb.Standard;
  setStandard(value: eip_standards_pb.Standard): Discovery;

  getConfidence(): ConfidenceLevel;
  setConfidence(value: ConfidenceLevel): Discovery;

  getConfidencePoints(): number;
  setConfidencePoints(value: number): Discovery;

  getThreshold(): ConfidenceThreshold;
  setThreshold(value: ConfidenceThreshold): Discovery;

  getMaximumTokens(): number;
  setMaximumTokens(value: number): Discovery;

  getDiscoveredTokens(): number;
  setDiscoveredTokens(value: number): Discovery;

  getContract(): eip_eip_pb.Contract | undefined;
  setContract(value?: eip_eip_pb.Contract): Discovery;
  hasContract(): boolean;
  clearContract(): Discovery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discovery.AsObject;
  static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
  static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discovery;
  static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
}

export namespace Discovery {
  export type AsObject = {
    standard: eip_standards_pb.Standard,
    confidence: ConfidenceLevel,
    confidencePoints: number,
    threshold: ConfidenceThreshold,
    maximumTokens: number,
    discoveredTokens: number,
    contract?: eip_eip_pb.Contract.AsObject,
  }
}

export enum ConfidenceLevel { 
  NO_CONFIDENCE = 0,
  HIGH_CONFIDENCE = 3,
  MEDIUM_CONFIDENCE = 2,
  LOW_CONFIDENCE = 1,
}
export enum ConfidenceThreshold { 
  NO_CONFIDENCE_THRESHOLD = 0,
  HIGH_CONFIDENCE_THRESHOLD = 900,
  MEDIUM_CONFIDENCE_THRESHOLD = 500,
  LOW_CONFIDENCE_THRESHOLD = 100,
}
