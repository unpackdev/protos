// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: transactions/transactions.proto

package transactions

import (
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	common "github.com/unpackdev/protos/dist/go/common"
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

type TransactionStatus int32

const (
	TransactionStatus_TS_NONE       TransactionStatus = 0
	TransactionStatus_TS_QUEUED     TransactionStatus = 1
	TransactionStatus_TS_PROCESSING TransactionStatus = 2
	TransactionStatus_TS_PROCESSED  TransactionStatus = 3
	TransactionStatus_TS_FAILED     TransactionStatus = 4
)

// Enum value maps for TransactionStatus.
var (
	TransactionStatus_name = map[int32]string{
		0: "TS_NONE",
		1: "TS_QUEUED",
		2: "TS_PROCESSING",
		3: "TS_PROCESSED",
		4: "TS_FAILED",
	}
	TransactionStatus_value = map[string]int32{
		"TS_NONE":       0,
		"TS_QUEUED":     1,
		"TS_PROCESSING": 2,
		"TS_PROCESSED":  3,
		"TS_FAILED":     4,
	}
)

func (x TransactionStatus) Enum() *TransactionStatus {
	p := new(TransactionStatus)
	*p = x
	return p
}

func (x TransactionStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TransactionStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_transactions_transactions_proto_enumTypes[0].Descriptor()
}

func (TransactionStatus) Type() protoreflect.EnumType {
	return &file_transactions_transactions_proto_enumTypes[0]
}

func (x TransactionStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TransactionStatus.Descriptor instead.
func (TransactionStatus) EnumDescriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{0}
}

type Transaction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                 uint64               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	ChainId            uint64               `protobuf:"varint,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	BlockId            uint64               `protobuf:"varint,3,opt,name=block_id,json=blockId,proto3" json:"block_id,omitempty"`
	TransactionIndex   uint64               `protobuf:"varint,4,opt,name=transaction_index,json=transactionIndex,proto3" json:"transaction_index,omitempty"`
	Hash               string               `protobuf:"bytes,5,opt,name=hash,proto3" json:"hash,omitempty"`
	Nonce              uint64               `protobuf:"varint,6,opt,name=nonce,proto3" json:"nonce,omitempty"`
	FromAddress        string               `protobuf:"bytes,7,opt,name=from_address,json=fromAddress,proto3" json:"from_address,omitempty"`
	ToAddress          string               `protobuf:"bytes,8,opt,name=to_address,json=toAddress,proto3" json:"to_address,omitempty"`
	Method             string               `protobuf:"bytes,9,opt,name=method,proto3" json:"method,omitempty"`
	MethodDetails      string               `protobuf:"bytes,10,opt,name=method_details,json=methodDetails,proto3" json:"method_details,omitempty"`
	Data               string               `protobuf:"bytes,11,opt,name=data,proto3" json:"data,omitempty"`
	Value              string               `protobuf:"bytes,12,opt,name=value,proto3" json:"value,omitempty"`
	Gas                uint64               `protobuf:"varint,13,opt,name=gas,proto3" json:"gas,omitempty"`
	GasUsed            uint64               `protobuf:"varint,14,opt,name=gas_used,json=gasUsed,proto3" json:"gas_used,omitempty"`
	CumulativeGasUsed  uint64               `protobuf:"varint,15,opt,name=cumulative_gas_used,json=cumulativeGasUsed,proto3" json:"cumulative_gas_used,omitempty"`
	GasFeeCap          string               `protobuf:"bytes,16,opt,name=gas_fee_cap,json=gasFeeCap,proto3" json:"gas_fee_cap,omitempty"`
	GasTipCap          string               `protobuf:"bytes,17,opt,name=gas_tip_cap,json=gasTipCap,proto3" json:"gas_tip_cap,omitempty"`
	GasPrice           string               `protobuf:"bytes,18,opt,name=gas_price,json=gasPrice,proto3" json:"gas_price,omitempty"`
	Price              string               `protobuf:"bytes,19,opt,name=price,proto3" json:"price,omitempty"`
	Type               uint32               `protobuf:"varint,20,opt,name=type,proto3" json:"type,omitempty"`
	Size               float64              `protobuf:"fixed64,21,opt,name=size,proto3" json:"size,omitempty"`
	Protected          bool                 `protobuf:"varint,22,opt,name=protected,proto3" json:"protected,omitempty"`
	LogsCount          uint32               `protobuf:"varint,23,opt,name=logs_count,json=logsCount,proto3" json:"logs_count,omitempty"`
	Status             TransactionStatus    `protobuf:"varint,24,opt,name=status,proto3,enum=unpack.v1.transactions.TransactionStatus" json:"status,omitempty"`
	QueuedTimestamp    *timestamp.Timestamp `protobuf:"bytes,25,opt,name=queued_timestamp,json=queuedTimestamp,proto3" json:"queued_timestamp,omitempty"`
	ProcessedTimestamp *timestamp.Timestamp `protobuf:"bytes,26,opt,name=processed_timestamp,json=processedTimestamp,proto3" json:"processed_timestamp,omitempty"`
}

func (x *Transaction) Reset() {
	*x = Transaction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_transactions_transactions_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Transaction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Transaction) ProtoMessage() {}

func (x *Transaction) ProtoReflect() protoreflect.Message {
	mi := &file_transactions_transactions_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Transaction.ProtoReflect.Descriptor instead.
func (*Transaction) Descriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{0}
}

func (x *Transaction) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Transaction) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *Transaction) GetBlockId() uint64 {
	if x != nil {
		return x.BlockId
	}
	return 0
}

func (x *Transaction) GetTransactionIndex() uint64 {
	if x != nil {
		return x.TransactionIndex
	}
	return 0
}

func (x *Transaction) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *Transaction) GetNonce() uint64 {
	if x != nil {
		return x.Nonce
	}
	return 0
}

func (x *Transaction) GetFromAddress() string {
	if x != nil {
		return x.FromAddress
	}
	return ""
}

func (x *Transaction) GetToAddress() string {
	if x != nil {
		return x.ToAddress
	}
	return ""
}

func (x *Transaction) GetMethod() string {
	if x != nil {
		return x.Method
	}
	return ""
}

func (x *Transaction) GetMethodDetails() string {
	if x != nil {
		return x.MethodDetails
	}
	return ""
}

func (x *Transaction) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *Transaction) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

func (x *Transaction) GetGas() uint64 {
	if x != nil {
		return x.Gas
	}
	return 0
}

func (x *Transaction) GetGasUsed() uint64 {
	if x != nil {
		return x.GasUsed
	}
	return 0
}

func (x *Transaction) GetCumulativeGasUsed() uint64 {
	if x != nil {
		return x.CumulativeGasUsed
	}
	return 0
}

func (x *Transaction) GetGasFeeCap() string {
	if x != nil {
		return x.GasFeeCap
	}
	return ""
}

func (x *Transaction) GetGasTipCap() string {
	if x != nil {
		return x.GasTipCap
	}
	return ""
}

func (x *Transaction) GetGasPrice() string {
	if x != nil {
		return x.GasPrice
	}
	return ""
}

func (x *Transaction) GetPrice() string {
	if x != nil {
		return x.Price
	}
	return ""
}

func (x *Transaction) GetType() uint32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *Transaction) GetSize() float64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *Transaction) GetProtected() bool {
	if x != nil {
		return x.Protected
	}
	return false
}

func (x *Transaction) GetLogsCount() uint32 {
	if x != nil {
		return x.LogsCount
	}
	return 0
}

func (x *Transaction) GetStatus() TransactionStatus {
	if x != nil {
		return x.Status
	}
	return TransactionStatus_TS_NONE
}

func (x *Transaction) GetQueuedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.QueuedTimestamp
	}
	return nil
}

func (x *Transaction) GetProcessedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.ProcessedTimestamp
	}
	return nil
}

type FilterTransactionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *FilterTransactionRequest) Reset() {
	*x = FilterTransactionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_transactions_transactions_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterTransactionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterTransactionRequest) ProtoMessage() {}

func (x *FilterTransactionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_transactions_transactions_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterTransactionRequest.ProtoReflect.Descriptor instead.
func (*FilterTransactionRequest) Descriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{1}
}

func (x *FilterTransactionRequest) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type FilterTransactionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status      *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Transaction []*Transaction `protobuf:"bytes,2,rep,name=transaction,proto3" json:"transaction,omitempty"`
}

func (x *FilterTransactionResponse) Reset() {
	*x = FilterTransactionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_transactions_transactions_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterTransactionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterTransactionResponse) ProtoMessage() {}

func (x *FilterTransactionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_transactions_transactions_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterTransactionResponse.ProtoReflect.Descriptor instead.
func (*FilterTransactionResponse) Descriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{2}
}

func (x *FilterTransactionResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *FilterTransactionResponse) GetTransaction() []*Transaction {
	if x != nil {
		return x.Transaction
	}
	return nil
}

type GetTransactionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TransactionId uint64 `protobuf:"varint,1,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
	Id            uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetTransactionRequest) Reset() {
	*x = GetTransactionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_transactions_transactions_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionRequest) ProtoMessage() {}

