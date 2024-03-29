// source: ast/modifiers.proto
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
var ast_parameters_pb = require('../ast/parameters_pb.js');
goog.object.extend(proto, ast_parameters_pb);
var ast_body_pb = require('../ast/body_pb.js');
goog.object.extend(proto, ast_body_pb);
var xds_type_v3_typed_struct_pb = require('../xds/type/v3/typed_struct_pb.js');
goog.object.extend(proto, xds_type_v3_typed_struct_pb);
goog.exportSymbol('proto.unpack.v1.ast.Modifier', null, global);
goog.exportSymbol('proto.unpack.v1.ast.ModifierInvocation', null, global);
goog.exportSymbol('proto.unpack.v1.ast.ModifierName', null, global);
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
proto.unpack.v1.ast.ModifierName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.ast.ModifierName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.ModifierName.displayName = 'proto.unpack.v1.ast.ModifierName';
}
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
proto.unpack.v1.ast.Modifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.ast.Modifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.Modifier.displayName = 'proto.unpack.v1.ast.Modifier';
}
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
proto.unpack.v1.ast.ModifierInvocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.ModifierInvocation.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.ModifierInvocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.ModifierInvocation.displayName = 'proto.unpack.v1.ast.ModifierInvocation';
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
proto.unpack.v1.ast.ModifierName.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.ModifierName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.ModifierName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ModifierName.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.unpack.v1.ast.ModifierName}
 */
proto.unpack.v1.ast.ModifierName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.ModifierName;
  return proto.unpack.v1.ast.ModifierName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.ModifierName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.ModifierName}
 */
proto.unpack.v1.ast.ModifierName.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 5:
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
proto.unpack.v1.ast.ModifierName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.ModifierName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.ModifierName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ModifierName.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
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
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.ModifierName.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
 */
proto.unpack.v1.ast.ModifierName.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.unpack.v1.ast.ModifierName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
 */
proto.unpack.v1.ast.ModifierName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.ModifierName.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
 */
proto.unpack.v1.ast.ModifierName.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 referenced_declaration = 4;
 * @return {number}
 */
proto.unpack.v1.ast.ModifierName.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
 */
proto.unpack.v1.ast.ModifierName.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Src src = 5;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.ModifierName.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 5));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
*/
proto.unpack.v1.ast.ModifierName.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.ModifierName} returns this
 */
proto.unpack.v1.ast.ModifierName.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.ModifierName.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.unpack.v1.ast.Modifier.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.Modifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.Modifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Modifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    nameLocation: (f = msg.getNameLocation()) && ast_src_pb.Src.toObject(includeInstance, f),
    virtual: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    visibility: jspb.Message.getFieldWithDefault(msg, 7, 0),
    parameters: (f = msg.getParameters()) && ast_parameters_pb.ParameterList.toObject(includeInstance, f),
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
 * @return {!proto.unpack.v1.ast.Modifier}
 */
proto.unpack.v1.ast.Modifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.Modifier;
  return proto.unpack.v1.ast.Modifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.Modifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.Modifier}
 */
