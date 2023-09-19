// source: ir/root.proto
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

var ast_types_pb = require('../ast/types_pb.js');
goog.object.extend(proto, ast_types_pb);
var ir_eip_pb = require('../ir/eip_pb.js');
goog.object.extend(proto, ir_eip_pb);
var ir_contract_pb = require('../ir/contract_pb.js');
goog.object.extend(proto, ir_contract_pb);
goog.exportSymbol('proto.unpack.v1.ir.Root', null, global);
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
proto.unpack.v1.ir.Root = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ir.Root.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ir.Root, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ir.Root.displayName = 'proto.unpack.v1.ir.Root';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ir.Root.repeatedFields_ = [5,7,8];



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
proto.unpack.v1.ir.Root.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ir.Root.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ir.Root} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Root.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    entryContractId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    entryContractName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    contractTypesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    contractsCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eipsList: jspb.Message.toObjectList(msg.getEipsList(),
    ir_eip_pb.EIP.toObject, includeInstance),
    contractsList: jspb.Message.toObjectList(msg.getContractsList(),
    ir_contract_pb.Contract.toObject, includeInstance)
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
 * @return {!proto.unpack.v1.ir.Root}
 */
proto.unpack.v1.ir.Root.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ir.Root;
  return proto.unpack.v1.ir.Root.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ir.Root} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ir.Root}
 */
proto.unpack.v1.ir.Root.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntryContractId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryContractName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addContractTypes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContractsCount(value);
      break;
    case 7:
      var value = new ir_eip_pb.EIP;
      reader.readMessage(value,ir_eip_pb.EIP.deserializeBinaryFromReader);
      msg.addEips(value);
      break;
    case 8:
      var value = new ir_contract_pb.Contract;
      reader.readMessage(value,ir_contract_pb.Contract.deserializeBinaryFromReader);
      msg.addContracts(value);
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
proto.unpack.v1.ir.Root.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ir.Root.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ir.Root} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Root.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getEntryContractId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEntryContractName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getContractTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getContractsCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEipsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      ir_eip_pb.EIP.serializeBinaryToWriter
    );
  }
  f = message.getContractsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      ir_contract_pb.Contract.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ir.Root.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional unpack.v1.ast.NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.Root.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int64 entry_contract_id = 3;
 * @return {number}
 */
proto.unpack.v1.ir.Root.prototype.getEntryContractId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setEntryContractId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string entry_contract_name = 4;
 * @return {string}
 */
proto.unpack.v1.ir.Root.prototype.getEntryContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setEntryContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string contract_types = 5;
 * @return {!Array<string>}
 */
proto.unpack.v1.ir.Root.prototype.getContractTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setContractTypesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.addContractTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.clearContractTypesList = function() {
  return this.setContractTypesList([]);
};


/**
 * optional int32 contracts_count = 6;
 * @return {number}
 */
proto.unpack.v1.ir.Root.prototype.getContractsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.setContractsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated EIP eips = 7;
 * @return {!Array<!proto.unpack.v1.ir.EIP>}
 */
proto.unpack.v1.ir.Root.prototype.getEipsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.EIP>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_eip_pb.EIP, 7));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.EIP>} value
 * @return {!proto.unpack.v1.ir.Root} returns this
*/
proto.unpack.v1.ir.Root.prototype.setEipsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.unpack.v1.ir.EIP=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.EIP}
 */
proto.unpack.v1.ir.Root.prototype.addEips = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.unpack.v1.ir.EIP, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.clearEipsList = function() {
  return this.setEipsList([]);
};


/**
 * repeated Contract contracts = 8;
 * @return {!Array<!proto.unpack.v1.ir.Contract>}
 */
proto.unpack.v1.ir.Root.prototype.getContractsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Contract>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_contract_pb.Contract, 8));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Contract>} value
 * @return {!proto.unpack.v1.ir.Root} returns this
*/
proto.unpack.v1.ir.Root.prototype.setContractsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.unpack.v1.ir.Contract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Contract}
 */
proto.unpack.v1.ir.Root.prototype.addContracts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.unpack.v1.ir.Contract, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Root} returns this
 */
proto.unpack.v1.ir.Root.prototype.clearContractsList = function() {
  return this.setContractsList([]);
};


goog.object.extend(exports, proto.unpack.v1.ir);
