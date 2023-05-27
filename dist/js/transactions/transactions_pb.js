// source: transactions/transactions.proto
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

var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var common_status_pb = require('../common/status_pb.js');
goog.object.extend(proto, common_status_pb);
goog.exportSymbol('proto.txpull.v1.transaction.FilterTransactionRequest', null, global);
goog.exportSymbol('proto.txpull.v1.transaction.FilterTransactionResponse', null, global);
goog.exportSymbol('proto.txpull.v1.transaction.GetTransactionRequest', null, global);
goog.exportSymbol('proto.txpull.v1.transaction.GetTransactionResponse', null, global);
goog.exportSymbol('proto.txpull.v1.transaction.Transaction', null, global);
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
proto.txpull.v1.transaction.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.transaction.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.transaction.Transaction.displayName = 'proto.txpull.v1.transaction.Transaction';
}
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
proto.txpull.v1.transaction.FilterTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.transaction.FilterTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.transaction.FilterTransactionRequest.displayName = 'proto.txpull.v1.transaction.FilterTransactionRequest';
}
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
proto.txpull.v1.transaction.FilterTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpull.v1.transaction.FilterTransactionResponse.repeatedFields_, null);
};
goog.inherits(proto.txpull.v1.transaction.FilterTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.transaction.FilterTransactionResponse.displayName = 'proto.txpull.v1.transaction.FilterTransactionResponse';
}
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
proto.txpull.v1.transaction.GetTransactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.transaction.GetTransactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.transaction.GetTransactionRequest.displayName = 'proto.txpull.v1.transaction.GetTransactionRequest';
}
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
proto.txpull.v1.transaction.GetTransactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.transaction.GetTransactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.transaction.GetTransactionResponse.displayName = 'proto.txpull.v1.transaction.GetTransactionResponse';
}



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
proto.txpull.v1.transaction.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.transaction.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.transaction.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.txpull.v1.transaction.Transaction}
 */
proto.txpull.v1.transaction.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.transaction.Transaction;
  return proto.txpull.v1.transaction.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.transaction.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.transaction.Transaction}
 */
proto.txpull.v1.transaction.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChainId(value);
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
proto.txpull.v1.transaction.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.transaction.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.transaction.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.txpull.v1.transaction.Transaction.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.transaction.Transaction} returns this
 */
proto.txpull.v1.transaction.Transaction.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 chain_id = 2;
 * @return {number}
 */
proto.txpull.v1.transaction.Transaction.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.transaction.Transaction} returns this
 */
proto.txpull.v1.transaction.Transaction.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.transaction.FilterTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.transaction.FilterTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.FilterTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.txpull.v1.transaction.FilterTransactionRequest}
 */
proto.txpull.v1.transaction.FilterTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.transaction.FilterTransactionRequest;
  return proto.txpull.v1.transaction.FilterTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.transaction.FilterTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.transaction.FilterTransactionRequest}
 */
proto.txpull.v1.transaction.FilterTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.transaction.FilterTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.transaction.FilterTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.FilterTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional txpull.v1.common.Status status = 5;
 * @return {?proto.txpull.v1.common.Status}
 */
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.getStatus = function() {
  return /** @type{?proto.txpull.v1.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 5));
};


/**
 * @param {?proto.txpull.v1.common.Status|undefined} value
 * @return {!proto.txpull.v1.transaction.FilterTransactionRequest} returns this
*/
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.transaction.FilterTransactionRequest} returns this
 */
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.transaction.FilterTransactionRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpull.v1.transaction.FilterTransactionResponse.repeatedFields_ = [2];



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
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.transaction.FilterTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.transaction.FilterTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.FilterTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    transactionList: jspb.Message.toObjectList(msg.getTransactionList(),
    proto.txpull.v1.transaction.Transaction.toObject, includeInstance)
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
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.transaction.FilterTransactionResponse;
  return proto.txpull.v1.transaction.FilterTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.transaction.FilterTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.txpull.v1.transaction.Transaction;
      reader.readMessage(value,proto.txpull.v1.transaction.Transaction.deserializeBinaryFromReader);
      msg.addTransaction(value);
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
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.transaction.FilterTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.transaction.FilterTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.FilterTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getTransactionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.txpull.v1.transaction.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional txpull.v1.common.Status status = 1;
 * @return {?proto.txpull.v1.common.Status}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.getStatus = function() {
  return /** @type{?proto.txpull.v1.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1));
};


/**
 * @param {?proto.txpull.v1.common.Status|undefined} value
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse} returns this
*/
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse} returns this
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Transaction transaction = 2;
 * @return {!Array<!proto.txpull.v1.transaction.Transaction>}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.getTransactionList = function() {
  return /** @type{!Array<!proto.txpull.v1.transaction.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.txpull.v1.transaction.Transaction, 2));
};


/**
 * @param {!Array<!proto.txpull.v1.transaction.Transaction>} value
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse} returns this
*/
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.setTransactionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.txpull.v1.transaction.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.transaction.Transaction}
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.addTransaction = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.txpull.v1.transaction.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.transaction.FilterTransactionResponse} returns this
 */
