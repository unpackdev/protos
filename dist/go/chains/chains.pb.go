// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: chains/chains.proto

package chains

import (
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	common "github.com/txpull/protos/dist/go/common"
	_ "google.golang.org/genproto/googleapis/api/annotations"
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

type ChainStatus int32

const (
	ChainStatus_CS_NONE     ChainStatus = 0
	ChainStatus_CS_OFFLINE  ChainStatus = 1
	ChainStatus_CS_ONLINE   ChainStatus = 2
	ChainStatus_CS_DISABLED ChainStatus = 3
	ChainStatus_CS_WIP      ChainStatus = 4
)

// Enum value maps for ChainStatus.
var (
	ChainStatus_name = map[int32]string{
		0: "CS_NONE",
		1: "CS_OFFLINE",
		2: "CS_ONLINE",
		3: "CS_DISABLED",
		4: "CS_WIP",
	}
	ChainStatus_value = map[string]int32{
		"CS_NONE":     0,
		"CS_OFFLINE":  1,
		"CS_ONLINE":   2,
		"CS_DISABLED": 3,
		"CS_WIP":      4,
	}
)

func (x ChainStatus) Enum() *ChainStatus {
	p := new(ChainStatus)
	*p = x
	return p
}

func (x ChainStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ChainStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_chains_chains_proto_enumTypes[0].Descriptor()
}

func (ChainStatus) Type() protoreflect.EnumType {
	return &file_chains_chains_proto_enumTypes[0]
}

func (x ChainStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ChainStatus.Descriptor instead.
func (ChainStatus) EnumDescriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{0}
}

// The Token protocol buffer message defines a standardized data format for representing
// token objects. It includes fields such as the token identifier, blockchain identifier,
// token name, description, symbol, decimal places, total supply, creation information,
// owner information, and security information. The message can be used in a variety of contexts
// to provide a standardized way of representing token objects.
type Chain struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                 uint64               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	ChainId            uint64               `protobuf:"varint,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Name               string               `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Address            string               `protobuf:"bytes,4,opt,name=address,proto3" json:"address,omitempty"`
	LatestBlock        uint64               `protobuf:"varint,5,opt,name=latest_block,json=latestBlock,proto3" json:"latest_block,omitempty"`
	LatestIndexedBlock uint64               `protobuf:"varint,6,opt,name=latest_indexed_block,json=latestIndexedBlock,proto3" json:"latest_indexed_block,omitempty"`
	TotalIndexedBlocks uint64               `protobuf:"varint,7,opt,name=total_indexed_blocks,json=totalIndexedBlocks,proto3" json:"total_indexed_blocks,omitempty"`
	AverageIndexTimeMs uint64               `protobuf:"varint,8,opt,name=average_index_time_ms,json=averageIndexTimeMs,proto3" json:"average_index_time_ms,omitempty"`
	Status             ChainStatus          `protobuf:"varint,9,opt,name=status,proto3,enum=txpull.v1.chains.ChainStatus" json:"status,omitempty"`
	CreationTimestamp  *timestamp.Timestamp `protobuf:"bytes,10,opt,name=creation_timestamp,json=creationTimestamp,proto3" json:"creation_timestamp,omitempty"`
}

func (x *Chain) Reset() {
	*x = Chain{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chains_chains_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Chain) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Chain) ProtoMessage() {}

func (x *Chain) ProtoReflect() protoreflect.Message {
	mi := &file_chains_chains_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Chain.ProtoReflect.Descriptor instead.
func (*Chain) Descriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{0}
}

func (x *Chain) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Chain) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *Chain) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Chain) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Chain) GetLatestBlock() uint64 {
	if x != nil {
		return x.LatestBlock
	}
	return 0
}

func (x *Chain) GetLatestIndexedBlock() uint64 {
	if x != nil {
		return x.LatestIndexedBlock
	}
	return 0
}

func (x *Chain) GetTotalIndexedBlocks() uint64 {
	if x != nil {
		return x.TotalIndexedBlocks
	}
	return 0
}

func (x *Chain) GetAverageIndexTimeMs() uint64 {
	if x != nil {
		return x.AverageIndexTimeMs
	}
	return 0
}

func (x *Chain) GetStatus() ChainStatus {
	if x != nil {
		return x.Status
	}
	return ChainStatus_CS_NONE
}

func (x *Chain) GetCreationTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.CreationTimestamp
	}
	return nil
}

type FilterChainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *FilterChainRequest) Reset() {
	*x = FilterChainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chains_chains_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterChainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterChainRequest) ProtoMessage() {}

