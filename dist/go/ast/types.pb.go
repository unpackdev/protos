// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/types.proto

package ast_pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NodeType int32

const (
	NodeType_NT_DEFAULT                     NodeType = 0
	NodeType_SOURCE_UNIT                    NodeType = 1
	NodeType_CONTRACT                       NodeType = 2
	NodeType_MODIFIER                       NodeType = 3
	NodeType_VARIABLE                       NodeType = 4
	NodeType_ENUM                           NodeType = 5
	NodeType_STRUCT                         NodeType = 6
	NodeType_EVENT                          NodeType = 7
	NodeType_ERROR                          NodeType = 8
	NodeType_USING                          NodeType = 9
	NodeType_PRAGMA_DIRECTIVE               NodeType = 10
	NodeType_CONSTRUCTOR                    NodeType = 11
	NodeType_RETURN                         NodeType = 12
	NodeType_MAPPING                        NodeType = 13
	NodeType_ARRAY                          NodeType = 14
	NodeType_ENUM_VALUE                     NodeType = 15
	NodeType_IDENTIFIER                     NodeType = 16
	NodeType_LITERAL                        NodeType = 17
	NodeType_UNARY_OPERATION                NodeType = 18
	NodeType_BINARY_OPERATION               NodeType = 19
	NodeType_TERNARY_OPERATION              NodeType = 20
	NodeType_TUPLE                          NodeType = 21
	NodeType_INDEX_ACCESS                   NodeType = 22
	NodeType_MEMBER_ACCESS                  NodeType = 23
	NodeType_FUNCTION_CALL                  NodeType = 24
	NodeType_NEW_EXPRESSION                 NodeType = 25
	NodeType_CONDITIONAL                    NodeType = 26
	NodeType_ASSIGNMENT                     NodeType = 27
	NodeType_EMIT                           NodeType = 28
	NodeType_IMPORT_DIRECTIVE               NodeType = 29
	NodeType_ELEMENTARY_TYPE_NAME           NodeType = 30
	NodeType_COMMENT                        NodeType = 31
	NodeType_COMMENT_MULTILINE              NodeType = 32
	NodeType_LICENSE                        NodeType = 33
	NodeType_LIBRARY_DEFINITION             NodeType = 34
	NodeType_CONTRACT_DEFINITION            NodeType = 35
	NodeType_KIND_CONTRACT                  NodeType = 36
	NodeType_KIND_LIBRARY                   NodeType = 37
	NodeType_KIND_INTERFACE                 NodeType = 38
	NodeType_KIND_STRUCT                    NodeType = 39
	NodeType_KIND_ENUM                      NodeType = 40
	NodeType_KIND_FUNCTION                  NodeType = 41
	NodeType_FUNCTION_DEFINITION            NodeType = 42
	NodeType_PARAMETER_LIST                 NodeType = 43
	NodeType_VARIABLE_DECLARATION           NodeType = 44
	NodeType_VARIABLE_DECLARATION_STATEMENT NodeType = 45
	NodeType_BLOCK                          NodeType = 46
	NodeType_RETURN_STATEMENT               NodeType = 47
	NodeType_IF_STATEMENT                   NodeType = 48
	NodeType_NUMBER                         NodeType = 49
	NodeType_STRING                         NodeType = 50
	NodeType_USING_FOR_DIRECTIVE            NodeType = 51
	NodeType_IDENTIFIER_PATH                NodeType = 52
	NodeType_MAPPING_TYPE_NAME              NodeType = 53
	NodeType_FUNCTION_TYPE_NAME             NodeType = 54
	NodeType_UNKNOWN_TYPE_NAME              NodeType = 55
	NodeType_EXPRESSION_CONTEXT             NodeType = 56
	NodeType_EVENT_DEFINITION               NodeType = 57
	NodeType_INTERFACE_DEFINITION           NodeType = 58
	NodeType_UNCHECKED_BLOCK                NodeType = 59
	NodeType_TUPLE_EXPRESSION               NodeType = 60
	NodeType_BOOLEAN                        NodeType = 61
	NodeType_INHERITANCE_SPECIFIER          NodeType = 62
	NodeType_OVERRIDE_SPECIFIER             NodeType = 63
	NodeType_EMIT_STATEMENT                 NodeType = 64
	NodeType_HEX_STRING                     NodeType = 65
	NodeType_ENUM_DEFINITION                NodeType = 66
	NodeType_STRUCT_DEFINITION              NodeType = 67
	NodeType_MODIFIER_DEFINITION            NodeType = 68
	NodeType_USER_DEFINED_PATH_NAME         NodeType = 69
	NodeType_FALLBACK                       NodeType = 70
	NodeType_RECEIVE                        NodeType = 71
	NodeType_MODIFIER_INVOCATION            NodeType = 72
	NodeType_WHILE_STATEMENT                NodeType = 73
	NodeType_BREAK                          NodeType = 74
	NodeType_CONTINUE                       NodeType = 75
	NodeType_DO_WHILE_STATEMENT             NodeType = 76
	NodeType_ERROR_DEFINITION               NodeType = 77
	NodeType_REVERT_STATEMENT               NodeType = 78
	NodeType_FOR_STATEMENT                  NodeType = 79
	NodeType_ROOT_SOURCE_UNIT               NodeType = 80
	NodeType_EXPRESSION_STATEMENT           NodeType = 81
	NodeType_PLACEHOLDER_STATEMENT          NodeType = 82
	NodeType_WHILE                          NodeType = 83
	NodeType_PAYABLE_CONVERSION             NodeType = 84
	NodeType_TRY_STATEMENT                  NodeType = 85
	NodeType_TRY                            NodeType = 86
	NodeType_TRY_CATCH_CLAUSE               NodeType = 87
	NodeType_CATCH                          NodeType = 88
)

