// source: ast/source_unit.proto
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
var ast_node_pb = require('../ast/node_pb.js');
goog.object.extend(proto, ast_node_pb);
var ast_comment_pb = require('../ast/comment_pb.js');
goog.object.extend(proto, ast_comment_pb);
var xds_type_v3_typed_struct_pb = require('../xds/type/v3/typed_struct_pb.js');
goog.object.extend(proto, xds_type_v3_typed_struct_pb);
goog.exportSymbol('proto.unpack.v1.ast.ExportedSymbol', null, global);
goog.exportSymbol('proto.unpack.v1.ast.RootSourceUnit', null, global);
goog.exportSymbol('proto.unpack.v1.ast.SourceUnit', null, global);
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
proto.unpack.v1.ast.RootSourceUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.RootSourceUnit.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.RootSourceUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.RootSourceUnit.displayName = 'proto.unpack.v1.ast.RootSourceUnit';
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
proto.unpack.v1.ast.SourceUnit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.unpack.v1.ast.SourceUnit.repeatedFields_, null);
};
goog.inherits(proto.unpack.v1.ast.SourceUnit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.SourceUnit.displayName = 'proto.unpack.v1.ast.SourceUnit';
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
proto.unpack.v1.ast.ExportedSymbol = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.unpack.v1.ast.ExportedSymbol, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.unpack.v1.ast.ExportedSymbol.displayName = 'proto.unpack.v1.ast.ExportedSymbol';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.RootSourceUnit.repeatedFields_ = [4,5,6];



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
proto.unpack.v1.ast.RootSourceUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.RootSourceUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.RootSourceUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.RootSourceUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entrySourceUnit: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nodeType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    globalNodesList: jspb.Message.toObjectList(msg.getGlobalNodesList(),
    xds_type_v3_typed_struct_pb.TypedStruct.toObject, includeInstance),
    sourceUnitsList: jspb.Message.toObjectList(msg.getSourceUnitsList(),
    proto.unpack.v1.ast.SourceUnit.toObject, includeInstance),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    ast_comment_pb.Comment.toObject, includeInstance)
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
 * @return {!proto.unpack.v1.ast.RootSourceUnit}
 */
proto.unpack.v1.ast.RootSourceUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.RootSourceUnit;
  return proto.unpack.v1.ast.RootSourceUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.RootSourceUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.RootSourceUnit}
 */
proto.unpack.v1.ast.RootSourceUnit.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEntrySourceUnit(value);
      break;
    case 3:
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 4:
      var value = new xds_type_v3_typed_struct_pb.TypedStruct;
      reader.readMessage(value,xds_type_v3_typed_struct_pb.TypedStruct.deserializeBinaryFromReader);
      msg.addGlobalNodes(value);
      break;
    case 5:
      var value = new proto.unpack.v1.ast.SourceUnit;
      reader.readMessage(value,proto.unpack.v1.ast.SourceUnit.deserializeBinaryFromReader);
      msg.addSourceUnits(value);
      break;
    case 6:
      var value = new ast_comment_pb.Comment;
      reader.readMessage(value,ast_comment_pb.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
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
proto.unpack.v1.ast.RootSourceUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.RootSourceUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.RootSourceUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.RootSourceUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEntrySourceUnit();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getGlobalNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      xds_type_v3_typed_struct_pb.TypedStruct.serializeBinaryToWriter
    );
  }
  f = message.getSourceUnitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.unpack.v1.ast.SourceUnit.serializeBinaryToWriter
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      ast_comment_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 entry_source_unit = 2;
 * @return {number}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getEntrySourceUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.setEntrySourceUnit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional NodeType node_type = 3;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated xds.type.v3.TypedStruct global_nodes = 4;
 * @return {!Array<!proto.xds.type.v3.TypedStruct>}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getGlobalNodesList = function() {
  return /** @type{!Array<!proto.xds.type.v3.TypedStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, xds_type_v3_typed_struct_pb.TypedStruct, 4));
};


/**
 * @param {!Array<!proto.xds.type.v3.TypedStruct>} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
*/
proto.unpack.v1.ast.RootSourceUnit.prototype.setGlobalNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.xds.type.v3.TypedStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xds.type.v3.TypedStruct}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.addGlobalNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.xds.type.v3.TypedStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.clearGlobalNodesList = function() {
  return this.setGlobalNodesList([]);
};


