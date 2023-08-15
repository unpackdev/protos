import * as jspb from 'google-protobuf'



export class Report extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): Report;

  getError(): string;
  setError(value: string): Report;

  getResults(): Results | undefined;
  setResults(value?: Results): Report;
  hasResults(): boolean;
  clearResults(): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    success: boolean,
    error: string,
    results?: Results.AsObject,
  }
}

export class Results extends jspb.Message {
  getDetectorsList(): Array<Detector>;
  setDetectorsList(value: Array<Detector>): Results;
  clearDetectorsList(): Results;
  addDetectors(value?: Detector, index?: number): Detector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Results.AsObject;
  static toObject(includeInstance: boolean, msg: Results): Results.AsObject;
  static serializeBinaryToWriter(message: Results, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Results;
  static deserializeBinaryFromReader(message: Results, reader: jspb.BinaryReader): Results;
}

export namespace Results {
  export type AsObject = {
    detectorsList: Array<Detector.AsObject>,
  }
}

export class Detector extends jspb.Message {
  getElementsList(): Array<Element>;
  setElementsList(value: Array<Element>): Detector;
  clearElementsList(): Detector;
  addElements(value?: Element, index?: number): Element;

  getDescription(): string;
  setDescription(value: string): Detector;

  getMarkdown(): string;
  setMarkdown(value: string): Detector;

  getFirstMarkdownElement(): string;
  setFirstMarkdownElement(value: string): Detector;

  getId(): string;
  setId(value: string): Detector;

  getCheck(): string;
  setCheck(value: string): Detector;

  getImpact(): string;
  setImpact(value: string): Detector;

  getConfidence(): string;
  setConfidence(value: string): Detector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Detector.AsObject;
  static toObject(includeInstance: boolean, msg: Detector): Detector.AsObject;
  static serializeBinaryToWriter(message: Detector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Detector;
  static deserializeBinaryFromReader(message: Detector, reader: jspb.BinaryReader): Detector;
}

export namespace Detector {
  export type AsObject = {
    elementsList: Array<Element.AsObject>,
    description: string,
    markdown: string,
    firstMarkdownElement: string,
    id: string,
    check: string,
    impact: string,
    confidence: string,
  }
}

export class Element extends jspb.Message {
  getType(): string;
  setType(value: string): Element;

  getName(): string;
  setName(value: string): Element;

  getSourceMapping(): SourceMapping | undefined;
  setSourceMapping(value?: SourceMapping): Element;
  hasSourceMapping(): boolean;
  clearSourceMapping(): Element;

  getTypeSpecificFields(): TypeSpecificFields | undefined;
  setTypeSpecificFields(value?: TypeSpecificFields): Element;
  hasTypeSpecificFields(): boolean;
  clearTypeSpecificFields(): Element;

  getSignature(): string;
  setSignature(value: string): Element;

  getAdditionalFields(): AdditionalFields | undefined;
  setAdditionalFields(value?: AdditionalFields): Element;
  hasAdditionalFields(): boolean;
  clearAdditionalFields(): Element;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Element.AsObject;
  static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
  static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Element;
  static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
}

export namespace Element {
  export type AsObject = {
    type: string,
    name: string,
    sourceMapping?: SourceMapping.AsObject,
    typeSpecificFields?: TypeSpecificFields.AsObject,
    signature: string,
    additionalFields?: AdditionalFields.AsObject,
  }
}

export class SourceMapping extends jspb.Message {
  getStart(): number;
  setStart(value: number): SourceMapping;

  getLength(): number;
  setLength(value: number): SourceMapping;

  getFilenameRelative(): string;
  setFilenameRelative(value: string): SourceMapping;

  getFilenameAbsolute(): string;
  setFilenameAbsolute(value: string): SourceMapping;

  getFilenameShort(): string;
  setFilenameShort(value: string): SourceMapping;

  getIsDependency(): boolean;
  setIsDependency(value: boolean): SourceMapping;

  getLinesList(): Array<number>;
  setLinesList(value: Array<number>): SourceMapping;
  clearLinesList(): SourceMapping;
  addLines(value: number, index?: number): SourceMapping;

  getStartingColumn(): number;
  setStartingColumn(value: number): SourceMapping;

  getEndingColumn(): number;
  setEndingColumn(value: number): SourceMapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceMapping.AsObject;
  static toObject(includeInstance: boolean, msg: SourceMapping): SourceMapping.AsObject;
  static serializeBinaryToWriter(message: SourceMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceMapping;
  static deserializeBinaryFromReader(message: SourceMapping, reader: jspb.BinaryReader): SourceMapping;
}

export namespace SourceMapping {
  export type AsObject = {
    start: number,
    length: number,
    filenameRelative: string,
    filenameAbsolute: string,
    filenameShort: string,
    isDependency: boolean,
    linesList: Array<number>,
    startingColumn: number,
    endingColumn: number,
  }
}

export class TypeSpecificFields extends jspb.Message {
  getParent(): Element | undefined;
  setParent(value?: Element): TypeSpecificFields;
  hasParent(): boolean;
  clearParent(): TypeSpecificFields;

  getDirectiveList(): Array<string>;
  setDirectiveList(value: Array<string>): TypeSpecificFields;
  clearDirectiveList(): TypeSpecificFields;
  addDirective(value: string, index?: number): TypeSpecificFields;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeSpecificFields.AsObject;
  static toObject(includeInstance: boolean, msg: TypeSpecificFields): TypeSpecificFields.AsObject;
  static serializeBinaryToWriter(message: TypeSpecificFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeSpecificFields;
  static deserializeBinaryFromReader(message: TypeSpecificFields, reader: jspb.BinaryReader): TypeSpecificFields;
}

export namespace TypeSpecificFields {
  export type AsObject = {
    parent?: Element.AsObject,
    directiveList: Array<string>,
  }
}

export class AdditionalFields extends jspb.Message {
  getUnderlyingType(): string;
  setUnderlyingType(value: string): AdditionalFields;

  getVariableName(): string;
  setVariableName(value: string): AdditionalFields;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdditionalFields.AsObject;
  static toObject(includeInstance: boolean, msg: AdditionalFields): AdditionalFields.AsObject;
  static serializeBinaryToWriter(message: AdditionalFields, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdditionalFields;
  static deserializeBinaryFromReader(message: AdditionalFields, reader: jspb.BinaryReader): AdditionalFields;
}

export namespace AdditionalFields {
  export type AsObject = {
    underlyingType: string,
    variableName: string,
  }
}