// Enum value maps for NodeType.
var (
	NodeType_name = map[int32]string{
		0:  "NT_DEFAULT",
		1:  "SOURCE_UNIT",
		2:  "CONTRACT",
		3:  "MODIFIER",
		4:  "VARIABLE",
		5:  "ENUM",
		6:  "STRUCT",
		7:  "EVENT",
		8:  "ERROR",
		9:  "USING",
		10: "PRAGMA_DIRECTIVE",
		11: "CONSTRUCTOR",
		12: "RETURN",
		13: "MAPPING",
		14: "ARRAY",
		15: "ENUM_VALUE",
		16: "IDENTIFIER",
		17: "LITERAL",
		18: "UNARY_OPERATION",
		19: "BINARY_OPERATION",
		20: "TERNARY_OPERATION",
		21: "TUPLE",
		22: "INDEX_ACCESS",
		23: "MEMBER_ACCESS",
		24: "FUNCTION_CALL",
		25: "NEW_EXPRESSION",
		26: "CONDITIONAL",
		27: "ASSIGNMENT",
		28: "EMIT",
		29: "IMPORT_DIRECTIVE",
		30: "ELEMENTARY_TYPE_NAME",
		31: "COMMENT",
		32: "COMMENT_MULTILINE",
		33: "LICENSE",
		34: "LIBRARY_DEFINITION",
		35: "CONTRACT_DEFINITION",
		36: "KIND_CONTRACT",
		37: "KIND_LIBRARY",
		38: "KIND_INTERFACE",
		39: "KIND_STRUCT",
		40: "KIND_ENUM",
		41: "KIND_FUNCTION",
		42: "FUNCTION_DEFINITION",
		43: "PARAMETER_LIST",
		44: "VARIABLE_DECLARATION",
		45: "VARIABLE_DECLARATION_STATEMENT",
		46: "BLOCK",
		47: "RETURN_STATEMENT",
		48: "IF_STATEMENT",
		49: "NUMBER",
		50: "STRING",
		51: "USING_FOR_DIRECTIVE",
		52: "IDENTIFIER_PATH",
		53: "MAPPING_TYPE_NAME",
		54: "FUNCTION_TYPE_NAME",
		55: "UNKNOWN_TYPE_NAME",
		56: "EXPRESSION_CONTEXT",
		57: "EVENT_DEFINITION",
		58: "INTERFACE_DEFINITION",
		59: "UNCHECKED_BLOCK",
		60: "TUPLE_EXPRESSION",
		61: "BOOLEAN",
		62: "INHERITANCE_SPECIFIER",
		63: "OVERRIDE_SPECIFIER",
		64: "EMIT_STATEMENT",
		65: "HEX_STRING",
		66: "ENUM_DEFINITION",
		67: "STRUCT_DEFINITION",
		68: "MODIFIER_DEFINITION",
		69: "USER_DEFINED_PATH_NAME",
		70: "FALLBACK",
		71: "RECEIVE",
		72: "MODIFIER_INVOCATION",
		73: "WHILE_STATEMENT",
		74: "BREAK",
		75: "CONTINUE",
		76: "DO_WHILE_STATEMENT",
		77: "ERROR_DEFINITION",
		78: "REVERT_STATEMENT",
		79: "FOR_STATEMENT",
		80: "ROOT_SOURCE_UNIT",
		81: "EXPRESSION_STATEMENT",
		82: "PLACEHOLDER_STATEMENT",
		83: "WHILE",
		84: "PAYABLE_CONVERSION",
		85: "TRY_STATEMENT",
		86: "TRY",
		87: "TRY_CATCH_CLAUSE",
		88: "CATCH",
	}
	NodeType_value = map[string]int32{
		"NT_DEFAULT":                     0,
		"SOURCE_UNIT":                    1,
		"CONTRACT":                       2,
		"MODIFIER":                       3,
		"VARIABLE":                       4,
		"ENUM":                           5,
		"STRUCT":                         6,
		"EVENT":                          7,
		"ERROR":                          8,
		"USING":                          9,
		"PRAGMA_DIRECTIVE":               10,
		"CONSTRUCTOR":                    11,
		"RETURN":                         12,
		"MAPPING":                        13,
		"ARRAY":                          14,
		"ENUM_VALUE":                     15,
		"IDENTIFIER":                     16,
		"LITERAL":                        17,
		"UNARY_OPERATION":                18,
		"BINARY_OPERATION":               19,
		"TERNARY_OPERATION":              20,
		"TUPLE":                          21,
		"INDEX_ACCESS":                   22,
		"MEMBER_ACCESS":                  23,
		"FUNCTION_CALL":                  24,
		"NEW_EXPRESSION":                 25,
		"CONDITIONAL":                    26,
		"ASSIGNMENT":                     27,
		"EMIT":                           28,
		"IMPORT_DIRECTIVE":               29,
		"ELEMENTARY_TYPE_NAME":           30,
		"COMMENT":                        31,
		"COMMENT_MULTILINE":              32,
		"LICENSE":                        33,
		"LIBRARY_DEFINITION":             34,
		"CONTRACT_DEFINITION":            35,
		"KIND_CONTRACT":                  36,
		"KIND_LIBRARY":                   37,
		"KIND_INTERFACE":                 38,
		"KIND_STRUCT":                    39,
		"KIND_ENUM":                      40,
		"KIND_FUNCTION":                  41,
		"FUNCTION_DEFINITION":            42,
		"PARAMETER_LIST":                 43,
		"VARIABLE_DECLARATION":           44,
		"VARIABLE_DECLARATION_STATEMENT": 45,
		"BLOCK":                          46,
		"RETURN_STATEMENT":               47,
		"IF_STATEMENT":                   48,
		"NUMBER":                         49,
		"STRING":                         50,
		"USING_FOR_DIRECTIVE":            51,
		"IDENTIFIER_PATH":                52,
		"MAPPING_TYPE_NAME":              53,
		"FUNCTION_TYPE_NAME":             54,
		"UNKNOWN_TYPE_NAME":              55,
		"EXPRESSION_CONTEXT":             56,
		"EVENT_DEFINITION":               57,
		"INTERFACE_DEFINITION":           58,
		"UNCHECKED_BLOCK":                59,
		"TUPLE_EXPRESSION":               60,
		"BOOLEAN":                        61,
		"INHERITANCE_SPECIFIER":          62,
		"OVERRIDE_SPECIFIER":             63,
		"EMIT_STATEMENT":                 64,
		"HEX_STRING":                     65,
		"ENUM_DEFINITION":                66,
		"STRUCT_DEFINITION":              67,
		"MODIFIER_DEFINITION":            68,
		"USER_DEFINED_PATH_NAME":         69,
		"FALLBACK":                       70,
		"RECEIVE":                        71,
		"MODIFIER_INVOCATION":            72,
		"WHILE_STATEMENT":                73,
		"BREAK":                          74,
		"CONTINUE":                       75,
		"DO_WHILE_STATEMENT":             76,
		"ERROR_DEFINITION":               77,
		"REVERT_STATEMENT":               78,
		"FOR_STATEMENT":                  79,
		"ROOT_SOURCE_UNIT":               80,
		"EXPRESSION_STATEMENT":           81,
		"PLACEHOLDER_STATEMENT":          82,
		"WHILE":                          83,
		"PAYABLE_CONVERSION":             84,
		"TRY_STATEMENT":                  85,
		"TRY":                            86,
		"TRY_CATCH_CLAUSE":               87,
		"CATCH":                          88,
	}
)

