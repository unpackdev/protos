import * as jspb from 'google-protobuf'

import * as abi_method_pb from '../abi/method_pb';


export class Contract extends jspb.Message {
  getMethodsList(): Array<abi_method_pb.Method>;
  setMethodsList(value: Array<abi_method_pb.Method>): Contract;
  clearMethodsList(): Contract;
  addMethods(value?: abi_method_pb.Method, index?: number): abi_method_pb.Method;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    methodsList: Array<abi_method_pb.Method.AsObject>,
  }
}

