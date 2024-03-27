// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: ast/inline_array.proto

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

type InlineArray struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               int64              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	NodeType         NodeType           `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Src              *Src               `protobuf:"bytes,3,opt,name=src,proto3" json:"src,omitempty"`
	IsEmpty          bool               `protobuf:"varint,4,opt,name=is_empty,json=isEmpty,proto3" json:"is_empty,omitempty"`
	Expressions      []*v3.TypedStruct  `protobuf:"bytes,5,rep,name=expressions,proto3" json:"expressions,omitempty"`
	TypeDescriptions []*TypeDescription `protobuf:"bytes,6,rep,name=type_descriptions,json=typeDescriptions,proto3" json:"type_descriptions,omitempty"`
	TypeDescription  *TypeDescription   `protobuf:"bytes,7,opt,name=type_description,json=typeDescription,proto3" json:"type_description,omitempty"`
}

func (x *InlineArray) Reset() {
	*x = InlineArray{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_inline_array_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InlineArray) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InlineArray) ProtoMessage() {}

func (x *InlineArray) ProtoReflect() protoreflect.Message {
	mi := &file_ast_inline_array_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InlineArray.ProtoReflect.Descriptor instead.
func (*InlineArray) Descriptor() ([]byte, []int) {
	return file_ast_inline_array_proto_rawDescGZIP(), []int{0}
}

func (x *InlineArray) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *InlineArray) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *InlineArray) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *InlineArray) GetIsEmpty() bool {
	if x != nil {
		return x.IsEmpty
	}
	return false
}

func (x *InlineArray) GetExpressions() []*v3.TypedStruct {
	if x != nil {
		return x.Expressions
	}
	return nil
}

func (x *InlineArray) GetTypeDescriptions() []*TypeDescription {
	if x != nil {
		return x.TypeDescriptions
	}
	return nil
}

func (x *InlineArray) GetTypeDescription() *TypeDescription {
	if x != nil {
		return x.TypeDescription
	}
	return nil
}

var File_ast_inline_array_proto protoreflect.FileDescriptor

var file_ast_inline_array_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x73, 0x74, 0x2f, 0x69, 0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x5f, 0x61, 0x72, 0x72,
	0x61, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72,
	0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x78, 0x64,
	0x73, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x76, 0x33, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x64, 0x5f,
	0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe8, 0x02, 0x0a,
	0x0b, 0x49, 0x6e, 0x6c, 0x69, 0x6e, 0x65, 0x41, 0x72, 0x72, 0x61, 0x79, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a, 0x09,
	0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79,
	0x70, 0x65, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x19, 0x0a, 0x08, 0x69, 0x73, 0x5f, 0x65,
	0x6d, 0x70, 0x74, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x69, 0x73, 0x45, 0x6d,
	0x70, 0x74, 0x79, 0x12, 0x3a, 0x0a, 0x0b, 0x65, 0x78, 0x70, 0x72, 0x65, 0x73, 0x73, 0x69, 0x6f,
	0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x78, 0x64, 0x73, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x64, 0x53, 0x74, 0x72, 0x75,
	0x63, 0x74, 0x52, 0x0b, 0x65, 0x78, 0x70, 0x72, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12,
	0x4b, 0x0a, 0x11, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x75, 0x6e, 0x70,
	0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x44,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x10, 0x74, 0x79, 0x70, 0x65,
	0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x49, 0x0a, 0x10,
	0x74, 0x79, 0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x74, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61,
	0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_ast_inline_array_proto_rawDescOnce sync.Once
	file_ast_inline_array_proto_rawDescData = file_ast_inline_array_proto_rawDesc
)

func file_ast_inline_array_proto_rawDescGZIP() []byte {
	file_ast_inline_array_proto_rawDescOnce.Do(func() {
		file_ast_inline_array_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_inline_array_proto_rawDescData)
	})
	return file_ast_inline_array_proto_rawDescData
}

var file_ast_inline_array_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ast_inline_array_proto_goTypes = []interface{}{
	(*InlineArray)(nil),     // 0: unpack.v1.ast.InlineArray
	(NodeType)(0),           // 1: unpack.v1.ast.NodeType
	(*Src)(nil),             // 2: unpack.v1.ast.Src
	(*v3.TypedStruct)(nil),  // 3: xds.type.v3.TypedStruct
	(*TypeDescription)(nil), // 4: unpack.v1.ast.TypeDescription
}
var file_ast_inline_array_proto_depIdxs = []int32{
	1, // 0: unpack.v1.ast.InlineArray.node_type:type_name -> unpack.v1.ast.NodeType
	2, // 1: unpack.v1.ast.InlineArray.src:type_name -> unpack.v1.ast.Src
	3, // 2: unpack.v1.ast.InlineArray.expressions:type_name -> xds.type.v3.TypedStruct
	4, // 3: unpack.v1.ast.InlineArray.type_descriptions:type_name -> unpack.v1.ast.TypeDescription
	4, // 4: unpack.v1.ast.InlineArray.type_description:type_name -> unpack.v1.ast.TypeDescription
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_ast_inline_array_proto_init() }
func file_ast_inline_array_proto_init() {
	if File_ast_inline_array_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_type_name_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_inline_array_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InlineArray); i {
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
			RawDescriptor: file_ast_inline_array_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_inline_array_proto_goTypes,
		DependencyIndexes: file_ast_inline_array_proto_depIdxs,
		MessageInfos:      file_ast_inline_array_proto_msgTypes,
	}.Build()
	File_ast_inline_array_proto = out.File
	file_ast_inline_array_proto_rawDesc = nil
	file_ast_inline_array_proto_goTypes = nil
	file_ast_inline_array_proto_depIdxs = nil
}