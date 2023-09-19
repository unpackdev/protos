// source: ir/function.proto
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
var ir_parameter_pb = require('../ir/parameter_pb.js');
goog.object.extend(proto, ir_parameter_pb);
var ir_modifier_pb = require('../ir/modifier_pb.js');
goog.object.extend(proto, ir_modifier_pb);
var ir_override_pb = require('../ir/override_pb.js');
goog.object.extend(proto, ir_override_pb);
var ir_body_pb = require('../ir/body_pb.js');
goog.object.extend(proto, ir_body_pb);
goog.exportSymbol('proto.unpack.v1.ir.Function', null, global);
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
proto.unpack.v1.ir.Function = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ir.Function.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ir.Function, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ir.Function.displayName = 'proto.unpack.v1.ir.Function';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ir.Function.repeatedFields_ = [10,11,12,13];



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
proto.unpack.v1.ir.Function.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ir.Function.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ir.Function} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Function.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    implemented: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    visibility: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stateMutability: jspb.Message.getFieldWithDefault(msg, 7, 0),
    virtual: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    referencedDeclarationId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    modifiersList: jspb.Message.toObjectList(msg.getModifiersList(),
    ir_modifier_pb.Modifier.toObject, includeInstance),
    overridesList: jspb.Message.toObjectList(msg.getOverridesList(),
    ir_override_pb.Override.toObject, includeInstance),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    ir_parameter_pb.Parameter.toObject, includeInstance),
    body: (f = msg.getBody()) && ir_body_pb.Body.toObject(includeInstance, f),
    returnList: jspb.Message.toObjectList(msg.getReturnList(),
    ir_parameter_pb.Parameter.toObject, includeInstance)
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
 * @return {!proto.unpack.v1.ir.Function}
 */
proto.unpack.v1.ir.Function.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ir.Function;
  return proto.unpack.v1.ir.Function.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ir.Function} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ir.Function}
 */
proto.unpack.v1.ir.Function.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImplemented(value);
      break;
    case 6:
      var value = /** @type {!proto.unpack.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 7:
      var value = /** @type {!proto.unpack.v1.ast.Mutability} */ (reader.readEnum());
      msg.setStateMutability(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVirtual(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclarationId(value);
      break;
    case 10:
      var value = new ir_modifier_pb.Modifier;
      reader.readMessage(value,ir_modifier_pb.Modifier.deserializeBinaryFromReader);
      msg.addModifiers(value);
      break;
    case 11:
      var value = new ir_override_pb.Override;
      reader.readMessage(value,ir_override_pb.Override.deserializeBinaryFromReader);
      msg.addOverrides(value);
      break;
    case 12:
      var value = new ir_parameter_pb.Parameter;
      reader.readMessage(value,ir_parameter_pb.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 14:
      var value = new ir_body_pb.Body;
      reader.readMessage(value,ir_body_pb.Body.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 13:
      var value = new ir_parameter_pb.Parameter;
      reader.readMessage(value,ir_parameter_pb.Parameter.deserializeBinaryFromReader);
      msg.addReturn(value);
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
proto.unpack.v1.ir.Function.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ir.Function.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ir.Function} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Function.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImplemented();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getStateMutability();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getVirtual();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getReferencedDeclarationId();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getModifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      ir_modifier_pb.Modifier.serializeBinaryToWriter
    );
  }
  f = message.getOverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      ir_override_pb.Override.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      ir_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      ir_body_pb.Body.serializeBinaryToWriter
    );
  }
  f = message.getReturnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      ir_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ir.Function.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional unpack.v1.ast.NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.Function.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional unpack.v1.ast.NodeType kind = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.Function.prototype.getKind = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.unpack.v1.ir.Function.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool implemented = 5;
 * @return {boolean}
 */
proto.unpack.v1.ir.Function.prototype.getImplemented = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setImplemented = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional unpack.v1.ast.Visibility visibility = 6;
 * @return {!proto.unpack.v1.ast.Visibility}
 */
