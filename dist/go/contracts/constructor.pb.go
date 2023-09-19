// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: contracts/constructor.proto

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

// Represents an argument of a contract's constructor.
type ConstructorArgument struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name    string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`        // Name of the argument.
	Type    string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`        // Type of the argument.
	Value   string `protobuf:"bytes,3,opt,name=value,proto3" json:"value,omitempty"`      // Value of the argument.
	Indexed bool   `protobuf:"varint,4,opt,name=indexed,proto3" json:"indexed,omitempty"` // Indicates if the argument is indexed.
}

func (x *ConstructorArgument) Reset() {
	*x = ConstructorArgument{}
	if protoimpl.UnsafeEnabled {
		mi := &file_contracts_constructor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ConstructorArgument) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConstructorArgument) ProtoMessage() {}

func (x *ConstructorArgument) ProtoReflect() protoreflect.Message {
	mi := &file_contracts_constructor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConstructorArgument.ProtoReflect.Descriptor instead.
func (*ConstructorArgument) Descriptor() ([]byte, []int) {
	return file_contracts_constructor_proto_rawDescGZIP(), []int{0}
}

func (x *ConstructorArgument) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ConstructorArgument) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *ConstructorArgument) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *ConstructorArgument) GetIndexed() bool {
	if x != nil {
		return x.Indexed
	}
	return false
}

// Represents a contract's constructor details.
type Constructor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SignatureRaw string                 `protobuf:"bytes,2,opt,name=signature_raw,json=signatureRaw,proto3" json:"signature_raw,omitempty"` // Raw signature of the constructor.
	Arguments    []*ConstructorArgument `protobuf:"bytes,3,rep,name=arguments,proto3" json:"arguments,omitempty"`                           // Arguments of the constructor.
}

func (x *Constructor) Reset() {
	*x = Constructor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_contracts_constructor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Constructor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Constructor) ProtoMessage() {}

func (x *Constructor) ProtoReflect() protoreflect.Message {
	mi := &file_contracts_constructor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Constructor.ProtoReflect.Descriptor instead.
func (*Constructor) Descriptor() ([]byte, []int) {
	return file_contracts_constructor_proto_rawDescGZIP(), []int{1}
}

func (x *Constructor) GetSignatureRaw() string {
	if x != nil {
		return x.SignatureRaw
	}
	return ""
}

func (x *Constructor) GetArguments() []*ConstructorArgument {
	if x != nil {
		return x.Arguments
	}
	return nil
}

var File_contracts_constructor_proto protoreflect.FileDescriptor

var file_contracts_constructor_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x73,
	0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x75,
	0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63,
	0x74, 0x73, 0x22, 0x6d, 0x0a, 0x13, 0x43, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f,
	0x72, 0x41, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x69, 0x6e, 0x64, 0x65, 0x78,
	0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x65,
	0x64, 0x22, 0x7a, 0x0a, 0x0b, 0x43, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72,
	0x12, 0x23, 0x0a, 0x0d, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x5f, 0x72, 0x61,
	0x77, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75,
	0x72, 0x65, 0x52, 0x61, 0x77, 0x12, 0x46, 0x0a, 0x09, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e,
	0x74, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x43,
	0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72, 0x41, 0x72, 0x67, 0x75, 0x6d, 0x65,
	0x6e, 0x74, 0x52, 0x09, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x42, 0x3c, 0x5a,
	0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73,
	0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x3b, 0x63,
	0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_contracts_constructor_proto_rawDescOnce sync.Once
	file_contracts_constructor_proto_rawDescData = file_contracts_constructor_proto_rawDesc
)

func file_contracts_constructor_proto_rawDescGZIP() []byte {
	file_contracts_constructor_proto_rawDescOnce.Do(func() {
		file_contracts_constructor_proto_rawDescData = protoimpl.X.CompressGZIP(file_contracts_constructor_proto_rawDescData)
	})
	return file_contracts_constructor_proto_rawDescData
}

var file_contracts_constructor_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_contracts_constructor_proto_goTypes = []interface{}{
	(*ConstructorArgument)(nil), // 0: unpack.v1.contracts.ConstructorArgument
	(*Constructor)(nil),         // 1: unpack.v1.contracts.Constructor
}
var file_contracts_constructor_proto_depIdxs = []int32{
	0, // 0: unpack.v1.contracts.Constructor.arguments:type_name -> unpack.v1.contracts.ConstructorArgument
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_contracts_constructor_proto_init() }
func file_contracts_constructor_proto_init() {
	if File_contracts_constructor_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_contracts_constructor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ConstructorArgument); i {
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
		file_contracts_constructor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Constructor); i {
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
			RawDescriptor: file_contracts_constructor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_contracts_constructor_proto_goTypes,
		DependencyIndexes: file_contracts_constructor_proto_depIdxs,
		MessageInfos:      file_contracts_constructor_proto_msgTypes,
	}.Build()
	File_contracts_constructor_proto = out.File
	file_contracts_constructor_proto_rawDesc = nil
	file_contracts_constructor_proto_goTypes = nil
	file_contracts_constructor_proto_depIdxs = nil
}
