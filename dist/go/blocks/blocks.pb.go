// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: blocks/blocks.proto

package blocks

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

type BlockStatus int32

const (
	BlockStatus_BS_NONE       BlockStatus = 0
	BlockStatus_BS_QUEUED     BlockStatus = 1
	BlockStatus_BS_PROCESSING BlockStatus = 2
	BlockStatus_BS_PROCESSED  BlockStatus = 3
	BlockStatus_BS_FAILED     BlockStatus = 4
)

// Enum value maps for BlockStatus.
var (
	BlockStatus_name = map[int32]string{
		0: "BS_NONE",
		1: "BS_QUEUED",
		2: "BS_PROCESSING",
		3: "BS_PROCESSED",
		4: "BS_FAILED",
	}
	BlockStatus_value = map[string]int32{
		"BS_NONE":       0,
		"BS_QUEUED":     1,
		"BS_PROCESSING": 2,
		"BS_PROCESSED":  3,
		"BS_FAILED":     4,
	}
)

func (x BlockStatus) Enum() *BlockStatus {
	p := new(BlockStatus)
	*p = x
	return p
}

func (x BlockStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BlockStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_blocks_blocks_proto_enumTypes[0].Descriptor()
}

func (BlockStatus) Type() protoreflect.EnumType {
	return &file_blocks_blocks_proto_enumTypes[0]
}

func (x BlockStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BlockStatus.Descriptor instead.
func (BlockStatus) EnumDescriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{0}
}