proto.unpack.v1.ast.Modifier.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 5:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setNameLocation(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVirtual(value);
      break;
    case 7:
      var value = /** @type {!proto.unpack.v1.ast.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 8:
      var value = new ast_parameters_pb.ParameterList;
      reader.readMessage(value,ast_parameters_pb.ParameterList.deserializeBinaryFromReader);
      msg.setParameters(value);
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
proto.unpack.v1.ast.Modifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.Modifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.Modifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Modifier.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNameLocation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getVirtual();
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
  f = message.getParameters();
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
proto.unpack.v1.ast.Modifier.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.unpack.v1.ast.Modifier.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Modifier.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Src src = 4;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Modifier.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 4));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
*/
proto.unpack.v1.ast.Modifier.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Modifier.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Src name_location = 5;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Modifier.prototype.getNameLocation = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 5));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
*/
proto.unpack.v1.ast.Modifier.prototype.setNameLocation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.clearNameLocation = function() {
  return this.setNameLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Modifier.prototype.hasNameLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool virtual = 6;
 * @return {boolean}
 */
proto.unpack.v1.ast.Modifier.prototype.getVirtual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.setVirtual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Visibility visibility = 7;
 * @return {!proto.unpack.v1.ast.Visibility}
 */
proto.unpack.v1.ast.Modifier.prototype.getVisibility = function() {
  return /** @type {!proto.unpack.v1.ast.Visibility} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.unpack.v1.ast.Visibility} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ParameterList parameters = 8;
 * @return {?proto.unpack.v1.ast.ParameterList}
 */
proto.unpack.v1.ast.Modifier.prototype.getParameters = function() {
  return /** @type{?proto.unpack.v1.ast.ParameterList} */ (
    jspb.Message.getWrapperField(this, ast_parameters_pb.ParameterList, 8));
};


/**
 * @param {?proto.unpack.v1.ast.ParameterList|undefined} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
*/
proto.unpack.v1.ast.Modifier.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Modifier.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Body body = 9;
 * @return {?proto.unpack.v1.ast.Body}
 */
proto.unpack.v1.ast.Modifier.prototype.getBody = function() {
  return /** @type{?proto.unpack.v1.ast.Body} */ (
    jspb.Message.getWrapperField(this, ast_body_pb.Body, 9));
};


/**
 * @param {?proto.unpack.v1.ast.Body|undefined} value
 * @return {!proto.unpack.v1.ast.Modifier} returns this
*/
proto.unpack.v1.ast.Modifier.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Modifier} returns this
 */
proto.unpack.v1.ast.Modifier.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Modifier.prototype.hasBody = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.ModifierInvocation.repeatedFields_ = [6,7];



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
proto.unpack.v1.ast.ModifierInvocation.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.ModifierInvocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.ModifierInvocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ModifierInvocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    argumentsList: jspb.Message.toObjectList(msg.getArgumentsList(),
    xds_type_v3_typed_struct_pb.TypedStruct.toObject, includeInstance),
    argumentTypesList: jspb.Message.toObjectList(msg.getArgumentTypesList(),
    ast_type_name_pb.TypeDescription.toObject, includeInstance),
    modifierName: (f = msg.getModifierName()) && proto.unpack.v1.ast.ModifierName.toObject(includeInstance, f)
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
 * @return {!proto.unpack.v1.ast.ModifierInvocation}
 */
proto.unpack.v1.ast.ModifierInvocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.ModifierInvocation;
  return proto.unpack.v1.ast.ModifierInvocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.ModifierInvocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.ModifierInvocation}
 */
proto.unpack.v1.ast.ModifierInvocation.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 6:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.addArguments(value);
      break;
    case 7:
      var value = new ast_type_name_pb.TypeDescription;
      reader.readMessage(value,ast_type_name_pb.TypeDescription.deserializeBinaryFromReader);
      msg.addArgumentTypes(value);
      break;
    case 8:
      var value = new proto.unpack.v1.ast.ModifierName;
      reader.readMessage(value,proto.unpack.v1.ast.ModifierName.deserializeBinaryFromReader);
      msg.setModifierName(value);
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
proto.unpack.v1.ast.ModifierInvocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.ModifierInvocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.ModifierInvocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ModifierInvocation.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getArgumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getArgumentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
  f = message.getModifierName();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.unpack.v1.ast.ModifierName.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional NodeType kind = 4;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getKind = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Src src = 5;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 5));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
*/
proto.unpack.v1.ast.ModifierInvocation.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated xds.type.v3.TypedStruct arguments = 6;
 * @return {!Array<!proto.xds.type.v3.TypedStruct>}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getArgumentsList = function() {
  return /** @type{!Array<!proto.xds.type.v3.TypedStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 6));
};


/**
 * @param {!Array<!proto.xds.type.v3.TypedStruct>} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
*/
proto.unpack.v1.ast.ModifierInvocation.prototype.setArgumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.xds.type.v3.TypedStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.addArguments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.xds.type.v3.TypedStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * repeated TypeDescription argument_types = 7;
 * @return {!Array<!proto.unpack.v1.ast.TypeDescription>}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getArgumentTypesList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.TypeDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_type_name_pb.TypeDescription, 7));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.TypeDescription>} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
*/
proto.unpack.v1.ast.ModifierInvocation.prototype.setArgumentTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.unpack.v1.ast.TypeDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.addArgumentTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.unpack.v1.ast.TypeDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.clearArgumentTypesList = function() {
  return this.setArgumentTypesList([]);
};


/**
 * optional ModifierName modifier_name = 8;
 * @return {?proto.unpack.v1.ast.ModifierName}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.getModifierName = function() {
  return /** @type{?proto.unpack.v1.ast.ModifierName} */ (
    jspb.Message.getWrapperField(this, proto.unpack.v1.ast.ModifierName, 8));
};


/**
 * @param {?proto.unpack.v1.ast.ModifierName|undefined} value
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
*/
proto.unpack.v1.ast.ModifierInvocation.prototype.setModifierName = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.ModifierInvocation} returns this
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.clearModifierName = function() {
  return this.setModifierName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.ModifierInvocation.prototype.hasModifierName = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.unpack.v1.ast);
