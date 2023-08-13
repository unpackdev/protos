// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: opcode/service_parameters.proto

package opcode_pb

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

// Represents a opcode request message with details about a transaction.
type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Identifier for the blockchain chain.
	NetworkId int64 `protobuf:"varint,1,opt,name=network_id,json=networkId,proto3" json:"network_id,omitempty"`
	// Address associated with the transaction.
	Address string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	// Bytecode of the transaction.
	Bytecode []byte `protobuf:"bytes,3,opt,name=bytecode,proto3" json:"bytecode,omitempty"`
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opcode_service_parameters_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_opcode_service_parameters_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_opcode_service_parameters_proto_rawDescGZIP(), []int{0}
}

func (x *Request) GetNetworkId() int64 {
	if x != nil {
		return x.NetworkId
	}
	return 0
}

func (x *Request) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Request) GetBytecode() []byte {
	if x != nil {
		return x.Bytecode
	}
	return nil
}

// Represents a opcode response message with details about a transaction.
type Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Status of the transaction.
	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	// Identifier for the blockchain chain.
	NetworkId int64 `protobuf:"varint,2,opt,name=network_id,json=networkId,proto3" json:"network_id,omitempty"`
	// Address associated with the transaction.
	Address string `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
	// Bytecode of the transaction as a string.
	Bytecode string `protobuf:"bytes,4,opt,name=bytecode,proto3" json:"bytecode,omitempty"`
	// Root information associated with the opcode.
	Root *Root `protobuf:"bytes,5,opt,name=root,proto3" json:"root,omitempty"`
}

func (x *Response) Reset() {
	*x = Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opcode_service_parameters_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_opcode_service_parameters_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Response.ProtoReflect.Descriptor instead.
func (*Response) Descriptor() ([]byte, []int) {
	return file_opcode_service_parameters_proto_rawDescGZIP(), []int{1}
}

func (x *Response) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *Response) GetNetworkId() int64 {
	if x != nil {
		return x.NetworkId
	}
	return 0
}

func (x *Response) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Response) GetBytecode() string {
	if x != nil {
		return x.Bytecode
	}
	return ""
}

func (x *Response) GetRoot() *Root {
	if x != nil {
		return x.Root
	}
	return nil
}

var File_opcode_service_parameters_proto protoreflect.FileDescriptor

var file_opcode_service_parameters_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x5f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x10, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x6f, 0x70, 0x63,
	0x6f, 0x64, 0x65, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65,
	0x2f, 0x72, 0x6f, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x5e, 0x0a, 0x07, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12,
	0x1a, 0x0a, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x22, 0xbd, 0x01, 0x0a, 0x08,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x49, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x12,
	0x2a, 0x0a, 0x04, 0x72, 0x6f, 0x6f, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65,
	0x2e, 0x52, 0x6f, 0x6f, 0x74, 0x52, 0x04, 0x72, 0x6f, 0x6f, 0x74, 0x42, 0x33, 0x5a, 0x31, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f,
	0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x3b, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x5f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_opcode_service_parameters_proto_rawDescOnce sync.Once
	file_opcode_service_parameters_proto_rawDescData = file_opcode_service_parameters_proto_rawDesc
)

func file_opcode_service_parameters_proto_rawDescGZIP() []byte {
	file_opcode_service_parameters_proto_rawDescOnce.Do(func() {
		file_opcode_service_parameters_proto_rawDescData = protoimpl.X.CompressGZIP(file_opcode_service_parameters_proto_rawDescData)
	})
	return file_opcode_service_parameters_proto_rawDescData
}

var file_opcode_service_parameters_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_opcode_service_parameters_proto_goTypes = []interface{}{
	(*Request)(nil),       // 0: txpull.v1.opcode.Request
	(*Response)(nil),      // 1: txpull.v1.opcode.Response
	(*common.Status)(nil), // 2: txpull.v1.common.Status
	(*Root)(nil),          // 3: txpull.v1.opcode.Root
}
var file_opcode_service_parameters_proto_depIdxs = []int32{
	2, // 0: txpull.v1.opcode.Response.status:type_name -> txpull.v1.common.Status
	3, // 1: txpull.v1.opcode.Response.root:type_name -> txpull.v1.opcode.Root
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_opcode_service_parameters_proto_init() }
func file_opcode_service_parameters_proto_init() {
	if File_opcode_service_parameters_proto != nil {
		return
	}
	file_opcode_root_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_opcode_service_parameters_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
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
		file_opcode_service_parameters_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Response); i {
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
			RawDescriptor: file_opcode_service_parameters_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_opcode_service_parameters_proto_goTypes,
		DependencyIndexes: file_opcode_service_parameters_proto_depIdxs,
		MessageInfos:      file_opcode_service_parameters_proto_msgTypes,
	}.Build()
	File_opcode_service_parameters_proto = out.File
	file_opcode_service_parameters_proto_rawDesc = nil
	file_opcode_service_parameters_proto_goTypes = nil
	file_opcode_service_parameters_proto_depIdxs = nil
}