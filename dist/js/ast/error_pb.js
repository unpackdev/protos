// source: ast/error.proto
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
var ast_type_name_pb = require('../ast/type_name_pb.js');
goog.object.extend(proto, ast_type_name_pb);
var ast_parameters_pb = require('../ast/parameters_pb.js');
goog.object.extend(proto, ast_parameters_pb);
goog.exportSymbol('proto.txpull.v1.ast.Error', null, global);
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
proto.txpull.v1.ast.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.ast.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.Error.displayName = 'proto.txpull.v1.ast.Error';
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
proto.txpull.v1.ast.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    parameters: (f = msg.getParameters()) && ast_parameters_pb.ParameterList.toObject(includeInstance, f),
    typeDescription: (f = msg.getTypeDescription()) && ast_type_name_pb.TypeDescription.toObject(includeInstance, f)
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
 * @return {!proto.txpull.v1.ast.Error}
 */
proto.txpull.v1.ast.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.Error;
  return proto.txpull.v1.ast.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.Error}
 */
proto.txpull.v1.ast.Error.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 4:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 5:
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 6:
      var value = new ast_type_name_pb.TypeDescription;
      reader.readMessage(value,ast_type_name_pb.TypeDescription.deserializeBinaryFromReader);
      msg.setTypeDescription(value);
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
proto.txpull.v1.ast.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ast_parameters_pb.ParameterList.serializeBinaryToWriter
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ast.Error.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.txpull.v1.ast.Error.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.Error.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Src src = 4;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.Error.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.Error} returns this
*/
proto.txpull.v1.ast.Error.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Error.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ParameterList parameters = 5;
 * @return {?proto.txpull.v1.ast.ParameterList}
 */
proto.txpull.v1.ast.Error.prototype.getParameters = function() {
  return /** @type{?proto.txpull.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 5));
};


/**
 * @param {?proto.txpull.v1.ast.ParameterList|undefined} value
 * @return {!proto.txpull.v1.ast.Error} returns this
*/
proto.txpull.v1.ast.Error.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Error.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TypeDescription type_description = 6;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.Error.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 6));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ast.Error} returns this
*/
proto.txpull.v1.ast.Error.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Error} returns this
 */
proto.txpull.v1.ast.Error.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Error.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);
