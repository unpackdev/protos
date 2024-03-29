// source: ast/binary_operation.proto
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
var xds_type_v3_typed_struct_pb = require('../xds/type/v3/typed_struct_pb.js');
goog.object.extend(proto, xds_type_v3_typed_struct_pb);
goog.exportSymbol('proto.unpack.v1.ast.BinaryOperation', null, global);
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
proto.unpack.v1.ast.BinaryOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.ast.BinaryOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.BinaryOperation.displayName = 'proto.unpack.v1.ast.BinaryOperation';
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
proto.unpack.v1.ast.BinaryOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.BinaryOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.BinaryOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.BinaryOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isConstant: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isPure: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    nodeType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    operator: jspb.Message.getFieldWithDefault(msg, 6, 0),
    leftExpression: (f = msg.getLeftExpression()) && xds_type_v3_typed_struct_pb.TypedStruct.toObject(includeInstance, f),
    rightExpression: (f = msg.getRightExpression()) && xds_type_v3_typed_struct_pb.TypedStruct.toObject(includeInstance, f),
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
 * @return {!proto.unpack.v1.ast.BinaryOperation}
 */
proto.unpack.v1.ast.BinaryOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.BinaryOperation;
  return proto.unpack.v1.ast.BinaryOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.BinaryOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.BinaryOperation}
 */
proto.unpack.v1.ast.BinaryOperation.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConstant(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPure(value);
      break;
    case 4:
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 5:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 6:
      var value = /** @type {!proto.unpack.v1.ast.Operator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 7:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.setLeftExpression(value);
      break;
    case 8:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.setRightExpression(value);
      break;
    case 9:
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
proto.unpack.v1.ast.BinaryOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.BinaryOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.BinaryOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.BinaryOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsConstant();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsPure();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getNodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
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
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getLeftExpression();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getRightExpression();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_constant = 2;
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getIsConstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.setIsConstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_pure = 3;
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getIsPure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.setIsPure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional NodeType node_type = 4;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Src src = 5;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 5));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
*/
proto.unpack.v1.ast.BinaryOperation.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Operator operator = 6;
 * @return {!proto.unpack.v1.ast.Operator}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getOperator = function() {
  return /** @type {!proto.unpack.v1.ast.Operator} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.unpack.v1.ast.Operator} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional xds.type.v3.TypedStruct left_expression = 7;
 * @return {?proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getLeftExpression = function() {
  return /** @type{?proto.xds.type.v3.TypedStruct} */ (
    jspb.Message.getWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 7));
};


/**
 * @param {?proto.xds.type.v3.TypedStruct|undefined} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
*/
proto.unpack.v1.ast.BinaryOperation.prototype.setLeftExpression = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.clearLeftExpression = function() {
  return this.setLeftExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.hasLeftExpression = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional xds.type.v3.TypedStruct right_expression = 8;
 * @return {?proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getRightExpression = function() {
  return /** @type{?proto.xds.type.v3.TypedStruct} */ (
    jspb.Message.getWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 8));
};


/**
 * @param {?proto.xds.type.v3.TypedStruct|undefined} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
*/
proto.unpack.v1.ast.BinaryOperation.prototype.setRightExpression = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.clearRightExpression = function() {
  return this.setRightExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.hasRightExpression = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TypeDescription type_description = 9;
 * @return {?proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.getTypeDescription = function() {
  return /** @type{?proto.unpack.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 9));
};


/**
 * @param {?proto.unpack.v1.ast.TypeDescription|undefined} value
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
*/
proto.unpack.v1.ast.BinaryOperation.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.BinaryOperation} returns this
 */
proto.unpack.v1.ast.BinaryOperation.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.BinaryOperation.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.unpack.v1.ast);
