// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: abi/contract.proto

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

// Contract represents a Solidity contract's ABI (Application Binary Interface) details.
// In the Ethereum ecosystem, a contract's ABI is essential for encoding and decoding data
// to and from the contract. This Contract message encapsulates the methods that are part
// of the contract, allowing for a structured representation of the contract's functionalities.
type Contract struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// A repeated field containing all the methods associated with the contract.
	// Each method is represented by the Method message, which details the method's name,
	// input parameters, output parameters, and other relevant attributes.
	Methods []*Method `protobuf:"bytes,1,rep,name=methods,proto3" json:"methods,omitempty"`
}

func (x *Contract) Reset() {
	*x = Contract{}
	if protoimpl.UnsafeEnabled {
		mi := &file_abi_contract_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Contract) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Contract) ProtoMessage() {}

func (x *Contract) ProtoReflect() protoreflect.Message {
	mi := &file_abi_contract_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Contract.ProtoReflect.Descriptor instead.
func (*Contract) Descriptor() ([]byte, []int) {
	return file_abi_contract_proto_rawDescGZIP(), []int{0}
}

func (x *Contract) GetMethods() []*Method {
	if x != nil {
		return x.Methods
	}
	return nil
}

var File_abi_contract_proto protoreflect.FileDescriptor

var file_abi_contract_proto_rawDesc = []byte{
	0x0a, 0x12, 0x61, 0x62, 0x69, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x62, 0x69, 0x1a, 0x10, 0x61, 0x62, 0x69, 0x2f, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x3b, 0x0a, 0x08, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63,
	0x74, 0x12, 0x2f, 0x0a, 0x07, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x15, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x62, 0x69, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x52, 0x07, 0x6d, 0x65, 0x74, 0x68, 0x6f,
	0x64, 0x73, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64,
	0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x62, 0x69, 0x3b, 0x61, 0x62, 0x69, 0x5f, 0x70,
	0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_abi_contract_proto_rawDescOnce sync.Once
	file_abi_contract_proto_rawDescData = file_abi_contract_proto_rawDesc
)

func file_abi_contract_proto_rawDescGZIP() []byte {
	file_abi_contract_proto_rawDescOnce.Do(func() {
		file_abi_contract_proto_rawDescData = protoimpl.X.CompressGZIP(file_abi_contract_proto_rawDescData)
	})
	return file_abi_contract_proto_rawDescData
}

var file_abi_contract_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_abi_contract_proto_goTypes = []interface{}{
	(*Contract)(nil), // 0: txpull.v1.abi.Contract
	(*Method)(nil),   // 1: txpull.v1.abi.Method
}
var file_abi_contract_proto_depIdxs = []int32{
	1, // 0: txpull.v1.abi.Contract.methods:type_name -> txpull.v1.abi.Method
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_abi_contract_proto_init() }
func file_abi_contract_proto_init() {
	if File_abi_contract_proto != nil {
		return
	}
	file_abi_method_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_abi_contract_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Contract); i {
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
			RawDescriptor: file_abi_contract_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_abi_contract_proto_goTypes,
		DependencyIndexes: file_abi_contract_proto_depIdxs,
		MessageInfos:      file_abi_contract_proto_msgTypes,
	}.Build()
	File_abi_contract_proto = out.File
	file_abi_contract_proto_rawDesc = nil
	file_abi_contract_proto_goTypes = nil
	file_abi_contract_proto_depIdxs = nil
}