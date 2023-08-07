// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/receive.proto

package ast_pb

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

type Receive struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               int64                 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	NodeType         NodeType              `protobuf:"varint,2,opt,name=node_type,json=nodeType,proto3,enum=txpull.v1.ast.NodeType" json:"node_type,omitempty"`
	Kind             NodeType              `protobuf:"varint,3,opt,name=kind,proto3,enum=txpull.v1.ast.NodeType" json:"kind,omitempty"`
	Src              *Src                  `protobuf:"bytes,4,opt,name=src,proto3" json:"src,omitempty"`
	Virtual          bool                  `protobuf:"varint,5,opt,name=virtual,proto3" json:"virtual,omitempty"`
	Implemented      bool                  `protobuf:"varint,6,opt,name=implemented,proto3" json:"implemented,omitempty"`
	Visibility       Visibility            `protobuf:"varint,7,opt,name=visibility,proto3,enum=txpull.v1.ast.Visibility" json:"visibility,omitempty"`
	StateMutability  Mutability            `protobuf:"varint,8,opt,name=state_mutability,json=stateMutability,proto3,enum=txpull.v1.ast.Mutability" json:"state_mutability,omitempty"`
	Modifiers        []*ModifierInvocation `protobuf:"bytes,9,rep,name=modifiers,proto3" json:"modifiers,omitempty"`
	Overrides        []*OverrideSpecifier  `protobuf:"bytes,10,rep,name=overrides,proto3" json:"overrides,omitempty"`
	Parameters       *ParameterList        `protobuf:"bytes,11,opt,name=parameters,proto3" json:"parameters,omitempty"`
	ReturnParameters *ParameterList        `protobuf:"bytes,12,opt,name=return_parameters,json=returnParameters,proto3" json:"return_parameters,omitempty"`
	Body             *Body                 `protobuf:"bytes,13,opt,name=body,proto3" json:"body,omitempty"`
}

func (x *Receive) Reset() {
	*x = Receive{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_receive_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Receive) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Receive) ProtoMessage() {}

func (x *Receive) ProtoReflect() protoreflect.Message {
	mi := &file_ast_receive_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Receive.ProtoReflect.Descriptor instead.
func (*Receive) Descriptor() ([]byte, []int) {
	return file_ast_receive_proto_rawDescGZIP(), []int{0}
}

func (x *Receive) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Receive) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *Receive) GetKind() NodeType {
	if x != nil {
		return x.Kind
	}
	return NodeType_NT_DEFAULT
}

func (x *Receive) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *Receive) GetVirtual() bool {
	if x != nil {
		return x.Virtual
	}
	return false
}

func (x *Receive) GetImplemented() bool {
	if x != nil {
		return x.Implemented
	}
	return false
}

func (x *Receive) GetVisibility() Visibility {
	if x != nil {
		return x.Visibility
	}
	return Visibility_V_DEFAULT
}

func (x *Receive) GetStateMutability() Mutability {
	if x != nil {
		return x.StateMutability
	}
	return Mutability_M_DEFAULT
}

func (x *Receive) GetModifiers() []*ModifierInvocation {
	if x != nil {
		return x.Modifiers
	}
	return nil
}

func (x *Receive) GetOverrides() []*OverrideSpecifier {
	if x != nil {
		return x.Overrides
	}
	return nil
}

func (x *Receive) GetParameters() *ParameterList {
	if x != nil {
		return x.Parameters
	}
	return nil
}

func (x *Receive) GetReturnParameters() *ParameterList {
	if x != nil {
		return x.ReturnParameters
	}
	return nil
}

func (x *Receive) GetBody() *Body {
	if x != nil {
		return x.Body
	}
	return nil
}

var File_ast_receive_proto protoreflect.FileDescriptor

