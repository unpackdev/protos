// source: ir/fallback.proto
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
goog.exportSymbol('proto.txpull.v1.ir.Fallback', null, global);
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
proto.txpull.v1.ir.Fallback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpull.v1.ir.Fallback.repeatedFields_, null);
};
goog.inherits(proto.txpull.v1.ir.Fallback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ir.Fallback.displayName = 'proto.txpull.v1.ir.Fallback';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpull.v1.ir.Fallback.repeatedFields_ = [9,10,11];



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
proto.txpull.v1.ir.Fallback.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ir.Fallback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ir.Fallback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ir.Fallback.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    implemented: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    visibility: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stateMutability: jspb.Message.getFieldWithDefault(msg, 7, 0),
    virtual: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    modifiersList: jspb.Message.toObjectList(msg.getModifiersList(),
    ir_modifier_pb.Modifier.toObject, includeInstance),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    ir_parameter_pb.Parameter.toObject, includeInstance),
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
 * @return {!proto.txpull.v1.ir.Fallback}
 */
proto.txpull.v1.ir.Fallback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ir.Fallback;
  return proto.txpull.v1.ir.Fallback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ir.Fallback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ir.Fallback}
 */
proto.txpull.v1.ir.Fallback.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setImplemented(value);
      break;
    case 6:
      var value = /** @type {!proto.txpull.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 7:
      var value = /** @type {!proto.txpull.v1.ast.Mutability} */ (reader.readEnum());
      msg.setStateMutability(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVirtual(value);
      break;
    case 9:
      var value = new ir_modifier_pb.Modifier;
      reader.readMessage(value,ir_modifier_pb.Modifier.deserializeBinaryFromReader);
      msg.addModifiers(value);
      break;
    case 10:
      var value = new ir_parameter_pb.Parameter;
      reader.readMessage(value,ir_parameter_pb.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 11:
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
proto.txpull.v1.ir.Fallback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ir.Fallback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ir.Fallback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ir.Fallback.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getModifiersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      ir_modifier_pb.Modifier.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      ir_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getReturnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      ir_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ir.Fallback.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional txpull.v1.ast.NodeType node_type = 2;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ir.Fallback.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional txpull.v1.ast.NodeType kind = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ir.Fallback.prototype.getKind = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.txpull.v1.ir.Fallback.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool implemented = 5;
 * @return {boolean}
 */
proto.txpull.v1.ir.Fallback.prototype.getImplemented = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setImplemented = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional txpull.v1.ast.Visibility visibility = 6;
 * @return {!proto.txpull.v1.ast.Visibility}
 */
proto.txpull.v1.ir.Fallback.prototype.getVisibility = function() {
  return /** @type {!proto.txpull.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Visibility} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional txpull.v1.ast.Mutability state_mutability = 7;
 * @return {!proto.txpull.v1.ast.Mutability}
 */
proto.txpull.v1.ir.Fallback.prototype.getStateMutability = function() {
  return /** @type {!proto.txpull.v1.ast.Mutability} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Mutability} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setStateMutability = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool virtual = 8;
 * @return {boolean}
 */
proto.txpull.v1.ir.Fallback.prototype.getVirtual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.setVirtual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated Modifier modifiers = 9;
 * @return {!Array<!proto.txpull.v1.ir.Modifier>}
 */
proto.txpull.v1.ir.Fallback.prototype.getModifiersList = function() {
  return /** @type{!Array<!proto.txpull.v1.ir.Modifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_modifier_pb.Modifier, 9));
};


/**
 * @param {!Array<!proto.txpull.v1.ir.Modifier>} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
*/
proto.txpull.v1.ir.Fallback.prototype.setModifiersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.txpull.v1.ir.Modifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ir.Modifier}
 */
proto.txpull.v1.ir.Fallback.prototype.addModifiers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.txpull.v1.ir.Modifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.clearModifiersList = function() {
  return this.setModifiersList([]);
};


/**
 * repeated Parameter parameters = 10;
 * @return {!Array<!proto.txpull.v1.ir.Parameter>}
 */
proto.txpull.v1.ir.Fallback.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.txpull.v1.ir.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_parameter_pb.Parameter, 10));
};


/**
 * @param {!Array<!proto.txpull.v1.ir.Parameter>} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
*/
proto.txpull.v1.ir.Fallback.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.txpull.v1.ir.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ir.Parameter}
 */
proto.txpull.v1.ir.Fallback.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.txpull.v1.ir.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * repeated Parameter return = 11;
 * @return {!Array<!proto.txpull.v1.ir.Parameter>}
 */
proto.txpull.v1.ir.Fallback.prototype.getReturnList = function() {
  return /** @type{!Array<!proto.txpull.v1.ir.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_parameter_pb.Parameter, 11));
};


/**
 * @param {!Array<!proto.txpull.v1.ir.Parameter>} value
 * @return {!proto.txpull.v1.ir.Fallback} returns this
*/
proto.txpull.v1.ir.Fallback.prototype.setReturnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.txpull.v1.ir.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ir.Parameter}
 */
proto.txpull.v1.ir.Fallback.prototype.addReturn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.txpull.v1.ir.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ir.Fallback} returns this
 */
proto.txpull.v1.ir.Fallback.prototype.clearReturnList = function() {
  return this.setReturnList([]);
};


goog.object.extend(exports, proto.txpull.v1.ir);
