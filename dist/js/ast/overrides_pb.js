// source: ast/overrides.proto
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
var ast_src_pb = require('../ast/src_pb.js');
goog.object.extend(proto, ast_src_pb);
var ast_parameters_pb = require('../ast/parameters_pb.js');
goog.object.extend(proto, ast_parameters_pb);
goog.exportSymbol('proto.txpull.v1.ast.OverrideSpecifier', null, global);
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
proto.txpull.v1.ast.OverrideSpecifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.ast.OverrideSpecifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.OverrideSpecifier.displayName = 'proto.txpull.v1.ast.OverrideSpecifier';
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
proto.txpull.v1.ast.OverrideSpecifier.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.OverrideSpecifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.OverrideSpecifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.OverrideSpecifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    overrides: (f = msg.getOverrides()) && ast_parameters_pb.ParameterList.toObject(includeInstance, f),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 6, 0),
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
 * @return {!proto.txpull.v1.ast.OverrideSpecifier}
 */
proto.txpull.v1.ast.OverrideSpecifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.OverrideSpecifier;
  return proto.txpull.v1.ast.OverrideSpecifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.OverrideSpecifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.OverrideSpecifier}
 */
proto.txpull.v1.ast.OverrideSpecifier.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setOverrides(value);
      break;
    case 5:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 7:
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
proto.txpull.v1.ast.OverrideSpecifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.OverrideSpecifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.OverrideSpecifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.OverrideSpecifier.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ast_parameters_pb.ParameterList.serializeBinaryToWriter
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ParameterList overrides = 4;
 * @return {?proto.txpull.v1.ast.ParameterList}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getOverrides = function() {
  return /** @type{?proto.txpull.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 4));
};


/**
 * @param {?proto.txpull.v1.ast.ParameterList|undefined} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
*/
proto.txpull.v1.ast.OverrideSpecifier.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Src src = 5;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 5));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
*/
proto.txpull.v1.ast.OverrideSpecifier.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 referenced_declaration = 6;
 * @return {number}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional TypeDescription type_description = 7;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 7));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
*/
proto.txpull.v1.ast.OverrideSpecifier.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.OverrideSpecifier} returns this
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.OverrideSpecifier.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);