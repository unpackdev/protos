// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.12.4
// source: audit/audit.proto

package audit_pb

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

// Represents an audit report.
type Report struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Success bool     `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"` // Indicates if the audit was successful.
	Error   string   `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`      // Error message, if any.
	Results *Results `protobuf:"bytes,3,opt,name=results,proto3" json:"results,omitempty"`  // Results of the audit.
}

func (x *Report) Reset() {
	*x = Report{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Report) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Report) ProtoMessage() {}

func (x *Report) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Report.ProtoReflect.Descriptor instead.
func (*Report) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{0}
}

func (x *Report) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

func (x *Report) GetError() string {
	if x != nil {
		return x.Error
	}
	return ""
}

func (x *Report) GetResults() *Results {
	if x != nil {
		return x.Results
	}
	return nil
}

// Represents the results of an audit.
type Results struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Detectors []*Detector `protobuf:"bytes,1,rep,name=detectors,proto3" json:"detectors,omitempty"` // List of detectors used in the audit.
}

func (x *Results) Reset() {
	*x = Results{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Results) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Results) ProtoMessage() {}

func (x *Results) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Results.ProtoReflect.Descriptor instead.
func (*Results) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{1}
}

func (x *Results) GetDetectors() []*Detector {
	if x != nil {
		return x.Detectors
	}
	return nil
}

// Represents details of a detector used in the audit.
type Detector struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Elements             []*Element `protobuf:"bytes,1,rep,name=elements,proto3" json:"elements,omitempty"`                                                       // Elements detected by the detector.
	Description          string     `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`                                                 // Description of the detector.
	Markdown             string     `protobuf:"bytes,3,opt,name=markdown,proto3" json:"markdown,omitempty"`                                                       // Markdown representation of the detector's output.
	FirstMarkdownElement string     `protobuf:"bytes,4,opt,name=first_markdown_element,json=firstMarkdownElement,proto3" json:"first_markdown_element,omitempty"` // First element in the markdown representation.
	Id                   string     `protobuf:"bytes,5,opt,name=id,proto3" json:"id,omitempty"`                                                                   // Unique identifier for the detector.
	Check                string     `protobuf:"bytes,6,opt,name=check,proto3" json:"check,omitempty"`                                                             // Check performed by the detector.
	Impact               string     `protobuf:"bytes,7,opt,name=impact,proto3" json:"impact,omitempty"`                                                           // Impact of the detector's findings.
	Confidence           string     `protobuf:"bytes,8,opt,name=confidence,proto3" json:"confidence,omitempty"`                                                   // Confidence level of the detector's findings.
}

func (x *Detector) Reset() {
	*x = Detector{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Detector) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Detector) ProtoMessage() {}

func (x *Detector) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Detector.ProtoReflect.Descriptor instead.
func (*Detector) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{2}
}

func (x *Detector) GetElements() []*Element {
	if x != nil {
		return x.Elements
	}
	return nil
}

func (x *Detector) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Detector) GetMarkdown() string {
	if x != nil {
		return x.Markdown
	}
	return ""
}

func (x *Detector) GetFirstMarkdownElement() string {
	if x != nil {
		return x.FirstMarkdownElement
	}
	return ""
}

func (x *Detector) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Detector) GetCheck() string {
	if x != nil {
		return x.Check
	}
	return ""
}

func (x *Detector) GetImpact() string {
	if x != nil {
		return x.Impact
	}
	return ""
}

func (x *Detector) GetConfidence() string {
	if x != nil {
		return x.Confidence
	}
	return ""
}

