// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: abi/root.proto

package abi_pb

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

// Root represents the root of a Solidity contract's ABI (Application Binary Interface).
// The ABI is a critical component for interacting with contracts in Ethereum.
// It is a representation of the contract's functions, the input and output parameters of these functions,
// and details about the data types of these parameters.
// The Root message encapsulates the main details of the ABI, including the entry contract's ID and name,
// the total number of contracts, and a map of contract names to their corresponding Contract details.
type Root struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The unique identifier for the entry contract.
	// This ID is used as a reference to the main or primary contract within the ABI.
	EntryContractId int64 `protobuf:"varint,1,opt,name=entryContractId,proto3" json:"entryContractId,omitempty"`
	// The name of the entry contract.
	// This provides a human-readable identifier for the primary contract within the ABI.
	EntryContractName string `protobuf:"bytes,2,opt,name=entryContractName,proto3" json:"entryContractName,omitempty"`
	// The total number of contracts present in the ABI.
	// This count includes the entry contract and any other contracts that are part of the ABI.
	ContractsCount int32 `protobuf:"varint,3,opt,name=contractsCount,proto3" json:"contractsCount,omitempty"`
	// A map that associates contract names with their corresponding Contract details.
	// The key is the name of the contract, and the value is the Contract message containing details about the contract's methods and other attributes.
	Contracts map[string]*Contract `protobuf:"bytes,4,rep,name=contracts,proto3" json:"contracts,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Root) Reset() {
	*x = Root{}
	if protoimpl.UnsafeEnabled {
		mi := &file_abi_root_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Root) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Root) ProtoMessage() {}

func (x *Root) ProtoReflect() protoreflect.Message {
	mi := &file_abi_root_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Root.ProtoReflect.Descriptor instead.
func (*Root) Descriptor() ([]byte, []int) {
	return file_abi_root_proto_rawDescGZIP(), []int{0}
}

func (x *Root) GetEntryContractId() int64 {
	if x != nil {
		return x.EntryContractId
	}
	return 0
}

func (x *Root) GetEntryContractName() string {
	if x != nil {
		return x.EntryContractName
	}
	return ""
}

func (x *Root) GetContractsCount() int32 {
	if x != nil {
		return x.ContractsCount
	}
	return 0
}

func (x *Root) GetContracts() map[string]*Contract {
	if x != nil {
		return x.Contracts
	}
	return nil
}

var File_abi_root_proto protoreflect.FileDescriptor

var file_abi_root_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x61, 0x62, 0x69, 0x2f, 0x72, 0x6f, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x62, 0x69, 0x1a,
	0x12, 0x61, 0x62, 0x69, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x9f, 0x02, 0x0a, 0x04, 0x52, 0x6f, 0x6f, 0x74, 0x12, 0x28, 0x0a, 0x0f,
	0x65, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x49, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x74,
	0x72, 0x61, 0x63, 0x74, 0x49, 0x64, 0x12, 0x2c, 0x0a, 0x11, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x43,
	0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x11, 0x65, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x4e, 0x61, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x40, 0x0a, 0x09,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x22, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x62, 0x69, 0x2e,
	0x52, 0x6f, 0x6f, 0x74, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x09, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x1a, 0x55,
	0x0a, 0x0e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x2d, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x62,
	0x69, 0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x62, 0x69,
	0x3b, 0x61, 0x62, 0x69, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_abi_root_proto_rawDescOnce sync.Once
	file_abi_root_proto_rawDescData = file_abi_root_proto_rawDesc
)

func file_abi_root_proto_rawDescGZIP() []byte {
	file_abi_root_proto_rawDescOnce.Do(func() {
		file_abi_root_proto_rawDescData = protoimpl.X.CompressGZIP(file_abi_root_proto_rawDescData)
	})
	return file_abi_root_proto_rawDescData
}

var file_abi_root_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_abi_root_proto_goTypes = []interface{}{
	(*Root)(nil),     // 0: unpack.v1.abi.Root
	nil,              // 1: unpack.v1.abi.Root.ContractsEntry
	(*Contract)(nil), // 2: unpack.v1.abi.Contract
}
var file_abi_root_proto_depIdxs = []int32{
	1, // 0: unpack.v1.abi.Root.contracts:type_name -> unpack.v1.abi.Root.ContractsEntry
	2, // 1: unpack.v1.abi.Root.ContractsEntry.value:type_name -> unpack.v1.abi.Contract
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_abi_root_proto_init() }
func file_abi_root_proto_init() {
	if File_abi_root_proto != nil {
		return
	}
	file_abi_contract_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_abi_root_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Root); i {
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
			RawDescriptor: file_abi_root_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_abi_root_proto_goTypes,
		DependencyIndexes: file_abi_root_proto_depIdxs,
		MessageInfos:      file_abi_root_proto_msgTypes,
	}.Build()
	File_abi_root_proto = out.File
	file_abi_root_proto_rawDesc = nil
	file_abi_root_proto_goTypes = nil
	file_abi_root_proto_depIdxs = nil
}
