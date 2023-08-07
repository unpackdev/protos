// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ir/import.proto

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

// Represents an import declaration in the intermediate representation (IR).
type Import struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"` // Unique identifier for the import.
	// Node type of the import. Refers to the AST node type enumeration in "ast/types.proto".
	NodeType     ast.NodeType `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	SourceUnitId int64        `protobuf:"varint,3,opt,name=source_unit_id,json=sourceUnitId,proto3" json:"source_unit_id,omitempty"` // Identifier of the source unit for the import.
	ContractId   int64        `protobuf:"varint,4,opt,name=contract_id,json=contractId,proto3" json:"contract_id,omitempty"`         // Identifier of the contract for the import.
	AbsolutePath string       `protobuf:"bytes,5,opt,name=absolute_path,json=absolutePath,proto3" json:"absolute_path,omitempty"`    // Absolute path of the imported file.
	File         string       `protobuf:"bytes,6,opt,name=file,proto3" json:"file,omitempty"`                                        // File name of the imported file.
	UnitAlias    string       `protobuf:"bytes,7,opt,name=unit_alias,json=unitAlias,proto3" json:"unit_alias,omitempty"`             // Alias for the imported unit (optional).
}

func (x *Import) Reset() {
	*x = Import{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ir_import_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Import) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Import) ProtoMessage() {}

func (x *Import) ProtoReflect() protoreflect.Message {
	mi := &file_ir_import_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Import.ProtoReflect.Descriptor instead.
func (*Import) Descriptor() ([]byte, []int) {
	return file_ir_import_proto_rawDescGZIP(), []int{0}
}

func (x *Import) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Import) GetNodeType() ast.NodeType {
	if x != nil {
		return x.NodeType
	}
	return ast.NodeType(0)
}

func (x *Import) GetSourceUnitId() int64 {
	if x != nil {
		return x.SourceUnitId
	}
	return 0
}

func (x *Import) GetContractId() int64 {
	if x != nil {
		return x.ContractId
	}
	return 0
}

func (x *Import) GetAbsolutePath() string {
	if x != nil {
		return x.AbsolutePath
	}
	return ""
}

func (x *Import) GetFile() string {
	if x != nil {
		return x.File
	}
	return ""
}

func (x *Import) GetUnitAlias() string {
	if x != nil {
		return x.UnitAlias
	}
	return ""
}

var File_ir_import_proto protoreflect.FileDescriptor

var file_ir_import_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x69, 0x72, 0x2f, 0x69, 0x6d, 0x70, 0x6f, 0x72, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0c, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x1a,
	0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xed, 0x01, 0x0a, 0x06, 0x49, 0x6d, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a, 0x09, 0x6e,
	0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e,
	0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x12, 0x24, 0x0a, 0x0e, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x6e, 0x69, 0x74,
	0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x55, 0x6e, 0x69, 0x74, 0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x6f, 0x6e, 0x74, 0x72,
	0x61, 0x63, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x49, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x61, 0x62, 0x73, 0x6f,
	0x6c, 0x75, 0x74, 0x65, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x12, 0x12, 0x0a,
	0x04, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x66, 0x69, 0x6c,
	0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x6e, 0x69, 0x74, 0x5f, 0x61, 0x6c, 0x69, 0x61, 0x73, 0x18,
	0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x6e, 0x69, 0x74, 0x41, 0x6c, 0x69, 0x61, 0x73,
	0x42, 0x2b, 0x5a, 0x29, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73,
	0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x69, 0x72, 0x3b, 0x69, 0x72, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ir_import_proto_rawDescOnce sync.Once
	file_ir_import_proto_rawDescData = file_ir_import_proto_rawDesc
)

func file_ir_import_proto_rawDescGZIP() []byte {
	file_ir_import_proto_rawDescOnce.Do(func() {
		file_ir_import_proto_rawDescData = protoimpl.X.CompressGZIP(file_ir_import_proto_rawDescData)
	})
	return file_ir_import_proto_rawDescData
}

var file_ir_import_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ir_import_proto_goTypes = []interface{}{
	(*Import)(nil),    // 0: txpull.v1.ir.Import
	(ast.NodeType)(0), // 1: txpull.v1.ast.NodeType
}
var file_ir_import_proto_depIdxs = []int32{
	1, // 0: txpull.v1.ir.Import.node_type:type_name -> txpull.v1.ast.NodeType
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_ir_import_proto_init() }
func file_ir_import_proto_init() {
	if File_ir_import_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ir_import_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Import); i {
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
			RawDescriptor: file_ir_import_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ir_import_proto_goTypes,
		DependencyIndexes: file_ir_import_proto_depIdxs,
		MessageInfos:      file_ir_import_proto_msgTypes,
	}.Build()
	File_ir_import_proto = out.File
	file_ir_import_proto_rawDesc = nil
	file_ir_import_proto_goTypes = nil
	file_ir_import_proto_depIdxs = nil
}
