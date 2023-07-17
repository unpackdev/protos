// source: ast/types.proto
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

goog.exportSymbol('proto.txpull.v1.ast.Mutability', null, global);
goog.exportSymbol('proto.txpull.v1.ast.NodeType', null, global);
goog.exportSymbol('proto.txpull.v1.ast.Operator', null, global);
goog.exportSymbol('proto.txpull.v1.ast.StorageLocation', null, global);
goog.exportSymbol('proto.txpull.v1.ast.Visibility', null, global);
/**
 * @enum {number}
 */
proto.txpull.v1.ast.NodeType = {
  SOURCE_UNIT: 0,
  CONTRACT: 1,
  MODIFIER: 2,
  VARIABLE: 3,
  ENUM: 4,
  STRUCT: 5,
  EVENT: 6,
  ERROR: 7,
  USING: 8,
  PRAGMA_DIRECTIVE: 9,
  CONSTRUCTOR: 10,
  RETURN: 11,
  MAPPING: 12,
  ARRAY: 13,
  ENUM_VALUE: 14,
  IDENTIFIER: 15,
  LITERAL: 16,
  UNARY_OPERATION: 17,
  BINARY_OPERATION: 18,
  TERNARY_OPERATION: 19,
  TUPLE: 20,
  INDEX_ACCESS: 21,
  MEMBER_ACCESS: 22,
  FUNCTION_CALL: 23,
  NEW_EXPRESSION: 24,
  CONDITIONAL: 25,
  ASSIGNMENT: 26,
  EMIT: 27,
  IMPORT: 28,
  ELEMENTARY_TYPE_NAME: 29,
  COMMENT: 30,
  COMMENT_MULTILINE: 31,
  LICENSE: 32,
  LIBRARY_DEFINITION: 33,
  CONTRACT_DEFINITION: 34,
  KIND_CONTRACT: 35,
  KIND_LIBRARY: 36,
  KIND_INTERFACE: 37,
  KIND_STRUCT: 38,
  KIND_ENUM: 39,
  KIND_FUNCTION: 40,
  FUNCTION_DEFINITION: 41,
  PARAMETER_LIST: 42,
  VARIABLE_DECLARATION: 43,
  VARIABLE_DECLARATION_STATEMENT: 44,
  BLOCK: 45,
  RETURN_STATEMENT: 46
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.Mutability = {
  MUTABLE: 0,
  IMMUTABLE: 1
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.StorageLocation = {
  DEFAULT: 0,
  MEMORY: 1,
  STORAGE: 2,
  CALLDATA: 3
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.Visibility = {
  INTERNAL: 0,
  PRIVATE: 1,
  PUBLIC: 2
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.Operator = {
  O_DEFAULT: 0,
  ADDITION: 1,
  SUBTRACTION: 2,
  MULTIPLICATION: 3,
  DIVISION: 4,
  MODULO: 5,
  EXPONENTIATION: 6,
  GREATER_THAN: 7,
  GREATER_THAN_OR_EQUAL: 8,
  LESS_THAN: 9,
  LESS_THAN_OR_EQUAL: 10,
  EXACT: 11
};

goog.object.extend(exports, proto.txpull.v1.ast);
