// source: sources/source.proto
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

goog.exportSymbol('proto.unpack.v1.sources.SourceUnit', null, global);
goog.exportSymbol('proto.unpack.v1.sources.Sources', null, global);
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
proto.unpack.v1.sources.SourceUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.sources.SourceUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.sources.SourceUnit.displayName = 'proto.unpack.v1.sources.SourceUnit';
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
proto.unpack.v1.sources.Sources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.sources.Sources.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.sources.Sources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.sources.Sources.displayName = 'proto.unpack.v1.sources.Sources';
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
proto.unpack.v1.sources.SourceUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.sources.SourceUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.sources.SourceUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.sources.SourceUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    content: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.unpack.v1.sources.SourceUnit}
 */
proto.unpack.v1.sources.SourceUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.sources.SourceUnit;
  return proto.unpack.v1.sources.SourceUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.sources.SourceUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.sources.SourceUnit}
 */
proto.unpack.v1.sources.SourceUnit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.unpack.v1.sources.SourceUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.sources.SourceUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.sources.SourceUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.sources.SourceUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.unpack.v1.sources.SourceUnit.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.sources.SourceUnit} returns this
 */
proto.unpack.v1.sources.SourceUnit.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.unpack.v1.sources.SourceUnit.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.sources.SourceUnit} returns this
 */
proto.unpack.v1.sources.SourceUnit.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.unpack.v1.sources.SourceUnit.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.sources.SourceUnit} returns this
 */
proto.unpack.v1.sources.SourceUnit.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.sources.Sources.repeatedFields_ = [4];



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
proto.unpack.v1.sources.Sources.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.sources.Sources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.sources.Sources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.sources.Sources.toObject = function(includeInstance, msg) {
  var f, obj = {
    entrySourceUnitName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maskLocalSourcesPath: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    localSourcesPath: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sourceUnitsList: jspb.Message.toObjectList(msg.getSourceUnitsList(),
    proto.unpack.v1.sources.SourceUnit.toObject, includeInstance)
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
 * @return {!proto.unpack.v1.sources.Sources}
 */
proto.unpack.v1.sources.Sources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.sources.Sources;
  return proto.unpack.v1.sources.Sources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.sources.Sources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.sources.Sources}
 */
proto.unpack.v1.sources.Sources.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrySourceUnitName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMaskLocalSourcesPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalSourcesPath(value);
      break;
    case 4:
      var value = new proto.unpack.v1.sources.SourceUnit;
      reader.readMessage(value,proto.unpack.v1.sources.SourceUnit.deserializeBinaryFromReader);
      msg.addSourceUnits(value);
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
proto.unpack.v1.sources.Sources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.sources.Sources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.sources.Sources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.sources.Sources.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntrySourceUnitName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMaskLocalSourcesPath();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLocalSourcesPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSourceUnitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.unpack.v1.sources.SourceUnit.serializeBinaryToWriter
    );
  }
};


/**
 * optional string entry_source_unit_name = 1;
 * @return {string}
 */
proto.unpack.v1.sources.Sources.prototype.getEntrySourceUnitName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.sources.Sources} returns this
 */
proto.unpack.v1.sources.Sources.prototype.setEntrySourceUnitName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool mask_local_sources_path = 2;
 * @return {boolean}
 */
proto.unpack.v1.sources.Sources.prototype.getMaskLocalSourcesPath = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.sources.Sources} returns this
 */
proto.unpack.v1.sources.Sources.prototype.setMaskLocalSourcesPath = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string local_sources_path = 3;
 * @return {string}
 */
proto.unpack.v1.sources.Sources.prototype.getLocalSourcesPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.sources.Sources} returns this
 */
proto.unpack.v1.sources.Sources.prototype.setLocalSourcesPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated SourceUnit source_units = 4;
 * @return {!Array<!proto.unpack.v1.sources.SourceUnit>}
 */
proto.unpack.v1.sources.Sources.prototype.getSourceUnitsList = function() {
  return /** @type{!Array<!proto.unpack.v1.sources.SourceUnit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.unpack.v1.sources.SourceUnit, 4));
};


/**
 * @param {!Array<!proto.unpack.v1.sources.SourceUnit>} value
 * @return {!proto.unpack.v1.sources.Sources} returns this
*/
proto.unpack.v1.sources.Sources.prototype.setSourceUnitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.unpack.v1.sources.SourceUnit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.sources.SourceUnit}
 */
proto.unpack.v1.sources.Sources.prototype.addSourceUnits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.unpack.v1.sources.SourceUnit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.sources.Sources} returns this
 */
proto.unpack.v1.sources.Sources.prototype.clearSourceUnitsList = function() {
  return this.setSourceUnitsList([]);
};


goog.object.extend(exports, proto.unpack.v1.sources);
