import * as jspb from 'google-protobuf'

import * as ast_types_pb from '../ast/types_pb';
import * as ir_symbol_pb from '../ir/symbol_pb';
import * as ir_import_pb from '../ir/import_pb';
import * as ir_pragma_pb from '../ir/pragma_pb';
import * as ir_variable_pb from '../ir/variable_pb';
import * as ir_struct_pb from '../ir/struct_pb';
import * as ir_enum_pb from '../ir/enum_pb';
import * as ir_event_pb from '../ir/event_pb';
import * as ir_error_pb from '../ir/error_pb';
import * as ir_constructor_pb from '../ir/constructor_pb';
import * as ir_function_pb from '../ir/function_pb';
import * as ir_fallback_pb from '../ir/fallback_pb';
import * as ir_receive_pb from '../ir/receive_pb';


export class Contract extends jspb.Message {
  getId(): number;
  setId(value: number): Contract;

  getNodeType(): ast_types_pb.NodeType;
  setNodeType(value: ast_types_pb.NodeType): Contract;

  getKind(): ast_types_pb.NodeType;
  setKind(value: ast_types_pb.NodeType): Contract;

  getSourceUnitId(): number;
  setSourceUnitId(value: number): Contract;

  getName(): string;
  setName(value: string): Contract;

  getLicense(): string;
  setLicense(value: string): Contract;

  getLanguage(): string;
  setLanguage(value: string): Contract;

  getAbsolutePath(): string;
  setAbsolutePath(value: string): Contract;

  getSymbolsList(): Array<ir_symbol_pb.Symbol>;
  setSymbolsList(value: Array<ir_symbol_pb.Symbol>): Contract;
  clearSymbolsList(): Contract;
  addSymbols(value?: ir_symbol_pb.Symbol, index?: number): ir_symbol_pb.Symbol;

  getImportsList(): Array<ir_import_pb.Import>;
  setImportsList(value: Array<ir_import_pb.Import>): Contract;
  clearImportsList(): Contract;
  addImports(value?: ir_import_pb.Import, index?: number): ir_import_pb.Import;

  getPragmasList(): Array<ir_pragma_pb.Pragma>;
  setPragmasList(value: Array<ir_pragma_pb.Pragma>): Contract;
  clearPragmasList(): Contract;
  addPragmas(value?: ir_pragma_pb.Pragma, index?: number): ir_pragma_pb.Pragma;

  getStateVariablesList(): Array<ir_variable_pb.StateVariable>;
  setStateVariablesList(value: Array<ir_variable_pb.StateVariable>): Contract;
  clearStateVariablesList(): Contract;
  addStateVariables(value?: ir_variable_pb.StateVariable, index?: number): ir_variable_pb.StateVariable;

  getStructsList(): Array<ir_struct_pb.Struct>;
  setStructsList(value: Array<ir_struct_pb.Struct>): Contract;
  clearStructsList(): Contract;
  addStructs(value?: ir_struct_pb.Struct, index?: number): ir_struct_pb.Struct;

  getEnumsList(): Array<ir_enum_pb.Enum>;
  setEnumsList(value: Array<ir_enum_pb.Enum>): Contract;
  clearEnumsList(): Contract;
  addEnums(value?: ir_enum_pb.Enum, index?: number): ir_enum_pb.Enum;

  getEventsList(): Array<ir_event_pb.Event>;
  setEventsList(value: Array<ir_event_pb.Event>): Contract;
  clearEventsList(): Contract;
  addEvents(value?: ir_event_pb.Event, index?: number): ir_event_pb.Event;

  getErrorsList(): Array<ir_error_pb.Error>;
  setErrorsList(value: Array<ir_error_pb.Error>): Contract;
  clearErrorsList(): Contract;
  addErrors(value?: ir_error_pb.Error, index?: number): ir_error_pb.Error;

  getConstructor(): ir_constructor_pb.Constructor | undefined;
  setConstructor(value?: ir_constructor_pb.Constructor): Contract;
  hasConstructor(): boolean;
  clearConstructor(): Contract;

  getFunctionsList(): Array<ir_function_pb.Function>;
  setFunctionsList(value: Array<ir_function_pb.Function>): Contract;
  clearFunctionsList(): Contract;
  addFunctions(value?: ir_function_pb.Function, index?: number): ir_function_pb.Function;

  getFallback(): ir_fallback_pb.Fallback | undefined;
  setFallback(value?: ir_fallback_pb.Fallback): Contract;
  hasFallback(): boolean;
  clearFallback(): Contract;

  getReceive(): ir_receive_pb.Receive | undefined;
  setReceive(value?: ir_receive_pb.Receive): Contract;
  hasReceive(): boolean;
  clearReceive(): Contract;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    id: number,
    nodeType: ast_types_pb.NodeType,
    kind: ast_types_pb.NodeType,
    sourceUnitId: number,
    name: string,
    license: string,
    language: string,
    absolutePath: string,
    symbolsList: Array<ir_symbol_pb.Symbol.AsObject>,
    importsList: Array<ir_import_pb.Import.AsObject>,
    pragmasList: Array<ir_pragma_pb.Pragma.AsObject>,
    stateVariablesList: Array<ir_variable_pb.StateVariable.AsObject>,
    structsList: Array<ir_struct_pb.Struct.AsObject>,
    enumsList: Array<ir_enum_pb.Enum.AsObject>,
    eventsList: Array<ir_event_pb.Event.AsObject>,
    errorsList: Array<ir_error_pb.Error.AsObject>,
    constructor?: ir_constructor_pb.Constructor.AsObject,
    functionsList: Array<ir_function_pb.Function.AsObject>,
    fallback?: ir_fallback_pb.Fallback.AsObject,
    receive?: ir_receive_pb.Receive.AsObject,
  }
}

