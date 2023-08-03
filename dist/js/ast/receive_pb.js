// source: ast/receive.proto
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
var ast_parameters_pb = require('../ast/parameters_pb.js');
goog.object.extend(proto, ast_parameters_pb);
var ast_body_pb = require('../ast/body_pb.js');
goog.object.extend(proto, ast_body_pb);
goog.exportSymbol('proto.txpull.v1.ast.Receive', null, global);
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
proto.txpull.v1.ast.Receive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.ast.Receive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.Receive.displayName = 'proto.txpull.v1.ast.Receive';
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
proto.txpull.v1.ast.Receive.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.Receive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.Receive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Receive.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    virtual: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    implemented: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    visibility: jspb.Message.getFieldWithDefault(msg, 7, 0),
    stateMutability: jspb.Message.getFieldWithDefault(msg, 8, 0),
    parameters: (f = msg.getParameters()) && ast_parameters_pb.ParameterList.toObject(includeInstance, f),
    returnParameters: (f = msg.getReturnParameters()) && ast_parameters_pb.ParameterList.toObject(includeInstance, f),
    body: (f = msg.getBody()) && ast_body_pb.Body.toObject(includeInstance, f)
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
 * @return {!proto.txpull.v1.ast.Receive}
 */
proto.txpull.v1.ast.Receive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.Receive;
  return proto.txpull.v1.ast.Receive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.Receive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.Receive}
 */
proto.txpull.v1.ast.Receive.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 3:
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVirtual(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImplemented(value);
      break;
    case 7:
      var value = /** @type {!proto.txpull.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 8:
      var value = /** @type {!proto.txpull.v1.ast.Mutability} */ (reader.readEnum());
      msg.setStateMutability(value);
      break;
    case 9:
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 10:
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setReturnParameters(value);
      break;
    case 11:
      var value = new ast_body_pb.Body;
      reader.readMessage(value,ast_body_pb.Body.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.txpull.v1.ast.Receive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.Receive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.Receive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Receive.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getKind();
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
  f = message.getVirtual();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getImplemented();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getStateMutability();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      ast_parameters_pb.ParameterList.serializeBinaryToWriter
    );
  }
  f = message.getReturnParameters();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      ast_parameters_pb.ParameterList.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      ast_body_pb.Body.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ast.Receive.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.Receive.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional NodeType kind = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.Receive.prototype.getKind = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Src src = 4;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.Receive.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
*/
proto.txpull.v1.ast.Receive.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool virtual = 5;
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.getVirtual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setVirtual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool implemented = 6;
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.getImplemented = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setImplemented = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Visibility visibility = 7;
 * @return {!proto.txpull.v1.ast.Visibility}
 */
proto.txpull.v1.ast.Receive.prototype.getVisibility = function() {
  return /** @type {!proto.txpull.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Visibility} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional Mutability state_mutability = 8;
 * @return {!proto.txpull.v1.ast.Mutability}
 */
proto.txpull.v1.ast.Receive.prototype.getStateMutability = function() {
  return /** @type {!proto.txpull.v1.ast.Mutability} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Mutability} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.setStateMutability = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ParameterList parameters = 9;
 * @return {?proto.txpull.v1.ast.ParameterList}
 */
proto.txpull.v1.ast.Receive.prototype.getParameters = function() {
  return /** @type{?proto.txpull.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 9));
};


/**
 * @param {?proto.txpull.v1.ast.ParameterList|undefined} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
*/
proto.txpull.v1.ast.Receive.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ParameterList return_parameters = 10;
 * @return {?proto.txpull.v1.ast.ParameterList}
 */
proto.txpull.v1.ast.Receive.prototype.getReturnParameters = function() {
  return /** @type{?proto.txpull.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 10));
};


/**
 * @param {?proto.txpull.v1.ast.ParameterList|undefined} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
*/
proto.txpull.v1.ast.Receive.prototype.setReturnParameters = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.clearReturnParameters = function() {
  return this.setReturnParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.hasReturnParameters = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Body body = 11;
 * @return {?proto.txpull.v1.ast.Body}
 */
proto.txpull.v1.ast.Receive.prototype.getBody = function() {
  return /** @type{?proto.txpull.v1.ast.Body} */ (
    jspb.Message.getWrapperField(this, ast_body_pb.Body, 11));
};


/**
 * @param {?proto.txpull.v1.ast.Body|undefined} value
 * @return {!proto.txpull.v1.ast.Receive} returns this
*/
proto.txpull.v1.ast.Receive.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Receive} returns this
 */
proto.txpull.v1.ast.Receive.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Receive.prototype.hasBody = function() {
  return jspb.Message.getField(this, 11) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);
