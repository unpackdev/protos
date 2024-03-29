// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: server/parameters.proto

package server_pb

import (
	contracts "github.com/unpackdev/protos/dist/go/contracts"
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

type UnpackResponse_ContractQueueResponse_ContractQueueStatus int32

const (
	UnpackResponse_ContractQueueResponse_CQR_UNKNOWN UnpackResponse_ContractQueueResponse_ContractQueueStatus = 0
	UnpackResponse_ContractQueueResponse_CQR_FOUND   UnpackResponse_ContractQueueResponse_ContractQueueStatus = 1
	UnpackResponse_ContractQueueResponse_CQR_ERROR   UnpackResponse_ContractQueueResponse_ContractQueueStatus = 3
)

// Enum value maps for UnpackResponse_ContractQueueResponse_ContractQueueStatus.
var (
	UnpackResponse_ContractQueueResponse_ContractQueueStatus_name = map[int32]string{
		0: "CQR_UNKNOWN",
		1: "CQR_FOUND",
		3: "CQR_ERROR",
	}
	UnpackResponse_ContractQueueResponse_ContractQueueStatus_value = map[string]int32{
		"CQR_UNKNOWN": 0,
		"CQR_FOUND":   1,
		"CQR_ERROR":   3,
	}
)

func (x UnpackResponse_ContractQueueResponse_ContractQueueStatus) Enum() *UnpackResponse_ContractQueueResponse_ContractQueueStatus {
	p := new(UnpackResponse_ContractQueueResponse_ContractQueueStatus)
	*p = x
	return p
}

func (x UnpackResponse_ContractQueueResponse_ContractQueueStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (UnpackResponse_ContractQueueResponse_ContractQueueStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_server_parameters_proto_enumTypes[0].Descriptor()
}

func (UnpackResponse_ContractQueueResponse_ContractQueueStatus) Type() protoreflect.EnumType {
	return &file_server_parameters_proto_enumTypes[0]
}

func (x UnpackResponse_ContractQueueResponse_ContractQueueStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use UnpackResponse_ContractQueueResponse_ContractQueueStatus.Descriptor instead.
func (UnpackResponse_ContractQueueResponse_ContractQueueStatus) EnumDescriptor() ([]byte, []int) {
	return file_server_parameters_proto_rawDescGZIP(), []int{1, 0, 0}
}

// Represents a contract request message with details about a transaction.
type UnpackRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Identifier for the blockchain chain.
	NetworkId int64 `protobuf:"varint,1,opt,name=network_id,json=networkId,proto3" json:"network_id,omitempty"`
	// Address associated with the transaction.
	Addresses []string `protobuf:"bytes,2,rep,name=addresses,proto3" json:"addresses,omitempty"`
}

func (x *UnpackRequest) Reset() {
	*x = UnpackRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_parameters_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnpackRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnpackRequest) ProtoMessage() {}

func (x *UnpackRequest) ProtoReflect() protoreflect.Message {
	mi := &file_server_parameters_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnpackRequest.ProtoReflect.Descriptor instead.
func (*UnpackRequest) Descriptor() ([]byte, []int) {
	return file_server_parameters_proto_rawDescGZIP(), []int{0}
}

func (x *UnpackRequest) GetNetworkId() int64 {
	if x != nil {
		return x.NetworkId
	}
	return 0
}

func (x *UnpackRequest) GetAddresses() []string {
	if x != nil {
		return x.Addresses
	}
	return nil
}

// Represents a contract response message with details about a transaction.
type UnpackResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Status of the transaction.
	Status bool `protobuf:"varint,1,opt,name=status,proto3" json:"status,omitempty"`
	// Identifier for the blockchain chain.
	NetworkId int64                                   `protobuf:"varint,2,opt,name=network_id,json=networkId,proto3" json:"network_id,omitempty"`
	Contracts []*UnpackResponse_ContractQueueResponse `protobuf:"bytes,3,rep,name=contracts,proto3" json:"contracts,omitempty"`
}

func (x *UnpackResponse) Reset() {
	*x = UnpackResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_parameters_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnpackResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnpackResponse) ProtoMessage() {}

func (x *UnpackResponse) ProtoReflect() protoreflect.Message {
	mi := &file_server_parameters_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnpackResponse.ProtoReflect.Descriptor instead.
func (*UnpackResponse) Descriptor() ([]byte, []int) {
	return file_server_parameters_proto_rawDescGZIP(), []int{1}
}

func (x *UnpackResponse) GetStatus() bool {
	if x != nil {
		return x.Status
	}
	return false
}

func (x *UnpackResponse) GetNetworkId() int64 {
	if x != nil {
		return x.NetworkId
	}
	return 0
}

func (x *UnpackResponse) GetContracts() []*UnpackResponse_ContractQueueResponse {
	if x != nil {
		return x.Contracts
	}
	return nil
}

type UnpackResponse_ContractQueueResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status   UnpackResponse_ContractQueueResponse_ContractQueueStatus `protobuf:"varint,1,opt,name=status,proto3,enum=unpack.v1.server.UnpackResponse_ContractQueueResponse_ContractQueueStatus" json:"status,omitempty"`
	Contract *contracts.Contract                                      `protobuf:"bytes,2,opt,name=contract,proto3" json:"contract,omitempty"`
	Error    string                                                   `protobuf:"bytes,3,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *UnpackResponse_ContractQueueResponse) Reset() {
	*x = UnpackResponse_ContractQueueResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_server_parameters_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UnpackResponse_ContractQueueResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UnpackResponse_ContractQueueResponse) ProtoMessage() {}

func (x *UnpackResponse_ContractQueueResponse) ProtoReflect() protoreflect.Message {
	mi := &file_server_parameters_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UnpackResponse_ContractQueueResponse.ProtoReflect.Descriptor instead.
func (*UnpackResponse_ContractQueueResponse) Descriptor() ([]byte, []int) {
	return file_server_parameters_proto_rawDescGZIP(), []int{1, 0}
}

func (x *UnpackResponse_ContractQueueResponse) GetStatus() UnpackResponse_ContractQueueResponse_ContractQueueStatus {
	if x != nil {
		return x.Status
	}
	return UnpackResponse_ContractQueueResponse_CQR_UNKNOWN
}

func (x *UnpackResponse_ContractQueueResponse) GetContract() *contracts.Contract {
	if x != nil {
		return x.Contract
	}
	return nil
}

func (x *UnpackResponse_ContractQueueResponse) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

var File_server_parameters_proto protoreflect.FileDescriptor

var file_server_parameters_proto_rawDesc = []byte{
	0x0a, 0x17, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x1a, 0x18, 0x63, 0x6f, 0x6e,
	0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x4c, 0x0a, 0x0d, 0x55, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x49, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x09, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x65, 0x73, 0x22, 0xb2, 0x03, 0x0a, 0x0e, 0x55, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d,
	0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x09, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x49, 0x64, 0x12, 0x54, 0x0a,
	0x09, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x36, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x2e, 0x55, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x51, 0x75, 0x65, 0x75, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61,
	0x63, 0x74, 0x73, 0x1a, 0x92, 0x02, 0x0a, 0x15, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x51, 0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x62, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x4a, 0x2e,
	0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72,
	0x2e, 0x55, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e,
	0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x51, 0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x51, 0x75,
	0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x39, 0x0a, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61,
	0x63, 0x74, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x12, 0x14, 0x0a, 0x05,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x72, 0x72,
	0x6f, 0x72, 0x22, 0x44, 0x0a, 0x13, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x51, 0x75,
	0x65, 0x75, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0f, 0x0a, 0x0b, 0x43, 0x51, 0x52,
	0x5f, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x43, 0x51,
	0x52, 0x5f, 0x46, 0x4f, 0x55, 0x4e, 0x44, 0x10, 0x01, 0x12, 0x0d, 0x0a, 0x09, 0x43, 0x51, 0x52,
	0x5f, 0x45, 0x52, 0x52, 0x4f, 0x52, 0x10, 0x03, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f,
	0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x3b, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x5f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_server_parameters_proto_rawDescOnce sync.Once
	file_server_parameters_proto_rawDescData = file_server_parameters_proto_rawDesc
)

func file_server_parameters_proto_rawDescGZIP() []byte {
	file_server_parameters_proto_rawDescOnce.Do(func() {
		file_server_parameters_proto_rawDescData = protoimpl.X.CompressGZIP(file_server_parameters_proto_rawDescData)
	})
	return file_server_parameters_proto_rawDescData
}

var file_server_parameters_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_server_parameters_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_server_parameters_proto_goTypes = []interface{}{
	(UnpackResponse_ContractQueueResponse_ContractQueueStatus)(0), // 0: unpack.v1.server.UnpackResponse.ContractQueueResponse.ContractQueueStatus
	(*UnpackRequest)(nil),                        // 1: unpack.v1.server.UnpackRequest
	(*UnpackResponse)(nil),                       // 2: unpack.v1.server.UnpackResponse
	(*UnpackResponse_ContractQueueResponse)(nil), // 3: unpack.v1.server.UnpackResponse.ContractQueueResponse
	(*contracts.Contract)(nil),                   // 4: unpack.v1.contracts.Contract
}
var file_server_parameters_proto_depIdxs = []int32{
	3, // 0: unpack.v1.server.UnpackResponse.contracts:type_name -> unpack.v1.server.UnpackResponse.ContractQueueResponse
	0, // 1: unpack.v1.server.UnpackResponse.ContractQueueResponse.status:type_name -> unpack.v1.server.UnpackResponse.ContractQueueResponse.ContractQueueStatus
	4, // 2: unpack.v1.server.UnpackResponse.ContractQueueResponse.contract:type_name -> unpack.v1.contracts.Contract
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_server_parameters_proto_init() }
func file_server_parameters_proto_init() {
	if File_server_parameters_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_server_parameters_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnpackRequest); i {
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
		file_server_parameters_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnpackResponse); i {
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
		file_server_parameters_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UnpackResponse_ContractQueueResponse); i {
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
			RawDescriptor: file_server_parameters_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_server_parameters_proto_goTypes,
		DependencyIndexes: file_server_parameters_proto_depIdxs,
		EnumInfos:         file_server_parameters_proto_enumTypes,
		MessageInfos:      file_server_parameters_proto_msgTypes,
	}.Build()
	File_server_parameters_proto = out.File
	file_server_parameters_proto_rawDesc = nil
	file_server_parameters_proto_goTypes = nil
	file_server_parameters_proto_depIdxs = nil
}
