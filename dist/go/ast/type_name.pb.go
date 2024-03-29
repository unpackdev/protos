// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: ast/type_name.proto

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

type PathNode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                  string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType              NodeType `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	ReferencedDeclaration int64    `protobuf:"varint,4,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	Src                   *Src     `protobuf:"bytes,5,opt,name=src,proto3" json:"src,omitempty"`
	NameLocation          *Src     `protobuf:"bytes,6,opt,name=name_location,json=nameLocation,proto3" json:"name_location,omitempty"`
}

func (x *PathNode) Reset() {
	*x = PathNode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_type_name_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PathNode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PathNode) ProtoMessage() {}

func (x *PathNode) ProtoReflect() protoreflect.Message {
	mi := &file_ast_type_name_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PathNode.ProtoReflect.Descriptor instead.
func (*PathNode) Descriptor() ([]byte, []int) {
	return file_ast_type_name_proto_rawDescGZIP(), []int{0}
}

func (x *PathNode) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *PathNode) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *PathNode) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *PathNode) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *PathNode) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *PathNode) GetNameLocation() *Src {
	if x != nil {
		return x.NameLocation
	}
	return nil
}

type TypeName struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                    int64            `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                  string           `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	NodeType              NodeType         `protobuf:"varint,3,opt,name=node_type,json=nodeType,proto3,enum=unpack.v1.ast.NodeType" json:"node_type,omitempty"`
	Src                   *Src             `protobuf:"bytes,4,opt,name=src,proto3" json:"src,omitempty"`
	TypeDescription       *TypeDescription `protobuf:"bytes,5,opt,name=type_description,json=typeDescription,proto3" json:"type_description,omitempty"`
	KeyType               *TypeName        `protobuf:"bytes,6,opt,name=key_type,json=keyType,proto3" json:"key_type,omitempty"`
	KeyTypeLocation       *Src             `protobuf:"bytes,7,opt,name=key_type_location,json=keyTypeLocation,proto3" json:"key_type_location,omitempty"`
	ValueType             *TypeName        `protobuf:"bytes,8,opt,name=value_type,json=valueType,proto3" json:"value_type,omitempty"`
	ValueTypeLocation     *Src             `protobuf:"bytes,9,opt,name=value_type_location,json=valueTypeLocation,proto3" json:"value_type_location,omitempty"`
	PathNode              *PathNode        `protobuf:"bytes,10,opt,name=path_node,json=pathNode,proto3" json:"path_node,omitempty"`
	ReferencedDeclaration int64            `protobuf:"varint,11,opt,name=referenced_declaration,json=referencedDeclaration,proto3" json:"referenced_declaration,omitempty"`
	StateMutability       Mutability       `protobuf:"varint,12,opt,name=state_mutability,json=stateMutability,proto3,enum=unpack.v1.ast.Mutability" json:"state_mutability,omitempty"`
	Expression            *v3.TypedStruct  `protobuf:"bytes,13,opt,name=expression,proto3" json:"expression,omitempty"`
}

func (x *TypeName) Reset() {
	*x = TypeName{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_type_name_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeName) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeName) ProtoMessage() {}

func (x *TypeName) ProtoReflect() protoreflect.Message {
	mi := &file_ast_type_name_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeName.ProtoReflect.Descriptor instead.
func (*TypeName) Descriptor() ([]byte, []int) {
	return file_ast_type_name_proto_rawDescGZIP(), []int{1}
}

func (x *TypeName) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *TypeName) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *TypeName) GetNodeType() NodeType {
	if x != nil {
		return x.NodeType
	}
	return NodeType_NT_DEFAULT
}

func (x *TypeName) GetSrc() *Src {
	if x != nil {
		return x.Src
	}
	return nil
}

func (x *TypeName) GetTypeDescription() *TypeDescription {
	if x != nil {
		return x.TypeDescription
	}
	return nil
}

func (x *TypeName) GetKeyType() *TypeName {
	if x != nil {
		return x.KeyType
	}
	return nil
}

func (x *TypeName) GetKeyTypeLocation() *Src {
	if x != nil {
		return x.KeyTypeLocation
	}
	return nil
}

func (x *TypeName) GetValueType() *TypeName {
	if x != nil {
		return x.ValueType
	}
	return nil
}

func (x *TypeName) GetValueTypeLocation() *Src {
	if x != nil {
		return x.ValueTypeLocation
	}
	return nil
}

func (x *TypeName) GetPathNode() *PathNode {
	if x != nil {
		return x.PathNode
	}
	return nil
}