// Represents an element detected during the audit.
type Element struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type               string              `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`                                                         // Type of the element.
	Name               string              `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`                                                         // Name of the element.
	SourceMapping      *SourceMapping      `protobuf:"bytes,3,opt,name=source_mapping,json=sourceMapping,proto3" json:"source_mapping,omitempty"`                  // Source mapping of the element.
	TypeSpecificFields *TypeSpecificFields `protobuf:"bytes,4,opt,name=type_specific_fields,json=typeSpecificFields,proto3" json:"type_specific_fields,omitempty"` // Type-specific fields of the element.
	Signature          string              `protobuf:"bytes,5,opt,name=signature,proto3" json:"signature,omitempty"`                                               // Signature of the element.
	AdditionalFields   *AdditionalFields   `protobuf:"bytes,6,opt,name=additional_fields,json=additionalFields,proto3" json:"additional_fields,omitempty"`         // Additional fields related to the element.
}

func (x *Element) Reset() {
	*x = Element{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Element) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Element) ProtoMessage() {}

func (x *Element) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Element.ProtoReflect.Descriptor instead.
func (*Element) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{3}
}

func (x *Element) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Element) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Element) GetSourceMapping() *SourceMapping {
	if x != nil {
		return x.SourceMapping
	}
	return nil
}

func (x *Element) GetTypeSpecificFields() *TypeSpecificFields {
	if x != nil {
		return x.TypeSpecificFields
	}
	return nil
}

func (x *Element) GetSignature() string {
	if x != nil {
		return x.Signature
	}
	return ""
}

func (x *Element) GetAdditionalFields() *AdditionalFields {
	if x != nil {
		return x.AdditionalFields
	}
	return nil
}

// Represents the source mapping of an element.
type SourceMapping struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Start            int32   `protobuf:"varint,1,opt,name=start,proto3" json:"start,omitempty"`                                              // Starting position of the source mapping.
	Length           int32   `protobuf:"varint,2,opt,name=length,proto3" json:"length,omitempty"`                                            // Length of the source mapping.
	FilenameRelative string  `protobuf:"bytes,3,opt,name=filename_relative,json=filenameRelative,proto3" json:"filename_relative,omitempty"` // Relative filename of the source mapping.
	FilenameAbsolute string  `protobuf:"bytes,4,opt,name=filename_absolute,json=filenameAbsolute,proto3" json:"filename_absolute,omitempty"` // Absolute filename of the source mapping.
	FilenameShort    string  `protobuf:"bytes,5,opt,name=filename_short,json=filenameShort,proto3" json:"filename_short,omitempty"`          // Shortened filename of the source mapping.
	IsDependency     bool    `protobuf:"varint,6,opt,name=is_dependency,json=isDependency,proto3" json:"is_dependency,omitempty"`            // Indicates if the source mapping is a dependency.
	Lines            []int32 `protobuf:"varint,7,rep,packed,name=lines,proto3" json:"lines,omitempty"`                                       // Lines associated with the source mapping.
	StartingColumn   int32   `protobuf:"varint,8,opt,name=starting_column,json=startingColumn,proto3" json:"starting_column,omitempty"`      // Starting column of the source mapping.
	EndingColumn     int32   `protobuf:"varint,9,opt,name=ending_column,json=endingColumn,proto3" json:"ending_column,omitempty"`            // Ending column of the source mapping.
}

func (x *SourceMapping) Reset() {
	*x = SourceMapping{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SourceMapping) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SourceMapping) ProtoMessage() {}

func (x *SourceMapping) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SourceMapping.ProtoReflect.Descriptor instead.
func (*SourceMapping) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{4}
}

func (x *SourceMapping) GetStart() int32 {
	if x != nil {
		return x.Start
	}
	return 0
}

func (x *SourceMapping) GetLength() int32 {
	if x != nil {
		return x.Length
	}
	return 0
}

func (x *SourceMapping) GetFilenameRelative() string {
	if x != nil {
		return x.FilenameRelative
	}
	return ""
}

func (x *SourceMapping) GetFilenameAbsolute() string {
	if x != nil {
		return x.FilenameAbsolute
	}
	return ""
}

func (x *SourceMapping) GetFilenameShort() string {
	if x != nil {
		return x.FilenameShort
	}
	return ""
}

