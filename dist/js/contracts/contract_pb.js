// source: contracts/contract.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ir_eip_pb = require('../ir/eip_pb.js');
goog.object.extend(proto, ir_eip_pb);
var contracts_vulnerability_pb = require('../contracts/vulnerability_pb.js');
goog.object.extend(proto, contracts_vulnerability_pb);
var contracts_constructor_pb = require('../contracts/constructor_pb.js');
goog.object.extend(proto, contracts_constructor_pb);
goog.exportSymbol('proto.unpack.v1.contracts.Contract', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.unpack.v1.contracts.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.contracts.Contract.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.contracts.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.contracts.Contract.displayName = 'proto.unpack.v1.contracts.Contract';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.contracts.Contract.repeatedFields_ = [17,19,20,21,24,25];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.unpack.v1.contracts.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.contracts.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.contracts.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.contracts.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    address: jspb.Message.getFieldWithDefault(msg, 4, ""),
    license: jspb.Message.getFieldWithDefault(msg, 5, ""),
    language: jspb.Message.getFieldWithDefault(msg, 6, ""),
    executionBytecode: jspb.Message.getFieldWithDefault(msg, 7, ""),
    deployedBytecode: jspb.Message.getFieldWithDefault(msg, 8, ""),
    blockNumber: jspb.Message.getFieldWithDefault(msg, 9, 0),
    blockHash: jspb.Message.getFieldWithDefault(msg, 10, ""),
    transactionHash: jspb.Message.getFieldWithDefault(msg, 11, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    compilerVersion: jspb.Message.getFieldWithDefault(msg, 13, ""),
    evmVersion: jspb.Message.getFieldWithDefault(msg, 14, ""),
    optimized: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    optimizationRuns: jspb.Message.getFieldWithDefault(msg, 16, 0),
    possibleContractTypesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    contractsCount: jspb.Message.getFieldWithDefault(msg, 18, 0),
    standardsList: jspb.Message.toObjectList(msg.getStandardsList(),
    ir_eip_pb.EIP.toObject, includeInstance),
    metadataUrlsList: (f = jspb.Message.getRepeatedField(msg, 20)) == null ? undefined : f,
    implementsList: jspb.Message.toObjectList(msg.getImplementsList(),
    contracts_vulnerability_pb.Implements.toObject, includeInstance),
    constructor: (f = msg.getConstructor()) && contracts_constructor_pb.Constructor.toObject(includeInstance, f),
    hasVulnerabilities: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
    vulnerabilityMetricsList: jspb.Message.toObjectList(msg.getVulnerabilityMetricsList(),
    contracts_vulnerability_pb.VulnerabilityMetric.toObject, includeInstance),
    vulnerabilitiesList: jspb.Message.toObjectList(msg.getVulnerabilitiesList(),
    contracts_vulnerability_pb.Vulnerability.toObject, includeInstance),
    abi: jspb.Message.getFieldWithDefault(msg, 26, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.unpack.v1.contracts.Contract}
 */
proto.unpack.v1.contracts.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.contracts.Contract;
  return proto.unpack.v1.contracts.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.contracts.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.contracts.Contract}
 */
proto.unpack.v1.contracts.Contract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetworkId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicense(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionBytecode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployedBytecode(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockNumber(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockHash(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionHash(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompilerVersion(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvmVersion(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptimized(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptimizationRuns(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addPossibleContractTypes(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContractsCount(value);
      break;
    case 19:
      var value = new ir_eip_pb.EIP;
      reader.readMessage(value,ir_eip_pb.EIP.deserializeBinaryFromReader);
      msg.addStandards(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.addMetadataUrls(value);
      break;
    case 21:
      var value = new contracts_vulnerability_pb.Implements;
      reader.readMessage(value,contracts_vulnerability_pb.Implements.deserializeBinaryFromReader);
      msg.addImplements(value);
      break;
    case 22:
      var value = new contracts_constructor_pb.Constructor;
      reader.readMessage(value,contracts_constructor_pb.Constructor.deserializeBinaryFromReader);
      msg.setConstructor(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasVulnerabilities(value);
      break;
    case 24:
      var value = new contracts_vulnerability_pb.VulnerabilityMetric;
      reader.readMessage(value,contracts_vulnerability_pb.VulnerabilityMetric.deserializeBinaryFromReader);
      msg.addVulnerabilityMetrics(value);
      break;
    case 25:
      var value = new contracts_vulnerability_pb.Vulnerability;
      reader.readMessage(value,contracts_vulnerability_pb.Vulnerability.deserializeBinaryFromReader);
      msg.addVulnerabilities(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.unpack.v1.contracts.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.contracts.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.contracts.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.contracts.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLicense();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExecutionBytecode();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDeployedBytecode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBlockNumber();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getBlockHash();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTransactionHash();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCompilerVersion();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getEvmVersion();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getOptimized();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getOptimizationRuns();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getPossibleContractTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getContractsCount();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getStandardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      ir_eip_pb.EIP.serializeBinaryToWriter
    );
  }
  f = message.getMetadataUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      20,
      f
    );
  }
  f = message.getImplementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      contracts_vulnerability_pb.Implements.serializeBinaryToWriter
    );
  }
  f = message.getConstructor();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      contracts_constructor_pb.Constructor.serializeBinaryToWriter
    );
  }
  f = message.getHasVulnerabilities();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getVulnerabilityMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      contracts_vulnerability_pb.VulnerabilityMetric.serializeBinaryToWriter
    );
  }
  f = message.getVulnerabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      contracts_vulnerability_pb.Vulnerability.serializeBinaryToWriter
    );
  }
  f = message.getAbi();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 network_id = 2;
 * @return {number}
 */
proto.unpack.v1.contracts.Contract.prototype.getNetworkId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setNetworkId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string address = 4;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string license = 5;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string execution_bytecode = 7;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getExecutionBytecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setExecutionBytecode = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string deployed_bytecode = 8;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getDeployedBytecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setDeployedBytecode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 block_number = 9;
 * @return {number}
 */
proto.unpack.v1.contracts.Contract.prototype.getBlockNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setBlockNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string block_hash = 10;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getBlockHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setBlockHash = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string transaction_hash = 11;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getTransactionHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setTransactionHash = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool verified = 12;
 * @return {boolean}
 */
proto.unpack.v1.contracts.Contract.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string compiler_version = 13;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getCompilerVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setCompilerVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string evm_version = 14;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getEvmVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setEvmVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool optimized = 15;
 * @return {boolean}
 */
proto.unpack.v1.contracts.Contract.prototype.getOptimized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setOptimized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int32 optimization_runs = 16;
 * @return {number}
 */
proto.unpack.v1.contracts.Contract.prototype.getOptimizationRuns = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setOptimizationRuns = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * repeated string possible_contract_types = 17;
 * @return {!Array<string>}
 */
proto.unpack.v1.contracts.Contract.prototype.getPossibleContractTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setPossibleContractTypesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.addPossibleContractTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearPossibleContractTypesList = function() {
  return this.setPossibleContractTypesList([]);
};


/**
 * optional int32 contracts_count = 18;
 * @return {number}
 */
proto.unpack.v1.contracts.Contract.prototype.getContractsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setContractsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * repeated unpack.v1.ir.EIP standards = 19;
 * @return {!Array<!proto.unpack.v1.ir.EIP>}
 */
proto.unpack.v1.contracts.Contract.prototype.getStandardsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.EIP>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_eip_pb.EIP, 19));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.EIP>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
*/
proto.unpack.v1.contracts.Contract.prototype.setStandardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.unpack.v1.ir.EIP=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.EIP}
 */
