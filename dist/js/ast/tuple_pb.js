// source: ast/tuple.proto
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
goog.exportSymbol('proto.unpack.v1.ast.Tuple', null, global);
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
proto.unpack.v1.ast.Tuple = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.Tuple.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.Tuple, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.Tuple.displayName = 'proto.unpack.v1.ast.Tuple';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.Tuple.repeatedFields_ = [6];



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
proto.unpack.v1.ast.Tuple.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.Tuple.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.Tuple} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Tuple.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    isConstant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isPure: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    componentsList: jspb.Message.toObjectList(msg.getComponentsList(),
    xds_type_v3_typed_struct_pb.TypedStruct.toObject, includeInstance),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.unpack.v1.ast.Tuple}
 */
proto.unpack.v1.ast.Tuple.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.Tuple;
  return proto.unpack.v1.ast.Tuple.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.Tuple} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.Tuple}
 */
proto.unpack.v1.ast.Tuple.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsConstant(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPure(value);
      break;
    case 6:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.addComponents(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 8:
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
proto.unpack.v1.ast.Tuple.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.Tuple.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.Tuple} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.Tuple.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIsConstant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsPure();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTypeDescription();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.Tuple.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.Tuple.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Src src = 3;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.Tuple.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 3));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
*/
proto.unpack.v1.ast.Tuple.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Tuple.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_constant = 4;
 * @return {boolean}
 */
proto.unpack.v1.ast.Tuple.prototype.getIsConstant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.setIsConstant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_pure = 5;
 * @return {boolean}
 */
proto.unpack.v1.ast.Tuple.prototype.getIsPure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.setIsPure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated xds.type.v3.TypedStruct components = 6;
 * @return {!Array<!proto.xds.type.v3.TypedStruct>}
 */
proto.unpack.v1.ast.Tuple.prototype.getComponentsList = function() {
  return /** @type{!Array<!proto.xds.type.v3.TypedStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 6));
};


/**
 * @param {!Array<!proto.xds.type.v3.TypedStruct>} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
*/
proto.unpack.v1.ast.Tuple.prototype.setComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.xds.type.v3.TypedStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.Tuple.prototype.addComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.xds.type.v3.TypedStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.clearComponentsList = function() {
  return this.setComponentsList([]);
};


/**
 * optional int64 referenced_declaration = 7;
 * @return {number}
 */
proto.unpack.v1.ast.Tuple.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional TypeDescription type_description = 8;
 * @return {?proto.unpack.v1.ast.TypeDescription}
 */
proto.unpack.v1.ast.Tuple.prototype.getTypeDescription = function() {
  return /** @type{?proto.unpack.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 8));
};


/**
 * @param {?proto.unpack.v1.ast.TypeDescription|undefined} value
 * @return {!proto.unpack.v1.ast.Tuple} returns this
*/
proto.unpack.v1.ast.Tuple.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.Tuple} returns this
 */
proto.unpack.v1.ast.Tuple.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.Tuple.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.unpack.v1.ast);
