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
  NT_DEFAULT: 0,
  SOURCE_UNIT: 1,
  CONTRACT: 2,
  MODIFIER: 3,
  VARIABLE: 4,
  ENUM: 5,
  STRUCT: 6,
  EVENT: 7,
  ERROR: 8,
  USING: 9,
  PRAGMA_DIRECTIVE: 10,
  CONSTRUCTOR: 11,
  RETURN: 12,
  MAPPING: 13,
  ARRAY: 14,
  ENUM_VALUE: 15,
  IDENTIFIER: 16,
  LITERAL: 17,
  UNARY_OPERATION: 18,
  BINARY_OPERATION: 19,
  TERNARY_OPERATION: 20,
  TUPLE: 21,
  INDEX_ACCESS: 22,
  MEMBER_ACCESS: 23,
  FUNCTION_CALL: 24,
  NEW_EXPRESSION: 25,
  CONDITIONAL: 26,
  ASSIGNMENT: 27,
  EMIT: 28,
  IMPORT_DIRECTIVE: 29,
  ELEMENTARY_TYPE_NAME: 30,
  COMMENT: 31,
  COMMENT_MULTILINE: 32,
  LICENSE: 33,
  LIBRARY_DEFINITION: 34,
  CONTRACT_DEFINITION: 35,
  KIND_CONTRACT: 36,
  KIND_LIBRARY: 37,
  KIND_INTERFACE: 38,
  KIND_STRUCT: 39,
  KIND_ENUM: 40,
  KIND_FUNCTION: 41,
  FUNCTION_DEFINITION: 42,
  PARAMETER_LIST: 43,
  VARIABLE_DECLARATION: 44,
  VARIABLE_DECLARATION_STATEMENT: 45,
  BLOCK: 46,
  RETURN_STATEMENT: 47,
  IF_STATEMENT: 48,
  NUMBER: 49,
  STRING: 50,
  USING_FOR_DIRECTIVE: 51,
  IDENTIFIER_PATH: 52,
  MAPPING_TYPE_NAME: 53,
  FUNCTION_TYPE_NAME: 54,
  UNKNOWN_TYPE_NAME: 55,
  EXPRESSION_CONTEXT: 56,
  EVENT_DEFINITION: 57,
  INTERFACE_DEFINITION: 58,
  UNCHECKED_BLOCK: 59,
  TUPLE_EXPRESSION: 60,
  BOOLEAN: 61,
  INHERITANCE_SPECIFIER: 62,
  OVERRIDE_SPECIFIER: 63,
  EMIT_STATEMENT: 64,
  HEX_STRING: 65,
  ENUM_DEFINITION: 66,
  STRUCT_DEFINITION: 67,
  MODIFIER_DEFINITION: 68,
  USER_DEFINED_PATH_NAME: 69,
  FALLBACK: 70,
  RECEIVE: 71,
  MODIFIER_INVOCATION: 72,
  WHILE_STATEMENT: 73,
  BREAK: 74,
  CONTINUE: 75,
  DO_WHILE_STATEMENT: 76,
  ERROR_DEFINITION: 77,
  REVERT_STATEMENT: 78,
  FOR_STATEMENT: 79,
  ROOT_SOURCE_UNIT: 80,
  EXPRESSION_STATEMENT: 81,
  PLACEHOLDER_STATEMENT: 82,
  WHILE: 83,
  PAYABLE_CONVERSION: 84,
  TRY_STATEMENT: 85,
  TRY: 86,
  TRY_CATCH_CLAUSE: 87,
  CATCH: 88,
  ASSEMBLY_STATEMENT: 89,
  AST: 90,
  YUL_STATEMENT: 91,
  YUL_ASSIGNMENT: 92,
  FUNCTION_CALL_OPTION: 93
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.Mutability = {
  M_DEFAULT: 0,
  MUTABLE: 1,
  IMMUTABLE: 2,
  PAYABLE: 3,
  NONPAYABLE: 4,
  VIEW: 5,
  PURE: 6
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.StorageLocation = {
  ST_UNKNOWN: 0,
  DEFAULT: 1,
  MEMORY: 2,
  STORAGE: 3,
  CALLDATA: 4
};

/**
 * @enum {number}
 */
proto.txpull.v1.ast.Visibility = {
  V_DEFAULT: 0,
  INTERNAL: 1,
  PRIVATE: 2,
  PUBLIC: 3,
  EXTERNAL: 4
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
  EQUAL: 11,
  NOT_EQUAL: 12,
  PLUS_EQUAL: 13,
  MINUS_EQUAL: 14,
  MUL_EQUAL: 15,
  DIV_EQUAL: 16,
  MOD_EQUAL: 17,
  AND_EQUAL: 18,
  OR_EQUAL: 19,
  XOR_EQUAL: 20,
  SHIFT_LEFT_EQUAL: 21,
  SHIFT_RIGHT_EQUAL: 22,
  BIT_AND_EQUAL: 23,
  BIT_OR_EQUAL: 24,
  BIT_XOR_EQUAL: 25,
  POW_EQUAL: 26,
  INCREMENT: 27,
  DECREMENT: 28,
  BIT_NOT: 29,
  BIT_AND: 30,
  NOT: 31,
  SUBTRACT: 32,
  OR: 33
};

goog.object.extend(exports, proto.txpull.v1.ast);