func (x NodeType) Enum() *NodeType {
	p := new(NodeType)
	*p = x
	return p
}

func (x NodeType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (NodeType) Descriptor() protoreflect.EnumDescriptor {
	return file_ast_types_proto_enumTypes[0].Descriptor()
}

func (NodeType) Type() protoreflect.EnumType {
	return &file_ast_types_proto_enumTypes[0]
}

func (x NodeType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use NodeType.Descriptor instead.
func (NodeType) EnumDescriptor() ([]byte, []int) {
	return file_ast_types_proto_rawDescGZIP(), []int{0}
}

type Mutability int32

const (
	Mutability_M_DEFAULT  Mutability = 0
	Mutability_MUTABLE    Mutability = 1
	Mutability_IMMUTABLE  Mutability = 2
	Mutability_PAYABLE    Mutability = 3
	Mutability_NONPAYABLE Mutability = 4
	Mutability_VIEW       Mutability = 5
	Mutability_PURE       Mutability = 6
)

// Enum value maps for Mutability.
var (
	Mutability_name = map[int32]string{
		0: "M_DEFAULT",
		1: "MUTABLE",
		2: "IMMUTABLE",
		3: "PAYABLE",
		4: "NONPAYABLE",
		5: "VIEW",
		6: "PURE",
	}
	Mutability_value = map[string]int32{
		"M_DEFAULT":  0,
		"MUTABLE":    1,
		"IMMUTABLE":  2,
		"PAYABLE":    3,
		"NONPAYABLE": 4,
		"VIEW":       5,
		"PURE":       6,
	}
)

func (x Mutability) Enum() *Mutability {
	p := new(Mutability)
	*p = x
	return p
}

func (x Mutability) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Mutability) Descriptor() protoreflect.EnumDescriptor {
	return file_ast_types_proto_enumTypes[1].Descriptor()
}

func (Mutability) Type() protoreflect.EnumType {
	return &file_ast_types_proto_enumTypes[1]
}

func (x Mutability) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Mutability.Descriptor instead.
func (Mutability) EnumDescriptor() ([]byte, []int) {
	return file_ast_types_proto_rawDescGZIP(), []int{1}
}

type StorageLocation int32

const (
	StorageLocation_ST_UNKNOWN StorageLocation = 0
	StorageLocation_DEFAULT    StorageLocation = 1
	StorageLocation_MEMORY     StorageLocation = 2
	StorageLocation_STORAGE    StorageLocation = 3
	StorageLocation_CALLDATA   StorageLocation = 4
)

// Enum value maps for StorageLocation.
var (
	StorageLocation_name = map[int32]string{
		0: "ST_UNKNOWN",
		1: "DEFAULT",
		2: "MEMORY",
		3: "STORAGE",
		4: "CALLDATA",
	}
	StorageLocation_value = map[string]int32{
		"ST_UNKNOWN": 0,
		"DEFAULT":    1,
		"MEMORY":     2,
		"STORAGE":    3,
		"CALLDATA":   4,
	}
)

func (x StorageLocation) Enum() *StorageLocation {
	p := new(StorageLocation)
	*p = x
	return p
}

func (x StorageLocation) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (StorageLocation) Descriptor() protoreflect.EnumDescriptor {
	return file_ast_types_proto_enumTypes[2].Descriptor()
}

func (StorageLocation) Type() protoreflect.EnumType {
	return &file_ast_types_proto_enumTypes[2]
}

func (x StorageLocation) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use StorageLocation.Descriptor instead.
func (StorageLocation) EnumDescriptor() ([]byte, []int) {
	return file_ast_types_proto_rawDescGZIP(), []int{2}
}

type Visibility int32

const (
	Visibility_V_DEFAULT Visibility = 0
	Visibility_INTERNAL  Visibility = 1
	Visibility_PRIVATE   Visibility = 2
	Visibility_PUBLIC    Visibility = 3
	Visibility_EXTERNAL  Visibility = 4
)

// Enum value maps for Visibility.
var (
	Visibility_name = map[int32]string{
		0: "V_DEFAULT",
		1: "INTERNAL",
		2: "PRIVATE",
		3: "PUBLIC",
		4: "EXTERNAL",
	}
	Visibility_value = map[string]int32{
		"V_DEFAULT": 0,
		"INTERNAL":  1,
		"PRIVATE":   2,
		"PUBLIC":    3,
		"EXTERNAL":  4,
	}
)

func (x Visibility) Enum() *Visibility {
	p := new(Visibility)
	*p = x
	return p
}

func (x Visibility) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Visibility) Descriptor() protoreflect.EnumDescriptor {
	return file_ast_types_proto_enumTypes[3].Descriptor()
}

func (Visibility) Type() protoreflect.EnumType {
	return &file_ast_types_proto_enumTypes[3]
}

func (x Visibility) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Visibility.Descriptor instead.
func (Visibility) EnumDescriptor() ([]byte, []int) {
	return file_ast_types_proto_rawDescGZIP(), []int{3}
}

type Operator int32

