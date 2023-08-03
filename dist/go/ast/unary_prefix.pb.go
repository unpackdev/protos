// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/unary_prefix.proto

package ast_pb

import (
	v3 "github.com/cncf/xds/go/xds/type/v3"
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

type UnaryPrefix struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	NodeType              NodeType         `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	Src                   *Src             `protobuf:"bytes,3,opt,name=src,proto3" json:"src,omitempty"`
	Operator              Operator         `protobuf:"varint,4,opt,name=operator,proto3,enum=txpull.v1.ast.Operator" json:"operator,omitempty"`
	Prefix                bool             `protobuf:"varint,5,opt,name=prefix,proto3" json:"prefix,omitempty"`
	IsConstant            bool             `protobuf:"varint,6,opt,name=is_constant,json=isConstant,proto3" json:"is_constant,omitempty"`
	IsLValue              bool             `protobuf:"varint,7,opt,name=is_l_value,json=isLValue,proto3" json:"is_l_value,omitempty"`
	IsPure                bool             `protobuf:"varint,8,opt,name=is_pure,json=isPure,proto3" json:"is_pure,omitempty"`
	LValueRequested       bool             `protobuf:"varint,9,opt,name=l_value_requested,json=lValueRequested,proto3" json:"l_value_requested,omitempty"`
	Expression            *v3.TypedStruct  `protobuf:"bytes,10,opt,name=expression,proto3" json:"expression,omitempty"`
	ReferencedDeclaration int64            `protobuf:"varint,11,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	TypeDescription       *TypeDescription `protobuf:"bytes,12,opt,name=type_description,json=typeDescription,proto3" json:"type_description,omitempty"`
}

func (x *UnaryPrefix) Reset() {
	*x = UnaryPrefix{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_unary_prefix_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnaryPrefix) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnaryPrefix) ProtoMessage() {}

func (x *UnaryPrefix) ProtoReflect() protoreflect.Message {
	mi := &file_ast_unary_prefix_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnaryPrefix.ProtoReflect.Descriptor instead.
func (*UnaryPrefix) Descriptor() ([]byte, []int) {
	return file_ast_unary_prefix_proto_rawDescGZIP(), []int{0}
}

func (x *UnaryPrefix) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UnaryPrefix) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *UnaryPrefix) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *UnaryPrefix) GetOperator() Operator {
	if x != nil {
		return x.Operator
	}
	return Operator_O_DEFAULT
}

func (x *UnaryPrefix) GetPrefix() bool {
	if x != nil {
		return x.Prefix
	}
	return false
}

func (x *UnaryPrefix) GetIsConstant() bool {
	if x != nil {
		return x.IsConstant
	}
	return false
}

func (x *UnaryPrefix) GetIsLValue() bool {
	if x != nil {
		return x.IsLValue
	}
	return false
}

func (x *UnaryPrefix) GetIsPure() bool {
	if x != nil {
		return x.IsPure
	}
	return false
}

func (x *UnaryPrefix) GetLValueRequested() bool {
	if x != nil {
		return x.LValueRequested
	}
	return false
}

func (x *UnaryPrefix) GetExpression() *v3.TypedStruct {
	if x != nil {
		return x.Expression
	}
	return nil
}

func (x *UnaryPrefix) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *UnaryPrefix) GetTypeDescription() *TypeDescription {
	if x != nil {
		return x.TypeDescription
	}
	return nil
}

var File_ast_unary_prefix_proto protoreflect.FileDescriptor

