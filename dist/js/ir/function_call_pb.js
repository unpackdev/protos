// source: ir/function_call.proto
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
var ir_argument_pb = require('../ir/argument_pb.js');
goog.object.extend(proto, ir_argument_pb);
goog.exportSymbol('proto.unpack.v1.ir.FunctionCall', null, global);
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
proto.unpack.v1.ir.FunctionCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ir.FunctionCall.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ir.FunctionCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ir.FunctionCall.displayName = 'proto.unpack.v1.ir.FunctionCall';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ir.FunctionCall.repeatedFields_ = [5,6];



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
proto.unpack.v1.ir.FunctionCall.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ir.FunctionCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ir.FunctionCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.FunctionCall.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    argumentTypesList: jspb.Message.toObjectList(msg.getArgumentTypesList(),
    ast_type_name_pb.TypeDescription.toObject, includeInstance),
    argumentsList: jspb.Message.toObjectList(msg.getArgumentsList(),
    ir_argument_pb.Argument.toObject, includeInstance),
    isExternal: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    externalContractId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    externalContractName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    referenceStatementId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    referencedDeclarationId: jspb.Message.getFieldWithDefault(msg, 11, 0),
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
 * @return {!proto.unpack.v1.ir.FunctionCall}
 */
proto.unpack.v1.ir.FunctionCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ir.FunctionCall;
  return proto.unpack.v1.ir.FunctionCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ir.FunctionCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ir.FunctionCall}
 */
proto.unpack.v1.ir.FunctionCall.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 4:
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 5:
      var value = new ast_type_name_pb.TypeDescription;
      reader.readMessage(value,ast_type_name_pb.TypeDescription.deserializeBinaryFromReader);
      msg.addArgumentTypes(value);
      break;
    case 6:
      var value = new ir_argument_pb.Argument;
      reader.readMessage(value,ir_argument_pb.Argument.deserializeBinaryFromReader);
      msg.addArguments(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExternal(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExternalContractId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalContractName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferenceStatementId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclarationId(value);
      break;
    case 12:
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
proto.unpack.v1.ir.FunctionCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ir.FunctionCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ir.FunctionCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.FunctionCall.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getArgumentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
  f = message.getArgumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      ir_argument_pb.Argument.serializeBinaryToWriter
    );
  }
  f = message.getIsExternal();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getExternalContractId();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getExternalContractName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getReferenceStatementId();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getReferencedDeclarationId();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional unpack.v1.ast.NodeType node_type = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional unpack.v1.ast.NodeType kind = 4;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getKind = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated unpack.v1.ast.TypeDescription argument_types = 5;
 * @return {!Array<!proto.unpack.v1.ast.TypeDescription>}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getArgumentTypesList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.TypeDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_type_name_pb.TypeDescription, 5));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.TypeDescription>} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
*/
proto.unpack.v1.ir.FunctionCall.prototype.setArgumentTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.unpack.v1.ast.TypeDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ir.FunctionCall.prototype.addArgumentTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.unpack.v1.ast.TypeDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.clearArgumentTypesList = function() {
  return this.setArgumentTypesList([]);
};


/**
 * repeated Argument arguments = 6;
 * @return {!Array<!proto.unpack.v1.ir.Argument>}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getArgumentsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Argument>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_argument_pb.Argument, 6));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Argument>} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
*/
proto.unpack.v1.ir.FunctionCall.prototype.setArgumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.unpack.v1.ir.Argument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Argument}
 */
proto.unpack.v1.ir.FunctionCall.prototype.addArguments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.unpack.v1.ir.Argument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * optional bool is_external = 7;
 * @return {boolean}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getIsExternal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setIsExternal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int64 external_contract_id = 8;
 * @return {number}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getExternalContractId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setExternalContractId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string external_contract_name = 9;
 * @return {string}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getExternalContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setExternalContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 reference_statement_id = 10;
 * @return {number}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getReferenceStatementId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setReferenceStatementId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 referenced_declaration_id = 11;
 * @return {number}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getReferencedDeclarationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.setReferencedDeclarationId = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional unpack.v1.ast.TypeDescription type_description = 12;
 * @return {?proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ir.FunctionCall.prototype.getTypeDescription = function() {
  return /** @type{?proto.unpack.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 12));
};


/**
 * @param {?proto.unpack.v1.ast.TypeDescription|undefined} value
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
*/
proto.unpack.v1.ir.FunctionCall.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ir.FunctionCall} returns this
 */
proto.unpack.v1.ir.FunctionCall.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ir.FunctionCall.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.unpack.v1.ir);