const (
	Operator_O_DEFAULT             Operator = 0
	Operator_ADDITION              Operator = 1
	Operator_SUBTRACTION           Operator = 2
	Operator_MULTIPLICATION        Operator = 3
	Operator_DIVISION              Operator = 4
	Operator_MODULO                Operator = 5
	Operator_EXPONENTIATION        Operator = 6
	Operator_GREATER_THAN          Operator = 7
	Operator_GREATER_THAN_OR_EQUAL Operator = 8
	Operator_LESS_THAN             Operator = 9
	Operator_LESS_THAN_OR_EQUAL    Operator = 10
	Operator_EQUAL                 Operator = 11
	Operator_NOT_EQUAL             Operator = 12
	Operator_PLUS_EQUAL            Operator = 13
	Operator_MINUS_EQUAL           Operator = 14
	Operator_MUL_EQUAL             Operator = 15
	Operator_DIV_EQUAL             Operator = 16
	Operator_MOD_EQUAL             Operator = 17
	Operator_AND_EQUAL             Operator = 18
	Operator_OR_EQUAL              Operator = 19
	Operator_XOR_EQUAL             Operator = 20
	Operator_SHIFT_LEFT_EQUAL      Operator = 21
	Operator_SHIFT_RIGHT_EQUAL     Operator = 22
	Operator_BIT_AND_EQUAL         Operator = 23
	Operator_BIT_OR_EQUAL          Operator = 24
	Operator_BIT_XOR_EQUAL         Operator = 25
	Operator_POW_EQUAL             Operator = 26
	Operator_INCREMENT             Operator = 27
	Operator_DECREMENT             Operator = 28
	Operator_BIT_NOT               Operator = 29
	Operator_BIT_AND               Operator = 30
	Operator_NOT                   Operator = 31
	Operator_SUBTRACT              Operator = 32
)

// Enum value maps for Operator.
var (
	Operator_name = map[int32]string{
		0:  "O_DEFAULT",
		1:  "ADDITION",
		2:  "SUBTRACTION",
		3:  "MULTIPLICATION",
		4:  "DIVISION",
		5:  "MODULO",
		6:  "EXPONENTIATION",
		7:  "GREATER_THAN",
		8:  "GREATER_THAN_OR_EQUAL",
		9:  "LESS_THAN",
		10: "LESS_THAN_OR_EQUAL",
		11: "EQUAL",
		12: "NOT_EQUAL",
		13: "PLUS_EQUAL",
		14: "MINUS_EQUAL",
		15: "MUL_EQUAL",
		16: "DIV_EQUAL",
		17: "MOD_EQUAL",
		18: "AND_EQUAL",
		19: "OR_EQUAL",
		20: "XOR_EQUAL",
		21: "SHIFT_LEFT_EQUAL",
		22: "SHIFT_RIGHT_EQUAL",
		23: "BIT_AND_EQUAL",
		24: "BIT_OR_EQUAL",
		25: "BIT_XOR_EQUAL",
		26: "POW_EQUAL",
		27: "INCREMENT",
		28: "DECREMENT",
		29: "BIT_NOT",
		30: "BIT_AND",
		31: "NOT",
		32: "SUBTRACT",
	}
	Operator_value = map[string]int32{
		"O_DEFAULT":             0,
		"ADDITION":              1,
		"SUBTRACTION":           2,
		"MULTIPLICATION":        3,
		"DIVISION":              4,
		"MODULO":                5,
		"EXPONENTIATION":        6,
		"GREATER_THAN":          7,
		"GREATER_THAN_OR_EQUAL": 8,
		"LESS_THAN":             9,
		"LESS_THAN_OR_EQUAL":    10,
		"EQUAL":                 11,
		"NOT_EQUAL":             12,
		"PLUS_EQUAL":            13,
		"MINUS_EQUAL":           14,
		"MUL_EQUAL":             15,
		"DIV_EQUAL":             16,
		"MOD_EQUAL":             17,
		"AND_EQUAL":             18,
		"OR_EQUAL":              19,
		"XOR_EQUAL":             20,
		"SHIFT_LEFT_EQUAL":      21,
		"SHIFT_RIGHT_EQUAL":     22,
		"BIT_AND_EQUAL":         23,
		"BIT_OR_EQUAL":          24,
		"BIT_XOR_EQUAL":         25,
		"POW_EQUAL":             26,
		"INCREMENT":             27,
		"DECREMENT":             28,
		"BIT_NOT":               29,
		"BIT_AND":               30,
		"NOT":                   31,
		"SUBTRACT":              32,
	}
)

func (x Operator) Enum() *Operator {
	p := new(Operator)
	*p = x
	return p
}

func (x Operator) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Operator) Descriptor() protoreflect.EnumDescriptor {
	return file_ast_types_proto_enumTypes[4].Descriptor()
}

func (Operator) Type() protoreflect.EnumType {
	return &file_ast_types_proto_enumTypes[4]
}

func (x Operator) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Operator.Descriptor instead.
func (Operator) EnumDescriptor() ([]byte, []int) {
	return file_ast_types_proto_rawDescGZIP(), []int{4}
}

var File_ast_types_proto protoreflect.FileDescriptor