func (x *FilterChainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chains_chains_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterChainRequest.ProtoReflect.Descriptor instead.
func (*FilterChainRequest) Descriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{1}
}

func (x *FilterChainRequest) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type FilterChainResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Chains []*Chain       `protobuf:"bytes,2,rep,name=chains,proto3" json:"chains,omitempty"`
}

func (x *FilterChainResponse) Reset() {
	*x = FilterChainResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chains_chains_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterChainResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterChainResponse) ProtoMessage() {}

func (x *FilterChainResponse) ProtoReflect() protoreflect.Message {
	mi := &file_chains_chains_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterChainResponse.ProtoReflect.Descriptor instead.
func (*FilterChainResponse) Descriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{2}
}

func (x *FilterChainResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *FilterChainResponse) GetChains() []*Chain {
	if x != nil {
		return x.Chains
	}
	return nil
}

type GetChainRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChainId uint64 `protobuf:"varint,1,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetChainRequest) Reset() {
	*x = GetChainRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chains_chains_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChainRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChainRequest) ProtoMessage() {}

func (x *GetChainRequest) ProtoReflect() protoreflect.Message {
	mi := &file_chains_chains_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChainRequest.ProtoReflect.Descriptor instead.
func (*GetChainRequest) Descriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{3}
}

func (x *GetChainRequest) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *GetChainRequest) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetChainResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Chain  *Chain         `protobuf:"bytes,2,opt,name=chain,proto3" json:"chain,omitempty"`
}

func (x *GetChainResponse) Reset() {
	*x = GetChainResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_chains_chains_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetChainResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetChainResponse) ProtoMessage() {}

func (x *GetChainResponse) ProtoReflect() protoreflect.Message {
	mi := &file_chains_chains_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetChainResponse.ProtoReflect.Descriptor instead.
func (*GetChainResponse) Descriptor() ([]byte, []int) {
	return file_chains_chains_proto_rawDescGZIP(), []int{4}
}

func (x *GetChainResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetChainResponse) GetChain() *Chain {
	if x != nil {
		return x.Chain
	}
	return nil
}

var File_chains_chains_proto protoreflect.FileDescriptor

var file_chains_chains_proto_rawDesc = []byte{
	0x0a, 0x13, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9c, 0x03, 0x0a, 0x05,
	0x43, 0x68, 0x61, 0x69, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x21,
	0x0a, 0x0c, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x12, 0x30, 0x0a, 0x14, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x5f, 0x69, 0x6e, 0x64, 0x65,
	0x78, 0x65, 0x64, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x12, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x12, 0x30, 0x0a, 0x14, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x69, 0x6e, 0x64,
	0x65, 0x78, 0x65, 0x64, 0x5f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x12, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x64, 0x42,
	0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x12, 0x31, 0x0a, 0x15, 0x61, 0x76, 0x65, 0x72, 0x61, 0x67, 0x65,
	0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x5f, 0x6d, 0x73, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x04, 0x52, 0x12, 0x61, 0x76, 0x65, 0x72, 0x61, 0x67, 0x65, 0x49, 0x6e, 0x64,
	0x65, 0x78, 0x54, 0x69, 0x6d, 0x65, 0x4d, 0x73, 0x12, 0x35, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x69,
	0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x49, 0x0a, 0x12, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x22, 0x46, 0x0a, 0x12, 0x46, 0x69,
	0x6c, 0x74, 0x65, 0x72, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x22, 0x78, 0x0a, 0x13, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x43, 0x68, 0x61, 0x69,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75,
	0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x2f, 0x0a, 0x06, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78,
	0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e, 0x43,
	0x68, 0x61, 0x69, 0x6e, 0x52, 0x06, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x22, 0x3c, 0x0a, 0x0f,
	0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x22, 0x73, 0x0a, 0x10, 0x47, 0x65,
	0x74, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x2d, 0x0a, 0x05, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x68, 0x61, 0x69,
	0x6e, 0x73, 0x2e, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x52, 0x05, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x2a,
	0x56, 0x0a, 0x0b, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0b,
	0x0a, 0x07, 0x43, 0x53, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x0e, 0x0a, 0x0a, 0x43,
	0x53, 0x5f, 0x4f, 0x46, 0x46, 0x4c, 0x49, 0x4e, 0x45, 0x10, 0x01, 0x12, 0x0d, 0x0a, 0x09, 0x43,
	0x53, 0x5f, 0x4f, 0x4e, 0x4c, 0x49, 0x4e, 0x45, 0x10, 0x02, 0x12, 0x0f, 0x0a, 0x0b, 0x43, 0x53,
	0x5f, 0x44, 0x49, 0x53, 0x41, 0x42, 0x4c, 0x45, 0x44, 0x10, 0x03, 0x12, 0x0a, 0x0a, 0x06, 0x43,
	0x53, 0x5f, 0x57, 0x49, 0x50, 0x10, 0x04, 0x32, 0xda, 0x01, 0x0a, 0x06, 0x43, 0x68, 0x61, 0x69,
	0x6e, 0x73, 0x12, 0x69, 0x0a, 0x06, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x24, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e,
	0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x43, 0x68, 0x61, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x25, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63,
	0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x43, 0x68, 0x61, 0x69,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x12, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x0c, 0x12, 0x0a, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x12, 0x65, 0x0a,
	0x03, 0x47, 0x65, 0x74, 0x12, 0x21, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x43, 0x68, 0x61, 0x69, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x43, 0x68,
	0x61, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x17, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x11, 0x12, 0x0f, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x2f,
	0x7b, 0x69, 0x64, 0x7d, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73,
	0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x3b,
	0x63, 0x68, 0x61, 0x69, 0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_chains_chains_proto_rawDescOnce sync.Once
	file_chains_chains_proto_rawDescData = file_chains_chains_proto_rawDesc
)

func file_chains_chains_proto_rawDescGZIP() []byte {
	file_chains_chains_proto_rawDescOnce.Do(func() {
		file_chains_chains_proto_rawDescData = protoimpl.X.CompressGZIP(file_chains_chains_proto_rawDescData)
	})
	return file_chains_chains_proto_rawDescData
}

var file_chains_chains_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_chains_chains_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_chains_chains_proto_goTypes = []interface{}{
	(ChainStatus)(0),            // 0: txpull.v1.chains.ChainStatus
	(*Chain)(nil),               // 1: txpull.v1.chains.Chain
	(*FilterChainRequest)(nil),  // 2: txpull.v1.chains.FilterChainRequest
	(*FilterChainResponse)(nil), // 3: txpull.v1.chains.FilterChainResponse
	(*GetChainRequest)(nil),     // 4: txpull.v1.chains.GetChainRequest
	(*GetChainResponse)(nil),    // 5: txpull.v1.chains.GetChainResponse
	(*timestamp.Timestamp)(nil), // 6: google.protobuf.Timestamp
	(*common.Status)(nil),       // 7: txpull.v1.common.Status
}
var file_chains_chains_proto_depIdxs = []int32{
	0, // 0: txpull.v1.chains.Chain.status:type_name -> txpull.v1.chains.ChainStatus
	6, // 1: txpull.v1.chains.Chain.creation_timestamp:type_name -> google.protobuf.Timestamp
	7, // 2: txpull.v1.chains.FilterChainRequest.status:type_name -> txpull.v1.common.Status
	7, // 3: txpull.v1.chains.FilterChainResponse.status:type_name -> txpull.v1.common.Status
	1, // 4: txpull.v1.chains.FilterChainResponse.chains:type_name -> txpull.v1.chains.Chain
	7, // 5: txpull.v1.chains.GetChainResponse.status:type_name -> txpull.v1.common.Status
	1, // 6: txpull.v1.chains.GetChainResponse.chain:type_name -> txpull.v1.chains.Chain
	2, // 7: txpull.v1.chains.Chains.Filter:input_type -> txpull.v1.chains.FilterChainRequest
	4, // 8: txpull.v1.chains.Chains.Get:input_type -> txpull.v1.chains.GetChainRequest
	3, // 9: txpull.v1.chains.Chains.Filter:output_type -> txpull.v1.chains.FilterChainResponse
	5, // 10: txpull.v1.chains.Chains.Get:output_type -> txpull.v1.chains.GetChainResponse
	9, // [9:11] is the sub-list for method output_type
	7, // [7:9] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_chains_chains_proto_init() }
func file_chains_chains_proto_init() {
	if File_chains_chains_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_chains_chains_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Chain); i {
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
		file_chains_chains_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterChainRequest); i {
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
		file_chains_chains_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterChainResponse); i {
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
		file_chains_chains_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetChainRequest); i {
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
		file_chains_chains_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetChainResponse); i {
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
			RawDescriptor: file_chains_chains_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_chains_chains_proto_goTypes,
		DependencyIndexes: file_chains_chains_proto_depIdxs,
		EnumInfos:         file_chains_chains_proto_enumTypes,
		MessageInfos:      file_chains_chains_proto_msgTypes,
	}.Build()
	File_chains_chains_proto = out.File
	file_chains_chains_proto_rawDesc = nil
	file_chains_chains_proto_goTypes = nil
	file_chains_chains_proto_depIdxs = nil
}