var file_ast_receive_proto_rawDesc = []byte{
	0x0a, 0x11, 0x61, 0x73, 0x74, 0x2f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x14, 0x61, 0x73, 0x74, 0x2f, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65,
	0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0e, 0x61, 0x73, 0x74, 0x2f, 0x62, 0x6f,
	0x64, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x6d, 0x6f,
	0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61,
	0x73, 0x74, 0x2f, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x92, 0x05, 0x0a, 0x07, 0x52, 0x65, 0x63, 0x65, 0x69, 0x76, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x34,
	0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73,
	0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x6b, 0x69, 0x6e,
	0x64, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53,
	0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x69, 0x72, 0x74, 0x75,
	0x61, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61,
	0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x65, 0x64,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x65, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74,
	0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x56, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69,
	0x74, 0x79, 0x52, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x44,
	0x0a, 0x10, 0x73, 0x74, 0x61, 0x74, 0x65, 0x5f, 0x6d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c, 0x69,
	0x74, 0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c,
	0x69, 0x74, 0x79, 0x52, 0x0f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x4d, 0x75, 0x74, 0x61, 0x62, 0x69,
	0x6c, 0x69, 0x74, 0x79, 0x12, 0x3f, 0x0a, 0x09, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72,
	0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72,
	0x49, 0x6e, 0x76, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x6d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x65, 0x72, 0x73, 0x12, 0x3e, 0x0a, 0x09, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64,
	0x65, 0x73, 0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64,
	0x65, 0x53, 0x70, 0x65, 0x63, 0x69, 0x66, 0x69, 0x65, 0x72, 0x52, 0x09, 0x6f, 0x76, 0x65, 0x72,
	0x72, 0x69, 0x64, 0x65, 0x73, 0x12, 0x3c, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x73, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x74, 0x78, 0x70, 0x75,
	0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65,
	0x74, 0x65, 0x72, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74,
	0x65, 0x72, 0x73, 0x12, 0x49, 0x0a, 0x11, 0x72, 0x65, 0x74, 0x75, 0x72, 0x6e, 0x5f, 0x70, 0x61,
	0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x50,
	0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x10, 0x72, 0x65,
	0x74, 0x75, 0x72, 0x6e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x12, 0x27,
	0x0a, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x42, 0x6f, 0x64,
	0x79, 0x52, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x42, 0x2d, 0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b,
	0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_receive_proto_rawDescOnce sync.Once
	file_ast_receive_proto_rawDescData = file_ast_receive_proto_rawDesc
)

func file_ast_receive_proto_rawDescGZIP() []byte {
	file_ast_receive_proto_rawDescOnce.Do(func() {
		file_ast_receive_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_receive_proto_rawDescData)
	})
	return file_ast_receive_proto_rawDescData
}

var file_ast_receive_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ast_receive_proto_goTypes = []interface{}{
	(*Receive)(nil),            // 0: txpull.v1.ast.Receive
	(NodeType)(0),              // 1: txpull.v1.ast.NodeType
	(*Src)(nil),                // 2: txpull.v1.ast.Src
	(Visibility)(0),            // 3: txpull.v1.ast.Visibility
	(Mutability)(0),            // 4: txpull.v1.ast.Mutability
	(*ModifierInvocation)(nil), // 5: txpull.v1.ast.ModifierInvocation
	(*OverrideSpecifier)(nil),  // 6: txpull.v1.ast.OverrideSpecifier
	(*ParameterList)(nil),      // 7: txpull.v1.ast.ParameterList
	(*Body)(nil),               // 8: txpull.v1.ast.Body
}
var file_ast_receive_proto_depIdxs = []int32{
	1,  // 0: txpull.v1.ast.Receive.node_type:type_name -> txpull.v1.ast.NodeType
	1,  // 1: txpull.v1.ast.Receive.kind:type_name -> txpull.v1.ast.NodeType
	2,  // 2: txpull.v1.ast.Receive.src:type_name -> txpull.v1.ast.Src
	3,  // 3: txpull.v1.ast.Receive.visibility:type_name -> txpull.v1.ast.Visibility
	4,  // 4: txpull.v1.ast.Receive.state_mutability:type_name -> txpull.v1.ast.Mutability
	5,  // 5: txpull.v1.ast.Receive.modifiers:type_name -> txpull.v1.ast.ModifierInvocation
	6,  // 6: txpull.v1.ast.Receive.overrides:type_name -> txpull.v1.ast.OverrideSpecifier
	7,  // 7: txpull.v1.ast.Receive.parameters:type_name -> txpull.v1.ast.ParameterList
	7,  // 8: txpull.v1.ast.Receive.return_parameters:type_name -> txpull.v1.ast.ParameterList
	8,  // 9: txpull.v1.ast.Receive.body:type_name -> txpull.v1.ast.Body
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_ast_receive_proto_init() }
func file_ast_receive_proto_init() {
	if File_ast_receive_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_parameters_proto_init()
	file_ast_body_proto_init()
	file_ast_modifiers_proto_init()
	file_ast_overrides_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_receive_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Receive); i {
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
			RawDescriptor: file_ast_receive_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_receive_proto_goTypes,
		DependencyIndexes: file_ast_receive_proto_depIdxs,
		MessageInfos:      file_ast_receive_proto_msgTypes,
	}.Build()
	File_ast_receive_proto = out.File
	file_ast_receive_proto_rawDesc = nil
	file_ast_receive_proto_goTypes = nil
	file_ast_receive_proto_depIdxs = nil
}
