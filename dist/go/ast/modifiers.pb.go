// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: ast/modifiers.proto

package ast_pb

import (
	v3 "github.com/cncf/xds/go/xds/type/v3"
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

type ModifierName struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType              NodeType `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	ReferencedDeclaration int64    `protobuf:"varint,4,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	Src                   *Src     `protobuf:"bytes,5,opt,name=src,proto3" json:"src,omitempty"`
}

func (x *ModifierName) Reset() {
	*x = ModifierName{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_modifiers_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModifierName) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModifierName) ProtoMessage() {}

func (x *ModifierName) ProtoReflect() protoreflect.Message {
	mi := &file_ast_modifiers_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModifierName.ProtoReflect.Descriptor instead.
func (*ModifierName) Descriptor() ([]byte, []int) {
	return file_ast_modifiers_proto_rawDescGZIP(), []int{0}
}

func (x *ModifierName) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ModifierName) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ModifierName) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *ModifierName) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *ModifierName) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

type Modifier struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id           int64          `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name         string         `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType     NodeType       `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Src          *Src           `protobuf:"bytes,4,opt,name=src,proto3" json:"src,omitempty"`
	NameLocation *Src           `protobuf:"bytes,5,opt,name=name_location,json=nameLocation,proto3" json:"name_location,omitempty"`
	Virtual      bool           `protobuf:"varint,6,opt,name=virtual,proto3" json:"virtual,omitempty"`
	Visibility   Visibility     `protobuf:"varint,7,opt,name=visibility,proto3,enum=unpack.v1.ast.Visibility" json:"visibility,omitempty"`
	Parameters   *ParameterList `protobuf:"bytes,8,opt,name=parameters,proto3" json:"parameters,omitempty"`
	Body         *Body          `protobuf:"bytes,9,opt,name=body,proto3" json:"body,omitempty"`
}

func (x *Modifier) Reset() {
	*x = Modifier{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_modifiers_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Modifier) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Modifier) ProtoMessage() {}

func (x *Modifier) ProtoReflect() protoreflect.Message {
	mi := &file_ast_modifiers_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Modifier.ProtoReflect.Descriptor instead.
func (*Modifier) Descriptor() ([]byte, []int) {
	return file_ast_modifiers_proto_rawDescGZIP(), []int{1}
}

func (x *Modifier) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Modifier) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Modifier) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *Modifier) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *Modifier) GetNameLocation() *Src {
	if x != nil {
		return x.NameLocation
	}
	return nil
}

func (x *Modifier) GetVirtual() bool {
	if x != nil {
		return x.Virtual
	}
	return false
}

func (x *Modifier) GetVisibility() Visibility {
	if x != nil {
		return x.Visibility
	}
	return Visibility_V_DEFAULT
}

func (x *Modifier) GetParameters() *ParameterList {
	if x != nil {
		return x.Parameters
	}
	return nil
}

func (x *Modifier) GetBody() *Body {
	if x != nil {
		return x.Body
	}
	return nil
}

type ModifierInvocation struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            int64              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name          string             `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType      NodeType           `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Kind          NodeType           `protobuf:"varint,4,opt,name=kind,proto3,enum=unpack.v1.ast.NodeType" json:"kind,omitempty"`
	Src           *Src               `protobuf:"bytes,5,opt,name=src,proto3" json:"src,omitempty"`
	Arguments     []*v3.TypedStruct  `protobuf:"bytes,6,rep,name=arguments,proto3" json:"arguments,omitempty"`
	ArgumentTypes []*TypeDescription `protobuf:"bytes,7,rep,name=argument_types,json=argumentTypes,proto3" json:"argument_types,omitempty"`
	ModifierName  *ModifierName      `protobuf:"bytes,8,opt,name=modifier_name,json=modifierName,proto3" json:"modifier_name,omitempty"`
}

func (x *ModifierInvocation) Reset() {
	*x = ModifierInvocation{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_modifiers_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ModifierInvocation) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ModifierInvocation) ProtoMessage() {}

func (x *ModifierInvocation) ProtoReflect() protoreflect.Message {
	mi := &file_ast_modifiers_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ModifierInvocation.ProtoReflect.Descriptor instead.
func (*ModifierInvocation) Descriptor() ([]byte, []int) {
	return file_ast_modifiers_proto_rawDescGZIP(), []int{2}
}

func (x *ModifierInvocation) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ModifierInvocation) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ModifierInvocation) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *ModifierInvocation) GetKind() NodeType {
	if x != nil {
		return x.Kind
	}
	return NodeType_NT_DEFAULT
}

func (x *ModifierInvocation) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *ModifierInvocation) GetArguments() []*v3.TypedStruct {
	if x != nil {
		return x.Arguments
	}
	return nil
}

func (x *ModifierInvocation) GetArgumentTypes() []*TypeDescription {
	if x != nil {
		return x.ArgumentTypes
	}
	return nil
}

func (x *ModifierInvocation) GetModifierName() *ModifierName {
	if x != nil {
		return x.ModifierName
	}
	return nil
}

var File_ast_modifiers_proto protoreflect.FileDescriptor

var file_ast_modifiers_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x61, 0x73, 0x74, 0x2f, 0x70,
	0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x0e, 0x61, 0x73, 0x74, 0x2f, 0x62, 0x6f, 0x64, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x1e, 0x78, 0x64, 0x73, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x76, 0x33, 0x2f, 0x74, 0x79, 0x70,
	0x65, 0x64, 0x5f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22,
	0xc5, 0x01, 0x0a, 0x0c, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x35, 0x0a, 0x16, 0x72, 0x65,
	0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x64, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x15, 0x72, 0x65, 0x66, 0x65,
	0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53,
	0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x22, 0xff, 0x02, 0x0a, 0x08, 0x4d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x24,
	0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52,
	0x03, 0x73, 0x72, 0x63, 0x12, 0x37, 0x0a, 0x0d, 0x6e, 0x61, 0x6d, 0x65, 0x5f, 0x6c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52,
	0x0c, 0x6e, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x0a,
	0x07, 0x76, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07,
	0x76, 0x69, 0x72, 0x74, 0x75, 0x61, 0x6c, 0x12, 0x39, 0x0a, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62,
	0x69, 0x6c, 0x69, 0x74, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x56, 0x69, 0x73, 0x69,
	0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0a, 0x76, 0x69, 0x73, 0x69, 0x62, 0x69, 0x6c, 0x69,
	0x74, 0x79, 0x12, 0x3c, 0x0a, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x50, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x61, 0x6d, 0x65, 0x74, 0x65, 0x72, 0x73,
	0x12, 0x27, 0x0a, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13,
	0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x42,
	0x6f, 0x64, 0x79, 0x52, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x22, 0x82, 0x03, 0x0a, 0x12, 0x4d, 0x6f,
	0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x49, 0x6e, 0x76, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x6b, 0x69,
	0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x36, 0x0a,
	0x09, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x18, 0x2e, 0x78, 0x64, 0x73, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x76, 0x33, 0x2e, 0x54,
	0x79, 0x70, 0x65, 0x64, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x09, 0x61, 0x72, 0x67, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x45, 0x0a, 0x0e, 0x61, 0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e,
	0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1e, 0x2e,
	0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79,
	0x70, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0d, 0x61,
	0x72, 0x67, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x73, 0x12, 0x40, 0x0a, 0x0d,
	0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e,
	0x61, 0x73, 0x74, 0x2e, 0x4d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65,
	0x52, 0x0c, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x42, 0x30,
	0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70,
	0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69,
	0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_modifiers_proto_rawDescOnce sync.Once
	file_ast_modifiers_proto_rawDescData = file_ast_modifiers_proto_rawDesc
)

func file_ast_modifiers_proto_rawDescGZIP() []byte {
	file_ast_modifiers_proto_rawDescOnce.Do(func() {
		file_ast_modifiers_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_modifiers_proto_rawDescData)
	})
	return file_ast_modifiers_proto_rawDescData
}

var file_ast_modifiers_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ast_modifiers_proto_goTypes = []interface{}{
	(*ModifierName)(nil),       // 0: unpack.v1.ast.ModifierName
	(*Modifier)(nil),           // 1: unpack.v1.ast.Modifier
	(*ModifierInvocation)(nil), // 2: unpack.v1.ast.ModifierInvocation
	(NodeType)(0),              // 3: unpack.v1.ast.NodeType
	(*Src)(nil),                // 4: unpack.v1.ast.Src
	(Visibility)(0),            // 5: unpack.v1.ast.Visibility
	(*ParameterList)(nil),      // 6: unpack.v1.ast.ParameterList
	(*Body)(nil),               // 7: unpack.v1.ast.Body
	(*v3.TypedStruct)(nil),     // 8: xds.type.v3.TypedStruct
	(*TypeDescription)(nil),    // 9: unpack.v1.ast.TypeDescription
}
var file_ast_modifiers_proto_depIdxs = []int32{
	3,  // 0: unpack.v1.ast.ModifierName.node_type:type_name -> unpack.v1.ast.NodeType
	4,  // 1: unpack.v1.ast.ModifierName.src:type_name -> unpack.v1.ast.Src
	3,  // 2: unpack.v1.ast.Modifier.node_type:type_name -> unpack.v1.ast.NodeType
	4,  // 3: unpack.v1.ast.Modifier.src:type_name -> unpack.v1.ast.Src
	4,  // 4: unpack.v1.ast.Modifier.name_location:type_name -> unpack.v1.ast.Src
	5,  // 5: unpack.v1.ast.Modifier.visibility:type_name -> unpack.v1.ast.Visibility
	6,  // 6: unpack.v1.ast.Modifier.parameters:type_name -> unpack.v1.ast.ParameterList
	7,  // 7: unpack.v1.ast.Modifier.body:type_name -> unpack.v1.ast.Body
	3,  // 8: unpack.v1.ast.ModifierInvocation.node_type:type_name -> unpack.v1.ast.NodeType
	3,  // 9: unpack.v1.ast.ModifierInvocation.kind:type_name -> unpack.v1.ast.NodeType
	4,  // 10: unpack.v1.ast.ModifierInvocation.src:type_name -> unpack.v1.ast.Src
	8,  // 11: unpack.v1.ast.ModifierInvocation.arguments:type_name -> xds.type.v3.TypedStruct
	9,  // 12: unpack.v1.ast.ModifierInvocation.argument_types:type_name -> unpack.v1.ast.TypeDescription
	0,  // 13: unpack.v1.ast.ModifierInvocation.modifier_name:type_name -> unpack.v1.ast.ModifierName
	14, // [14:14] is the sub-list for method output_type
	14, // [14:14] is the sub-list for method input_type
	14, // [14:14] is the sub-list for extension type_name
	14, // [14:14] is the sub-list for extension extendee
	0,  // [0:14] is the sub-list for field type_name
}

func init() { file_ast_modifiers_proto_init() }
func file_ast_modifiers_proto_init() {
	if File_ast_modifiers_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	file_ast_type_name_proto_init()
	file_ast_parameters_proto_init()
	file_ast_body_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_modifiers_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModifierName); i {
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
		file_ast_modifiers_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Modifier); i {
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
		file_ast_modifiers_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ModifierInvocation); i {
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
			RawDescriptor: file_ast_modifiers_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_modifiers_proto_goTypes,
		DependencyIndexes: file_ast_modifiers_proto_depIdxs,
		MessageInfos:      file_ast_modifiers_proto_msgTypes,
	}.Build()
	File_ast_modifiers_proto = out.File
	file_ast_modifiers_proto_rawDesc = nil
	file_ast_modifiers_proto_goTypes = nil
	file_ast_modifiers_proto_depIdxs = nil
}
