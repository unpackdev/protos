// source: ast/assembly.proto
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
goog.exportSymbol('proto.unpack.v1.ast.Assembly', null, global);
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
proto.unpack.v1.ast.Assembly = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.ast.Assembly, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.Assembly.displayName = 'proto.unpack.v1.ast.Assembly';
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
proto.unpack.v1.ast.Assembly.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.Assembly.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.Assembly} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Assembly.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f)
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
 * @return {!proto.unpack.v1.ast.Assembly}
 */
proto.unpack.v1.ast.Assembly.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.Assembly;
  return proto.unpack.v1.ast.Assembly.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.Assembly} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.Assembly}
 */
proto.unpack.v1.ast.Assembly.deserializeBinaryFromReader = function(msg, reader) {
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
proto.unpack.v1.ast.Assembly.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.Assembly.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.Assembly} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Assembly.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.Assembly.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Assembly} returns this
 */
proto.unpack.v1.ast.Assembly.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Assembly.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Assembly} returns this
 */
proto.unpack.v1.ast.Assembly.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Src src = 3;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Assembly.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 3));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Assembly} returns this
*/
proto.unpack.v1.ast.Assembly.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Assembly} returns this
 */
proto.unpack.v1.ast.Assembly.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Assembly.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.unpack.v1.ast);