var file_ast_types_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74,
	0x2a, 0x8c, 0x0d, 0x0a, 0x08, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a,
	0x0a, 0x4e, 0x54, 0x5f, 0x44, 0x45, 0x46, 0x41, 0x55, 0x4c, 0x54, 0x10, 0x00, 0x12, 0x0f, 0x0a,
	0x0b, 0x53, 0x4f, 0x55, 0x52, 0x43, 0x45, 0x5f, 0x55, 0x4e, 0x49, 0x54, 0x10, 0x01, 0x12, 0x0c,
	0x0a, 0x08, 0x43, 0x4f, 0x4e, 0x54, 0x52, 0x41, 0x43, 0x54, 0x10, 0x02, 0x12, 0x0c, 0x0a, 0x08,
	0x4d, 0x4f, 0x44, 0x49, 0x46, 0x49, 0x45, 0x52, 0x10, 0x03, 0x12, 0x0c, 0x0a, 0x08, 0x56, 0x41,
	0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x08, 0x0a, 0x04, 0x45, 0x4e, 0x55, 0x4d,
	0x10, 0x05, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x54, 0x52, 0x55, 0x43, 0x54, 0x10, 0x06, 0x12, 0x09,
	0x0a, 0x05, 0x45, 0x56, 0x45, 0x4e, 0x54, 0x10, 0x07, 0x12, 0x09, 0x0a, 0x05, 0x45, 0x52, 0x52,
	0x4f, 0x52, 0x10, 0x08, 0x12, 0x09, 0x0a, 0x05, 0x55, 0x53, 0x49, 0x4e, 0x47, 0x10, 0x09, 0x12,
	0x14, 0x0a, 0x10, 0x50, 0x52, 0x41, 0x47, 0x4d, 0x41, 0x5f, 0x44, 0x49, 0x52, 0x45, 0x43, 0x54,
	0x49, 0x56, 0x45, 0x10, 0x0a, 0x12, 0x0f, 0x0a, 0x0b, 0x43, 0x4f, 0x4e, 0x53, 0x54, 0x52, 0x55,
	0x43, 0x54, 0x4f, 0x52, 0x10, 0x0b, 0x12, 0x0a, 0x0a, 0x06, 0x52, 0x45, 0x54, 0x55, 0x52, 0x4e,
	0x10, 0x0c, 0x12, 0x0b, 0x0a, 0x07, 0x4d, 0x41, 0x50, 0x50, 0x49, 0x4e, 0x47, 0x10, 0x0d, 0x12,
	0x09, 0x0a, 0x05, 0x41, 0x52, 0x52, 0x41, 0x59, 0x10, 0x0e, 0x12, 0x0e, 0x0a, 0x0a, 0x45, 0x4e,
	0x55, 0x4d, 0x5f, 0x56, 0x41, 0x4c, 0x55, 0x45, 0x10, 0x0f, 0x12, 0x0e, 0x0a, 0x0a, 0x49, 0x44,
	0x45, 0x4e, 0x54, 0x49, 0x46, 0x49, 0x45, 0x52, 0x10, 0x10, 0x12, 0x0b, 0x0a, 0x07, 0x4c, 0x49,
	0x54, 0x45, 0x52, 0x41, 0x4c, 0x10, 0x11, 0x12, 0x13, 0x0a, 0x0f, 0x55, 0x4e, 0x41, 0x52, 0x59,
	0x5f, 0x4f, 0x50, 0x45, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x12, 0x12, 0x14, 0x0a, 0x10,
	0x42, 0x49, 0x4e, 0x41, 0x52, 0x59, 0x5f, 0x4f, 0x50, 0x45, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e,
	0x10, 0x13, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x52, 0x59, 0x5f, 0x4f, 0x50,
	0x45, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x14, 0x12, 0x09, 0x0a, 0x05, 0x54, 0x55, 0x50,
	0x4c, 0x45, 0x10, 0x15, 0x12, 0x10, 0x0a, 0x0c, 0x49, 0x4e, 0x44, 0x45, 0x58, 0x5f, 0x41, 0x43,
	0x43, 0x45, 0x53, 0x53, 0x10, 0x16, 0x12, 0x11, 0x0a, 0x0d, 0x4d, 0x45, 0x4d, 0x42, 0x45, 0x52,
	0x5f, 0x41, 0x43, 0x43, 0x45, 0x53, 0x53, 0x10, 0x17, 0x12, 0x11, 0x0a, 0x0d, 0x46, 0x55, 0x4e,
	0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x43, 0x41, 0x4c, 0x4c, 0x10, 0x18, 0x12, 0x12, 0x0a, 0x0e,
	0x4e, 0x45, 0x57, 0x5f, 0x45, 0x58, 0x50, 0x52, 0x45, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x10, 0x19,
	0x12, 0x0f, 0x0a, 0x0b, 0x43, 0x4f, 0x4e, 0x44, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x41, 0x4c, 0x10,
	0x1a, 0x12, 0x0e, 0x0a, 0x0a, 0x41, 0x53, 0x53, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x10,
	0x1b, 0x12, 0x08, 0x0a, 0x04, 0x45, 0x4d, 0x49, 0x54, 0x10, 0x1c, 0x12, 0x14, 0x0a, 0x10, 0x49,
	0x4d, 0x50, 0x4f, 0x52, 0x54, 0x5f, 0x44, 0x49, 0x52, 0x45, 0x43, 0x54, 0x49, 0x56, 0x45, 0x10,
	0x1d, 0x12, 0x18, 0x0a, 0x14, 0x45, 0x4c, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x41, 0x52, 0x59, 0x5f,
	0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x1e, 0x12, 0x0b, 0x0a, 0x07, 0x43,
	0x4f, 0x4d, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x1f, 0x12, 0x15, 0x0a, 0x11, 0x43, 0x4f, 0x4d, 0x4d,
	0x45, 0x4e, 0x54, 0x5f, 0x4d, 0x55, 0x4c, 0x54, 0x49, 0x4c, 0x49, 0x4e, 0x45, 0x10, 0x20, 0x12,
	0x0b, 0x0a, 0x07, 0x4c, 0x49, 0x43, 0x45, 0x4e, 0x53, 0x45, 0x10, 0x21, 0x12, 0x16, 0x0a, 0x12,
	0x4c, 0x49, 0x42, 0x52, 0x41, 0x52, 0x59, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49,
	0x4f, 0x4e, 0x10, 0x22, 0x12, 0x17, 0x0a, 0x13, 0x43, 0x4f, 0x4e, 0x54, 0x52, 0x41, 0x43, 0x54,
	0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x23, 0x12, 0x11, 0x0a,
	0x0d, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x43, 0x4f, 0x4e, 0x54, 0x52, 0x41, 0x43, 0x54, 0x10, 0x24,
	0x12, 0x10, 0x0a, 0x0c, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x4c, 0x49, 0x42, 0x52, 0x41, 0x52, 0x59,
	0x10, 0x25, 0x12, 0x12, 0x0a, 0x0e, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52,
	0x46, 0x41, 0x43, 0x45, 0x10, 0x26, 0x12, 0x0f, 0x0a, 0x0b, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x53,
	0x54, 0x52, 0x55, 0x43, 0x54, 0x10, 0x27, 0x12, 0x0d, 0x0a, 0x09, 0x4b, 0x49, 0x4e, 0x44, 0x5f,
	0x45, 0x4e, 0x55, 0x4d, 0x10, 0x28, 0x12, 0x11, 0x0a, 0x0d, 0x4b, 0x49, 0x4e, 0x44, 0x5f, 0x46,
	0x55, 0x4e, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x29, 0x12, 0x17, 0x0a, 0x13, 0x46, 0x55, 0x4e,
	0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e,
	0x10, 0x2a, 0x12, 0x12, 0x0a, 0x0e, 0x50, 0x41, 0x52, 0x41, 0x4d, 0x45, 0x54, 0x45, 0x52, 0x5f,
	0x4c, 0x49, 0x53, 0x54, 0x10, 0x2b, 0x12, 0x18, 0x0a, 0x14, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42,
	0x4c, 0x45, 0x5f, 0x44, 0x45, 0x43, 0x4c, 0x41, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x2c,
	0x12, 0x22, 0x0a, 0x1e, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x44, 0x45, 0x43,
	0x4c, 0x41, 0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45,
	0x4e, 0x54, 0x10, 0x2d, 0x12, 0x09, 0x0a, 0x05, 0x42, 0x4c, 0x4f, 0x43, 0x4b, 0x10, 0x2e, 0x12,
	0x14, 0x0a, 0x10, 0x52, 0x45, 0x54, 0x55, 0x52, 0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d,
	0x45, 0x4e, 0x54, 0x10, 0x2f, 0x12, 0x10, 0x0a, 0x0c, 0x49, 0x46, 0x5f, 0x53, 0x54, 0x41, 0x54,
	0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x30, 0x12, 0x0a, 0x0a, 0x06, 0x4e, 0x55, 0x4d, 0x42, 0x45,
	0x52, 0x10, 0x31, 0x12, 0x0a, 0x0a, 0x06, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x10, 0x32, 0x12,
	0x17, 0x0a, 0x13, 0x55, 0x53, 0x49, 0x4e, 0x47, 0x5f, 0x46, 0x4f, 0x52, 0x5f, 0x44, 0x49, 0x52,
	0x45, 0x43, 0x54, 0x49, 0x56, 0x45, 0x10, 0x33, 0x12, 0x13, 0x0a, 0x0f, 0x49, 0x44, 0x45, 0x4e,
	0x54, 0x49, 0x46, 0x49, 0x45, 0x52, 0x5f, 0x50, 0x41, 0x54, 0x48, 0x10, 0x34, 0x12, 0x15, 0x0a,
	0x11, 0x4d, 0x41, 0x50, 0x50, 0x49, 0x4e, 0x47, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x41,
	0x4d, 0x45, 0x10, 0x35, 0x12, 0x16, 0x0a, 0x12, 0x46, 0x55, 0x4e, 0x43, 0x54, 0x49, 0x4f, 0x4e,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x36, 0x12, 0x15, 0x0a, 0x11,
	0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x41, 0x4d,
	0x45, 0x10, 0x37, 0x12, 0x16, 0x0a, 0x12, 0x45, 0x58, 0x50, 0x52, 0x45, 0x53, 0x53, 0x49, 0x4f,
	0x4e, 0x5f, 0x43, 0x4f, 0x4e, 0x54, 0x45, 0x58, 0x54, 0x10, 0x38, 0x12, 0x14, 0x0a, 0x10, 0x45,
	0x56, 0x45, 0x4e, 0x54, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10,
	0x39, 0x12, 0x18, 0x0a, 0x14, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x46, 0x41, 0x43, 0x45, 0x5f, 0x44,
	0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x3a, 0x12, 0x13, 0x0a, 0x0f, 0x55,
	0x4e, 0x43, 0x48, 0x45, 0x43, 0x4b, 0x45, 0x44, 0x5f, 0x42, 0x4c, 0x4f, 0x43, 0x4b, 0x10, 0x3b,
	0x12, 0x14, 0x0a, 0x10, 0x54, 0x55, 0x50, 0x4c, 0x45, 0x5f, 0x45, 0x58, 0x50, 0x52, 0x45, 0x53,
	0x53, 0x49, 0x4f, 0x4e, 0x10, 0x3c, 0x12, 0x0b, 0x0a, 0x07, 0x42, 0x4f, 0x4f, 0x4c, 0x45, 0x41,
	0x4e, 0x10, 0x3d, 0x12, 0x19, 0x0a, 0x15, 0x49, 0x4e, 0x48, 0x45, 0x52, 0x49, 0x54, 0x41, 0x4e,
	0x43, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x52, 0x10, 0x3e, 0x12, 0x16,
	0x0a, 0x12, 0x4f, 0x56, 0x45, 0x52, 0x52, 0x49, 0x44, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49,
	0x46, 0x49, 0x45, 0x52, 0x10, 0x3f, 0x12, 0x12, 0x0a, 0x0e, 0x45, 0x4d, 0x49, 0x54, 0x5f, 0x53,
	0x54, 0x41, 0x54, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x40, 0x12, 0x0e, 0x0a, 0x0a, 0x48, 0x45,
	0x58, 0x5f, 0x53, 0x54, 0x52, 0x49, 0x4e, 0x47, 0x10, 0x41, 0x12, 0x13, 0x0a, 0x0f, 0x45, 0x4e,
	0x55, 0x4d, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x42, 0x12,
	0x15, 0x0a, 0x11, 0x53, 0x54, 0x52, 0x55, 0x43, 0x54, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49,
	0x54, 0x49, 0x4f, 0x4e, 0x10, 0x43, 0x12, 0x17, 0x0a, 0x13, 0x4d, 0x4f, 0x44, 0x49, 0x46, 0x49,
	0x45, 0x52, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x44, 0x12,
	0x1a, 0x0a, 0x16, 0x55, 0x53, 0x45, 0x52, 0x5f, 0x44, 0x45, 0x46, 0x49, 0x4e, 0x45, 0x44, 0x5f,
	0x50, 0x41, 0x54, 0x48, 0x5f, 0x4e, 0x41, 0x4d, 0x45, 0x10, 0x45, 0x12, 0x0c, 0x0a, 0x08, 0x46,
	0x41, 0x4c, 0x4c, 0x42, 0x41, 0x43, 0x4b, 0x10, 0x46, 0x12, 0x0b, 0x0a, 0x07, 0x52, 0x45, 0x43,
	0x45, 0x49, 0x56, 0x45, 0x10, 0x47, 0x12, 0x17, 0x0a, 0x13, 0x4d, 0x4f, 0x44, 0x49, 0x46, 0x49,
	0x45, 0x52, 0x5f, 0x49, 0x4e, 0x56, 0x4f, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x48, 0x12,
	0x13, 0x0a, 0x0f, 0x57, 0x48, 0x49, 0x4c, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45,
	0x4e, 0x54, 0x10, 0x49, 0x12, 0x09, 0x0a, 0x05, 0x42, 0x52, 0x45, 0x41, 0x4b, 0x10, 0x4a, 0x12,
	0x0c, 0x0a, 0x08, 0x43, 0x4f, 0x4e, 0x54, 0x49, 0x4e, 0x55, 0x45, 0x10, 0x4b, 0x12, 0x16, 0x0a,
	0x12, 0x44, 0x4f, 0x5f, 0x57, 0x48, 0x49, 0x4c, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d,
	0x45, 0x4e, 0x54, 0x10, 0x4c, 0x12, 0x14, 0x0a, 0x10, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x5f, 0x44,
	0x45, 0x46, 0x49, 0x4e, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x4d, 0x12, 0x14, 0x0a, 0x10, 0x52,
	0x45, 0x56, 0x45, 0x52, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10,
	0x4e, 0x12, 0x11, 0x0a, 0x0d, 0x46, 0x4f, 0x52, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45,
	0x4e, 0x54, 0x10, 0x4f, 0x12, 0x14, 0x0a, 0x10, 0x52, 0x4f, 0x4f, 0x54, 0x5f, 0x53, 0x4f, 0x55,
	0x52, 0x43, 0x45, 0x5f, 0x55, 0x4e, 0x49, 0x54, 0x10, 0x50, 0x12, 0x18, 0x0a, 0x14, 0x45, 0x58,
	0x50, 0x52, 0x45, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45,
	0x4e, 0x54, 0x10, 0x51, 0x12, 0x19, 0x0a, 0x15, 0x50, 0x4c, 0x41, 0x43, 0x45, 0x48, 0x4f, 0x4c,
	0x44, 0x45, 0x52, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x52, 0x12,
	0x09, 0x0a, 0x05, 0x57, 0x48, 0x49, 0x4c, 0x45, 0x10, 0x53, 0x12, 0x16, 0x0a, 0x12, 0x50, 0x41,
	0x59, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x43, 0x4f, 0x4e, 0x56, 0x45, 0x52, 0x53, 0x49, 0x4f, 0x4e,
	0x10, 0x54, 0x12, 0x11, 0x0a, 0x0d, 0x54, 0x52, 0x59, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x4d,
	0x45, 0x4e, 0x54, 0x10, 0x55, 0x12, 0x07, 0x0a, 0x03, 0x54, 0x52, 0x59, 0x10, 0x56, 0x12, 0x14,
	0x0a, 0x10, 0x54, 0x52, 0x59, 0x5f, 0x43, 0x41, 0x54, 0x43, 0x48, 0x5f, 0x43, 0x4c, 0x41, 0x55,
	0x53, 0x45, 0x10, 0x57, 0x12, 0x09, 0x0a, 0x05, 0x43, 0x41, 0x54, 0x43, 0x48, 0x10, 0x58, 0x2a,
	0x68, 0x0a, 0x0a, 0x4d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x0d, 0x0a,
	0x09, 0x4d, 0x5f, 0x44, 0x45, 0x46, 0x41, 0x55, 0x4c, 0x54, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07,
	0x4d, 0x55, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x0d, 0x0a, 0x09, 0x49, 0x4d, 0x4d,
	0x55, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x50, 0x41, 0x59, 0x41,
	0x42, 0x4c, 0x45, 0x10, 0x03, 0x12, 0x0e, 0x0a, 0x0a, 0x4e, 0x4f, 0x4e, 0x50, 0x41, 0x59, 0x41,
	0x42, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x08, 0x0a, 0x04, 0x56, 0x49, 0x45, 0x57, 0x10, 0x05, 0x12,
	0x08, 0x0a, 0x04, 0x50, 0x55, 0x52, 0x45, 0x10, 0x06, 0x2a, 0x55, 0x0a, 0x0f, 0x53, 0x74, 0x6f,
	0x72, 0x61, 0x67, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x0a,
	0x53, 0x54, 0x5f, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0b, 0x0a, 0x07,
	0x44, 0x45, 0x46, 0x41, 0x55, 0x4c, 0x54, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x4d, 0x45, 0x4d,
	0x4f, 0x52, 0x59, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x54, 0x4f, 0x52, 0x41, 0x47, 0x45,
	0x10, 0x03, 0x12, 0x0c, 0x0a, 0x08, 0x43, 0x41, 0x4c, 0x4c, 0x44, 0x41, 0x54, 0x41, 0x10, 0x04,
	0x2a, 0x50, 0x0a, 0x0a, 0x56, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x0d,
	0x0a, 0x09, 0x56, 0x5f, 0x44, 0x45, 0x46, 0x41, 0x55, 0x4c, 0x54, 0x10, 0x00, 0x12, 0x0c, 0x0a,
	0x08, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x50,
	0x52, 0x49, 0x56, 0x41, 0x54, 0x45, 0x10, 0x02, 0x12, 0x0a, 0x0a, 0x06, 0x50, 0x55, 0x42, 0x4c,
	0x49, 0x43, 0x10, 0x03, 0x12, 0x0c, 0x0a, 0x08, 0x45, 0x58, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c,
	0x10, 0x04, 0x2a, 0xa5, 0x04, 0x0a, 0x08, 0x4f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x6f, 0x72, 0x12,
	0x0d, 0x0a, 0x09, 0x4f, 0x5f, 0x44, 0x45, 0x46, 0x41, 0x55, 0x4c, 0x54, 0x10, 0x00, 0x12, 0x0c,
	0x0a, 0x08, 0x41, 0x44, 0x44, 0x49, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b,
	0x53, 0x55, 0x42, 0x54, 0x52, 0x41, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x02, 0x12, 0x12, 0x0a,
	0x0e, 0x4d, 0x55, 0x4c, 0x54, 0x49, 0x50, 0x4c, 0x49, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10,
	0x03, 0x12, 0x0c, 0x0a, 0x08, 0x44, 0x49, 0x56, 0x49, 0x53, 0x49, 0x4f, 0x4e, 0x10, 0x04, 0x12,
	0x0a, 0x0a, 0x06, 0x4d, 0x4f, 0x44, 0x55, 0x4c, 0x4f, 0x10, 0x05, 0x12, 0x12, 0x0a, 0x0e, 0x45,
	0x58, 0x50, 0x4f, 0x4e, 0x45, 0x4e, 0x54, 0x49, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x10, 0x06, 0x12,
	0x10, 0x0a, 0x0c, 0x47, 0x52, 0x45, 0x41, 0x54, 0x45, 0x52, 0x5f, 0x54, 0x48, 0x41, 0x4e, 0x10,
	0x07, 0x12, 0x19, 0x0a, 0x15, 0x47, 0x52, 0x45, 0x41, 0x54, 0x45, 0x52, 0x5f, 0x54, 0x48, 0x41,
	0x4e, 0x5f, 0x4f, 0x52, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x08, 0x12, 0x0d, 0x0a, 0x09,
	0x4c, 0x45, 0x53, 0x53, 0x5f, 0x54, 0x48, 0x41, 0x4e, 0x10, 0x09, 0x12, 0x16, 0x0a, 0x12, 0x4c,
	0x45, 0x53, 0x53, 0x5f, 0x54, 0x48, 0x41, 0x4e, 0x5f, 0x4f, 0x52, 0x5f, 0x45, 0x51, 0x55, 0x41,
	0x4c, 0x10, 0x0a, 0x12, 0x09, 0x0a, 0x05, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x0b, 0x12, 0x0d,
	0x0a, 0x09, 0x4e, 0x4f, 0x54, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x0c, 0x12, 0x0e, 0x0a,
	0x0a, 0x50, 0x4c, 0x55, 0x53, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x0d, 0x12, 0x0f, 0x0a,
	0x0b, 0x4d, 0x49, 0x4e, 0x55, 0x53, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x0e, 0x12, 0x0d,
	0x0a, 0x09, 0x4d, 0x55, 0x4c, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x0f, 0x12, 0x0d, 0x0a,
	0x09, 0x44, 0x49, 0x56, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x10, 0x12, 0x0d, 0x0a, 0x09,
	0x4d, 0x4f, 0x44, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x11, 0x12, 0x0d, 0x0a, 0x09, 0x41,
	0x4e, 0x44, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x12, 0x12, 0x0c, 0x0a, 0x08, 0x4f, 0x52,
	0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x13, 0x12, 0x0d, 0x0a, 0x09, 0x58, 0x4f, 0x52, 0x5f,
	0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x14, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x48, 0x49, 0x46, 0x54,
	0x5f, 0x4c, 0x45, 0x46, 0x54, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x15, 0x12, 0x15, 0x0a,
	0x11, 0x53, 0x48, 0x49, 0x46, 0x54, 0x5f, 0x52, 0x49, 0x47, 0x48, 0x54, 0x5f, 0x45, 0x51, 0x55,
	0x41, 0x4c, 0x10, 0x16, 0x12, 0x11, 0x0a, 0x0d, 0x42, 0x49, 0x54, 0x5f, 0x41, 0x4e, 0x44, 0x5f,
	0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x17, 0x12, 0x10, 0x0a, 0x0c, 0x42, 0x49, 0x54, 0x5f, 0x4f,
	0x52, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x18, 0x12, 0x11, 0x0a, 0x0d, 0x42, 0x49, 0x54,
	0x5f, 0x58, 0x4f, 0x52, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x19, 0x12, 0x0d, 0x0a, 0x09,
	0x50, 0x4f, 0x57, 0x5f, 0x45, 0x51, 0x55, 0x41, 0x4c, 0x10, 0x1a, 0x12, 0x0d, 0x0a, 0x09, 0x49,
	0x4e, 0x43, 0x52, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x1b, 0x12, 0x0d, 0x0a, 0x09, 0x44, 0x45,
	0x43, 0x52, 0x45, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x1c, 0x12, 0x0b, 0x0a, 0x07, 0x42, 0x49, 0x54,
	0x5f, 0x4e, 0x4f, 0x54, 0x10, 0x1d, 0x12, 0x0b, 0x0a, 0x07, 0x42, 0x49, 0x54, 0x5f, 0x41, 0x4e,
	0x44, 0x10, 0x1e, 0x12, 0x07, 0x0a, 0x03, 0x4e, 0x4f, 0x54, 0x10, 0x1f, 0x12, 0x0c, 0x0a, 0x08,
	0x53, 0x55, 0x42, 0x54, 0x52, 0x41, 0x43, 0x54, 0x10, 0x20, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61,
	0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_ast_types_proto_rawDescOnce sync.Once
	file_ast_types_proto_rawDescData = file_ast_types_proto_rawDesc
)

