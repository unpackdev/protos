// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/using.proto

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

type LibraryName struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType              NodeType `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	ReferencedDeclaration int64    `protobuf:"varint,4,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	Src                   *Src     `protobuf:"bytes,5,opt,name=src,proto3" json:"src,omitempty"`
}

func (x *LibraryName) Reset() {
	*x = LibraryName{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_using_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LibraryName) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LibraryName) ProtoMessage() {}

func (x *LibraryName) ProtoReflect() protoreflect.Message {
	mi := &file_ast_using_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LibraryName.ProtoReflect.Descriptor instead.
func (*LibraryName) Descriptor() ([]byte, []int) {
	return file_ast_using_proto_rawDescGZIP(), []int{0}
}

func (x *LibraryName) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *LibraryName) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *LibraryName) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *LibraryName) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *LibraryName) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

type Using struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int64        `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string       `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType    NodeType     `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	Src         *Src         `protobuf:"bytes,4,opt,name=src,proto3" json:"src,omitempty"`
	LibraryName *LibraryName `protobuf:"bytes,5,opt,name=library_name,json=libraryName,proto3" json:"library_name,omitempty"`
	TypeName    *TypeName    `protobuf:"bytes,6,opt,name=type_name,json=typeName,proto3" json:"type_name,omitempty"`
}

func (x *Using) Reset() {
	*x = Using{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_using_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Using) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Using) ProtoMessage() {}

func (x *Using) ProtoReflect() protoreflect.Message {
	mi := &file_ast_using_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Using.ProtoReflect.Descriptor instead.
func (*Using) Descriptor() ([]byte, []int) {
	return file_ast_using_proto_rawDescGZIP(), []int{1}
}

func (x *Using) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Using) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Using) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *Using) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *Using) GetLibraryName() *LibraryName {
	if x != nil {
		return x.LibraryName
	}
	return nil
}

func (x *Using) GetTypeName() *TypeName {
	if x != nil {
		return x.TypeName
	}
	return nil
}

var File_ast_using_proto protoreflect.FileDescriptor

var file_ast_using_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x75, 0x73, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74,
	0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc4, 0x01, 0x0a, 0x0b, 0x4c, 0x69, 0x62, 0x72, 0x61, 0x72,
	0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64,
	0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x35, 0x0a, 0x16, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x64, 0x65,
	0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x15, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44, 0x65, 0x63, 0x6c, 0x61,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x22, 0xfc, 0x01, 0x0a,
	0x05, 0x55, 0x73, 0x69, 0x6e, 0x67, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f,
	0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f,
	0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72,
	0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x3d, 0x0a, 0x0c, 0x6c, 0x69, 0x62, 0x72, 0x61, 0x72,
	0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4c, 0x69, 0x62,
	0x72, 0x61, 0x72, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x52, 0x0b, 0x6c, 0x69, 0x62, 0x72, 0x61, 0x72,
	0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d,
	0x65, 0x52, 0x08, 0x74, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x42, 0x2d, 0x5a, 0x2b, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f,
	0x61, 0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_ast_using_proto_rawDescOnce sync.Once
	file_ast_using_proto_rawDescData = file_ast_using_proto_rawDesc
)

func file_ast_using_proto_rawDescGZIP() []byte {
	file_ast_using_proto_rawDescOnce.Do(func() {
		file_ast_using_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_using_proto_rawDescData)
	})
	return file_ast_using_proto_rawDescData
}

var file_ast_using_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_ast_using_proto_goTypes = []interface{}{
	(*LibraryName)(nil), // 0: txpull.v1.ast.LibraryName
	(*Using)(nil),       // 1: txpull.v1.ast.Using
	(NodeType)(0),       // 2: txpull.v1.ast.NodeType
	(*Src)(nil),         // 3: txpull.v1.ast.Src
	(*TypeName)(nil),    // 4: txpull.v1.ast.TypeName
}
var file_ast_using_proto_depIdxs = []int32{
	2, // 0: txpull.v1.ast.LibraryName.node_type:type_name -> txpull.v1.ast.NodeType
	3, // 1: txpull.v1.ast.LibraryName.src:type_name -> txpull.v1.ast.Src
	2, // 2: txpull.v1.ast.Using.node_type:type_name -> txpull.v1.ast.NodeType
	3, // 3: txpull.v1.ast.Using.src:type_name -> txpull.v1.ast.Src
	0, // 4: txpull.v1.ast.Using.library_name:type_name -> txpull.v1.ast.LibraryName
	4, // 5: txpull.v1.ast.Using.type_name:type_name -> txpull.v1.ast.TypeName
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_ast_using_proto_init() }
func file_ast_using_proto_init() {
	if File_ast_using_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_type_name_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_using_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LibraryName); i {
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
		file_ast_using_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Using); i {
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
			RawDescriptor: file_ast_using_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_using_proto_goTypes,
		DependencyIndexes: file_ast_using_proto_depIdxs,
		MessageInfos:      file_ast_using_proto_msgTypes,
	}.Build()
	File_ast_using_proto = out.File
	file_ast_using_proto_rawDesc = nil
	file_ast_using_proto_goTypes = nil
	file_ast_using_proto_depIdxs = nil
}