proto.unpack.v1.contracts.Contract.prototype.addStandards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.unpack.v1.ir.EIP, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearStandardsList = function() {
  return this.setStandardsList([]);
};


/**
 * repeated string metadata_urls = 20;
 * @return {!Array<string>}
 */
proto.unpack.v1.contracts.Contract.prototype.getMetadataUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 20));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setMetadataUrlsList = function(value) {
  return jspb.Message.setField(this, 20, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.addMetadataUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 20, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearMetadataUrlsList = function() {
  return this.setMetadataUrlsList([]);
};


/**
 * repeated Implements implements = 21;
 * @return {!Array<!proto.unpack.v1.contracts.Implements>}
 */
proto.unpack.v1.contracts.Contract.prototype.getImplementsList = function() {
  return /** @type{!Array<!proto.unpack.v1.contracts.Implements>} */ (
    jspb.Message.getRepeatedWrapperField(this, contracts_vulnerability_pb.Implements, 21));
};


/**
 * @param {!Array<!proto.unpack.v1.contracts.Implements>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
*/
proto.unpack.v1.contracts.Contract.prototype.setImplementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.unpack.v1.contracts.Implements=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.contracts.Implements}
 */
proto.unpack.v1.contracts.Contract.prototype.addImplements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.unpack.v1.contracts.Implements, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearImplementsList = function() {
  return this.setImplementsList([]);
};


/**
 * optional Constructor constructor = 22;
 * @return {?proto.unpack.v1.contracts.Constructor}
 */
proto.unpack.v1.contracts.Contract.prototype.getConstructor = function() {
  return /** @type{?proto.unpack.v1.contracts.Constructor} */ (
    jspb.Message.getWrapperField(this, contracts_constructor_pb.Constructor, 22));
};


/**
 * @param {?proto.unpack.v1.contracts.Constructor|undefined} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
*/
proto.unpack.v1.contracts.Contract.prototype.setConstructor = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearConstructor = function() {
  return this.setConstructor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.contracts.Contract.prototype.hasConstructor = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool has_vulnerabilities = 23;
 * @return {boolean}
 */
proto.unpack.v1.contracts.Contract.prototype.getHasVulnerabilities = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setHasVulnerabilities = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * repeated VulnerabilityMetric vulnerability_metrics = 24;
 * @return {!Array<!proto.unpack.v1.contracts.VulnerabilityMetric>}
 */
proto.unpack.v1.contracts.Contract.prototype.getVulnerabilityMetricsList = function() {
  return /** @type{!Array<!proto.unpack.v1.contracts.VulnerabilityMetric>} */ (
    jspb.Message.getRepeatedWrapperField(this, contracts_vulnerability_pb.VulnerabilityMetric, 24));
};


/**
 * @param {!Array<!proto.unpack.v1.contracts.VulnerabilityMetric>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
*/
proto.unpack.v1.contracts.Contract.prototype.setVulnerabilityMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.unpack.v1.contracts.VulnerabilityMetric=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.contracts.VulnerabilityMetric}
 */
proto.unpack.v1.contracts.Contract.prototype.addVulnerabilityMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.unpack.v1.contracts.VulnerabilityMetric, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearVulnerabilityMetricsList = function() {
  return this.setVulnerabilityMetricsList([]);
};


/**
 * repeated Vulnerability vulnerabilities = 25;
 * @return {!Array<!proto.unpack.v1.contracts.Vulnerability>}
 */
proto.unpack.v1.contracts.Contract.prototype.getVulnerabilitiesList = function() {
  return /** @type{!Array<!proto.unpack.v1.contracts.Vulnerability>} */ (
    jspb.Message.getRepeatedWrapperField(this, contracts_vulnerability_pb.Vulnerability, 25));
};


/**
 * @param {!Array<!proto.unpack.v1.contracts.Vulnerability>} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
*/
proto.unpack.v1.contracts.Contract.prototype.setVulnerabilitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.unpack.v1.contracts.Vulnerability=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.contracts.Vulnerability}
 */
proto.unpack.v1.contracts.Contract.prototype.addVulnerabilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.unpack.v1.contracts.Vulnerability, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.clearVulnerabilitiesList = function() {
  return this.setVulnerabilitiesList([]);
};


/**
 * optional string abi = 26;
 * @return {string}
 */
proto.unpack.v1.contracts.Contract.prototype.getAbi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.contracts.Contract} returns this
 */
proto.unpack.v1.contracts.Contract.prototype.setAbi = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


goog.object.extend(exports, proto.unpack.v1.contracts);