func (x *SourceMapping) GetIsDependency() bool {
	if x != nil {
		return x.IsDependency
	}
	return false
}

func (x *SourceMapping) GetLines() []int32 {
	if x != nil {
		return x.Lines
	}
	return nil
}

func (x *SourceMapping) GetStartingColumn() int32 {
	if x != nil {
		return x.StartingColumn
	}
	return 0
}

func (x *SourceMapping) GetEndingColumn() int32 {
	if x != nil {
		return x.EndingColumn
	}
	return 0
}

// Represents type-specific fields of an element.
type TypeSpecificFields struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Parent    *Element `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`       // Parent element, if any.
	Directive []string `protobuf:"bytes,2,rep,name=directive,proto3" json:"directive,omitempty"` // Directives associated with the element.
}

func (x *TypeSpecificFields) Reset() {
	*x = TypeSpecificFields{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TypeSpecificFields) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TypeSpecificFields) ProtoMessage() {}

func (x *TypeSpecificFields) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TypeSpecificFields.ProtoReflect.Descriptor instead.
func (*TypeSpecificFields) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{5}
}

func (x *TypeSpecificFields) GetParent() *Element {
	if x != nil {
		return x.Parent
	}
	return nil
}

func (x *TypeSpecificFields) GetDirective() []string {
	if x != nil {
		return x.Directive
	}
	return nil
}

// Represents additional fields of an element.
type AdditionalFields struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UnderlyingType string `protobuf:"bytes,1,opt,name=underlying_type,json=underlyingType,proto3" json:"underlying_type,omitempty"` // Underlying type of the element.
	VariableName   string `protobuf:"bytes,2,opt,name=variable_name,json=variableName,proto3" json:"variable_name,omitempty"`       // Variable name associated with the element.
}

func (x *AdditionalFields) Reset() {
	*x = AdditionalFields{}
	if protoimpl.UnsafeEnabled {
		mi := &file_audit_audit_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdditionalFields) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdditionalFields) ProtoMessage() {}

