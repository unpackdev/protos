// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: ast/source_unit.proto

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

type RootSourceUnit struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              int64             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	EntrySourceUnit int64             `protobuf:"varint,2,opt,name=entry_source_unit,json=entrySourceUnit,proto3" json:"entry_source_unit,omitempty"`
	NodeType        NodeType          `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	GlobalNodes     []*v3.TypedStruct `protobuf:"bytes,4,rep,name=global_nodes,json=globalNodes,proto3" json:"global_nodes,omitempty"`
	SourceUnits     []*SourceUnit     `protobuf:"bytes,5,rep,name=source_units,json=sourceUnits,proto3" json:"source_units,omitempty"`
	Comments        []*Comment        `protobuf:"bytes,6,rep,name=comments,proto3" json:"comments,omitempty"`
}

func (x *RootSourceUnit) Reset() {
	*x = RootSourceUnit{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_source_unit_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RootSourceUnit) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RootSourceUnit) ProtoMessage() {}

func (x *RootSourceUnit) ProtoReflect() protoreflect.Message {
	mi := &file_ast_source_unit_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RootSourceUnit.ProtoReflect.Descriptor instead.
func (*RootSourceUnit) Descriptor() ([]byte, []int) {
	return file_ast_source_unit_proto_rawDescGZIP(), []int{0}
}

func (x *RootSourceUnit) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *RootSourceUnit) GetEntrySourceUnit() int64 {
	if x != nil {
		return x.EntrySourceUnit
	}
	return 0
}

func (x *RootSourceUnit) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *RootSourceUnit) GetGlobalNodes() []*v3.TypedStruct {
	if x != nil {
		return x.GlobalNodes
	}
	return nil
}

func (x *RootSourceUnit) GetSourceUnits() []*SourceUnit {
	if x != nil {
		return x.SourceUnits
	}
	return nil
}

func (x *RootSourceUnit) GetComments() []*Comment {
	if x != nil {
		return x.Comments
	}
	return nil
}

type SourceUnit struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id              int64             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	License         string            `protobuf:"bytes,2,opt,name=license,proto3" json:"license,omitempty"`
	Name            string            `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	AbsolutePath    string            `protobuf:"bytes,4,opt,name=absolute_path,json=absolutePath,proto3" json:"absolute_path,omitempty"`
	ExportedSymbols []*ExportedSymbol `protobuf:"bytes,5,rep,name=exported_symbols,json=exportedSymbols,proto3" json:"exported_symbols,omitempty"`
	NodeType        NodeType          `protobuf:"varint,6,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Root            *RootNode         `protobuf:"bytes,7,opt,name=root,proto3" json:"root,omitempty"`
	Src             *Src              `protobuf:"bytes,8,opt,name=src,proto3" json:"src,omitempty"`
	Comments        []*Comment        `protobuf:"bytes,9,rep,name=comments,proto3" json:"comments,omitempty"`
}

func (x *SourceUnit) Reset() {
	*x = SourceUnit{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_source_unit_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SourceUnit) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SourceUnit) ProtoMessage() {}

func (x *SourceUnit) ProtoReflect() protoreflect.Message {
	mi := &file_ast_source_unit_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SourceUnit.ProtoReflect.Descriptor instead.
func (*SourceUnit) Descriptor() ([]byte, []int) {
	return file_ast_source_unit_proto_rawDescGZIP(), []int{1}
}

func (x *SourceUnit) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *SourceUnit) GetLicense() string {
	if x != nil {
		return x.License
	}
	return ""
}

func (x *SourceUnit) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SourceUnit) GetAbsolutePath() string {
	if x != nil {
		return x.AbsolutePath
	}
	return ""
}

func (x *SourceUnit) GetExportedSymbols() []*ExportedSymbol {
	if x != nil {
		return x.ExportedSymbols
	}
	return nil
}

func (x *SourceUnit) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *SourceUnit) GetRoot() *RootNode {
	if x != nil {
		return x.Root
	}
	return nil
}

func (x *SourceUnit) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *SourceUnit) GetComments() []*Comment {
	if x != nil {
		return x.Comments
	}
	return nil
}

type ExportedSymbol struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name         string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	AbsolutePath string `protobuf:"bytes,3,opt,name=absolute_path,json=absolutePath,proto3" json:"absolute_path,omitempty"`
}

func (x *ExportedSymbol) Reset() {
	*x = ExportedSymbol{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_source_unit_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExportedSymbol) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExportedSymbol) ProtoMessage() {}

func (x *ExportedSymbol) ProtoReflect() protoreflect.Message {
	mi := &file_ast_source_unit_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExportedSymbol.ProtoReflect.Descriptor instead.
func (*ExportedSymbol) Descriptor() ([]byte, []int) {
	return file_ast_source_unit_proto_rawDescGZIP(), []int{2}
}

func (x *ExportedSymbol) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ExportedSymbol) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ExportedSymbol) GetAbsolutePath() string {
	if x != nil {
		return x.AbsolutePath
	}
	return ""
}

var File_ast_source_unit_proto protoreflect.FileDescriptor

var file_ast_source_unit_proto_rawDesc = []byte{
	0x0a, 0x15, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x6e, 0x69,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x61, 0x73, 0x74, 0x2f, 0x6e, 0x6f, 0x64, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x61, 0x73, 0x74, 0x2f, 0x63, 0x6f, 0x6d, 0x6d,
	0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x78, 0x64, 0x73, 0x2f, 0x74,
	0x79, 0x70, 0x65, 0x2f, 0x76, 0x33, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x64, 0x5f, 0x73, 0x74, 0x72,
	0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb1, 0x02, 0x0a, 0x0e, 0x52, 0x6f,
	0x6f, 0x74, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x2a, 0x0a, 0x11,
	0x65, 0x6e, 0x74, 0x72, 0x79, 0x5f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x6e, 0x69,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x53, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x3b,
	0x0a, 0x0c, 0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x5f, 0x6e, 0x6f, 0x64, 0x65, 0x73, 0x18, 0x04,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x78, 0x64, 0x73, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e,
	0x76, 0x33, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x64, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x0b,
	0x67, 0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x4e, 0x6f, 0x64, 0x65, 0x73, 0x12, 0x3c, 0x0a, 0x0c, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x6e, 0x69, 0x74, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x19, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73,
	0x74, 0x2e, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x52, 0x0b, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x73, 0x12, 0x32, 0x0a, 0x08, 0x63, 0x6f, 0x6d,
	0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x43, 0x6f, 0x6d, 0x6d,
	0x65, 0x6e, 0x74, 0x52, 0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x22, 0xf6, 0x02,
	0x0a, 0x0a, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07,
	0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6c,
	0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x61, 0x62,
	0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0c, 0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x12,
	0x48, 0x0a, 0x10, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x5f, 0x73, 0x79, 0x6d, 0x62,
	0x6f, 0x6c, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x45, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x65, 0x64, 0x53, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x52, 0x0f, 0x65, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x65, 0x64, 0x53, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x73, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64,
	0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75,
	0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12,
	0x2b, 0x0a, 0x04, 0x72, 0x6f, 0x6f, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x52, 0x6f,
	0x6f, 0x74, 0x4e, 0x6f, 0x64, 0x65, 0x52, 0x04, 0x72, 0x6f, 0x6f, 0x74, 0x12, 0x24, 0x0a, 0x03,
	0x73, 0x72, 0x63, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x03, 0x73,
	0x72, 0x63, 0x12, 0x32, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x09,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x73, 0x74, 0x2e, 0x43, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x08, 0x63, 0x6f,
	0x6d, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x22, 0x59, 0x0a, 0x0e, 0x45, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x65, 0x64, 0x53, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d,
	0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x50, 0x61, 0x74,
	0x68, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61, 0x73, 0x74,
	0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_source_unit_proto_rawDescOnce sync.Once
	file_ast_source_unit_proto_rawDescData = file_ast_source_unit_proto_rawDesc
)

func file_ast_source_unit_proto_rawDescGZIP() []byte {
	file_ast_source_unit_proto_rawDescOnce.Do(func() {
		file_ast_source_unit_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_source_unit_proto_rawDescData)
	})
	return file_ast_source_unit_proto_rawDescData
}

var file_ast_source_unit_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ast_source_unit_proto_goTypes = []interface{}{
	(*RootSourceUnit)(nil), // 0: unpack.v1.ast.RootSourceUnit
	(*SourceUnit)(nil),     // 1: unpack.v1.ast.SourceUnit
	(*ExportedSymbol)(nil), // 2: unpack.v1.ast.ExportedSymbol
	(NodeType)(0),          // 3: unpack.v1.ast.NodeType
	(*v3.TypedStruct)(nil), // 4: xds.type.v3.TypedStruct
	(*Comment)(nil),        // 5: unpack.v1.ast.Comment
	(*RootNode)(nil),       // 6: unpack.v1.ast.RootNode
	(*Src)(nil),            // 7: unpack.v1.ast.Src
}
var file_ast_source_unit_proto_depIdxs = []int32{
	3, // 0: unpack.v1.ast.RootSourceUnit.node_type:type_name -> unpack.v1.ast.NodeType
	4, // 1: unpack.v1.ast.RootSourceUnit.global_nodes:type_name -> xds.type.v3.TypedStruct
	1, // 2: unpack.v1.ast.RootSourceUnit.source_units:type_name -> unpack.v1.ast.SourceUnit
	5, // 3: unpack.v1.ast.RootSourceUnit.comments:type_name -> unpack.v1.ast.Comment
	2, // 4: unpack.v1.ast.SourceUnit.exported_symbols:type_name -> unpack.v1.ast.ExportedSymbol
	3, // 5: unpack.v1.ast.SourceUnit.node_type:type_name -> unpack.v1.ast.NodeType
	6, // 6: unpack.v1.ast.SourceUnit.root:type_name -> unpack.v1.ast.RootNode
	7, // 7: unpack.v1.ast.SourceUnit.src:type_name -> unpack.v1.ast.Src
	5, // 8: unpack.v1.ast.SourceUnit.comments:type_name -> unpack.v1.ast.Comment
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_ast_source_unit_proto_init() }
func file_ast_source_unit_proto_init() {
	if File_ast_source_unit_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_node_proto_init()
	file_ast_comment_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_source_unit_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RootSourceUnit); i {
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
		file_ast_source_unit_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SourceUnit); i {
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
		file_ast_source_unit_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExportedSymbol); i {
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
			RawDescriptor: file_ast_source_unit_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_source_unit_proto_goTypes,
		DependencyIndexes: file_ast_source_unit_proto_depIdxs,
		MessageInfos:      file_ast_source_unit_proto_msgTypes,
	}.Build()
	File_ast_source_unit_proto = out.File
	file_ast_source_unit_proto_rawDesc = nil
	file_ast_source_unit_proto_goTypes = nil
	file_ast_source_unit_proto_depIdxs = nil
}
