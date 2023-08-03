// source: ast/payable_conversion.proto
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
goog.exportSymbol('proto.txpull.v1.ast.PayableConversion', null, global);
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
proto.txpull.v1.ast.PayableConversion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txpull.v1.ast.PayableConversion.repeatedFields_, null);
};
goog.inherits(proto.txpull.v1.ast.PayableConversion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txpull.v1.ast.PayableConversion.displayName = 'proto.txpull.v1.ast.PayableConversion';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txpull.v1.ast.PayableConversion.repeatedFields_ = [6,7];



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
proto.txpull.v1.ast.PayableConversion.prototype.toObject = function(opt_includeInstance) {
  return proto.txpull.v1.ast.PayableConversion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txpull.v1.ast.PayableConversion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.PayableConversion.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    payable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    referencedDeclaration: jspb.Message.getFieldWithDefault(msg, 5, 0),
    argumentTypesList: jspb.Message.toObjectList(msg.getArgumentTypesList(),
    ast_type_name_pb.TypeDescription.toObject, includeInstance),
    argumentsList: jspb.Message.toObjectList(msg.getArgumentsList(),
    xds_type_v3_typed_struct_pb.TypedStruct.toObject, includeInstance),
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
 * @return {!proto.txpull.v1.ast.PayableConversion}
 */
proto.txpull.v1.ast.PayableConversion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txpull.v1.ast.PayableConversion;
  return proto.txpull.v1.ast.PayableConversion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txpull.v1.ast.PayableConversion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txpull.v1.ast.PayableConversion}
 */
proto.txpull.v1.ast.PayableConversion.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPayable(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReferencedDeclaration(value);
      break;
    case 6:
      var value = new ast_type_name_pb.TypeDescription;
      reader.readMessage(value,ast_type_name_pb.TypeDescription.deserializeBinaryFromReader);
      msg.addArgumentTypes(value);
      break;
    case 7:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.addArguments(value);
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
proto.txpull.v1.ast.PayableConversion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txpull.v1.ast.PayableConversion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txpull.v1.ast.PayableConversion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txpull.v1.ast.PayableConversion.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPayable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getReferencedDeclaration();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getArgumentTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      ast_type_name_pb.TypeDescription.serializeBinaryToWriter
    );
  }
  f = message.getArgumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
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
proto.txpull.v1.ast.PayableConversion.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NodeType node_type = 2;
 * @return {!proto.txpull.v1.ast.NodeType}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getNodeType = function() {
  return /** @type {!proto.txpull.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.txpull.v1.ast.NodeType} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Src src = 3;
 * @return {?proto.txpull.v1.ast.Src}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getSrc = function() {
  return /** @type{?proto.txpull.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 3));
};


/**
 * @param {?proto.txpull.v1.ast.Src|undefined} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
*/
proto.txpull.v1.ast.PayableConversion.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.PayableConversion.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool payable = 4;
 * @return {boolean}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getPayable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.setPayable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 referenced_declaration = 5;
 * @return {number}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getReferencedDeclaration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.setReferencedDeclaration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated TypeDescription argument_types = 6;
 * @return {!Array<!proto.txpull.v1.ast.TypeDescription>}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getArgumentTypesList = function() {
  return /** @type{!Array<!proto.txpull.v1.ast.TypeDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_type_name_pb.TypeDescription, 6));
};


/**
 * @param {!Array<!proto.txpull.v1.ast.TypeDescription>} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
*/
proto.txpull.v1.ast.PayableConversion.prototype.setArgumentTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.txpull.v1.ast.TypeDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.PayableConversion.prototype.addArgumentTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.txpull.v1.ast.TypeDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.clearArgumentTypesList = function() {
  return this.setArgumentTypesList([]);
};


/**
 * repeated xds.type.v3.TypedStruct arguments = 7;
 * @return {!Array<!proto.xds.type.v3.TypedStruct>}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getArgumentsList = function() {
  return /** @type{!Array<!proto.xds.type.v3.TypedStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 7));
};


/**
 * @param {!Array<!proto.xds.type.v3.TypedStruct>} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
*/
proto.txpull.v1.ast.PayableConversion.prototype.setArgumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.xds.type.v3.TypedStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xds.type.v3.TypedStruct}
 */
proto.txpull.v1.ast.PayableConversion.prototype.addArguments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.xds.type.v3.TypedStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * optional TypeDescription type_description = 8;
 * @return {?proto.txpull.v1.ast.TypeDescription}
 */
proto.txpull.v1.ast.PayableConversion.prototype.getTypeDescription = function() {
  return /** @type{?proto.txpull.v1.ast.TypeDescription} */ (
    jspb.Message.getWrapperField(this, ast_type_name_pb.TypeDescription, 8));
};


/**
 * @param {?proto.txpull.v1.ast.TypeDescription|undefined} value
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
*/
proto.txpull.v1.ast.PayableConversion.prototype.setTypeDescription = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txpull.v1.ast.PayableConversion} returns this
 */
proto.txpull.v1.ast.PayableConversion.prototype.clearTypeDescription = function() {
  return this.setTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txpull.v1.ast.PayableConversion.prototype.hasTypeDescription = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.txpull.v1.ast);