func (x *TypeName) GetReferencedDeclaration() int64 {
	if x != nil {
		return x.ReferencedDeclaration
	}
	return 0
}

func (x *TypeName) GetStateMutability() Mutability {
	if x != nil {
		return x.StateMutability
	}
	return Mutability_M_DEFAULT
}

func (x *TypeName) GetExpression() *v3.TypedStruct {
	if x != nil {
		return x.Expression
	}
	return nil
}

type TypeDescription struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TypeIdentifier string `protobuf:"bytes,1,opt,name=type_identifier,json=typeIdentifier,proto3" json:"type_identifier,omitempty"`
	TypeString     string `protobuf:"bytes,2,opt,name=type_string,json=typeString,proto3" json:"type_string,omitempty"`
}

func (x *TypeDescription) Reset() {
	*x = TypeDescription{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_type_name_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeDescription) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeDescription) ProtoMessage() {}

func (x *TypeDescription) ProtoReflect() protoreflect.Message {
	mi := &file_ast_type_name_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeDescription.ProtoReflect.Descriptor instead.
func (*TypeDescription) Descriptor() ([]byte, []int) {
	return file_ast_type_name_proto_rawDescGZIP(), []int{2}
}

func (x *TypeDescription) GetTypeIdentifier() string {
	if x != nil {
		return x.TypeIdentifier
	}
	return ""
}

func (x *TypeDescription) GetTypeString() string {
	if x != nil {
		return x.TypeString
	}
	return ""
}

var File_ast_type_name_proto protoreflect.FileDescriptor

var file_ast_type_name_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x73, 0x74, 0x1a, 0x0f, 0x61, 0x73, 0x74, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x78, 0x64, 0x73, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x2f, 0x76,
	0x33, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x64, 0x5f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xfa, 0x01, 0x0a, 0x08, 0x50, 0x61, 0x74, 0x68, 0x4e, 0x6f, 0x64,
	0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x08, 0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x35, 0x0a, 0x16, 0x72,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x64, 0x65, 0x63, 0x6c, 0x61, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x15, 0x72, 0x65, 0x66,
	0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44, 0x65, 0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x37, 0x0a, 0x0d, 0x6e, 0x61, 0x6d, 0x65,
	0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x53, 0x72, 0x63, 0x52, 0x0c, 0x6e, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x22, 0xb2, 0x05, 0x0a, 0x08, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x34, 0x0a, 0x09, 0x6e, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x4e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08,
	0x6e, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x24, 0x0a, 0x03, 0x73, 0x72, 0x63, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x03, 0x73, 0x72, 0x63, 0x12, 0x49,
	0x0a, 0x10, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x74, 0x79, 0x70, 0x65, 0x44, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x32, 0x0a, 0x08, 0x6b, 0x65, 0x79,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65,
	0x4e, 0x61, 0x6d, 0x65, 0x52, 0x07, 0x6b, 0x65, 0x79, 0x54, 0x79, 0x70, 0x65, 0x12, 0x3e, 0x0a,
	0x11, 0x6b, 0x65, 0x79, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x0f, 0x6b, 0x65,
	0x79, 0x54, 0x79, 0x70, 0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x36, 0x0a,
	0x0a, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73,
	0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x52, 0x09, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x42, 0x0a, 0x13, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x5f, 0x74,
	0x79, 0x70, 0x65, 0x5f, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x12, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x73, 0x74, 0x2e, 0x53, 0x72, 0x63, 0x52, 0x11, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x34, 0x0a, 0x09, 0x70, 0x61, 0x74,
	0x68, 0x5f, 0x6e, 0x6f, 0x64, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x75,
	0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x50, 0x61, 0x74,
	0x68, 0x4e, 0x6f, 0x64, 0x65, 0x52, 0x08, 0x70, 0x61, 0x74, 0x68, 0x4e, 0x6f, 0x64, 0x65, 0x12,
	0x35, 0x0a, 0x16, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x5f, 0x64, 0x65,
	0x63, 0x6c, 0x61, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x15, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x64, 0x44, 0x65, 0x63, 0x6c, 0x61,
	0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x44, 0x0a, 0x10, 0x73, 0x74, 0x61, 0x74, 0x65, 0x5f,
	0x6d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x19, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74,
	0x2e, 0x4d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0f, 0x73, 0x74, 0x61,
	0x74, 0x65, 0x4d, 0x75, 0x74, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x12, 0x38, 0x0a, 0x0a,
	0x65, 0x78, 0x70, 0x72, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x18, 0x2e, 0x78, 0x64, 0x73, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x2e, 0x76, 0x33, 0x2e, 0x54,
	0x79, 0x70, 0x65, 0x64, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x0a, 0x65, 0x78, 0x70, 0x72,
	0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x22, 0x5b, 0x0a, 0x0f, 0x54, 0x79, 0x70, 0x65, 0x44, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x27, 0x0a, 0x0f, 0x74, 0x79, 0x70,
	0x65, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0e, 0x74, 0x79, 0x70, 0x65, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x66, 0x69,
	0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x73, 0x74, 0x72, 0x69, 0x6e,
	0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x74, 0x79, 0x70, 0x65, 0x53, 0x74, 0x72,
	0x69, 0x6e, 0x67, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74, 0x3b, 0x61,
	0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_type_name_proto_rawDescOnce sync.Once
	file_ast_type_name_proto_rawDescData = file_ast_type_name_proto_rawDesc
)