type Block struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                         uint64               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	ChainId                    uint64               `protobuf:"varint,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Number                     uint64               `protobuf:"varint,3,opt,name=number,proto3" json:"number,omitempty"`
	Hash                       string               `protobuf:"bytes,4,opt,name=hash,proto3" json:"hash,omitempty"`
	ParentHash                 string               `protobuf:"bytes,5,opt,name=parent_hash,json=parentHash,proto3" json:"parent_hash,omitempty"`
	UncleHash                  string               `protobuf:"bytes,6,opt,name=uncle_hash,json=uncleHash,proto3" json:"uncle_hash,omitempty"`
	MixHash                    string               `protobuf:"bytes,7,opt,name=mix_hash,json=mixHash,proto3" json:"mix_hash,omitempty"`
	Nonce                      uint64               `protobuf:"varint,8,opt,name=nonce,proto3" json:"nonce,omitempty"`
	LogsBloom                  []byte               `protobuf:"bytes,9,opt,name=logs_bloom,json=logsBloom,proto3" json:"logs_bloom,omitempty"`
	StateRoot                  string               `protobuf:"bytes,10,opt,name=state_root,json=stateRoot,proto3" json:"state_root,omitempty"`
	TransactionsRoot           string               `protobuf:"bytes,11,opt,name=transactions_root,json=transactionsRoot,proto3" json:"transactions_root,omitempty"`
	ReceiptsRoot               string               `protobuf:"bytes,12,opt,name=receipts_root,json=receiptsRoot,proto3" json:"receipts_root,omitempty"`
	Coinbase                   string               `protobuf:"bytes,13,opt,name=coinbase,proto3" json:"coinbase,omitempty"`
	Difficulty                 uint64               `protobuf:"varint,14,opt,name=difficulty,proto3" json:"difficulty,omitempty"`
	Size                       float64              `protobuf:"fixed64,15,opt,name=size,proto3" json:"size,omitempty"`
	Timestamp                  *timestamp.Timestamp `protobuf:"bytes,16,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	ExtraData                  []byte               `protobuf:"bytes,17,opt,name=extra_data,json=extraData,proto3" json:"extra_data,omitempty"`
	GasLimit                   uint64               `protobuf:"varint,18,opt,name=gas_limit,json=gasLimit,proto3" json:"gas_limit,omitempty"`
	GasUsed                    uint64               `protobuf:"varint,19,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	BaseFee                    uint64               `protobuf:"varint,20,opt,name=base_fee,json=baseFee,proto3" json:"base_fee,omitempty"`
	TotalTransactionsCount     uint32               `protobuf:"varint,21,opt,name=total_transactions_count,json=totalTransactionsCount,proto3" json:"total_transactions_count,omitempty"`
	ProcessedTransactionsCount uint32               `protobuf:"varint,22,opt,name=processed_transactions_count,json=processedTransactionsCount,proto3" json:"processed_transactions_count,omitempty"`
	Status                     BlockStatus          `protobuf:"varint,23,opt,name=status,proto3,enum=txpull.v1.blocks.BlockStatus" json:"status,omitempty"`
	QueuedTimestamp            *timestamp.Timestamp `protobuf:"bytes,24,opt,name=queued_timestamp,json=queuedTimestamp,proto3" json:"queued_timestamp,omitempty"`
	ProcessedTimestamp         *timestamp.Timestamp `protobuf:"bytes,25,opt,name=processed_timestamp,json=processedTimestamp,proto3" json:"processed_timestamp,omitempty"`
}

func (x *Block) Reset() {
	*x = Block{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blocks_blocks_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Block) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Block) ProtoMessage() {}

func (x *Block) ProtoReflect() protoreflect.Message {
	mi := &file_blocks_blocks_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Block.ProtoReflect.Descriptor instead.
func (*Block) Descriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{0}
}

func (x *Block) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Block) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *Block) GetNumber() uint64 {
	if x != nil {
		return x.Number
	}
	return 0
}

func (x *Block) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *Block) GetParentHash() string {
	if x != nil {
		return x.ParentHash
	}
	return ""
}

func (x *Block) GetUncleHash() string {
	if x != nil {
		return x.UncleHash
	}
	return ""
}

func (x *Block) GetMixHash() string {
	if x != nil {
		return x.MixHash
	}
	return ""
}

func (x *Block) GetNonce() uint64 {
	if x != nil {
		return x.Nonce
	}
	return 0
}

func (x *Block) GetLogsBloom() []byte {
	if x != nil {
		return x.LogsBloom
	}
	return nil
}

func (x *Block) GetStateRoot() string {
	if x != nil {
		return x.StateRoot
	}
	return ""
}

func (x *Block) GetTransactionsRoot() string {
	if x != nil {
		return x.TransactionsRoot
	}
	return ""
}

func (x *Block) GetReceiptsRoot() string {
	if x != nil {
		return x.ReceiptsRoot
	}
	return ""
}

func (x *Block) GetCoinbase() string {
	if x != nil {
		return x.Coinbase
	}
	return ""
}

func (x *Block) GetDifficulty() uint64 {
	if x != nil {
		return x.Difficulty
	}
	return 0
}

func (x *Block) GetSize() float64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Block) GetTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *Block) GetExtraData() []byte {
	if x != nil {
		return x.ExtraData
	}
	return nil
}

func (x *Block) GetGasLimit() uint64 {
	if x != nil {
		return x.GasLimit
	}
	return 0
}

func (x *Block) GetGasUsed() uint64 {
	if x != nil {
		return x.GasUsed
	}
	return 0
}

func (x *Block) GetBaseFee() uint64 {
	if x != nil {
		return x.BaseFee
	}
	return 0
}

func (x *Block) GetTotalTransactionsCount() uint32 {
	if x != nil {
		return x.TotalTransactionsCount
	}
	return 0
}

func (x *Block) GetProcessedTransactionsCount() uint32 {
	if x != nil {
		return x.ProcessedTransactionsCount
	}
	return 0
}

func (x *Block) GetStatus() BlockStatus {
	if x != nil {
		return x.Status
	}
	return BlockStatus_BS_NONE
}

func (x *Block) GetQueuedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.QueuedTimestamp
	}
	return nil
}

func (x *Block) GetProcessedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.ProcessedTimestamp
	}
	return nil
}

type FilterBlockRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,5,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *FilterBlockRequest) Reset() {
	*x = FilterBlockRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blocks_blocks_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterBlockRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterBlockRequest) ProtoMessage() {}

func (x *FilterBlockRequest) ProtoReflect() protoreflect.Message {
	mi := &file_blocks_blocks_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterBlockRequest.ProtoReflect.Descriptor instead.
func (*FilterBlockRequest) Descriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{1}
}

func (x *FilterBlockRequest) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type FilterBlockResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Blocks []*Block       `protobuf:"bytes,2,rep,name=blocks,proto3" json:"blocks,omitempty"`
}

func (x *FilterBlockResponse) Reset() {
	*x = FilterBlockResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blocks_blocks_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterBlockResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterBlockResponse) ProtoMessage() {}

func (x *FilterBlockResponse) ProtoReflect() protoreflect.Message {
	mi := &file_blocks_blocks_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterBlockResponse.ProtoReflect.Descriptor instead.
func (*FilterBlockResponse) Descriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{2}
}

func (x *FilterBlockResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *FilterBlockResponse) GetBlocks() []*Block {
	if x != nil {
		return x.Blocks
	}
	return nil
}

type GetBlockRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BlockId uint64 `protobuf:"varint,1,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetBlockRequest) Reset() {
	*x = GetBlockRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blocks_blocks_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBlockRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBlockRequest) ProtoMessage() {}

