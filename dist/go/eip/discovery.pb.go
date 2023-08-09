// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: eip/discovery.proto

package eip_pb

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

// ConfidenceLevel enum
type ConfidenceLevel int32

const (
	ConfidenceLevel_NO_CONFIDENCE     ConfidenceLevel = 0
	ConfidenceLevel_HIGH_CONFIDENCE   ConfidenceLevel = 3
	ConfidenceLevel_MEDIUM_CONFIDENCE ConfidenceLevel = 2
	ConfidenceLevel_LOW_CONFIDENCE    ConfidenceLevel = 1
)

// Enum value maps for ConfidenceLevel.
var (
	ConfidenceLevel_name = map[int32]string{
		0: "NO_CONFIDENCE",
		3: "HIGH_CONFIDENCE",
		2: "MEDIUM_CONFIDENCE",
		1: "LOW_CONFIDENCE",
	}
	ConfidenceLevel_value = map[string]int32{
		"NO_CONFIDENCE":     0,
		"HIGH_CONFIDENCE":   3,
		"MEDIUM_CONFIDENCE": 2,
		"LOW_CONFIDENCE":    1,
	}
)

func (x ConfidenceLevel) Enum() *ConfidenceLevel {
	p := new(ConfidenceLevel)
	*p = x
	return p
}

func (x ConfidenceLevel) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ConfidenceLevel) Descriptor() protoreflect.EnumDescriptor {
	return file_eip_discovery_proto_enumTypes[0].Descriptor()
}

func (ConfidenceLevel) Type() protoreflect.EnumType {
	return &file_eip_discovery_proto_enumTypes[0]
}

func (x ConfidenceLevel) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ConfidenceLevel.Descriptor instead.
func (ConfidenceLevel) EnumDescriptor() ([]byte, []int) {
	return file_eip_discovery_proto_rawDescGZIP(), []int{0}
}

// ConfidenceThreshold enum
type ConfidenceThreshold int32

const (
	ConfidenceThreshold_NO_CONFIDENCE_THRESHOLD     ConfidenceThreshold = 0   // 0.0 scaled to 0
	ConfidenceThreshold_HIGH_CONFIDENCE_THRESHOLD   ConfidenceThreshold = 900 // 0.9 scaled to 900
	ConfidenceThreshold_MEDIUM_CONFIDENCE_THRESHOLD ConfidenceThreshold = 500 // 0.5 scaled to 500
	ConfidenceThreshold_LOW_CONFIDENCE_THRESHOLD    ConfidenceThreshold = 100 // 0.1 scaled to 100
)

// Enum value maps for ConfidenceThreshold.
var (
	ConfidenceThreshold_name = map[int32]string{
		0:   "NO_CONFIDENCE_THRESHOLD",
		900: "HIGH_CONFIDENCE_THRESHOLD",
		500: "MEDIUM_CONFIDENCE_THRESHOLD",
		100: "LOW_CONFIDENCE_THRESHOLD",
	}
	ConfidenceThreshold_value = map[string]int32{
		"NO_CONFIDENCE_THRESHOLD":     0,
		"HIGH_CONFIDENCE_THRESHOLD":   900,
		"MEDIUM_CONFIDENCE_THRESHOLD": 500,
		"LOW_CONFIDENCE_THRESHOLD":    100,
	}
)

func (x ConfidenceThreshold) Enum() *ConfidenceThreshold {
	p := new(ConfidenceThreshold)
	*p = x
	return p
}

func (x ConfidenceThreshold) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ConfidenceThreshold) Descriptor() protoreflect.EnumDescriptor {
	return file_eip_discovery_proto_enumTypes[1].Descriptor()
}

func (ConfidenceThreshold) Type() protoreflect.EnumType {
	return &file_eip_discovery_proto_enumTypes[1]
}

func (x ConfidenceThreshold) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ConfidenceThreshold.Descriptor instead.
func (ConfidenceThreshold) EnumDescriptor() ([]byte, []int) {
	return file_eip_discovery_proto_rawDescGZIP(), []int{1}
}

// Contract Discovery result message
type Discovery struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// standard represents the EIP standard that was discovered.
	Standard Standard `protobuf:"varint,1,opt,name=standard,proto3,enum=txpull.v1.eip.Standard" json:"standard,omitempty"`
	// confidence represents the confidence level of the discovery.
	Confidence ConfidenceLevel `protobuf:"varint,2,opt,name=confidence,proto3,enum=txpull.v1.eip.ConfidenceLevel" json:"confidence,omitempty"`
	// confidence_points represents the confidence points of the discovery.
	ConfidencePoints int32 `protobuf:"varint,3,opt,name=confidence_points,json=confidencePoints,proto3" json:"confidence_points,omitempty"`
	// threshold represents the threshold level of the discovery.
	Threshold ConfidenceThreshold `protobuf:"varint,4,opt,name=threshold,proto3,enum=txpull.v1.eip.ConfidenceThreshold" json:"threshold,omitempty"`
	// maximum_tokens represents the maximum number of tokens in the standard.
	// This is basically a standard TokenCount() function response value.
	MaximumTokens int32 `protobuf:"varint,5,opt,name=maximum_tokens,json=maximumTokens,proto3" json:"maximum_tokens,omitempty"`
	// discovered_tokens represents the number of tokens discovered in the standard.
	// The more tokens discovered, the higher the confidence level.
	DiscoveredTokens int32 `protobuf:"varint,6,opt,name=discovered_tokens,json=discoveredTokens,proto3" json:"discovered_tokens,omitempty"`
	// contract represents the contract being scanned, including matched functions and events.
	Contract *Contract `protobuf:"bytes,7,opt,name=contract,proto3" json:"contract,omitempty"`
}