func file_ast_type_name_proto_rawDescGZIP() []byte {
	file_ast_type_name_proto_rawDescOnce.Do(func() {
		file_ast_type_name_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_type_name_proto_rawDescData)
	})
	return file_ast_type_name_proto_rawDescData
}

var file_ast_type_name_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ast_type_name_proto_goTypes = []interface{}{
	(*PathNode)(nil),        // 0: unpack.v1.ast.PathNode
	(*TypeName)(nil),        // 1: unpack.v1.ast.TypeName
	(*TypeDescription)(nil), // 2: unpack.v1.ast.TypeDescription
	(NodeType)(0),           // 3: unpack.v1.ast.NodeType
	(*Src)(nil),             // 4: unpack.v1.ast.Src
	(Mutability)(0),         // 5: unpack.v1.ast.Mutability
	(*v3.TypedStruct)(nil),  // 6: xds.type.v3.TypedStruct
}
var file_ast_type_name_proto_depIdxs = []int32{
	3,  // 0: unpack.v1.ast.PathNode.node_type:type_name -> unpack.v1.ast.NodeType
	4,  // 1: unpack.v1.ast.PathNode.src:type_name -> unpack.v1.ast.Src
	4,  // 2: unpack.v1.ast.PathNode.name_location:type_name -> unpack.v1.ast.Src
	3,  // 3: unpack.v1.ast.TypeName.node_type:type_name -> unpack.v1.ast.NodeType
	4,  // 4: unpack.v1.ast.TypeName.src:type_name -> unpack.v1.ast.Src
	2,  // 5: unpack.v1.ast.TypeName.type_description:type_name -> unpack.v1.ast.TypeDescription
	1,  // 6: unpack.v1.ast.TypeName.key_type:type_name -> unpack.v1.ast.TypeName
	4,  // 7: unpack.v1.ast.TypeName.key_type_location:type_name -> unpack.v1.ast.Src
	1,  // 8: unpack.v1.ast.TypeName.value_type:type_name -> unpack.v1.ast.TypeName
	4,  // 9: unpack.v1.ast.TypeName.value_type_location:type_name -> unpack.v1.ast.Src
	0,  // 10: unpack.v1.ast.TypeName.path_node:type_name -> unpack.v1.ast.PathNode
	5,  // 11: unpack.v1.ast.TypeName.state_mutability:type_name -> unpack.v1.ast.Mutability
	6,  // 12: unpack.v1.ast.TypeName.expression:type_name -> xds.type.v3.TypedStruct
	13, // [13:13] is the sub-list for method output_type
	13, // [13:13] is the sub-list for method input_type
	13, // [13:13] is the sub-list for extension type_name
	13, // [13:13] is the sub-list for extension extendee
	0,  // [0:13] is the sub-list for field type_name
}

func init() { file_ast_type_name_proto_init() }
func file_ast_type_name_proto_init() {
	if File_ast_type_name_proto != nil {
		return
	}
	file_ast_types_proto_init()
	file_ast_src_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ast_type_name_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PathNode); i {
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
		file_ast_type_name_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeName); i {
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
		file_ast_type_name_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeDescription); i {
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
			RawDescriptor: file_ast_type_name_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_type_name_proto_goTypes,
		DependencyIndexes: file_ast_type_name_proto_depIdxs,
		MessageInfos:      file_ast_type_name_proto_msgTypes,
	}.Build()
	File_ast_type_name_proto = out.File
	file_ast_type_name_proto_rawDesc = nil
	file_ast_type_name_proto_goTypes = nil
	file_ast_type_name_proto_depIdxs = nil
}