func (x *AdditionalFields) ProtoReflect() protoreflect.Message {
	mi := &file_audit_audit_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdditionalFields.ProtoReflect.Descriptor instead.
func (*AdditionalFields) Descriptor() ([]byte, []int) {
	return file_audit_audit_proto_rawDescGZIP(), []int{6}
}

func (x *AdditionalFields) GetUnderlyingType() string {
	if x != nil {
		return x.UnderlyingType
	}
	return ""
}

func (x *AdditionalFields) GetVariableName() string {
	if x != nil {
		return x.VariableName
	}
	return ""
}

var File_audit_audit_proto protoreflect.FileDescriptor

var file_audit_audit_proto_rawDesc = []byte{
	0x0a, 0x11, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2f, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61,
	0x75, 0x64, 0x69, 0x74, 0x22, 0x6c, 0x0a, 0x06, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x18,
	0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x07, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f,
	0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x32,
	0x0a, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x75, 0x64, 0x69,
	0x74, 0x2e, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x52, 0x07, 0x72, 0x65, 0x73, 0x75, 0x6c,
	0x74, 0x73, 0x22, 0x42, 0x0a, 0x07, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x37, 0x0a,
	0x09, 0x64, 0x65, 0x74, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x75, 0x64,
	0x69, 0x74, 0x2e, 0x44, 0x65, 0x74, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x09, 0x64, 0x65, 0x74,
	0x65, 0x63, 0x74, 0x6f, 0x72, 0x73, 0x22, 0x92, 0x02, 0x0a, 0x08, 0x44, 0x65, 0x74, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x12, 0x34, 0x0a, 0x08, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52,
	0x08, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x6d,
	0x61, 0x72, 0x6b, 0x64, 0x6f, 0x77, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6d,
	0x61, 0x72, 0x6b, 0x64, 0x6f, 0x77, 0x6e, 0x12, 0x34, 0x0a, 0x16, 0x66, 0x69, 0x72, 0x73, 0x74,
	0x5f, 0x6d, 0x61, 0x72, 0x6b, 0x64, 0x6f, 0x77, 0x6e, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x14, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4d, 0x61,
	0x72, 0x6b, 0x64, 0x6f, 0x77, 0x6e, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a,
	0x05, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x63, 0x68,
	0x65, 0x63, 0x6b, 0x12, 0x16, 0x0a, 0x06, 0x69, 0x6d, 0x70, 0x61, 0x63, 0x74, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x69, 0x6d, 0x70, 0x61, 0x63, 0x74, 0x12, 0x1e, 0x0a, 0x0a, 0x63,
	0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x64, 0x65, 0x6e, 0x63, 0x65, 0x22, 0xbd, 0x02, 0x0a, 0x07,
	0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x45, 0x0a, 0x0e, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x6d, 0x61, 0x70, 0x70, 0x69, 0x6e,
	0x67, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x52, 0x0d, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4d,
	0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x12, 0x55, 0x0a, 0x14, 0x74, 0x79, 0x70, 0x65, 0x5f, 0x73,
	0x70, 0x65, 0x63, 0x69, 0x66, 0x69, 0x63, 0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31,
	0x2e, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x54, 0x79, 0x70, 0x65, 0x53, 0x70, 0x65, 0x63, 0x69,
	0x66, 0x69, 0x63, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x52, 0x12, 0x74, 0x79, 0x70, 0x65, 0x53,
	0x70, 0x65, 0x63, 0x69, 0x66, 0x69, 0x63, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12, 0x1c, 0x0a,
	0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x4e, 0x0a, 0x11, 0x61,
	0x64, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e,
	0x76, 0x31, 0x2e, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x41, 0x64, 0x64, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x61, 0x6c, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x52, 0x10, 0x61, 0x64, 0x64, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x22, 0xc7, 0x02, 0x0a, 0x0d,
	0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x12, 0x14, 0x0a,
	0x05, 0x73, 0x74, 0x61, 0x72, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x74,
	0x61, 0x72, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x06, 0x6c, 0x65, 0x6e, 0x67, 0x74, 0x68, 0x12, 0x2b, 0x0a, 0x11, 0x66,
	0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x5f, 0x72, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x66, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65,
	0x52, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x76, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x66, 0x69, 0x6c, 0x65,
	0x6e, 0x61, 0x6d, 0x65, 0x5f, 0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x10, 0x66, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x41, 0x62, 0x73,
	0x6f, 0x6c, 0x75, 0x74, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x66, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d,
	0x65, 0x5f, 0x73, 0x68, 0x6f, 0x72, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x66,
	0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x53, 0x68, 0x6f, 0x72, 0x74, 0x12, 0x23, 0x0a, 0x0d,
	0x69, 0x73, 0x5f, 0x64, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x63, 0x79, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x0c, 0x69, 0x73, 0x44, 0x65, 0x70, 0x65, 0x6e, 0x64, 0x65, 0x6e, 0x63,
	0x79, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x05,
	0x52, 0x05, 0x6c, 0x69, 0x6e, 0x65, 0x73, 0x12, 0x27, 0x0a, 0x0f, 0x73, 0x74, 0x61, 0x72, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0e, 0x73, 0x74, 0x61, 0x72, 0x74, 0x69, 0x6e, 0x67, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e,
	0x12, 0x23, 0x0a, 0x0d, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x63, 0x6f, 0x6c, 0x75, 0x6d,
	0x6e, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x43,
	0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x22, 0x64, 0x0a, 0x12, 0x54, 0x79, 0x70, 0x65, 0x53, 0x70, 0x65,
	0x63, 0x69, 0x66, 0x69, 0x63, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12, 0x30, 0x0a, 0x06, 0x70,
	0x61, 0x72, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x78,
	0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x75, 0x64, 0x69, 0x74, 0x2e, 0x45, 0x6c,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x06, 0x70, 0x61, 0x72, 0x65, 0x6e, 0x74, 0x12, 0x1c, 0x0a,
	0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x76, 0x65, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x69, 0x76, 0x65, 0x22, 0x60, 0x0a, 0x10, 0x41,
	0x64, 0x64, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x6c, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12,
	0x27, 0x0a, 0x0f, 0x75, 0x6e, 0x64, 0x65, 0x72, 0x6c, 0x79, 0x69, 0x6e, 0x67, 0x5f, 0x74, 0x79,
	0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x75, 0x6e, 0x64, 0x65, 0x72, 0x6c,
	0x79, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x76, 0x61, 0x72, 0x69,
	0x61, 0x62, 0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x42, 0x34, 0x5a,
	0x32, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73,
	0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x75, 0x64, 0x69, 0x74, 0x3b, 0x61, 0x75, 0x64, 0x69, 0x74,
	0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_audit_audit_proto_rawDescOnce sync.Once
	file_audit_audit_proto_rawDescData = file_audit_audit_proto_rawDesc
)

func file_audit_audit_proto_rawDescGZIP() []byte {
	file_audit_audit_proto_rawDescOnce.Do(func() {
		file_audit_audit_proto_rawDescData = protoimpl.X.CompressGZIP(file_audit_audit_proto_rawDescData)
	})
	return file_audit_audit_proto_rawDescData
}

var file_audit_audit_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_audit_audit_proto_goTypes = []interface{}{
	(*Report)(nil),             // 0: txpull.v1.audit.Report
	(*Results)(nil),            // 1: txpull.v1.audit.Results
	(*Detector)(nil),           // 2: txpull.v1.audit.Detector
	(*Element)(nil),            // 3: txpull.v1.audit.Element
	(*SourceMapping)(nil),      // 4: txpull.v1.audit.SourceMapping
	(*TypeSpecificFields)(nil), // 5: txpull.v1.audit.TypeSpecificFields
	(*AdditionalFields)(nil),   // 6: txpull.v1.audit.AdditionalFields
}
var file_audit_audit_proto_depIdxs = []int32{
	1, // 0: txpull.v1.audit.Report.results:type_name -> txpull.v1.audit.Results
	2, // 1: txpull.v1.audit.Results.detectors:type_name -> txpull.v1.audit.Detector
	3, // 2: txpull.v1.audit.Detector.elements:type_name -> txpull.v1.audit.Element
	4, // 3: txpull.v1.audit.Element.source_mapping:type_name -> txpull.v1.audit.SourceMapping
	5, // 4: txpull.v1.audit.Element.type_specific_fields:type_name -> txpull.v1.audit.TypeSpecificFields
	6, // 5: txpull.v1.audit.Element.additional_fields:type_name -> txpull.v1.audit.AdditionalFields
	3, // 6: txpull.v1.audit.TypeSpecificFields.parent:type_name -> txpull.v1.audit.Element
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_audit_audit_proto_init() }
func file_audit_audit_proto_init() {
	if File_audit_audit_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_audit_audit_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Report); i {
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
		file_audit_audit_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Results); i {
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
		file_audit_audit_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Detector); i {
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
		file_audit_audit_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Element); i {
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
		file_audit_audit_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SourceMapping); i {
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
		file_audit_audit_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TypeSpecificFields); i {
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
		file_audit_audit_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdditionalFields); i {
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
			RawDescriptor: file_audit_audit_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_audit_audit_proto_goTypes,
		DependencyIndexes: file_audit_audit_proto_depIdxs,
		MessageInfos:      file_audit_audit_proto_msgTypes,
	}.Build()
	File_audit_audit_proto = out.File
	file_audit_audit_proto_rawDesc = nil
	file_audit_audit_proto_goTypes = nil
	file_audit_audit_proto_depIdxs = nil
}