/**
 * repeated SourceUnit source_units = 5;
 * @return {!Array<!proto.unpack.v1.ast.SourceUnit>}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getSourceUnitsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.SourceUnit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.unpack.v1.ast.SourceUnit, 5));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.SourceUnit>} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
*/
proto.unpack.v1.ast.RootSourceUnit.prototype.setSourceUnitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.unpack.v1.ast.SourceUnit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.SourceUnit}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.addSourceUnits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.unpack.v1.ast.SourceUnit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.clearSourceUnitsList = function() {
  return this.setSourceUnitsList([]);
};


/**
 * repeated Comment comments = 6;
 * @return {!Array<!proto.unpack.v1.ast.Comment>}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_comment_pb.Comment, 6));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.Comment>} value
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
*/
proto.unpack.v1.ast.RootSourceUnit.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.unpack.v1.ast.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.Comment}
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.unpack.v1.ast.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.RootSourceUnit} returns this
 */
proto.unpack.v1.ast.RootSourceUnit.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.unpack.v1.ast.SourceUnit.repeatedFields_ = [5,9];



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
proto.unpack.v1.ast.SourceUnit.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.SourceUnit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.SourceUnit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.SourceUnit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    license: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    absolutePath: jspb.Message.getFieldWithDefault(msg, 4, ""),
    exportedSymbolsList: jspb.Message.toObjectList(msg.getExportedSymbolsList(),
    proto.unpack.v1.ast.ExportedSymbol.toObject, includeInstance),
    nodeType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    root: (f = msg.getRoot()) && ast_node_pb.RootNode.toObject(includeInstance, f),
    src: (f = msg.getSrc()) && ast_src_pb.Src.toObject(includeInstance, f),
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    ast_comment_pb.Comment.toObject, includeInstance)
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
 * @return {!proto.unpack.v1.ast.SourceUnit}
 */
proto.unpack.v1.ast.SourceUnit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.SourceUnit;
  return proto.unpack.v1.ast.SourceUnit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.SourceUnit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.SourceUnit}
 */
proto.unpack.v1.ast.SourceUnit.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLicense(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAbsolutePath(value);
      break;
    case 5:
      var value = new proto.unpack.v1.ast.ExportedSymbol;
      reader.readMessage(value,proto.unpack.v1.ast.ExportedSymbol.deserializeBinaryFromReader);
      msg.addExportedSymbols(value);
      break;
    case 6:
      var value = /** @type {!proto.unpack.v1.ast.NodeType} */ (reader.readEnum());
      msg.setNodeType(value);
      break;
    case 7:
      var value = new ast_node_pb.RootNode;
      reader.readMessage(value,ast_node_pb.RootNode.deserializeBinaryFromReader);
      msg.setRoot(value);
      break;
    case 8:
      var value = new ast_src_pb.Src;
      reader.readMessage(value,ast_src_pb.Src.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    case 9:
      var value = new ast_comment_pb.Comment;
      reader.readMessage(value,ast_comment_pb.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
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
proto.unpack.v1.ast.SourceUnit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.SourceUnit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.SourceUnit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.SourceUnit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLicense();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAbsolutePath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExportedSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.unpack.v1.ast.ExportedSymbol.serializeBinaryToWriter
    );
  }
  f = message.getNodeType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getRoot();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      ast_node_pb.RootNode.serializeBinaryToWriter
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      ast_src_pb.Src.serializeBinaryToWriter
    );
  }
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      ast_comment_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string license = 2;
 * @return {string}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getLicense = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.setLicense = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string absolute_path = 4;
 * @return {string}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getAbsolutePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.setAbsolutePath = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ExportedSymbol exported_symbols = 5;
 * @return {!Array<!proto.unpack.v1.ast.ExportedSymbol>}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getExportedSymbolsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.ExportedSymbol>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.unpack.v1.ast.ExportedSymbol, 5));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.ExportedSymbol>} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
