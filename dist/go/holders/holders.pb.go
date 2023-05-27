// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: holders/holders.proto

package holders

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

type HolderStatus int32

const (
	HolderStatus_HS_NONE HolderStatus = 0
)

// Enum value maps for HolderStatus.
var (
	HolderStatus_name = map[int32]string{
		0: "HS_NONE",
	}
	HolderStatus_value = map[string]int32{
		"HS_NONE": 0,
	}
)

func (x HolderStatus) Enum() *HolderStatus {
	p := new(HolderStatus)
	*p = x
	return p
}

func (x HolderStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (HolderStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_holders_holders_proto_enumTypes[0].Descriptor()
}

func (HolderStatus) Type() protoreflect.EnumType {
	return &file_holders_holders_proto_enumTypes[0]
}

func (x HolderStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use HolderStatus.Descriptor instead.
func (HolderStatus) EnumDescriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{0}
}

type Holder struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                   uint64               `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	ChainId              uint64               `protobuf:"varint,2,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	TokenId              uint64               `protobuf:"varint,3,opt,name=token_id,json=tokenId,proto3" json:"token_id,omitempty"`
	AddressId            uint64               `protobuf:"varint,4,opt,name=address_id,json=addressId,proto3" json:"address_id,omitempty"`
	Amount               string               `protobuf:"bytes,5,opt,name=amount,proto3" json:"amount,omitempty"`
	PercentageOwned      uint32               `protobuf:"varint,6,opt,name=percentage_owned,json=percentageOwned,proto3" json:"percentage_owned,omitempty"`
	Status               HolderStatus         `protobuf:"varint,8,opt,name=status,proto3,enum=txpull.v1.holders.HolderStatus" json:"status,omitempty"`
	HolderSinceTimestamp *timestamp.Timestamp `protobuf:"bytes,9,opt,name=holder_since_timestamp,json=holderSinceTimestamp,proto3" json:"holder_since_timestamp,omitempty"`
	QueuedTimestamp      *timestamp.Timestamp `protobuf:"bytes,10,opt,name=queued_timestamp,json=queuedTimestamp,proto3" json:"queued_timestamp,omitempty"`
	ProcessedTimestamp   *timestamp.Timestamp `protobuf:"bytes,11,opt,name=processed_timestamp,json=processedTimestamp,proto3" json:"processed_timestamp,omitempty"`
}

func (x *Holder) Reset() {
	*x = Holder{}
	if protoimpl.UnsafeEnabled {
		mi := &file_holders_holders_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Holder) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Holder) ProtoMessage() {}

func (x *Holder) ProtoReflect() protoreflect.Message {
	mi := &file_holders_holders_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Holder.ProtoReflect.Descriptor instead.
func (*Holder) Descriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{0}
}

func (x *Holder) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Holder) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *Holder) GetTokenId() uint64 {
	if x != nil {
		return x.TokenId
	}
	return 0
}

func (x *Holder) GetAddressId() uint64 {
	if x != nil {
		return x.AddressId
	}
	return 0
}

func (x *Holder) GetAmount() string {
	if x != nil {
		return x.Amount
	}
	return ""
}

func (x *Holder) GetPercentageOwned() uint32 {
	if x != nil {
		return x.PercentageOwned
	}
	return 0
}

func (x *Holder) GetStatus() HolderStatus {
	if x != nil {
		return x.Status
	}
	return HolderStatus_HS_NONE
}

func (x *Holder) GetHolderSinceTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.HolderSinceTimestamp
	}
	return nil
}

func (x *Holder) GetQueuedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.QueuedTimestamp
	}
	return nil
}

func (x *Holder) GetProcessedTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.ProcessedTimestamp
	}
	return nil
}

type FilterHolderRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PercentageOwned uint32       `protobuf:"varint,1,opt,name=percentage_owned,json=percentageOwned,proto3" json:"percentage_owned,omitempty"`
	TokenId         uint32       `protobuf:"varint,2,opt,name=token_id,json=tokenId,proto3" json:"token_id,omitempty"`
	Status          HolderStatus `protobuf:"varint,3,opt,name=status,proto3,enum=txpull.v1.holders.HolderStatus" json:"status,omitempty"`
}

func (x *FilterHolderRequest) Reset() {
	*x = FilterHolderRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_holders_holders_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterHolderRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterHolderRequest) ProtoMessage() {}

func (x *FilterHolderRequest) ProtoReflect() protoreflect.Message {
	mi := &file_holders_holders_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterHolderRequest.ProtoReflect.Descriptor instead.
func (*FilterHolderRequest) Descriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{1}
}

func (x *FilterHolderRequest) GetPercentageOwned() uint32 {
	if x != nil {
		return x.PercentageOwned
	}
	return 0
}

func (x *FilterHolderRequest) GetTokenId() uint32 {
	if x != nil {
		return x.TokenId
	}
	return 0
}

func (x *FilterHolderRequest) GetStatus() HolderStatus {
	if x != nil {
		return x.Status
	}
	return HolderStatus_HS_NONE
}

type FilterHolderResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status  *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Holders []*Holder      `protobuf:"bytes,2,rep,name=holders,proto3" json:"holders,omitempty"`
}

func (x *FilterHolderResponse) Reset() {
	*x = FilterHolderResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_holders_holders_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FilterHolderResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FilterHolderResponse) ProtoMessage() {}

func (x *FilterHolderResponse) ProtoReflect() protoreflect.Message {
	mi := &file_holders_holders_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FilterHolderResponse.ProtoReflect.Descriptor instead.
func (*FilterHolderResponse) Descriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{2}
}

func (x *FilterHolderResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *FilterHolderResponse) GetHolders() []*Holder {
	if x != nil {
		return x.Holders
	}
	return nil
}

type GetHolderRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ChainId uint64 `protobuf:"varint,1,opt,name=chain_id,json=chainId,proto3" json:"chain_id,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Address string `protobuf:"bytes,3,opt,name=address,proto3" json:"address,omitempty"`
}

func (x *GetHolderRequest) Reset() {
	*x = GetHolderRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_holders_holders_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHolderRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHolderRequest) ProtoMessage() {}

func (x *GetHolderRequest) ProtoReflect() protoreflect.Message {
	mi := &file_holders_holders_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHolderRequest.ProtoReflect.Descriptor instead.
func (*GetHolderRequest) Descriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{3}
}

func (x *GetHolderRequest) GetChainId() uint64 {
	if x != nil {
		return x.ChainId
	}
	return 0
}

func (x *GetHolderRequest) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *GetHolderRequest) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

type GetHolderResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status *common.Status `protobuf:"bytes,1,opt,name=status,proto3" json:"status,omitempty"`
	Holder *Holder        `protobuf:"bytes,2,opt,name=holder,proto3" json:"holder,omitempty"`
}

func (x *GetHolderResponse) Reset() {
	*x = GetHolderResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_holders_holders_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetHolderResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetHolderResponse) ProtoMessage() {}

func (x *GetHolderResponse) ProtoReflect() protoreflect.Message {
	mi := &file_holders_holders_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetHolderResponse.ProtoReflect.Descriptor instead.
func (*GetHolderResponse) Descriptor() ([]byte, []int) {
	return file_holders_holders_proto_rawDescGZIP(), []int{4}
}

func (x *GetHolderResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *GetHolderResponse) GetHolder() *Holder {
	if x != nil {
		return x.Holder
	}
	return nil
}

var File_holders_holders_proto protoreflect.FileDescriptor

var file_holders_holders_proto_rawDesc = []byte{
	0x0a, 0x15, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2f, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x11, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e,
	0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xcf,
	0x03, 0x0a, 0x06, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68, 0x61,
	0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x63, 0x68, 0x61,
	0x69, 0x6e, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x69, 0x64,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x64, 0x12,
	0x1d, 0x0a, 0x0a, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x09, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x49, 0x64, 0x12, 0x16,
	0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x29, 0x0a, 0x10, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e,
	0x74, 0x61, 0x67, 0x65, 0x5f, 0x6f, 0x77, 0x6e, 0x65, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0d,
	0x52, 0x0f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x4f, 0x77, 0x6e, 0x65,
	0x64, 0x12, 0x37, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x1f, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x6f,
	0x6c, 0x64, 0x65, 0x72, 0x73, 0x2e, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x50, 0x0a, 0x16, 0x68, 0x6f,
	0x6c, 0x64, 0x65, 0x72, 0x5f, 0x73, 0x69, 0x6e, 0x63, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x18, 0x09, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x14, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x53, 0x69,
	0x6e, 0x63, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x45, 0x0a, 0x10,
	0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x52, 0x0f, 0x71, 0x75, 0x65, 0x75, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x12, 0x4b, 0x0a, 0x13, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x12, 0x70, 0x72,
	0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x22, 0x94, 0x01, 0x0a, 0x13, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x48, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x29, 0x0a, 0x10, 0x70, 0x65, 0x72, 0x63,
	0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x5f, 0x6f, 0x77, 0x6e, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x0f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x4f, 0x77,
	0x6e, 0x65, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x49, 0x64, 0x12, 0x37,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1f,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x73, 0x2e, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x7d, 0x0a, 0x14, 0x46, 0x69, 0x6c, 0x74, 0x65,
	0x72, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x33, 0x0a, 0x07, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68,
	0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2e, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x07, 0x68,
	0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x22, 0x57, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x48, 0x6f, 0x6c,
	0x64, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x68,
	0x61, 0x69, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x07, 0x63, 0x68,
	0x61, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x22,
	0x78, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x31, 0x0a, 0x06, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e,
	0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2e, 0x48, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x52, 0x06, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x2a, 0x1b, 0x0a, 0x0c, 0x48, 0x6f, 0x6c,
	0x64, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0b, 0x0a, 0x07, 0x48, 0x53, 0x5f,
	0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x32, 0xe5, 0x01, 0x0a, 0x07, 0x48, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x73, 0x12, 0x6e, 0x0a, 0x06, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x26, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x27, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x48,
	0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x13, 0x82,
	0xd3, 0xe4, 0x93, 0x02, 0x0d, 0x12, 0x0b, 0x2f, 0x76, 0x31, 0x2f, 0x68, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x73, 0x12, 0x6a, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x23, 0x2e, 0x74, 0x78, 0x70, 0x75,
	0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2e, 0x47, 0x65,
	0x74, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24,
	0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x48, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x18, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x12, 0x12, 0x10, 0x2f, 0x76,
	0x31, 0x2f, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x2f, 0x7b, 0x69, 0x64, 0x7d, 0x42, 0x32,
	0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f,
	0x67, 0x6f, 0x2f, 0x68, 0x6f, 0x6c, 0x64, 0x65, 0x72, 0x73, 0x3b, 0x68, 0x6f, 0x6c, 0x64, 0x65,
	0x72, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_holders_holders_proto_rawDescOnce sync.Once
	file_holders_holders_proto_rawDescData = file_holders_holders_proto_rawDesc
)

func file_holders_holders_proto_rawDescGZIP() []byte {
	file_holders_holders_proto_rawDescOnce.Do(func() {
		file_holders_holders_proto_rawDescData = protoimpl.X.CompressGZIP(file_holders_holders_proto_rawDescData)
	})
	return file_holders_holders_proto_rawDescData
}

var file_holders_holders_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_holders_holders_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_holders_holders_proto_goTypes = []interface{}{
	(HolderStatus)(0),            // 0: txpull.v1.holders.HolderStatus
	(*Holder)(nil),               // 1: txpull.v1.holders.Holder
	(*FilterHolderRequest)(nil),  // 2: txpull.v1.holders.FilterHolderRequest
	(*FilterHolderResponse)(nil), // 3: txpull.v1.holders.FilterHolderResponse
	(*GetHolderRequest)(nil),     // 4: txpull.v1.holders.GetHolderRequest
	(*GetHolderResponse)(nil),    // 5: txpull.v1.holders.GetHolderResponse
	(*timestamp.Timestamp)(nil),  // 6: google.protobuf.Timestamp
	(*common.Status)(nil),        // 7: txpull.v1.common.Status
}
var file_holders_holders_proto_depIdxs = []int32{
	0,  // 0: txpull.v1.holders.Holder.status:type_name -> txpull.v1.holders.HolderStatus
	6,  // 1: txpull.v1.holders.Holder.holder_since_timestamp:type_name -> google.protobuf.Timestamp
	6,  // 2: txpull.v1.holders.Holder.queued_timestamp:type_name -> google.protobuf.Timestamp
	6,  // 3: txpull.v1.holders.Holder.processed_timestamp:type_name -> google.protobuf.Timestamp
	0,  // 4: txpull.v1.holders.FilterHolderRequest.status:type_name -> txpull.v1.holders.HolderStatus
	7,  // 5: txpull.v1.holders.FilterHolderResponse.status:type_name -> txpull.v1.common.Status
	1,  // 6: txpull.v1.holders.FilterHolderResponse.holders:type_name -> txpull.v1.holders.Holder
	7,  // 7: txpull.v1.holders.GetHolderResponse.status:type_name -> txpull.v1.common.Status
	1,  // 8: txpull.v1.holders.GetHolderResponse.holder:type_name -> txpull.v1.holders.Holder
	2,  // 9: txpull.v1.holders.Holders.Filter:input_type -> txpull.v1.holders.FilterHolderRequest
	4,  // 10: txpull.v1.holders.Holders.Get:input_type -> txpull.v1.holders.GetHolderRequest
	3,  // 11: txpull.v1.holders.Holders.Filter:output_type -> txpull.v1.holders.FilterHolderResponse
	5,  // 12: txpull.v1.holders.Holders.Get:output_type -> txpull.v1.holders.GetHolderResponse
	11, // [11:13] is the sub-list for method output_type
	9,  // [9:11] is the sub-list for method input_type
	9,  // [9:9] is the sub-list for extension type_name
	9,  // [9:9] is the sub-list for extension extendee
	0,  // [0:9] is the sub-list for field type_name
}

func init() { file_holders_holders_proto_init() }
func file_holders_holders_proto_init() {
	if File_holders_holders_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_holders_holders_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Holder); i {
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
		file_holders_holders_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterHolderRequest); i {
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
		file_holders_holders_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FilterHolderResponse); i {
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
		file_holders_holders_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetHolderRequest); i {
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
		file_holders_holders_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetHolderResponse); i {
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
			RawDescriptor: file_holders_holders_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_holders_holders_proto_goTypes,
		DependencyIndexes: file_holders_holders_proto_depIdxs,
		EnumInfos:         file_holders_holders_proto_enumTypes,
		MessageInfos:      file_holders_holders_proto_msgTypes,
	}.Build()
	File_holders_holders_proto = out.File
	file_holders_holders_proto_rawDesc = nil
	file_holders_holders_proto_goTypes = nil
	file_holders_holders_proto_depIdxs = nil
}