func (x *GetTransactionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_transactions_transactions_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionRequest.ProtoReflect.Descriptor instead.
func (*GetTransactionRequest) Descriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{3}
}

func (x *GetTransactionRequest) GetTransactionId() uint64 {
	if x != nil {
		return x.TransactionId
	}
	return 0
}

func (x *GetTransactionRequest) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetTransactionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status      *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Transaction *Transaction   `protobuf:"bytes,2,opt,name=transaction,proto3" json:"transaction,omitempty"`
}

func (x *GetTransactionResponse) Reset() {
	*x = GetTransactionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_transactions_transactions_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetTransactionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetTransactionResponse) ProtoMessage() {}

func (x *GetTransactionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_transactions_transactions_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetTransactionResponse.ProtoReflect.Descriptor instead.
func (*GetTransactionResponse) Descriptor() ([]byte, []int) {
	return file_transactions_transactions_proto_rawDescGZIP(), []int{4}
}

func (x *GetTransactionResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetTransactionResponse) GetTransaction() *Transaction {
	if x != nil {
		return x.Transaction
	}
	return nil
}

var File_transactions_transactions_proto protoreflect.FileDescriptor

var file_transactions_transactions_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x74,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x16, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xe1, 0x06,
	0x0a, 0x0b, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19, 0x0a,
	0x08, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x07, 0x63, 0x68, 0x61, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x62, 0x6c, 0x6f, 0x63,
	0x6b, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x11, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x10,
	0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x6e, 0x64, 0x65, 0x78,
	0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x68, 0x61, 0x73, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x66, 0x72,
	0x6f, 0x6d, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x66, 0x72, 0x6f, 0x6d, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x1d, 0x0a,
	0x0a, 0x74, 0x6f, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x74, 0x6f, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x0a, 0x06,
	0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x6d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x5f, 0x64,
	0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x6d, 0x65,
	0x74, 0x68, 0x6f, 0x64, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x67, 0x61, 0x73, 0x18, 0x0d, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x03, 0x67, 0x61, 0x73, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x61, 0x73, 0x5f, 0x75,
	0x73, 0x65, 0x64, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x67, 0x61, 0x73, 0x55, 0x73,
	0x65, 0x64, 0x12, 0x2e, 0x0a, 0x13, 0x63, 0x75, 0x6d, 0x75, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65,
	0x5f, 0x67, 0x61, 0x73, 0x5f, 0x75, 0x73, 0x65, 0x64, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x11, 0x63, 0x75, 0x6d, 0x75, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65, 0x47, 0x61, 0x73, 0x55, 0x73,
	0x65, 0x64, 0x12, 0x1e, 0x0a, 0x0b, 0x67, 0x61, 0x73, 0x5f, 0x66, 0x65, 0x65, 0x5f, 0x63, 0x61,
	0x70, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x67, 0x61, 0x73, 0x46, 0x65, 0x65, 0x43,
	0x61, 0x70, 0x12, 0x1e, 0x0a, 0x0b, 0x67, 0x61, 0x73, 0x5f, 0x74, 0x69, 0x70, 0x5f, 0x63, 0x61,
	0x70, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x67, 0x61, 0x73, 0x54, 0x69, 0x70, 0x43,
	0x61, 0x70, 0x12, 0x1b, 0x0a, 0x09, 0x67, 0x61, 0x73, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18,
	0x12, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x67, 0x61, 0x73, 0x50, 0x72, 0x69, 0x63, 0x65, 0x12,
	0x14, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x14, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x18, 0x15, 0x20, 0x01, 0x28, 0x01, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x1c, 0x0a,
	0x09, 0x70, 0x72, 0x6f, 0x74, 0x65, 0x63, 0x74, 0x65, 0x64, 0x18, 0x16, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x09, 0x70, 0x72, 0x6f, 0x74, 0x65, 0x63, 0x74, 0x65, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x6c,
	0x6f, 0x67, 0x73, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x17, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x09, 0x6c, 0x6f, 0x67, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x41, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x18, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x29, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x45, 0x0a,
	0x10, 0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x18, 0x19, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x0f, 0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x12, 0x4b, 0x0a, 0x13, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x1a, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x12, 0x70,
	0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x22, 0x4c, 0x0a, 0x18, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x54, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x30, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22,
	0x94, 0x01, 0x0a, 0x19, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x45, 0x0a, 0x0b, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x74, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0x4e, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x25, 0x0a, 0x0e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0d, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x22, 0x91, 0x01, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x12, 0x45, 0x0a, 0x0b, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0b, 0x74,
	0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2a, 0x63, 0x0a, 0x11, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x0b, 0x0a, 0x07, 0x54, 0x53, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09,
	0x54, 0x53, 0x5f, 0x51, 0x55, 0x45, 0x55, 0x45, 0x44, 0x10, 0x01, 0x12, 0x11, 0x0a, 0x0d, 0x54,
	0x53, 0x5f, 0x50, 0x52, 0x4f, 0x43, 0x45, 0x53, 0x53, 0x49, 0x4e, 0x47, 0x10, 0x02, 0x12, 0x10,
	0x0a, 0x0c, 0x54, 0x53, 0x5f, 0x50, 0x52, 0x4f, 0x43, 0x45, 0x53, 0x53, 0x45, 0x44, 0x10, 0x03,
	0x12, 0x0d, 0x0a, 0x09, 0x54, 0x53, 0x5f, 0x46, 0x41, 0x49, 0x4c, 0x45, 0x44, 0x10, 0x04, 0x32,
	0x9c, 0x02, 0x0a, 0x0c, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x12, 0x86, 0x01, 0x0a, 0x06, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x30, 0x2e, 0x74, 0x78,
	0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x54, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x31, 0x2e,
	0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x17, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x11, 0x12, 0x0f, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x82, 0x01, 0x0a, 0x03, 0x47, 0x65,
	0x74, 0x12, 0x2d, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x2e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x74, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x1c, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x16, 0x12, 0x14, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x42, 0x3c,
	0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f,
	0x67, 0x6f, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x3b,
	0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_transactions_transactions_proto_rawDescOnce sync.Once
	file_transactions_transactions_proto_rawDescData = file_transactions_transactions_proto_rawDesc
)

