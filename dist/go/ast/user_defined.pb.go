// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/user_defined.proto

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

type UserDefinedValueTypeDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	NodeType              NodeType         `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Src                   *Src             `protobuf:"bytes,3,opt,name=src,proto3" json:"src,omitempty"`
	Is                    bool             `protobuf:"varint,4,opt,name=is,proto3" json:"is,omitempty"`
	Type                  string           `protobuf:"bytes,5,opt,name=type,proto3" json:"type,omitempty"`
	TypeLocation          *Src             `protobuf:"bytes,6,opt,name=type_location,json=typeLocation,proto3" json:"type_location,omitempty"`
	Name                  string           `protobuf:"bytes,7,opt,name=name,proto3" json:"name,omitempty"`
	NameLocation          *Src             `protobuf:"bytes,8,opt,name=name_location,json=nameLocation,proto3" json:"name_location,omitempty"`
	TypeName              *TypeName        `protobuf:"bytes,9,opt,name=type_name,json=typeName,proto3" json:"type_name,omitempty"`
	ReferencedDeclaration int64            `protobuf:"varint,10,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	TypeDescription       *TypeDescription `protobuf:"bytes,11,opt,name=type_description,json=typeDescription,proto3" json:"type_description,omitempty"`
}

func (x *UserDefinedValueTypeDefinition) Reset() {
	*x = UserDefinedValueTypeDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_user_defined_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UserDefinedValueTypeDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserDefinedValueTypeDefinition) ProtoMessage() {}

func (x *UserDefinedValueTypeDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_ast_user_defined_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserDefinedValueTypeDefinition.ProtoReflect.Descriptor instead.
func (*UserDefinedValueTypeDefinition) Descriptor() ([]byte, []int) {
	return file_ast_user_defined_proto_rawDescGZIP(), []int{0}
}

func (x *UserDefinedValueTypeDefinition) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UserDefinedValueTypeDefinition) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *UserDefinedValueTypeDefinition) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *UserDefinedValueTypeDefinition) GetIs() bool {
	if x != nil {
		return x.Is
	}
	return false
}

func (x *UserDefinedValueTypeDefinition) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *UserDefinedValueTypeDefinition) GetTypeLocation() *Src {
	if x != nil {
		return x.TypeLocation
	}
	return nil
}

func (x *UserDefinedValueTypeDefinition) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UserDefinedValueTypeDefinition) GetNameLocation() *Src {
	if x != nil {
		return x.NameLocation
	}
	return nil
}

func (x *UserDefinedValueTypeDefinition) GetTypeName() *TypeName {
	if x != nil {
		return x.TypeName
	}
	return nil
}

func (x *UserDefinedValueTypeDefinition) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *UserDefinedValueTypeDefinition) GetTypeDescription() *TypeDescription {
	if x != nil {
		return x.TypeDescription
	}
	return nil
}

var File_ast_user_defined_proto protoreflect.FileDescriptor

var file_ast_user_defined_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x73, 0x74, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x64, 0x65, 0x66, 0x69, 0x6e,
	0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72,
	0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xee, 0x03, 0x0a,
	0x1e, 0x55, 0x73, 0x65, 0x72, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x65, 0x64, 0x56, 0x61, 0x6c, 0x75,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x02, 0x69, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x37, 0x0a, 0x0d, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x0c, 0x74, 0x79, 0x70, 0x65,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x37, 0x0a, 0x0d,
	0x6e, 0x61, 0x6d, 0x65, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x0c, 0x6e, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x09, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d,
	0x65, 0x52, 0x08, 0x74, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x35, 0x0a, 0x16, 0x72,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x64, 0x65, 0x63, 0x6c, 0x61, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x03, 0x52, 0x15, 0x72, 0x65, 0x66,
	0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x49, 0x0a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x75,
	0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70,
	0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x74, 0x79,
	0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x30, 0x5a,
	0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73,
	0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_user_defined_proto_rawDescOnce sync.Once
	file_ast_user_defined_proto_rawDescData = file_ast_user_defined_proto_rawDesc
)

func file_ast_user_defined_proto_rawDescGZIP() []byte {
	file_ast_user_defined_proto_rawDescOnce.Do(func() {
		file_ast_user_defined_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_user_defined_proto_rawDescData)
	})
	return file_ast_user_defined_proto_rawDescData
}

var file_ast_user_defined_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ast_user_defined_proto_goTypes = []interface{}{
	(*UserDefinedValueTypeDefinition)(nil), // 0: unpack.v1.ast.UserDefinedValueTypeDefinition
	(NodeType)(0),                          // 1: unpack.v1.ast.NodeType
	(*Src)(nil),                            // 2: unpack.v1.ast.Src
	(*TypeName)(nil),                       // 3: unpack.v1.ast.TypeName
	(*TypeDescription)(nil),                // 4: unpack.v1.ast.TypeDescription
}
var file_ast_user_defined_proto_depIdxs = []int32{
	1, // 0: unpack.v1.ast.UserDefinedValueTypeDefinition.node_type:type_name -> unpack.v1.ast.NodeType
	2, // 1: unpack.v1.ast.UserDefinedValueTypeDefinition.src:type_name -> unpack.v1.ast.Src
	2, // 2: unpack.v1.ast.UserDefinedValueTypeDefinition.type_location:type_name -> unpack.v1.ast.Src
	2, // 3: unpack.v1.ast.UserDefinedValueTypeDefinition.name_location:type_name -> unpack.v1.ast.Src
	3, // 4: unpack.v1.ast.UserDefinedValueTypeDefinition.type_name:type_name -> unpack.v1.ast.TypeName
	4, // 5: unpack.v1.ast.UserDefinedValueTypeDefinition.type_description:type_name -> unpack.v1.ast.TypeDescription
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_ast_user_defined_proto_init() }
func file_ast_user_defined_proto_init() {
	if File_ast_user_defined_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_type_name_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_user_defined_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UserDefinedValueTypeDefinition); i {
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
			RawDescriptor: file_ast_user_defined_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_user_defined_proto_goTypes,
		DependencyIndexes: file_ast_user_defined_proto_depIdxs,
		MessageInfos:      file_ast_user_defined_proto_msgTypes,
	}.Build()
	File_ast_user_defined_proto = out.File
	file_ast_user_defined_proto_rawDesc = nil
	file_ast_user_defined_proto_goTypes = nil
	file_ast_user_defined_proto_depIdxs = nil
}
