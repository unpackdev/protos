// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: contracts/proxy.proto

package contracts_pb

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

// Represents a contract's implementation details.
type ProxyImplementation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Address string `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`  // Address of the proxy implementation.
	Current bool   `protobuf:"varint,2,opt,name=current,proto3" json:"current,omitempty"` // Is current proxy implementation active (currently used) or not.
}

func (x *ProxyImplementation) Reset() {
	*x = ProxyImplementation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_contracts_proxy_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProxyImplementation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProxyImplementation) ProtoMessage() {}

func (x *ProxyImplementation) ProtoReflect() protoreflect.Message {
	mi := &file_contracts_proxy_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProxyImplementation.ProtoReflect.Descriptor instead.
func (*ProxyImplementation) Descriptor() ([]byte, []int) {
	return file_contracts_proxy_proto_rawDescGZIP(), []int{0}
}

func (x *ProxyImplementation) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *ProxyImplementation) GetCurrent() bool {
	if x != nil {
		return x.Current
	}
	return false
}

var File_contracts_proxy_proto protoreflect.FileDescriptor

var file_contracts_proxy_proto_rawDesc = []byte{
	0x0a, 0x15, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x78,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e,
	0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x22, 0x49, 0x0a, 0x13,
	0x50, 0x72, 0x6f, 0x78, 0x79, 0x49, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x18, 0x0a,
	0x07, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x74, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x63,
	0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x3b, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63,
	0x74, 0x73, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_contracts_proxy_proto_rawDescOnce sync.Once
	file_contracts_proxy_proto_rawDescData = file_contracts_proxy_proto_rawDesc
)

func file_contracts_proxy_proto_rawDescGZIP() []byte {
	file_contracts_proxy_proto_rawDescOnce.Do(func() {
		file_contracts_proxy_proto_rawDescData = protoimpl.X.CompressGZIP(file_contracts_proxy_proto_rawDescData)
	})
	return file_contracts_proxy_proto_rawDescData
}

var file_contracts_proxy_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_contracts_proxy_proto_goTypes = []interface{}{
	(*ProxyImplementation)(nil), // 0: unpack.v1.contracts.ProxyImplementation
}
var file_contracts_proxy_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_contracts_proxy_proto_init() }
func file_contracts_proxy_proto_init() {
	if File_contracts_proxy_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_contracts_proxy_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProxyImplementation); i {
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
			RawDescriptor: file_contracts_proxy_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_contracts_proxy_proto_goTypes,
		DependencyIndexes: file_contracts_proxy_proto_depIdxs,
		MessageInfos:      file_contracts_proxy_proto_msgTypes,
	}.Build()
	File_contracts_proxy_proto = out.File
	file_contracts_proxy_proto_rawDesc = nil
	file_contracts_proxy_proto_goTypes = nil
	file_contracts_proxy_proto_depIdxs = nil
}
