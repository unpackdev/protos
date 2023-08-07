// source: ir/argument.proto
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
var ast_type_name_pb = require('../ast/type_name_pb.js');
goog.object.extend(proto, ast_type_name_pb);
goog.exportSymbol('proto.txpull.v1.ir.Argument', null, global);
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
proto.txpull.v1.ir.Argument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.ir.Argument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ir.Argument.displayName = 'proto.txpull.v1.ir.Argument';
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
proto.txpull.v1.ir.Argument.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ir.Argument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ir.Argument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ir.Argument.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.txpull.v1.ir.Argument}
 */
proto.txpull.v1.ir.Argument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ir.Argument;
  return proto.txpull.v1.ir.Argument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ir.Argument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ir.Argument}
 */
proto.txpull.v1.ir.Argument.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 8:
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
proto.txpull.v1.ir.Argument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ir.Argument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ir.Argument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ir.Argument.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ir.Argument.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.txpull.v1.ir.Argument.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional txpull.v1.ast.NodeType node_type = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ir.Argument.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional txpull.v1.ast.NodeType kind = 4;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ir.Argument.prototype.getKind = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 referenced_declaration = 7;
 * @return {number}
 */
proto.txpull.v1.ir.Argument.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional txpull.v1.ast.TypeDescription type_description = 8;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ir.Argument.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 8));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ir.Argument} returns this
*/
proto.txpull.v1.ir.Argument.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ir.Argument} returns this
 */
proto.txpull.v1.ir.Argument.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ir.Argument.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.txpull.v1.ir);
