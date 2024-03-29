// source: ast/import.proto
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
var ast_src_pb = require('../ast/src_pb.js');
goog.object.extend(proto, ast_src_pb);
goog.exportSymbol('proto.unpack.v1.ast.Import', null, global);
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
proto.unpack.v1.ast.Import = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.Import.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.Import, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.Import.displayName = 'proto.unpack.v1.ast.Import';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.Import.repeatedFields_ = [11];



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
proto.unpack.v1.ast.Import.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.Import.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.Import} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Import.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    nameLocation: (f = msg.getNameLocation()) && ast_src_pb.Src.toObject(includeInstance, f),
    absolutePath: jspb.Message.getFieldWithDefault(msg, 5, ""),
    file: jspb.Message.getFieldWithDefault(msg, 6, ""),
    scope: jspb.Message.getFieldWithDefault(msg, 7, 0),
    unitAlias: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sourceUnit: jspb.Message.getFieldWithDefault(msg, 9, 0),
    as: jspb.Message.getFieldWithDefault(msg, 10, ""),
    unitAliasesList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.unpack.v1.ast.Import}
 */
proto.unpack.v1.ast.Import.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.Import;
  return proto.unpack.v1.ast.Import.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.Import} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.Import}
 */
proto.unpack.v1.ast.Import.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 4:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setNameLocation(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbsolutePath(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScope(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitAlias(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSourceUnit(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAs(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnitAliases(value);
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
proto.unpack.v1.ast.Import.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.Import.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.Import} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Import.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getNameLocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getAbsolutePath();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getScope();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getUnitAlias();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSourceUnit();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getAs();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUnitAliasesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.Import.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Import.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Src src = 3;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Import.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 3));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Import} returns this
*/
proto.unpack.v1.ast.Import.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Import.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Src name_location = 4;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Import.prototype.getNameLocation = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Import} returns this
*/
proto.unpack.v1.ast.Import.prototype.setNameLocation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.clearNameLocation = function() {
  return this.setNameLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Import.prototype.hasNameLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string absolute_path = 5;
 * @return {string}
 */
proto.unpack.v1.ast.Import.prototype.getAbsolutePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setAbsolutePath = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string file = 6;
 * @return {string}
 */
proto.unpack.v1.ast.Import.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 scope = 7;
 * @return {number}
 */
proto.unpack.v1.ast.Import.prototype.getScope = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setScope = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string unit_alias = 8;
 * @return {string}
 */
proto.unpack.v1.ast.Import.prototype.getUnitAlias = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setUnitAlias = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 source_unit = 9;
 * @return {number}
 */
proto.unpack.v1.ast.Import.prototype.getSourceUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setSourceUnit = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string as = 10;
 * @return {string}
 */
proto.unpack.v1.ast.Import.prototype.getAs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setAs = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string unit_aliases = 11;
 * @return {!Array<string>}
 */
proto.unpack.v1.ast.Import.prototype.getUnitAliasesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.setUnitAliasesList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.addUnitAliases = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.Import} returns this
 */
proto.unpack.v1.ast.Import.prototype.clearUnitAliasesList = function() {
  return this.setUnitAliasesList([]);
};


goog.object.extend(exports, proto.unpack.v1.ast);
