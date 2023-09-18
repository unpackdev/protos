// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ir/constructor.proto

package ir_pb

import (
	ast "github.com/unpackdev/protos/dist/go/ast"
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

// Represents a constructor declaration in the intermediate representation (IR).
type Constructor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"` // Unique identifier for the constructor.
	// Node type of the constructor. Refers to the AST node type enumeration in "ast/types.proto".
	NodeType ast.NodeType `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	// Kind of the constructor. Refers to the AST node type enumeration in "ast/types.proto".
	Kind        ast.NodeType `protobuf:"varint,3,opt,name=kind,proto3,enum=txpull.v1.ast.NodeType" json:"kind,omitempty"`
	Name        string       `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`                // Name of the constructor.
	Implemented bool         `protobuf:"varint,5,opt,name=implemented,proto3" json:"implemented,omitempty"` // Indicates if the constructor is implemented or not.
	// Visibility of the constructor. Refers to the visibility enumeration in "ast/types.proto".
	Visibility ast.Visibility `protobuf:"varint,6,opt,name=visibility,proto3,enum=txpull.v1.ast.Visibility" json:"visibility,omitempty"`
	// State mutability of the constructor. Refers to the mutability enumeration in "ast/types.proto".
	StateMutability ast.Mutability `protobuf:"varint,7,opt,name=state_mutability,json=stateMutability,proto3,enum=txpull.v1.ast.Mutability" json:"state_mutability,omitempty"`
	Virtual         bool           `protobuf:"varint,8,opt,name=virtual,proto3" json:"virtual,omitempty"`    // Indicates if the constructor is virtual.
	Modifiers       []*Modifier    `protobuf:"bytes,9,rep,name=modifiers,proto3" json:"modifiers,omitempty"` // List of constructor modifiers.
	// List of parameters of the constructor. Each parameter is defined in "ir/parameter.proto".
	Parameters []*Parameter `protobuf:"bytes,10,rep,name=parameters,proto3" json:"parameters,omitempty"`
	// List of return parameters of the constructor. Each return parameter is defined in "ir/parameter.proto".
	Return []*Parameter `protobuf:"bytes,11,rep,name=return,proto3" json:"return,omitempty"`
}

func (x *Constructor) Reset() {
	*x = Constructor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ir_constructor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Constructor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Constructor) ProtoMessage() {}

func (x *Constructor) ProtoReflect() protoreflect.Message {
	mi := &file_ir_constructor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Constructor.ProtoReflect.Descriptor instead.
func (*Constructor) Descriptor() ([]byte, []int) {
	return file_ir_constructor_proto_rawDescGZIP(), []int{0}
}

func (x *Constructor) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Constructor) GetNodeType() ast.NodeType {
	if x != nil {
		return x.NodeType
	}
	return ast.NodeType(0)
}

func (x *Constructor) GetKind() ast.NodeType {
	if x != nil {
		return x.Kind
	}
	return ast.NodeType(0)
}

func (x *Constructor) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Constructor) GetImplemented() bool {
	if x != nil {
		return x.Implemented
	}
	return false
}

func (x *Constructor) GetVisibility() ast.Visibility {
	if x != nil {
		return x.Visibility
	}
	return ast.Visibility(0)
}

func (x *Constructor) GetStateMutability() ast.Mutability {
	if x != nil {
		return x.StateMutability
	}
	return ast.Mutability(0)
}

func (x *Constructor) GetVirtual() bool {
	if x != nil {
		return x.Virtual
	}
	return false
}

func (x *Constructor) GetModifiers() []*Modifier {
	if x != nil {
		return x.Modifiers
	}
	return nil
}

func (x *Constructor) GetParameters() []*Parameter {
	if x != nil {
		return x.Parameters
	}
	return nil
}

func (x *Constructor) GetReturn() []*Parameter {
	if x != nil {
		return x.Return
	}
	return nil
}

var File_ir_constructor_proto protoreflect.FileDescriptor

var file_ir_constructor_proto_rawDesc = []byte{
	0x0a, 0x14, 0x69, 0x72, 0x2f, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0c, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x69, 0x72, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x69, 0x72, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65,
	0x74, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x69, 0x72, 0x2f, 0x6d, 0x6f,
	0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf1, 0x03, 0x0a,
	0x0b, 0x43, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a, 0x09,
	0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74,
	0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74,
	0x65, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x65, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c,
	0x69, 0x74, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75,
	0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x56, 0x69, 0x73, 0x69, 0x62, 0x69,
	0x6c, 0x69, 0x74, 0x79, 0x52, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79,
	0x12, 0x44, 0x0a, 0x10, 0x73, 0x74, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x75, 0x74, 0x61, 0x62, 0x69,
	0x6c, 0x69, 0x74, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4d, 0x75, 0x74, 0x61, 0x62,
	0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x4d, 0x75, 0x74, 0x61,
	0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61,
	0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c,
	0x12, 0x34, 0x0a, 0x09, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x73, 0x18, 0x09, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e,
	0x69, 0x72, 0x2e, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x52, 0x09, 0x6d, 0x6f, 0x64,
	0x69, 0x66, 0x69, 0x65, 0x72, 0x73, 0x12, 0x37, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65,
	0x74, 0x65, 0x72, 0x73, 0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65,
	0x74, 0x65, 0x72, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x12,
	0x2f, 0x0a, 0x06, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x18, 0x0b, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x2e, 0x50,
	0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x52, 0x06, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e,
	0x42, 0x2e, 0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75,
	0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f,
	0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x69, 0x72, 0x3b, 0x69, 0x72, 0x5f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ir_constructor_proto_rawDescOnce sync.Once
	file_ir_constructor_proto_rawDescData = file_ir_constructor_proto_rawDesc
)

func file_ir_constructor_proto_rawDescGZIP() []byte {
	file_ir_constructor_proto_rawDescOnce.Do(func() {
		file_ir_constructor_proto_rawDescData = protoimpl.X.CompressGZIP(file_ir_constructor_proto_rawDescData)
	})
	return file_ir_constructor_proto_rawDescData
}

var file_ir_constructor_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ir_constructor_proto_goTypes = []interface{}{
	(*Constructor)(nil), // 0: txpull.v1.ir.Constructor
	(ast.NodeType)(0),   // 1: txpull.v1.ast.NodeType
	(ast.Visibility)(0), // 2: txpull.v1.ast.Visibility
	(ast.Mutability)(0), // 3: txpull.v1.ast.Mutability
	(*Modifier)(nil),    // 4: txpull.v1.ir.Modifier
	(*Parameter)(nil),   // 5: txpull.v1.ir.Parameter
}
var file_ir_constructor_proto_depIdxs = []int32{
	1, // 0: txpull.v1.ir.Constructor.node_type:type_name -> txpull.v1.ast.NodeType
	1, // 1: txpull.v1.ir.Constructor.kind:type_name -> txpull.v1.ast.NodeType
	2, // 2: txpull.v1.ir.Constructor.visibility:type_name -> txpull.v1.ast.Visibility
	3, // 3: txpull.v1.ir.Constructor.state_mutability:type_name -> txpull.v1.ast.Mutability
	4, // 4: txpull.v1.ir.Constructor.modifiers:type_name -> txpull.v1.ir.Modifier
	5, // 5: txpull.v1.ir.Constructor.parameters:type_name -> txpull.v1.ir.Parameter
	5, // 6: txpull.v1.ir.Constructor.return:type_name -> txpull.v1.ir.Parameter
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_ir_constructor_proto_init() }
func file_ir_constructor_proto_init() {
	if File_ir_constructor_proto != nil {
		return
	}
	file_ir_parameter_proto_init()
	file_ir_modifier_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ir_constructor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Constructor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ir_constructor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ir_constructor_proto_goTypes,
		DependencyIndexes: file_ir_constructor_proto_depIdxs,
		MessageInfos:      file_ir_constructor_proto_msgTypes,
	}.Build()
	File_ir_constructor_proto = out.File
	file_ir_constructor_proto_rawDesc = nil
	file_ir_constructor_proto_goTypes = nil
	file_ir_constructor_proto_depIdxs = nil
}