func (x *GetBlockRequest) ProtoReflect() protoreflect.Message {
	mi := &file_blocks_blocks_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBlockRequest.ProtoReflect.Descriptor instead.
func (*GetBlockRequest) Descriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{3}
}

func (x *GetBlockRequest) GetBlockId() uint64 {
	if x != nil {
		return x.BlockId
	}
	return 0
}

func (x *GetBlockRequest) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetBlockResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Block  *Block         `protobuf:"bytes,2,opt,name=block,proto3" json:"block,omitempty"`
}

func (x *GetBlockResponse) Reset() {
	*x = GetBlockResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_blocks_blocks_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBlockResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBlockResponse) ProtoMessage() {}

func (x *GetBlockResponse) ProtoReflect() protoreflect.Message {
	mi := &file_blocks_blocks_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBlockResponse.ProtoReflect.Descriptor instead.
func (*GetBlockResponse) Descriptor() ([]byte, []int) {
	return file_blocks_blocks_proto_rawDescGZIP(), []int{4}
}

func (x *GetBlockResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetBlockResponse) GetBlock() *Block {
	if x != nil {
		return x.Block
	}
	return nil
}

var File_blocks_blocks_proto protoreflect.FileDescriptor

var file_blocks_blocks_proto_rawDesc = []byte{
	0x0a, 0x13, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa2, 0x07, 0x0a, 0x05,
	0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64,
	0x12, 0x16, 0x0a, 0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x06, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x1f, 0x0a, 0x0b,
	0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x48, 0x61, 0x73, 0x68, 0x12, 0x1d, 0x0a,
	0x0a, 0x75, 0x6e, 0x63, 0x6c, 0x65, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x75, 0x6e, 0x63, 0x6c, 0x65, 0x48, 0x61, 0x73, 0x68, 0x12, 0x19, 0x0a, 0x08,
	0x6d, 0x69, 0x78, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x6d, 0x69, 0x78, 0x48, 0x61, 0x73, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x04, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x12, 0x1d, 0x0a,
	0x0a, 0x6c, 0x6f, 0x67, 0x73, 0x5f, 0x62, 0x6c, 0x6f, 0x6f, 0x6d, 0x18, 0x09, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x09, 0x6c, 0x6f, 0x67, 0x73, 0x42, 0x6c, 0x6f, 0x6f, 0x6d, 0x12, 0x1d, 0x0a, 0x0a,
	0x73, 0x74, 0x61, 0x74, 0x65, 0x5f, 0x72, 0x6f, 0x6f, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x73, 0x74, 0x61, 0x74, 0x65, 0x52, 0x6f, 0x6f, 0x74, 0x12, 0x2b, 0x0a, 0x11, 0x74,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x72, 0x6f, 0x6f, 0x74,
	0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x52, 0x6f, 0x6f, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x72, 0x65, 0x63, 0x65,
	0x69, 0x70, 0x74, 0x73, 0x5f, 0x72, 0x6f, 0x6f, 0x74, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x73, 0x52, 0x6f, 0x6f, 0x74, 0x12, 0x1a, 0x0a,
	0x08, 0x63, 0x6f, 0x69, 0x6e, 0x62, 0x61, 0x73, 0x65, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x63, 0x6f, 0x69, 0x6e, 0x62, 0x61, 0x73, 0x65, 0x12, 0x1e, 0x0a, 0x0a, 0x64, 0x69, 0x66,
	0x66, 0x69, 0x63, 0x75, 0x6c, 0x74, 0x79, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0a, 0x64,
	0x69, 0x66, 0x66, 0x69, 0x63, 0x75, 0x6c, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x01, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x38, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x10, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x78, 0x74, 0x72, 0x61,
	0x5f, 0x64, 0x61, 0x74, 0x61, 0x18, 0x11, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x09, 0x65, 0x78, 0x74,
	0x72, 0x61, 0x44, 0x61, 0x74, 0x61, 0x12, 0x1b, 0x0a, 0x09, 0x67, 0x61, 0x73, 0x5f, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x18, 0x12, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x67, 0x61, 0x73, 0x4c, 0x69,
	0x6d, 0x69, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x61, 0x73, 0x5f, 0x75, 0x73, 0x65, 0x64, 0x18,
	0x13, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x67, 0x61, 0x73, 0x55, 0x73, 0x65, 0x64, 0x12, 0x19,
	0x0a, 0x08, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x66, 0x65, 0x65, 0x18, 0x14, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x07, 0x62, 0x61, 0x73, 0x65, 0x46, 0x65, 0x65, 0x12, 0x38, 0x0a, 0x18, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x5f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x15, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x16, 0x74, 0x6f, 0x74,
	0x61, 0x6c, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x12, 0x40, 0x0a, 0x1c, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64,
	0x5f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x5f, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x16, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x1a, 0x70, 0x72, 0x6f, 0x63, 0x65,
	0x73, 0x73, 0x65, 0x64, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x35, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x17, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x45, 0x0a, 0x10,
	0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x18, 0x18, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x0f, 0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x12, 0x4b, 0x0a, 0x13, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x19, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x12, 0x70, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x22, 0x46, 0x0a, 0x12, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e,
	0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x78, 0x0a, 0x13, 0x46, 0x69, 0x6c, 0x74,
	0x65, 0x72, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x2f, 0x0a, 0x06, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x06, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x73, 0x22, 0x3c, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x49, 0x64,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64,
	0x22, 0x73, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x2d, 0x0a, 0x05, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x05,
	0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x2a, 0x5d, 0x0a, 0x0b, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x53, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x12, 0x0b, 0x0a, 0x07, 0x42, 0x53, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10,
	0x00, 0x12, 0x0d, 0x0a, 0x09, 0x42, 0x53, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x44, 0x10, 0x01,
	0x12, 0x11, 0x0a, 0x0d, 0x42, 0x53, 0x5f, 0x50, 0x52, 0x4f, 0x43, 0x45, 0x53, 0x53, 0x49, 0x4e,
	0x47, 0x10, 0x02, 0x12, 0x10, 0x0a, 0x0c, 0x42, 0x53, 0x5f, 0x50, 0x52, 0x4f, 0x43, 0x45, 0x53,
	0x53, 0x45, 0x44, 0x10, 0x03, 0x12, 0x0d, 0x0a, 0x09, 0x42, 0x53, 0x5f, 0x46, 0x41, 0x49, 0x4c,
	0x45, 0x44, 0x10, 0x04, 0x32, 0xda, 0x01, 0x0a, 0x06, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x12,
	0x69, 0x0a, 0x06, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x24, 0x2e, 0x74, 0x78, 0x70, 0x75,
	0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x46, 0x69, 0x6c,
	0x74, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x25, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x12, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0c, 0x12, 0x0a,
	0x2f, 0x76, 0x31, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x12, 0x65, 0x0a, 0x03, 0x47, 0x65,
	0x74, 0x12, 0x21, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x6c, 0x6f, 0x63, 0x6b,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11,
	0x12, 0x0f, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x2f, 0x7b, 0x69, 0x64,
	0x7d, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69,
	0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x73, 0x3b, 0x62, 0x6c, 0x6f,
	0x63, 0x6b, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_blocks_blocks_proto_rawDescOnce sync.Once
	file_blocks_blocks_proto_rawDescData = file_blocks_blocks_proto_rawDesc
)

func file_blocks_blocks_proto_rawDescGZIP() []byte {
	file_blocks_blocks_proto_rawDescOnce.Do(func() {
		file_blocks_blocks_proto_rawDescData = protoimpl.X.CompressGZIP(file_blocks_blocks_proto_rawDescData)
	})
	return file_blocks_blocks_proto_rawDescData
}

var file_blocks_blocks_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_blocks_blocks_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_blocks_blocks_proto_goTypes = []interface{}{
	(BlockStatus)(0),            // 0: txpull.v1.blocks.BlockStatus
	(*Block)(nil),               // 1: txpull.v1.blocks.Block
	(*FilterBlockRequest)(nil),  // 2: txpull.v1.blocks.FilterBlockRequest
	(*FilterBlockResponse)(nil), // 3: txpull.v1.blocks.FilterBlockResponse
	(*GetBlockRequest)(nil),     // 4: txpull.v1.blocks.GetBlockRequest
	(*GetBlockResponse)(nil),    // 5: txpull.v1.blocks.GetBlockResponse
	(*timestamp.Timestamp)(nil), // 6: google.protobuf.Timestamp
	(*common.Status)(nil),       // 7: txpull.v1.common.Status
}
var file_blocks_blocks_proto_depIdxs = []int32{
	6,  // 0: txpull.v1.blocks.Block.timestamp:type_name -> google.protobuf.Timestamp
	0,  // 1: txpull.v1.blocks.Block.status:type_name -> txpull.v1.blocks.BlockStatus
	6,  // 2: txpull.v1.blocks.Block.queued_timestamp:type_name -> google.protobuf.Timestamp
	6,  // 3: txpull.v1.blocks.Block.processed_timestamp:type_name -> google.protobuf.Timestamp
	7,  // 4: txpull.v1.blocks.FilterBlockRequest.status:type_name -> txpull.v1.common.Status
	7,  // 5: txpull.v1.blocks.FilterBlockResponse.status:type_name -> txpull.v1.common.Status
	1,  // 6: txpull.v1.blocks.FilterBlockResponse.blocks:type_name -> txpull.v1.blocks.Block
	7,  // 7: txpull.v1.blocks.GetBlockResponse.status:type_name -> txpull.v1.common.Status
	1,  // 8: txpull.v1.blocks.GetBlockResponse.block:type_name -> txpull.v1.blocks.Block
	2,  // 9: txpull.v1.blocks.Blocks.Filter:input_type -> txpull.v1.blocks.FilterBlockRequest
	4,  // 10: txpull.v1.blocks.Blocks.Get:input_type -> txpull.v1.blocks.GetBlockRequest
	3,  // 11: txpull.v1.blocks.Blocks.Filter:output_type -> txpull.v1.blocks.FilterBlockResponse
	5,  // 12: txpull.v1.blocks.Blocks.Get:output_type -> txpull.v1.blocks.GetBlockResponse
	11, // [11:13] is the sub-list for method output_type
	9,  // [9:11] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_blocks_blocks_proto_init() }
func file_blocks_blocks_proto_init() {
	if File_blocks_blocks_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_blocks_blocks_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Block); i {
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
		file_blocks_blocks_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterBlockRequest); i {
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
		file_blocks_blocks_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterBlockResponse); i {
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
		file_blocks_blocks_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBlockRequest); i {
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
		file_blocks_blocks_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBlockResponse); i {
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
			RawDescriptor: file_blocks_blocks_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_blocks_blocks_proto_goTypes,
		DependencyIndexes: file_blocks_blocks_proto_depIdxs,
		EnumInfos:         file_blocks_blocks_proto_enumTypes,
		MessageInfos:      file_blocks_blocks_proto_msgTypes,
	}.Build()
	File_blocks_blocks_proto = out.File
	file_blocks_blocks_proto_rawDesc = nil
	file_blocks_blocks_proto_goTypes = nil
	file_blocks_blocks_proto_depIdxs = nil
}