var file_ast_unary_prefix_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x73, 0x74, 0x2f, 0x75, 0x6e, 0x61, 0x72, 0x79, 0x5f, 0x70, 0x72, 0x65, 0x66,
	0x69, 0x78, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72,
	0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x78, 0x64,
	0x73, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x76, 0x33, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x64, 0x5f,
	0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x86, 0x04, 0x0a,
	0x0b, 0x55, 0x6e, 0x61, 0x72, 0x79, 0x50, 0x72, 0x65, 0x66, 0x69, 0x78, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a, 0x09,
	0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x33, 0x0a, 0x08, 0x6f, 0x70, 0x65, 0x72,
	0x61, 0x74, 0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4f, 0x70, 0x65, 0x72, 0x61,
	0x74, 0x6f, 0x72, 0x52, 0x08, 0x6f, 0x70, 0x65, 0x72, 0x61, 0x74, 0x6f, 0x72, 0x12, 0x16, 0x0a,
	0x06, 0x70, 0x72, 0x65, 0x66, 0x69, 0x78, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x70,
	0x72, 0x65, 0x66, 0x69, 0x78, 0x12, 0x1f, 0x0a, 0x0b, 0x69, 0x73, 0x5f, 0x63, 0x6f, 0x6e, 0x73,
	0x74, 0x61, 0x6e, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0a, 0x69, 0x73, 0x43, 0x6f,
	0x6e, 0x73, 0x74, 0x61, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x0a, 0x69, 0x73, 0x5f, 0x6c, 0x5f, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x4c, 0x56,
	0x61, 0x6c, 0x75, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x70, 0x75, 0x72, 0x65, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73, 0x50, 0x75, 0x72, 0x65, 0x12, 0x2a, 0x0a,
	0x11, 0x6c, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x65, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0f, 0x6c, 0x56, 0x61, 0x6c, 0x75, 0x65,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x65, 0x64, 0x12, 0x38, 0x0a, 0x0a, 0x65, 0x78, 0x70,
	0x72, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e,
	0x78, 0x64, 0x73, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x79, 0x70, 0x65,
	0x64, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x0a, 0x65, 0x78, 0x70, 0x72, 0x65, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x16, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65,
	0x64, 0x5f, 0x64, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0b, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x15, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44,
	0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x49, 0x0a, 0x10, 0x74, 0x79,
	0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x74, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61, 0x73,
	0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_unary_prefix_proto_rawDescOnce sync.Once
	file_ast_unary_prefix_proto_rawDescData = file_ast_unary_prefix_proto_rawDesc
)

func file_ast_unary_prefix_proto_rawDescGZIP() []byte {
	file_ast_unary_prefix_proto_rawDescOnce.Do(func() {
		file_ast_unary_prefix_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_unary_prefix_proto_rawDescData)
	})
	return file_ast_unary_prefix_proto_rawDescData
}

var file_ast_unary_prefix_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ast_unary_prefix_proto_goTypes = []interface{}{
	(*UnaryPrefix)(nil),     // 0: txpull.v1.ast.UnaryPrefix
	(NodeType)(0),           // 1: txpull.v1.ast.NodeType
	(*Src)(nil),             // 2: txpull.v1.ast.Src
	(Operator)(0),           // 3: txpull.v1.ast.Operator
	(*v3.TypedStruct)(nil),  // 4: xds.type.v3.TypedStruct
	(*TypeDescription)(nil), // 5: txpull.v1.ast.TypeDescription
}
var file_ast_unary_prefix_proto_depIdxs = []int32{
	1, // 0: txpull.v1.ast.UnaryPrefix.node_type:type_name -> txpull.v1.ast.NodeType
	2, // 1: txpull.v1.ast.UnaryPrefix.src:type_name -> txpull.v1.ast.Src
	3, // 2: txpull.v1.ast.UnaryPrefix.operator:type_name -> txpull.v1.ast.Operator
	4, // 3: txpull.v1.ast.UnaryPrefix.expression:type_name -> xds.type.v3.TypedStruct
	5, // 4: txpull.v1.ast.UnaryPrefix.type_description:type_name -> txpull.v1.ast.TypeDescription
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_ast_unary_prefix_proto_init() }
func file_ast_unary_prefix_proto_init() {
	if File_ast_unary_prefix_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_type_name_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_unary_prefix_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnaryPrefix); i {
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
			RawDescriptor: file_ast_unary_prefix_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_unary_prefix_proto_goTypes,
		DependencyIndexes: file_ast_unary_prefix_proto_depIdxs,
		MessageInfos:      file_ast_unary_prefix_proto_msgTypes,
	}.Build()
	File_ast_unary_prefix_proto = out.File
	file_ast_unary_prefix_proto_rawDesc = nil
	file_ast_unary_prefix_proto_goTypes = nil
	file_ast_unary_prefix_proto_depIdxs = nil
}
