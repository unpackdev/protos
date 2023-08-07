// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ir/struct.proto

package ir_pb

import (
	ast "github.com/txpull/protos/dist/go/ast"
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

// Represents a struct declaration in the intermediate representation (IR).
type Struct struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"` // Unique identifier for the struct.
	// Node type of the struct. Refers to the AST node type enumeration in "ast/types.proto".
	NodeType ast.NodeType `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	// Kind of the struct. Refers to the AST node type enumeration in "ast/types.proto".
	Kind                    ast.NodeType `protobuf:"varint,3,opt,name=kind,proto3,enum=txpull.v1.ast.NodeType" json:"kind,omitempty"`
	Name                    string       `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`                                                                         // Name of the struct.
	CanonicalName           string       `protobuf:"bytes,5,opt,name=canonical_name,json=canonicalName,proto3" json:"canonical_name,omitempty"`                                  // Canonical name of the struct.
	ReferencedDeclarationId int64        `protobuf:"varint,6,opt,name=referenced_declaration_id,json=referencedDeclarationId,proto3" json:"referenced_declaration_id,omitempty"` // Identifier of the referenced declaration.
	// Visibility of the struct. Refers to the visibility enumeration in "ast/types.proto".
	Visibility ast.Visibility `protobuf:"varint,7,opt,name=visibility,proto3,enum=txpull.v1.ast.Visibility" json:"visibility,omitempty"`
	// Storage location of the struct. Refers to the storage location enumeration in "ast/types.proto".
	StorageLocation ast.StorageLocation `protobuf:"varint,8,opt,name=storage_location,json=storageLocation,proto3,enum=txpull.v1.ast.StorageLocation" json:"storage_location,omitempty"`
	// List of members (fields) associated with the struct. Each member is defined using the "txpull.v1.ir.Parameter" message.
	Members []*Parameter `protobuf:"bytes,9,rep,name=members,proto3" json:"members,omitempty"`
	Type    string       `protobuf:"bytes,10,opt,name=type,proto3" json:"type,omitempty"` // Deprecated field. Should not be used.
	// Type description of the struct. Refers to the "txpull.v1.ast.TypeDescription" message in "ast/types.proto".
	TypeDescription *ast.TypeDescription `protobuf:"bytes,11,opt,name=type_description,json=typeDescription,proto3" json:"type_description,omitempty"`
}

func (x *Struct) Reset() {
	*x = Struct{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ir_struct_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Struct) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Struct) ProtoMessage() {}

func (x *Struct) ProtoReflect() protoreflect.Message {
	mi := &file_ir_struct_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Struct.ProtoReflect.Descriptor instead.
func (*Struct) Descriptor() ([]byte, []int) {
	return file_ir_struct_proto_rawDescGZIP(), []int{0}
}

func (x *Struct) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Struct) GetNodeType() ast.NodeType {
	if x != nil {
		return x.NodeType
	}
	return ast.NodeType(0)
}

func (x *Struct) GetKind() ast.NodeType {
	if x != nil {
		return x.Kind
	}
	return ast.NodeType(0)
}

func (x *Struct) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Struct) GetCanonicalName() string {
	if x != nil {
		return x.CanonicalName
	}
	return ""
}

func (x *Struct) GetReferencedDeclarationId() int64 {
	if x != nil {
		return x.ReferencedDeclarationId
	}
	return 0
}

func (x *Struct) GetVisibility() ast.Visibility {
	if x != nil {
		return x.Visibility
	}
	return ast.Visibility(0)
}

func (x *Struct) GetStorageLocation() ast.StorageLocation {
	if x != nil {
		return x.StorageLocation
	}
	return ast.StorageLocation(0)
}

func (x *Struct) GetMembers() []*Parameter {
	if x != nil {
		return x.Members
	}
	return nil
}

func (x *Struct) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Struct) GetTypeDescription() *ast.TypeDescription {
	if x != nil {
		return x.TypeDescription
	}
	return nil
}

var File_ir_struct_proto protoreflect.FileDescriptor

var file_ir_struct_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x69, 0x72, 0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0c, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x1a,
	0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x69, 0x72, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65,
	0x74, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8a, 0x04, 0x0a, 0x06, 0x53, 0x74,
	0x72, 0x75, 0x63, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x6b, 0x69,
	0x6e, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x63,
	0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x61, 0x6e, 0x6f, 0x6e, 0x69, 0x63, 0x61, 0x6c, 0x4e, 0x61,
	0x6d, 0x65, 0x12, 0x3a, 0x0a, 0x19, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64,
	0x5f, 0x64, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x17, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65,
	0x64, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x39,
	0x0a, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x2e, 0x56, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0a, 0x76,
	0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x49, 0x0a, 0x10, 0x73, 0x74, 0x6f,
	0x72, 0x61, 0x67, 0x65, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x73, 0x74, 0x2e, 0x53, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x73, 0x74, 0x6f, 0x72, 0x61, 0x67, 0x65, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x31, 0x0a, 0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x18,
	0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x69, 0x72, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x52, 0x07,
	0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x49, 0x0a, 0x10, 0x74,
	0x79, 0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x74, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x42, 0x2b, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x69, 0x72, 0x3b, 0x69, 0x72,
	0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ir_struct_proto_rawDescOnce sync.Once
	file_ir_struct_proto_rawDescData = file_ir_struct_proto_rawDesc
)

func file_ir_struct_proto_rawDescGZIP() []byte {
	file_ir_struct_proto_rawDescOnce.Do(func() {
		file_ir_struct_proto_rawDescData = protoimpl.X.CompressGZIP(file_ir_struct_proto_rawDescData)
	})
	return file_ir_struct_proto_rawDescData
}

var file_ir_struct_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ir_struct_proto_goTypes = []interface{}{
	(*Struct)(nil),              // 0: txpull.v1.ir.Struct
	(ast.NodeType)(0),           // 1: txpull.v1.ast.NodeType
	(ast.Visibility)(0),         // 2: txpull.v1.ast.Visibility
	(ast.StorageLocation)(0),    // 3: txpull.v1.ast.StorageLocation
	(*Parameter)(nil),           // 4: txpull.v1.ir.Parameter
	(*ast.TypeDescription)(nil), // 5: txpull.v1.ast.TypeDescription
}
var file_ir_struct_proto_depIdxs = []int32{
	1, // 0: txpull.v1.ir.Struct.node_type:type_name -> txpull.v1.ast.NodeType
	1, // 1: txpull.v1.ir.Struct.kind:type_name -> txpull.v1.ast.NodeType
	2, // 2: txpull.v1.ir.Struct.visibility:type_name -> txpull.v1.ast.Visibility
	3, // 3: txpull.v1.ir.Struct.storage_location:type_name -> txpull.v1.ast.StorageLocation
	4, // 4: txpull.v1.ir.Struct.members:type_name -> txpull.v1.ir.Parameter
	5, // 5: txpull.v1.ir.Struct.type_description:type_name -> txpull.v1.ast.TypeDescription
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_ir_struct_proto_init() }
func file_ir_struct_proto_init() {
	if File_ir_struct_proto != nil {
		return
	}
	file_ir_parameter_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ir_struct_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Struct); i {
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
			RawDescriptor: file_ir_struct_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ir_struct_proto_goTypes,
		DependencyIndexes: file_ir_struct_proto_depIdxs,
		MessageInfos:      file_ir_struct_proto_msgTypes,
	}.Build()
	File_ir_struct_proto = out.File
	file_ir_struct_proto_rawDesc = nil
	file_ir_struct_proto_goTypes = nil
	file_ir_struct_proto_depIdxs = nil
}
