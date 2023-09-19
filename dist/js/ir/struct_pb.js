// source: ir/struct.proto
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
var ir_parameter_pb = require('../ir/parameter_pb.js');
goog.object.extend(proto, ir_parameter_pb);
goog.exportSymbol('proto.unpack.v1.ir.Struct', null, global);
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
proto.unpack.v1.ir.Struct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ir.Struct.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ir.Struct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ir.Struct.displayName = 'proto.unpack.v1.ir.Struct';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ir.Struct.repeatedFields_ = [9];



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
proto.unpack.v1.ir.Struct.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ir.Struct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ir.Struct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Struct.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    canonicalName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    referencedDeclarationId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    visibility: jspb.Message.getFieldWithDefault(msg, 7, 0),
    storageLocation: jspb.Message.getFieldWithDefault(msg, 8, 0),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    ir_parameter_pb.Parameter.toObject, includeInstance),
    type: jspb.Message.getFieldWithDefault(msg, 10, ""),
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
 * @return {!proto.unpack.v1.ir.Struct}
 */
proto.unpack.v1.ir.Struct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ir.Struct;
  return proto.unpack.v1.ir.Struct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ir.Struct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ir.Struct}
 */
proto.unpack.v1.ir.Struct.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCanonicalName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclarationId(value);
      break;
    case 7:
      var value = /** @type {!proto.unpack.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 8:
      var value = /** @type {!proto.unpack.v1.ast.StorageLocation} */ (reader.readEnum());
      msg.setStorageLocation(value);
      break;
    case 9:
      var value = new ir_parameter_pb.Parameter;
      reader.readMessage(value,ir_parameter_pb.Parameter.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 11:
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
proto.unpack.v1.ir.Struct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ir.Struct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ir.Struct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ir.Struct.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCanonicalName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReferencedDeclarationId();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getStorageLocation();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      ir_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ir.Struct.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional unpack.v1.ast.NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.Struct.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional unpack.v1.ast.NodeType kind = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ir.Struct.prototype.getKind = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.unpack.v1.ir.Struct.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string canonical_name = 5;
 * @return {string}
 */
proto.unpack.v1.ir.Struct.prototype.getCanonicalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setCanonicalName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 referenced_declaration_id = 6;
 * @return {number}
 */
proto.unpack.v1.ir.Struct.prototype.getReferencedDeclarationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setReferencedDeclarationId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional unpack.v1.ast.Visibility visibility = 7;
 * @return {!proto.unpack.v1.ast.Visibility}
 */
proto.unpack.v1.ir.Struct.prototype.getVisibility = function() {
  return /** @type {!proto.unpack.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.unpack.v1.ast.Visibility} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional unpack.v1.ast.StorageLocation storage_location = 8;
 * @return {!proto.unpack.v1.ast.StorageLocation}
 */
proto.unpack.v1.ir.Struct.prototype.getStorageLocation = function() {
  return /** @type {!proto.unpack.v1.ast.StorageLocation} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.unpack.v1.ast.StorageLocation} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setStorageLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated Parameter members = 9;
 * @return {!Array<!proto.unpack.v1.ir.Parameter>}
 */
proto.unpack.v1.ir.Struct.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.unpack.v1.ir.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ir_parameter_pb.Parameter, 9));
};


/**
 * @param {!Array<!proto.unpack.v1.ir.Parameter>} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
*/
proto.unpack.v1.ir.Struct.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.unpack.v1.ir.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ir.Parameter}
 */
proto.unpack.v1.ir.Struct.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.unpack.v1.ir.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * optional string type = 10;
 * @return {string}
 */
proto.unpack.v1.ir.Struct.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional unpack.v1.ast.TypeDescription type_description = 11;
 * @return {?proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ir.Struct.prototype.getTypeDescription = function() {
  return /** @type{?proto.unpack.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 11));
};


/**
 * @param {?proto.unpack.v1.ast.TypeDescription|undefined} value
 * @return {!proto.unpack.v1.ir.Struct} returns this
*/
proto.unpack.v1.ir.Struct.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ir.Struct} returns this
 */
proto.unpack.v1.ir.Struct.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ir.Struct.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 11) != null;
};


goog.object.extend(exports, proto.unpack.v1.ir);
