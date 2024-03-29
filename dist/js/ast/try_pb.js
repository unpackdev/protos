// source: ast/try.proto
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
var ast_body_pb = require('../ast/body_pb.js');
goog.object.extend(proto, ast_body_pb);
var ast_parameters_pb = require('../ast/parameters_pb.js');
goog.object.extend(proto, ast_parameters_pb);
var xds_type_v3_typed_struct_pb = require('../xds/type/v3/typed_struct_pb.js');
goog.object.extend(proto, xds_type_v3_typed_struct_pb);
goog.exportSymbol('proto.unpack.v1.ast.Try', null, global);
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
proto.unpack.v1.ast.Try = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.Try.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.Try, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.Try.displayName = 'proto.unpack.v1.ast.Try';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.Try.repeatedFields_ = [6];



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
proto.unpack.v1.ast.Try.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.Try.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.Try} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Try.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    expression: (f = msg.getExpression()) && xds_type_v3_typed_struct_pb.TypedStruct.toObject(includeInstance, f),
    clausesList: jspb.Message.toObjectList(msg.getClausesList(),
    xds_type_v3_typed_struct_pb.TypedStruct.toObject, includeInstance),
    returns: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
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
 * @return {!proto.unpack.v1.ast.Try}
 */
proto.unpack.v1.ast.Try.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.Try;
  return proto.unpack.v1.ast.Try.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.Try} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.Try}
 */
proto.unpack.v1.ast.Try.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 4:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 5:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.setExpression(value);
      break;
    case 6:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.addClauses(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReturns(value);
      break;
    case 8:
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setReturnParameters(value);
      break;
    case 9:
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
proto.unpack.v1.ast.Try.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.Try.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.Try} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Try.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getClausesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getReturns();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getReturnParameters();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      ast_parameters_pb.ParameterList.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      ast_body_pb.Body.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.Try.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Try.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional NodeType kind = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Try.prototype.getKind = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Src src = 4;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Try.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Try} returns this
*/
proto.unpack.v1.ast.Try.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Try.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional xds.type.v3.TypedStruct expression = 5;
 * @return {?proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.Try.prototype.getExpression = function() {
  return /** @type{?proto.xds.type.v3.TypedStruct} */ (
    jspb.Message.getWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 5));
};


/**
 * @param {?proto.xds.type.v3.TypedStruct|undefined} value
 * @return {!proto.unpack.v1.ast.Try} returns this
*/
proto.unpack.v1.ast.Try.prototype.setExpression = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.clearExpression = function() {
  return this.setExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Try.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated xds.type.v3.TypedStruct clauses = 6;
 * @return {!Array<!proto.xds.type.v3.TypedStruct>}
 */
proto.unpack.v1.ast.Try.prototype.getClausesList = function() {
  return /** @type{!Array<!proto.xds.type.v3.TypedStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 6));
};


/**
 * @param {!Array<!proto.xds.type.v3.TypedStruct>} value
 * @return {!proto.unpack.v1.ast.Try} returns this
*/
proto.unpack.v1.ast.Try.prototype.setClausesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.xds.type.v3.TypedStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.Try.prototype.addClauses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.xds.type.v3.TypedStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.clearClausesList = function() {
  return this.setClausesList([]);
};


/**
 * optional bool returns = 7;
 * @return {boolean}
 */
proto.unpack.v1.ast.Try.prototype.getReturns = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.setReturns = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional ParameterList return_parameters = 8;
 * @return {?proto.unpack.v1.ast.ParameterList}
 */
proto.unpack.v1.ast.Try.prototype.getReturnParameters = function() {
  return /** @type{?proto.unpack.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 8));
};


/**
 * @param {?proto.unpack.v1.ast.ParameterList|undefined} value
 * @return {!proto.unpack.v1.ast.Try} returns this
*/
proto.unpack.v1.ast.Try.prototype.setReturnParameters = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.clearReturnParameters = function() {
  return this.setReturnParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Try.prototype.hasReturnParameters = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Body body = 9;
 * @return {?proto.unpack.v1.ast.Body}
 */
proto.unpack.v1.ast.Try.prototype.getBody = function() {
  return /** @type{?proto.unpack.v1.ast.Body} */ (
    jspb.Message.getWrapperField(this, ast_body_pb.Body, 9));
};


/**
 * @param {?proto.unpack.v1.ast.Body|undefined} value
 * @return {!proto.unpack.v1.ast.Try} returns this
*/
proto.unpack.v1.ast.Try.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Try} returns this
 */
proto.unpack.v1.ast.Try.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Try.prototype.hasBody = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.unpack.v1.ast);