func file_transactions_transactions_proto_rawDescGZIP() []byte {
	file_transactions_transactions_proto_rawDescOnce.Do(func() {
		file_transactions_transactions_proto_rawDescData = protoimpl.X.CompressGZIP(file_transactions_transactions_proto_rawDescData)
	})
	return file_transactions_transactions_proto_rawDescData
}

var file_transactions_transactions_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_transactions_transactions_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_transactions_transactions_proto_goTypes = []interface{}{
	(TransactionStatus)(0),            // 0: unpack.v1.transactions.TransactionStatus
	(*Transaction)(nil),               // 1: unpack.v1.transactions.Transaction
	(*FilterTransactionRequest)(nil),  // 2: unpack.v1.transactions.FilterTransactionRequest
	(*FilterTransactionResponse)(nil), // 3: unpack.v1.transactions.FilterTransactionResponse
	(*GetTransactionRequest)(nil),     // 4: unpack.v1.transactions.GetTransactionRequest
	(*GetTransactionResponse)(nil),    // 5: unpack.v1.transactions.GetTransactionResponse
	(*timestamp.Timestamp)(nil),       // 6: google.protobuf.Timestamp
	(*common.Status)(nil),             // 7: unpack.v1.common.Status
}
var file_transactions_transactions_proto_depIdxs = []int32{
	0,  // 0: unpack.v1.transactions.Transaction.status:type_name -> unpack.v1.transactions.TransactionStatus
	6,  // 1: unpack.v1.transactions.Transaction.queued_timestamp:type_name -> google.protobuf.Timestamp
	6,  // 2: unpack.v1.transactions.Transaction.processed_timestamp:type_name -> google.protobuf.Timestamp
	7,  // 3: unpack.v1.transactions.FilterTransactionRequest.status:type_name -> unpack.v1.common.Status
	7,  // 4: unpack.v1.transactions.FilterTransactionResponse.status:type_name -> unpack.v1.common.Status
	1,  // 5: unpack.v1.transactions.FilterTransactionResponse.transaction:type_name -> unpack.v1.transactions.Transaction
	7,  // 6: unpack.v1.transactions.GetTransactionResponse.status:type_name -> unpack.v1.common.Status
	1,  // 7: unpack.v1.transactions.GetTransactionResponse.transaction:type_name -> unpack.v1.transactions.Transaction
	2,  // 8: unpack.v1.transactions.Transactions.Filter:input_type -> unpack.v1.transactions.FilterTransactionRequest
	4,  // 9: unpack.v1.transactions.Transactions.Get:input_type -> unpack.v1.transactions.GetTransactionRequest
	3,  // 10: unpack.v1.transactions.Transactions.Filter:output_type -> unpack.v1.transactions.FilterTransactionResponse
	5,  // 11: unpack.v1.transactions.Transactions.Get:output_type -> unpack.v1.transactions.GetTransactionResponse
	10, // [10:12] is the sub-list for method output_type
	8,  // [8:10] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_transactions_transactions_proto_init() }
func file_transactions_transactions_proto_init() {
	if File_transactions_transactions_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_transactions_transactions_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Transaction); i {
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
		file_transactions_transactions_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterTransactionRequest); i {
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
		file_transactions_transactions_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterTransactionResponse); i {
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
		file_transactions_transactions_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionRequest); i {
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
		file_transactions_transactions_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetTransactionResponse); i {
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
			RawDescriptor: file_transactions_transactions_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_transactions_transactions_proto_goTypes,
		DependencyIndexes: file_transactions_transactions_proto_depIdxs,
		EnumInfos:         file_transactions_transactions_proto_enumTypes,
		MessageInfos:      file_transactions_transactions_proto_msgTypes,
	}.Build()
	File_transactions_transactions_proto = out.File
	file_transactions_transactions_proto_rawDesc = nil
	file_transactions_transactions_proto_goTypes = nil
	file_transactions_transactions_proto_depIdxs = nil
}