proto.unpack.v1.ir.Function.prototype.getVisibility = function() {
  return /** @type {!proto.unpack.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.unpack.v1.ast.Visibility} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional unpack.v1.ast.Mutability state_mutability = 7;
 * @return {!proto.unpack.v1.ast.Mutability}
 */
proto.unpack.v1.ir.Function.prototype.getStateMutability = function() {
  return /** @type {!proto.unpack.v1.ast.Mutability} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.unpack.v1.ast.Mutability} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setStateMutability = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool virtual = 8;
 * @return {boolean}
 */
proto.unpack.v1.ir.Function.prototype.getVirtual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setVirtual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 referenced_declaration_id = 9;
 * @return {number}
 */
proto.unpack.v1.ir.Function.prototype.getReferencedDeclarationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.setReferencedDeclarationId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated Modifier modifiers = 10;
 * @return {!Array<!proto.unpack.v1.ir.Modifier>}
 */
proto.unpack.v1.ir.Function.prototype.getModifiersList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Modifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_modifier_pb.Modifier, 10));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Modifier>} value
 * @return {!proto.unpack.v1.ir.Function} returns this
*/
proto.unpack.v1.ir.Function.prototype.setModifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.unpack.v1.ir.Modifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Modifier}
 */
proto.unpack.v1.ir.Function.prototype.addModifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.unpack.v1.ir.Modifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.clearModifiersList = function() {
  return this.setModifiersList([]);
};


/**
 * repeated Override overrides = 11;
 * @return {!Array<!proto.unpack.v1.ir.Override>}
 */
proto.unpack.v1.ir.Function.prototype.getOverridesList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Override>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_override_pb.Override, 11));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Override>} value
 * @return {!proto.unpack.v1.ir.Function} returns this
*/
proto.unpack.v1.ir.Function.prototype.setOverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.unpack.v1.ir.Override=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Override}
 */
proto.unpack.v1.ir.Function.prototype.addOverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.unpack.v1.ir.Override, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.clearOverridesList = function() {
  return this.setOverridesList([]);
};


/**
 * repeated Parameter parameters = 12;
 * @return {!Array<!proto.unpack.v1.ir.Parameter>}
 */
proto.unpack.v1.ir.Function.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_parameter_pb.Parameter, 12));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Parameter>} value
 * @return {!proto.unpack.v1.ir.Function} returns this
*/
proto.unpack.v1.ir.Function.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.unpack.v1.ir.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Parameter}
 */
proto.unpack.v1.ir.Function.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.unpack.v1.ir.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * optional Body body = 14;
 * @return {?proto.unpack.v1.ir.Body}
 */
proto.unpack.v1.ir.Function.prototype.getBody = function() {
  return /** @type{?proto.unpack.v1.ir.Body} */ (
    jspb.Message.getWrapperField(this, ir_body_pb.Body, 14));
};


/**
 * @param {?proto.unpack.v1.ir.Body|undefined} value
 * @return {!proto.unpack.v1.ir.Function} returns this
*/
proto.unpack.v1.ir.Function.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ir.Function.prototype.hasBody = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated Parameter return = 13;
 * @return {!Array<!proto.unpack.v1.ir.Parameter>}
 */
proto.unpack.v1.ir.Function.prototype.getReturnList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_parameter_pb.Parameter, 13));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Parameter>} value
 * @return {!proto.unpack.v1.ir.Function} returns this
*/
proto.unpack.v1.ir.Function.prototype.setReturnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.unpack.v1.ir.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Parameter}
 */
proto.unpack.v1.ir.Function.prototype.addReturn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.unpack.v1.ir.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Function} returns this
 */
proto.unpack.v1.ir.Function.prototype.clearReturnList = function() {
  return this.setReturnList([]);
};


goog.object.extend(exports, proto.unpack.v1.ir);
