// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: ast/src.proto

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

// The Src message represents source information about an AST (Abstract Syntax Tree) node in a Solidity source file.
type Src struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// id is the unique identifier of the source information.
	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// line is the line number in the source file where the AST node starts.
	Line int64 `protobuf:"varint,2,opt,name=line,proto3" json:"line,omitempty"`
	// column is the column number in the source file where the AST node starts.
	Column int64 `protobuf:"varint,3,opt,name=column,proto3" json:"column,omitempty"`
	// start is the character position in the source file where the AST node starts.
	Start int64 `protobuf:"varint,4,opt,name=start,proto3" json:"start,omitempty"`
	// end is the character position in the source file where the AST node ends.
	End int64 `protobuf:"varint,5,opt,name=end,proto3" json:"end,omitempty"`
	// length is the length of the source code for the AST node. It is calculated as (end - start + 1).
	Length int64 `protobuf:"varint,6,opt,name=length,proto3" json:"length,omitempty"`
	// parent_index is the id of the parent AST node in the tree hierarchy.
	ParentIndex int64 `protobuf:"varint,7,opt,name=parent_index,json=parentIndex,proto3" json:"parent_index,omitempty"`
}

func (x *Src) Reset() {
	*x = Src{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ast_src_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Src) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Src) ProtoMessage() {}

func (x *Src) ProtoReflect() protoreflect.Message {
	mi := &file_ast_src_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Src.ProtoReflect.Descriptor instead.
func (*Src) Descriptor() ([]byte, []int) {
	return file_ast_src_proto_rawDescGZIP(), []int{0}
}

func (x *Src) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Src) GetLine() int64 {
	if x != nil {
		return x.Line
	}
	return 0
}

func (x *Src) GetColumn() int64 {
	if x != nil {
		return x.Column
	}
	return 0
}

func (x *Src) GetStart() int64 {
	if x != nil {
		return x.Start
	}
	return 0
}

func (x *Src) GetEnd() int64 {
	if x != nil {
		return x.End
	}
	return 0
}

func (x *Src) GetLength() int64 {
	if x != nil {
		return x.Length
	}
	return 0
}

func (x *Src) GetParentIndex() int64 {
	if x != nil {
		return x.ParentIndex
	}
	return 0
}

var File_ast_src_proto protoreflect.FileDescriptor

var file_ast_src_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x73, 0x72, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x22, 0xa4,
	0x01, 0x0a, 0x03, 0x53, 0x72, 0x63, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x63, 0x6f,
	0x6c, 0x75, 0x6d, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x63, 0x6f, 0x6c, 0x75,
	0x6d, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x65, 0x6e, 0x64, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x65, 0x6e, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65,
	0x6e, 0x67, 0x74, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x6c, 0x65, 0x6e, 0x67,
	0x74, 0x68, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x6e, 0x64,
	0x65, 0x78, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74,
	0x49, 0x6e, 0x64, 0x65, 0x78, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x73, 0x74,
	0x3b, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ast_src_proto_rawDescOnce sync.Once
	file_ast_src_proto_rawDescData = file_ast_src_proto_rawDesc
)

func file_ast_src_proto_rawDescGZIP() []byte {
	file_ast_src_proto_rawDescOnce.Do(func() {
		file_ast_src_proto_rawDescData = protoimpl.X.CompressGZIP(file_ast_src_proto_rawDescData)
	})
	return file_ast_src_proto_rawDescData
}

var file_ast_src_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_ast_src_proto_goTypes = []interface{}{
	(*Src)(nil), // 0: txpull.v1.ast.Src
}
var file_ast_src_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ast_src_proto_init() }
func file_ast_src_proto_init() {
	if File_ast_src_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ast_src_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Src); i {
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
			RawDescriptor: file_ast_src_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ast_src_proto_goTypes,
		DependencyIndexes: file_ast_src_proto_depIdxs,
		MessageInfos:      file_ast_src_proto_msgTypes,
	}.Build()
	File_ast_src_proto = out.File
	file_ast_src_proto_rawDesc = nil
	file_ast_src_proto_goTypes = nil
	file_ast_src_proto_depIdxs = nil
}
