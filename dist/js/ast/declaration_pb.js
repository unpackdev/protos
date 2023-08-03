// source: ast/declaration.proto
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
goog.exportSymbol('proto.txpull.v1.ast.Declaration', null, global);
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
proto.txpull.v1.ast.Declaration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txpull.v1.ast.Declaration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.Declaration.displayName = 'proto.txpull.v1.ast.Declaration';
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
proto.txpull.v1.ast.Declaration.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.Declaration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.Declaration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Declaration.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    scope: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isConstant: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isStateVariable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    storageLocation: jspb.Message.getFieldWithDefault(msg, 8, 0),
    mutability: jspb.Message.getFieldWithDefault(msg, 9, 0),
    visibility: jspb.Message.getFieldWithDefault(msg, 10, 0),
    typeName: (f = msg.getTypeName()) && ast_type_name_pb.TypeName.toObject(includeInstance, f),
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
 * @return {!proto.txpull.v1.ast.Declaration}
 */
proto.txpull.v1.ast.Declaration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.Declaration;
  return proto.txpull.v1.ast.Declaration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.Declaration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.Declaration}
 */
proto.txpull.v1.ast.Declaration.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScope(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConstant(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStateVariable(value);
      break;
    case 8:
      var value = /** @type {!proto.txpull.v1.ast.StorageLocation} */ (reader.readEnum());
      msg.setStorageLocation(value);
      break;
    case 9:
      var value = /** @type {!proto.txpull.v1.ast.Mutability} */ (reader.readEnum());
      msg.setMutability(value);
      break;
    case 10:
      var value = /** @type {!proto.txpull.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 11:
      var value = new ast_type_name_pb.TypeName;
      reader.readMessage(value,ast_type_name_pb.TypeName.deserializeBinaryFromReader);
      msg.setTypeName(value);
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
proto.txpull.v1.ast.Declaration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.Declaration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.Declaration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.Declaration.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getScope();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getIsConstant();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsStateVariable();
  if (f) {
    writer.writeBool(
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
  f = message.getMutability();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTypeName();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      ast_type_name_pb.TypeName.serializeBinaryToWriter
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
proto.txpull.v1.ast.Declaration.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.txpull.v1.ast.Declaration.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.Declaration.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Src src = 4;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.Declaration.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
*/
proto.txpull.v1.ast.Declaration.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Declaration.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 scope = 5;
 * @return {number}
 */
proto.txpull.v1.ast.Declaration.prototype.getScope = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setScope = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_constant = 6;
 * @return {boolean}
 */
proto.txpull.v1.ast.Declaration.prototype.getIsConstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setIsConstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_state_variable = 7;
 * @return {boolean}
 */
proto.txpull.v1.ast.Declaration.prototype.getIsStateVariable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setIsStateVariable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional StorageLocation storage_location = 8;
 * @return {!proto.txpull.v1.ast.StorageLocation}
 */
proto.txpull.v1.ast.Declaration.prototype.getStorageLocation = function() {
  return /** @type {!proto.txpull.v1.ast.StorageLocation} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.txpull.v1.ast.StorageLocation} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setStorageLocation = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional Mutability mutability = 9;
 * @return {!proto.txpull.v1.ast.Mutability}
 */
proto.txpull.v1.ast.Declaration.prototype.getMutability = function() {
  return /** @type {!proto.txpull.v1.ast.Mutability} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Mutability} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setMutability = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional Visibility visibility = 10;
 * @return {!proto.txpull.v1.ast.Visibility}
 */
proto.txpull.v1.ast.Declaration.prototype.getVisibility = function() {
  return /** @type {!proto.txpull.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.txpull.v1.ast.Visibility} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional TypeName type_name = 11;
 * @return {?proto.txpull.v1.ast.TypeName}
 */
proto.txpull.v1.ast.Declaration.prototype.getTypeName = function() {
  return /** @type{?proto.txpull.v1.ast.TypeName} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeName, 11));
};


/**
 * @param {?proto.txpull.v1.ast.TypeName|undefined} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
*/
proto.txpull.v1.ast.Declaration.prototype.setTypeName = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.clearTypeName = function() {
  return this.setTypeName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Declaration.prototype.hasTypeName = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional TypeDescription type_description = 12;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.Declaration.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 12));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ast.Declaration} returns this
*/
proto.txpull.v1.ast.Declaration.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.Declaration} returns this
 */
proto.txpull.v1.ast.Declaration.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.Declaration.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);
