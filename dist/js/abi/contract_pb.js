// source: abi/contract.proto
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

var abi_method_pb = require('../abi/method_pb.js');
goog.object.extend(proto, abi_method_pb);
goog.exportSymbol('proto.txpull.v1.abi.Contract', null, global);
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
proto.txpull.v1.abi.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpull.v1.abi.Contract.repeatedFields_, null);
};
goog.inherits(proto.txpull.v1.abi.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.abi.Contract.displayName = 'proto.txpull.v1.abi.Contract';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpull.v1.abi.Contract.repeatedFields_ = [1];



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
proto.txpull.v1.abi.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.abi.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.abi.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.abi.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodsList: jspb.Message.toObjectList(msg.getMethodsList(),
    abi_method_pb.Method.toObject, includeInstance)
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
 * @return {!proto.txpull.v1.abi.Contract}
 */
proto.txpull.v1.abi.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.abi.Contract;
  return proto.txpull.v1.abi.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.abi.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.abi.Contract}
 */
proto.txpull.v1.abi.Contract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new abi_method_pb.Method;
      reader.readMessage(value,abi_method_pb.Method.deserializeBinaryFromReader);
      msg.addMethods(value);
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
proto.txpull.v1.abi.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.abi.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.abi.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.abi.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      abi_method_pb.Method.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Method methods = 1;
 * @return {!Array<!proto.txpull.v1.abi.Method>}
 */
proto.txpull.v1.abi.Contract.prototype.getMethodsList = function() {
  return /** @type{!Array<!proto.txpull.v1.abi.Method>} */ (
    jspb.Message.getRepeatedWrapperField(this, abi_method_pb.Method, 1));
};


/**
 * @param {!Array<!proto.txpull.v1.abi.Method>} value
 * @return {!proto.txpull.v1.abi.Contract} returns this
*/
proto.txpull.v1.abi.Contract.prototype.setMethodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.txpull.v1.abi.Method=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.abi.Method}
 */
proto.txpull.v1.abi.Contract.prototype.addMethods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.txpull.v1.abi.Method, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.abi.Contract} returns this
 */
proto.txpull.v1.abi.Contract.prototype.clearMethodsList = function() {
  return this.setMethodsList([]);
};


goog.object.extend(exports, proto.txpull.v1.abi);