func (x *Discovery) Reset() {
	*x = Discovery{}
	if protoimpl.UnsafeEnabled {
		mi := &file_eip_discovery_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Discovery) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Discovery) ProtoMessage() {}

func (x *Discovery) ProtoReflect() protoreflect.Message {
	mi := &file_eip_discovery_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Discovery.ProtoReflect.Descriptor instead.
func (*Discovery) Descriptor() ([]byte, []int) {
	return file_eip_discovery_proto_rawDescGZIP(), []int{0}
}

func (x *Discovery) GetStandard() Standard {
	if x != nil {
		return x.Standard
	}
	return Standard_UNKNOWN
}

func (x *Discovery) GetConfidence() ConfidenceLevel {
	if x != nil {
		return x.Confidence
	}
	return ConfidenceLevel_NO_CONFIDENCE
}

func (x *Discovery) GetConfidencePoints() int32 {
	if x != nil {
		return x.ConfidencePoints
	}
	return 0
}

func (x *Discovery) GetThreshold() ConfidenceThreshold {
	if x != nil {
		return x.Threshold
	}
	return ConfidenceThreshold_NO_CONFIDENCE_THRESHOLD
}

func (x *Discovery) GetMaximumTokens() int32 {
	if x != nil {
		return x.MaximumTokens
	}
	return 0
}

func (x *Discovery) GetDiscoveredTokens() int32 {
	if x != nil {
		return x.DiscoveredTokens
	}
	return 0
}

func (x *Discovery) GetContract() *Contract {
	if x != nil {
		return x.Contract
	}
	return nil
}

var File_eip_discovery_proto protoreflect.FileDescriptor

var file_eip_discovery_proto_rawDesc = []byte{
	0x0a, 0x13, 0x65, 0x69, 0x70, 0x2f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x65, 0x69, 0x70, 0x1a, 0x13, 0x65, 0x69, 0x70, 0x2f, 0x73, 0x74, 0x61, 0x6e, 0x64, 0x61,
	0x72, 0x64, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x65, 0x69, 0x70, 0x2f, 0x65,
	0x69, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf8, 0x02, 0x0a, 0x09, 0x44, 0x69, 0x73,
	0x63, 0x6f, 0x76, 0x65, 0x72, 0x79, 0x12, 0x33, 0x0a, 0x08, 0x73, 0x74, 0x61, 0x6e, 0x64, 0x61,
	0x72, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c,
	0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x65, 0x69, 0x70, 0x2e, 0x53, 0x74, 0x61, 0x6e, 0x64, 0x61, 0x72,
	0x64, 0x52, 0x08, 0x73, 0x74, 0x61, 0x6e, 0x64, 0x61, 0x72, 0x64, 0x12, 0x3e, 0x0a, 0x0a, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x65, 0x69, 0x70, 0x2e,
	0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x52,
	0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e,
	0x63, 0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x12, 0x40, 0x0a, 0x09, 0x74, 0x68, 0x72, 0x65,
	0x73, 0x68, 0x6f, 0x6c, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x22, 0x2e, 0x74, 0x78,
	0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x65, 0x69, 0x70, 0x2e, 0x43, 0x6f, 0x6e, 0x66,
	0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x54, 0x68, 0x72, 0x65, 0x73, 0x68, 0x6f, 0x6c, 0x64, 0x52,
	0x09, 0x74, 0x68, 0x72, 0x65, 0x73, 0x68, 0x6f, 0x6c, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x6d, 0x61,
	0x78, 0x69, 0x6d, 0x75, 0x6d, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x0d, 0x6d, 0x61, 0x78, 0x69, 0x6d, 0x75, 0x6d, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x73, 0x12, 0x2b, 0x0a, 0x11, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64, 0x5f,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x64, 0x69,
	0x73, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x12, 0x33,
	0x0a, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x65, 0x69, 0x70,
	0x2e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x74, 0x72,
	0x61, 0x63, 0x74, 0x2a, 0x64, 0x0a, 0x0f, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63,
	0x65, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x11, 0x0a, 0x0d, 0x4e, 0x4f, 0x5f, 0x43, 0x4f, 0x4e,
	0x46, 0x49, 0x44, 0x45, 0x4e, 0x43, 0x45, 0x10, 0x00, 0x12, 0x13, 0x0a, 0x0f, 0x48, 0x49, 0x47,
	0x48, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45, 0x4e, 0x43, 0x45, 0x10, 0x03, 0x12, 0x15,
	0x0a, 0x11, 0x4d, 0x45, 0x44, 0x49, 0x55, 0x4d, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45,
	0x4e, 0x43, 0x45, 0x10, 0x02, 0x12, 0x12, 0x0a, 0x0e, 0x4c, 0x4f, 0x57, 0x5f, 0x43, 0x4f, 0x4e,
	0x46, 0x49, 0x44, 0x45, 0x4e, 0x43, 0x45, 0x10, 0x01, 0x2a, 0x92, 0x01, 0x0a, 0x13, 0x43, 0x6f,
	0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x54, 0x68, 0x72, 0x65, 0x73, 0x68, 0x6f, 0x6c,
	0x64, 0x12, 0x1b, 0x0a, 0x17, 0x4e, 0x4f, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45, 0x4e,
	0x43, 0x45, 0x5f, 0x54, 0x48, 0x52, 0x45, 0x53, 0x48, 0x4f, 0x4c, 0x44, 0x10, 0x00, 0x12, 0x1e,
	0x0a, 0x19, 0x48, 0x49, 0x47, 0x48, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45, 0x4e, 0x43,
	0x45, 0x5f, 0x54, 0x48, 0x52, 0x45, 0x53, 0x48, 0x4f, 0x4c, 0x44, 0x10, 0x84, 0x07, 0x12, 0x20,
	0x0a, 0x1b, 0x4d, 0x45, 0x44, 0x49, 0x55, 0x4d, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45,
	0x4e, 0x43, 0x45, 0x5f, 0x54, 0x48, 0x52, 0x45, 0x53, 0x48, 0x4f, 0x4c, 0x44, 0x10, 0xf4, 0x03,
	0x12, 0x1c, 0x0a, 0x18, 0x4c, 0x4f, 0x57, 0x5f, 0x43, 0x4f, 0x4e, 0x46, 0x49, 0x44, 0x45, 0x4e,
	0x43, 0x45, 0x5f, 0x54, 0x48, 0x52, 0x45, 0x53, 0x48, 0x4f, 0x4c, 0x44, 0x10, 0x64, 0x42, 0x2d,
	0x5a, 0x2b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f,
	0x67, 0x6f, 0x2f, 0x65, 0x69, 0x70, 0x3b, 0x65, 0x69, 0x70, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_eip_discovery_proto_rawDescOnce sync.Once
	file_eip_discovery_proto_rawDescData = file_eip_discovery_proto_rawDesc
)

func file_eip_discovery_proto_rawDescGZIP() []byte {
	file_eip_discovery_proto_rawDescOnce.Do(func() {
		file_eip_discovery_proto_rawDescData = protoimpl.X.CompressGZIP(file_eip_discovery_proto_rawDescData)
	})
	return file_eip_discovery_proto_rawDescData
}

var file_eip_discovery_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_eip_discovery_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_eip_discovery_proto_goTypes = []interface{}{
	(ConfidenceLevel)(0),     // 0: txpull.v1.eip.ConfidenceLevel
	(ConfidenceThreshold)(0), // 1: txpull.v1.eip.ConfidenceThreshold
	(*Discovery)(nil),        // 2: txpull.v1.eip.Discovery
	(Standard)(0),            // 3: txpull.v1.eip.Standard
	(*Contract)(nil),         // 4: txpull.v1.eip.Contract
}
var file_eip_discovery_proto_depIdxs = []int32{
	3, // 0: txpull.v1.eip.Discovery.standard:type_name -> txpull.v1.eip.Standard
	0, // 1: txpull.v1.eip.Discovery.confidence:type_name -> txpull.v1.eip.ConfidenceLevel
	1, // 2: txpull.v1.eip.Discovery.threshold:type_name -> txpull.v1.eip.ConfidenceThreshold
	4, // 3: txpull.v1.eip.Discovery.contract:type_name -> txpull.v1.eip.Contract
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_eip_discovery_proto_init() }
func file_eip_discovery_proto_init() {
	if File_eip_discovery_proto != nil {
		return
	}
	file_eip_standards_proto_init()
	file_eip_eip_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_eip_discovery_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Discovery); i {
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
			RawDescriptor: file_eip_discovery_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_eip_discovery_proto_goTypes,
		DependencyIndexes: file_eip_discovery_proto_depIdxs,
		EnumInfos:         file_eip_discovery_proto_enumTypes,
		MessageInfos:      file_eip_discovery_proto_msgTypes,
	}.Build()
	File_eip_discovery_proto = out.File
	file_eip_discovery_proto_rawDesc = nil
	file_eip_discovery_proto_goTypes = nil
	file_eip_discovery_proto_depIdxs = nil
}
