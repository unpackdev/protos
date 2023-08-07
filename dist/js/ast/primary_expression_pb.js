// source: ast/primary_expression.proto
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
goog.exportSymbol('proto.txpull.v1.ast.PrimaryExpression', null, global);
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
proto.txpull.v1.ast.PrimaryExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpull.v1.ast.PrimaryExpression.repeatedFields_, null);
};
goog.inherits(proto.txpull.v1.ast.PrimaryExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.PrimaryExpression.displayName = 'proto.txpull.v1.ast.PrimaryExpression';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpull.v1.ast.PrimaryExpression.repeatedFields_ = [10,12];



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
proto.txpull.v1.ast.PrimaryExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.PrimaryExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.PrimaryExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.PrimaryExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hexValue: jspb.Message.getFieldWithDefault(msg, 4, ""),
    nodeType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    kind: jspb.Message.getFieldWithDefault(msg, 6, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    isPure: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    overloadedDeclarationsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    typeName: (f = msg.getTypeName()) && ast_type_name_pb.TypeName.toObject(includeInstance, f),
    argumentTypesList: jspb.Message.toObjectList(msg.getArgumentTypesList(),
    ast_type_name_pb.TypeDescription.toObject, includeInstance),
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
 * @return {!proto.txpull.v1.ast.PrimaryExpression}
 */
proto.txpull.v1.ast.PrimaryExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.PrimaryExpression;
  return proto.txpull.v1.ast.PrimaryExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.PrimaryExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.PrimaryExpression}
 */
proto.txpull.v1.ast.PrimaryExpression.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHexValue(value);
      break;
    case 5:
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 6:
      var value = /** @type {!proto.txpull.v1.ast.NodeType} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 7:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPure(value);
      break;
    case 10:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setOverloadedDeclarationsList(value);
      break;
    case 11:
      var value = new ast_type_name_pb.TypeName;
      reader.readMessage(value,ast_type_name_pb.TypeName.deserializeBinaryFromReader);
      msg.setTypeName(value);
      break;
    case 12:
      var value = new ast_type_name_pb.TypeDescription;
      reader.readMessage(value,ast_type_name_pb.TypeDescription.deserializeBinaryFromReader);
      msg.addArgumentTypes(value);
      break;
    case 13:
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
proto.txpull.v1.ast.PrimaryExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.PrimaryExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.PrimaryExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.PrimaryExpression.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHexValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getIsPure();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getOverloadedDeclarationsList();
  if (f.length > 0) {
    writer.writePackedInt64(
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
  f = message.getArgumentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string hex_value = 4;
 * @return {string}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getHexValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setHexValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional NodeType node_type = 5;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional NodeType kind = 6;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getKind = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Src src = 7;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 7));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
*/
proto.txpull.v1.ast.PrimaryExpression.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 referenced_declaration = 8;
 * @return {number}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool is_pure = 9;
 * @return {boolean}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getIsPure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setIsPure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated int64 overloaded_declarations = 10;
 * @return {!Array<number>}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getOverloadedDeclarationsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.setOverloadedDeclarationsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.addOverloadedDeclarations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.clearOverloadedDeclarationsList = function() {
  return this.setOverloadedDeclarationsList([]);
};


/**
 * optional TypeName type_name = 11;
 * @return {?proto.txpull.v1.ast.TypeName}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getTypeName = function() {
  return /** @type{?proto.txpull.v1.ast.TypeName} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeName, 11));
};


/**
 * @param {?proto.txpull.v1.ast.TypeName|undefined} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
*/
proto.txpull.v1.ast.PrimaryExpression.prototype.setTypeName = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.clearTypeName = function() {
  return this.setTypeName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.hasTypeName = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated TypeDescription argument_types = 12;
 * @return {!Array<!proto.txpull.v1.ast.TypeDescription>}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getArgumentTypesList = function() {
  return /** @type{!Array<!proto.txpull.v1.ast.TypeDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_type_name_pb.TypeDescription, 12));
};


/**
 * @param {!Array<!proto.txpull.v1.ast.TypeDescription>} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
*/
proto.txpull.v1.ast.PrimaryExpression.prototype.setArgumentTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.txpull.v1.ast.TypeDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.addArgumentTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.txpull.v1.ast.TypeDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.clearArgumentTypesList = function() {
  return this.setArgumentTypesList([]);
};


/**
 * optional TypeDescription type_description = 13;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 13));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
*/
proto.txpull.v1.ast.PrimaryExpression.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.PrimaryExpression} returns this
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.PrimaryExpression.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 13) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);