proto.txpull.v1.transaction.FilterTransactionResponse.prototype.clearTransactionList = function() {
  return this.setTransactionList([]);
};





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
proto.txpull.v1.transaction.GetTransactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.transaction.GetTransactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.transaction.GetTransactionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.GetTransactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.txpull.v1.transaction.GetTransactionRequest}
 */
proto.txpull.v1.transaction.GetTransactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.transaction.GetTransactionRequest;
  return proto.txpull.v1.transaction.GetTransactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.transaction.GetTransactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.transaction.GetTransactionRequest}
 */
proto.txpull.v1.transaction.GetTransactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
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
proto.txpull.v1.transaction.GetTransactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.transaction.GetTransactionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.transaction.GetTransactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.GetTransactionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 transaction_id = 1;
 * @return {number}
 */
proto.txpull.v1.transaction.GetTransactionRequest.prototype.getTransactionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.transaction.GetTransactionRequest} returns this
 */
proto.txpull.v1.transaction.GetTransactionRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 id = 2;
 * @return {number}
 */
proto.txpull.v1.transaction.GetTransactionRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.transaction.GetTransactionRequest} returns this
 */
proto.txpull.v1.transaction.GetTransactionRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.txpull.v1.transaction.GetTransactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.transaction.GetTransactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.transaction.GetTransactionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.GetTransactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && common_status_pb.Status.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.txpull.v1.transaction.Transaction.toObject(includeInstance, f)
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
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse}
 */
proto.txpull.v1.transaction.GetTransactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.transaction.GetTransactionResponse;
  return proto.txpull.v1.transaction.GetTransactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.transaction.GetTransactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse}
 */
proto.txpull.v1.transaction.GetTransactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_status_pb.Status;
      reader.readMessage(value,common_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.txpull.v1.transaction.Transaction;
      reader.readMessage(value,proto.txpull.v1.transaction.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
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
proto.txpull.v1.transaction.GetTransactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.transaction.GetTransactionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.transaction.GetTransactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.transaction.GetTransactionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.txpull.v1.transaction.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional txpull.v1.common.Status status = 1;
 * @return {?proto.txpull.v1.common.Status}
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.getStatus = function() {
  return /** @type{?proto.txpull.v1.common.Status} */ (
    jspb.Message.getWrapperField(this, common_status_pb.Status, 1));
};


/**
 * @param {?proto.txpull.v1.common.Status|undefined} value
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse} returns this
*/
proto.txpull.v1.transaction.GetTransactionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse} returns this
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Transaction transaction = 2;
 * @return {?proto.txpull.v1.transaction.Transaction}
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.getTransaction = function() {
  return /** @type{?proto.txpull.v1.transaction.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.txpull.v1.transaction.Transaction, 2));
};


/**
 * @param {?proto.txpull.v1.transaction.Transaction|undefined} value
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse} returns this
*/
proto.txpull.v1.transaction.GetTransactionResponse.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.transaction.GetTransactionResponse} returns this
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.transaction.GetTransactionResponse.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.txpull.v1.transaction);
