// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: ir/event.proto

package ir_pb

import (
	ast "github.com/unpackdev/protos/dist/go/ast"
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

// Represents an event declaration in the intermediate representation (IR).
type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"` // Unique identifier for the event.
	// Node type of the event. Refers to the AST node type enumeration in "ast/types.proto".
	NodeType  ast.NodeType `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Name      string       `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`            // Name of the event.
	Anonymous bool         `protobuf:"varint,4,opt,name=anonymous,proto3" json:"anonymous,omitempty"` // Indicates if the event is anonymous (true) or named (false).
	// List of parameters associated with the event. Each parameter is defined using the "unpack.v1.ir.Parameter" message.
	Parameters []*Parameter `protobuf:"bytes,5,rep,name=parameters,proto3" json:"parameters,omitempty"`
}

func (x *Event) Reset() {
	*x = Event{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ir_event_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_ir_event_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_ir_event_proto_rawDescGZIP(), []int{0}
}

func (x *Event) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Event) GetNodeType() ast.NodeType {
	if x != nil {
		return x.NodeType
	}
	return ast.NodeType(0)
}

func (x *Event) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Event) GetAnonymous() bool {
	if x != nil {
		return x.Anonymous
	}
	return false
}

func (x *Event) GetParameters() []*Parameter {
	if x != nil {
		return x.Parameters
	}
	return nil
}

var File_ir_event_proto protoreflect.FileDescriptor

var file_ir_event_proto_rawDesc = []byte{
	0x0a, 0x0e, 0x69, 0x72, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0c, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x1a, 0x0f,
	0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x12, 0x69, 0x72, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xb8, 0x01, 0x0a, 0x05, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34, 0x0a,
	0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74,
	0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x61, 0x6e, 0x6f, 0x6e, 0x79,
	0x6d, 0x6f, 0x75, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x61, 0x6e, 0x6f, 0x6e,
	0x79, 0x6d, 0x6f, 0x75, 0x73, 0x12, 0x37, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x42, 0x2e,
	0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70,
	0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69,
	0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x69, 0x72, 0x3b, 0x69, 0x72, 0x5f, 0x70, 0x62, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ir_event_proto_rawDescOnce sync.Once
	file_ir_event_proto_rawDescData = file_ir_event_proto_rawDesc
)

func file_ir_event_proto_rawDescGZIP() []byte {
	file_ir_event_proto_rawDescOnce.Do(func() {
		file_ir_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_ir_event_proto_rawDescData)
	})
	return file_ir_event_proto_rawDescData
}

var file_ir_event_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ir_event_proto_goTypes = []interface{}{
	(*Event)(nil),     // 0: unpack.v1.ir.Event
	(ast.NodeType)(0), // 1: unpack.v1.ast.NodeType
	(*Parameter)(nil), // 2: unpack.v1.ir.Parameter
}
var file_ir_event_proto_depIdxs = []int32{
	1, // 0: unpack.v1.ir.Event.node_type:type_name -> unpack.v1.ast.NodeType
	2, // 1: unpack.v1.ir.Event.parameters:type_name -> unpack.v1.ir.Parameter
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_ir_event_proto_init() }
func file_ir_event_proto_init() {
	if File_ir_event_proto != nil {
		return
	}
	file_ir_parameter_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ir_event_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Event); i {
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
			RawDescriptor: file_ir_event_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ir_event_proto_goTypes,
		DependencyIndexes: file_ir_event_proto_depIdxs,
		MessageInfos:      file_ir_event_proto_msgTypes,
	}.Build()
	File_ir_event_proto = out.File
	file_ir_event_proto_rawDesc = nil
	file_ir_event_proto_goTypes = nil
	file_ir_event_proto_depIdxs = nil
}
