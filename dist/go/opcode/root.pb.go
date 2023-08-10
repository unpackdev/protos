// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: opcode/root.proto

package opcode_pb

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

// Define the "Root" message, which serves as a container for a list of instructions.
type Root struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The instructions field is a repeated field that can contain multiple instances of the Instruction message.
	// It represents a collection of Ethereum Virtual Machine (EVM) instructions.
	Instructions []*Instruction `protobuf:"bytes,1,rep,name=instructions,proto3" json:"instructions,omitempty"`
}

func (x *Root) Reset() {
	*x = Root{}
	if protoimpl.UnsafeEnabled {
		mi := &file_opcode_root_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Root) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Root) ProtoMessage() {}

func (x *Root) ProtoReflect() protoreflect.Message {
	mi := &file_opcode_root_proto_msgTypes[0]
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
	return file_opcode_root_proto_rawDescGZIP(), []int{0}
}

func (x *Root) GetInstructions() []*Instruction {
	if x != nil {
		return x.Instructions
	}
	return nil
}

var File_opcode_root_proto protoreflect.FileDescriptor

var file_opcode_root_proto_rawDesc = []byte{
	0x0a, 0x11, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x2f, 0x72, 0x6f, 0x6f, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x10, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x6f,
	0x70, 0x63, 0x6f, 0x64, 0x65, 0x1a, 0x18, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x2f, 0x69, 0x6e,
	0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0x49, 0x0a, 0x04, 0x52, 0x6f, 0x6f, 0x74, 0x12, 0x41, 0x0a, 0x0c, 0x69, 0x6e, 0x73, 0x74, 0x72,
	0x75, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65,
	0x2e, 0x49, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0c, 0x69, 0x6e,
	0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x6f,
	0x70, 0x63, 0x6f, 0x64, 0x65, 0x3b, 0x6f, 0x70, 0x63, 0x6f, 0x64, 0x65, 0x5f, 0x70, 0x62, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_opcode_root_proto_rawDescOnce sync.Once
	file_opcode_root_proto_rawDescData = file_opcode_root_proto_rawDesc
)

func file_opcode_root_proto_rawDescGZIP() []byte {
	file_opcode_root_proto_rawDescOnce.Do(func() {
		file_opcode_root_proto_rawDescData = protoimpl.X.CompressGZIP(file_opcode_root_proto_rawDescData)
	})
	return file_opcode_root_proto_rawDescData
}

var file_opcode_root_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_opcode_root_proto_goTypes = []interface{}{
	(*Root)(nil),        // 0: txpull.v1.opcode.Root
	(*Instruction)(nil), // 1: txpull.v1.opcode.Instruction
}
var file_opcode_root_proto_depIdxs = []int32{
	1, // 0: txpull.v1.opcode.Root.instructions:type_name -> txpull.v1.opcode.Instruction
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_opcode_root_proto_init() }
func file_opcode_root_proto_init() {
	if File_opcode_root_proto != nil {
		return
	}
	file_opcode_instruction_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_opcode_root_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
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
			RawDescriptor: file_opcode_root_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_opcode_root_proto_goTypes,
		DependencyIndexes: file_opcode_root_proto_depIdxs,
		MessageInfos:      file_opcode_root_proto_msgTypes,
	}.Build()
	File_opcode_root_proto = out.File
	file_opcode_root_proto_rawDesc = nil
	file_opcode_root_proto_goTypes = nil
	file_opcode_root_proto_depIdxs = nil
}