*/
proto.unpack.v1.ast.SourceUnit.prototype.setExportedSymbolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.unpack.v1.ast.ExportedSymbol=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.ExportedSymbol}
 */
proto.unpack.v1.ast.SourceUnit.prototype.addExportedSymbols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.unpack.v1.ast.ExportedSymbol, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.clearExportedSymbolsList = function() {
  return this.setExportedSymbolsList([]);
};


/**
 * optional NodeType node_type = 6;
 * @return {!proto.unpack.v1.ast.NodeType}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getNodeType = function() {
  return /** @type {!proto.unpack.v1.ast.NodeType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.unpack.v1.ast.NodeType} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.setNodeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional RootNode root = 7;
 * @return {?proto.unpack.v1.ast.RootNode}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getRoot = function() {
  return /** @type{?proto.unpack.v1.ast.RootNode} */ (
    jspb.Message.getWrapperField(this, ast_node_pb.RootNode, 7));
};


/**
 * @param {?proto.unpack.v1.ast.RootNode|undefined} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
*/
proto.unpack.v1.ast.SourceUnit.prototype.setRoot = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.clearRoot = function() {
  return this.setRoot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.SourceUnit.prototype.hasRoot = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Src src = 8;
 * @return {?proto.unpack.v1.ast.Src}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getSrc = function() {
  return /** @type{?proto.unpack.v1.ast.Src} */ (
    jspb.Message.getWrapperField(this, ast_src_pb.Src, 8));
};


/**
 * @param {?proto.unpack.v1.ast.Src|undefined} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
*/
proto.unpack.v1.ast.SourceUnit.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.unpack.v1.ast.SourceUnit.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Comment comments = 9;
 * @return {!Array<!proto.unpack.v1.ast.Comment>}
 */
proto.unpack.v1.ast.SourceUnit.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.unpack.v1.ast.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, ast_comment_pb.Comment, 9));
};


/**
 * @param {!Array<!proto.unpack.v1.ast.Comment>} value
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
*/
proto.unpack.v1.ast.SourceUnit.prototype.setCommentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.unpack.v1.ast.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.unpack.v1.ast.Comment}
 */
proto.unpack.v1.ast.SourceUnit.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.unpack.v1.ast.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.unpack.v1.ast.SourceUnit} returns this
 */
proto.unpack.v1.ast.SourceUnit.prototype.clearCommentsList = function() {
  return this.setCommentsList([]);
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
proto.unpack.v1.ast.ExportedSymbol.prototype.toObject = function(opt_includeInstance) {
  return proto.unpack.v1.ast.ExportedSymbol.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.unpack.v1.ast.ExportedSymbol} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ExportedSymbol.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    absolutePath: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.unpack.v1.ast.ExportedSymbol}
 */
proto.unpack.v1.ast.ExportedSymbol.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.unpack.v1.ast.ExportedSymbol;
  return proto.unpack.v1.ast.ExportedSymbol.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.unpack.v1.ast.ExportedSymbol} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.unpack.v1.ast.ExportedSymbol}
 */
proto.unpack.v1.ast.ExportedSymbol.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAbsolutePath(value);
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
proto.unpack.v1.ast.ExportedSymbol.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.unpack.v1.ast.ExportedSymbol.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.unpack.v1.ast.ExportedSymbol} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.unpack.v1.ast.ExportedSymbol.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAbsolutePath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.unpack.v1.ast.ExportedSymbol} returns this
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.ExportedSymbol} returns this
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string absolute_path = 3;
 * @return {string}
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.getAbsolutePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.unpack.v1.ast.ExportedSymbol} returns this
 */
proto.unpack.v1.ast.ExportedSymbol.prototype.setAbsolutePath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.unpack.v1.ast);
