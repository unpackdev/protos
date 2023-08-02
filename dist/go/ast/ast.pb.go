// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v4.23.4
// source: ast/ast.proto

package ast_pb

import (
	common "github.com/txpull/protos/dist/go/common"
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

type SourceUnits struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name   string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Source string `protobuf:"bytes,2,opt,name=source,proto3" json:"source,omitempty"`
}

func (x *SourceUnits) Reset() {
	*x = SourceUnits{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_ast_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SourceUnits) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SourceUnits) ProtoMessage() {}

func (x *SourceUnits) ProtoReflect() protoreflect.Message {
	mi := &file_ast_ast_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SourceUnits.ProtoReflect.Descriptor instead.
func (*SourceUnits) Descriptor() ([]byte, []int) {
	return file_ast_ast_proto_rawDescGZIP(), []int{0}
}

func (x *SourceUnits) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SourceUnits) GetSource() string {
	if x != nil {
		return x.Source
	}
	return ""
}

type AstRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChainId  int64  `protobuf:"varint,1,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Address  string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	Bytecode string `protobuf:"bytes,3,opt,name=bytecode,proto3" json:"bytecode,omitempty"`
}

func (x *AstRequest) Reset() {
	*x = AstRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_ast_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AstRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AstRequest) ProtoMessage() {}

func (x *AstRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ast_ast_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AstRequest.ProtoReflect.Descriptor instead.
func (*AstRequest) Descriptor() ([]byte, []int) {
	return file_ast_ast_proto_rawDescGZIP(), []int{1}
}

func (x *AstRequest) GetChainId() int64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *AstRequest) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *AstRequest) GetBytecode() string {
	if x != nil {
		return x.Bytecode
	}
	return ""
}

type AstRawRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChainId         int64          `protobuf:"varint,1,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Address         string         `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	EntrySourceUnit string         `protobuf:"bytes,3,opt,name=entry_source_unit,json=entrySourceUnit,proto3" json:"entry_source_unit,omitempty"`
	Sources         []*SourceUnits `protobuf:"bytes,4,rep,name=sources,proto3" json:"sources,omitempty"`
}

func (x *AstRawRequest) Reset() {
	*x = AstRawRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_ast_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AstRawRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AstRawRequest) ProtoMessage() {}

func (x *AstRawRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ast_ast_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AstRawRequest.ProtoReflect.Descriptor instead.
func (*AstRawRequest) Descriptor() ([]byte, []int) {
	return file_ast_ast_proto_rawDescGZIP(), []int{2}
}

func (x *AstRawRequest) GetChainId() int64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *AstRawRequest) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *AstRawRequest) GetEntrySourceUnit() string {
	if x != nil {
		return x.EntrySourceUnit
	}
	return ""
}

func (x *AstRawRequest) GetSources() []*SourceUnits {
	if x != nil {
		return x.Sources
	}
	return nil
}

type AstResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status   *common.Status  `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	ChainId  int64           `protobuf:"varint,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Address  string          `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
	Bytecode string          `protobuf:"bytes,4,opt,name=bytecode,proto3" json:"bytecode,omitempty"`
	Root     *RootSourceUnit `protobuf:"bytes,5,opt,name=root,proto3" json:"root,omitempty"`
}

func (x *AstResponse) Reset() {
	*x = AstResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_ast_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AstResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AstResponse) ProtoMessage() {}

func (x *AstResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ast_ast_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AstResponse.ProtoReflect.Descriptor instead.
func (*AstResponse) Descriptor() ([]byte, []int) {
	return file_ast_ast_proto_rawDescGZIP(), []int{3}
}

func (x *AstResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *AstResponse) GetChainId() int64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *AstResponse) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *AstResponse) GetBytecode() string {
	if x != nil {
		return x.Bytecode
	}
	return ""
}

func (x *AstResponse) GetRoot() *RootSourceUnit {
	if x != nil {
		return x.Root
	}
	return nil
}

var File_ast_ast_proto protoreflect.FileDescriptor

var file_ast_ast_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x61, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x1a, 0x13,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f,
	0x75, 0x6e, 0x69, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x39, 0x0a, 0x0b, 0x53, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x22, 0x5d, 0x0a, 0x0a, 0x41, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x18,
	0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x79, 0x74, 0x65,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x79, 0x74, 0x65,
	0x63, 0x6f, 0x64, 0x65, 0x22, 0xa6, 0x01, 0x0a, 0x0d, 0x41, 0x73, 0x74, 0x52, 0x61, 0x77, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49,
	0x64, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x2a, 0x0a, 0x11, 0x65,
	0x6e, 0x74, 0x72, 0x79, 0x5f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x75, 0x6e, 0x69, 0x74,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x53, 0x6f, 0x75,
	0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x12, 0x34, 0x0a, 0x07, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55,
	0x6e, 0x69, 0x74, 0x73, 0x52, 0x07, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x22, 0xc3, 0x01,
	0x0a, 0x0b, 0x41, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x31, 0x0a, 0x04, 0x72, 0x6f, 0x6f, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x52,
	0x6f, 0x6f, 0x74, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x6e, 0x69, 0x74, 0x52, 0x04, 0x72,
	0x6f, 0x6f, 0x74, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f,
	0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f,
	0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_ast_proto_rawDescOnce sync.Once
	file_ast_ast_proto_rawDescData = file_ast_ast_proto_rawDesc
)

func file_ast_ast_proto_rawDescGZIP() []byte {
	file_ast_ast_proto_rawDescOnce.Do(func() {
		file_ast_ast_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_ast_proto_rawDescData)
	})
	return file_ast_ast_proto_rawDescData
}

var file_ast_ast_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_ast_ast_proto_goTypes = []interface{}{
	(*SourceUnits)(nil),    // 0: txpull.v1.ast.SourceUnits
	(*AstRequest)(nil),     // 1: txpull.v1.ast.AstRequest
	(*AstRawRequest)(nil),  // 2: txpull.v1.ast.AstRawRequest
	(*AstResponse)(nil),    // 3: txpull.v1.ast.AstResponse
	(*common.Status)(nil),  // 4: txpull.v1.common.Status
	(*RootSourceUnit)(nil), // 5: txpull.v1.ast.RootSourceUnit
}
var file_ast_ast_proto_depIdxs = []int32{
	0, // 0: txpull.v1.ast.AstRawRequest.sources:type_name -> txpull.v1.ast.SourceUnits
	4, // 1: txpull.v1.ast.AstResponse.status:type_name -> txpull.v1.common.Status
	5, // 2: txpull.v1.ast.AstResponse.root:type_name -> txpull.v1.ast.RootSourceUnit
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_ast_ast_proto_init() }
func file_ast_ast_proto_init() {
	if File_ast_ast_proto != nil {
		return
	}
	file_ast_source_unit_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_ast_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SourceUnits); i {
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
		file_ast_ast_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AstRequest); i {
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
		file_ast_ast_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AstRawRequest); i {
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
		file_ast_ast_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AstResponse); i {
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
			RawDescriptor: file_ast_ast_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_ast_proto_goTypes,
		DependencyIndexes: file_ast_ast_proto_depIdxs,
		MessageInfos:      file_ast_ast_proto_msgTypes,
	}.Build()
	File_ast_ast_proto = out.File
	file_ast_ast_proto_rawDesc = nil
	file_ast_ast_proto_goTypes = nil
	file_ast_ast_proto_depIdxs = nil
}