func file_ast_types_proto_rawDescGZIP() []byte {
	file_ast_types_proto_rawDescOnce.Do(func() {
		file_ast_types_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_types_proto_rawDescData)
	})
	return file_ast_types_proto_rawDescData
}

var file_ast_types_proto_enumTypes = make([]protoimpl.EnumInfo, 5)
var file_ast_types_proto_goTypes = []interface{}{
	(NodeType)(0),        // 0: txpull.v1.ast.NodeType
	(Mutability)(0),      // 1: txpull.v1.ast.Mutability
	(StorageLocation)(0), // 2: txpull.v1.ast.StorageLocation
	(Visibility)(0),      // 3: txpull.v1.ast.Visibility
	(Operator)(0),        // 4: txpull.v1.ast.Operator
}
var file_ast_types_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ast_types_proto_init() }
func file_ast_types_proto_init() {
	if File_ast_types_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ast_types_proto_rawDesc,
			NumEnums:      5,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_types_proto_goTypes,
		DependencyIndexes: file_ast_types_proto_depIdxs,
		EnumInfos:         file_ast_types_proto_enumTypes,
	}.Build()
	File_ast_types_proto = out.File
	file_ast_types_proto_rawDesc = nil
	file_ast_types_proto_goTypes = nil
	file_ast_types_proto_depIdxs = nil
}
