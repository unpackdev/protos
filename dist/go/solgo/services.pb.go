// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v4.23.4
// source: solgo/services.proto

package solgo_pb

import (
	ast "github.com/txpull/protos/dist/go/ast"
	health "github.com/txpull/protos/dist/go/health"
	metadata "github.com/txpull/protos/dist/go/metadata"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_solgo_services_proto protoreflect.FileDescriptor

var file_solgo_services_proto_rawDesc = []byte{
	0x0a, 0x14, 0x73, 0x6f, 0x6c, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76,
	0x31, 0x2e, 0x73, 0x6f, 0x6c, 0x67, 0x6f, 0x1a, 0x0d, 0x61, 0x73, 0x74, 0x2f, 0x61, 0x73, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x2f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x13, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x2f, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x32, 0xcf, 0x02, 0x0a, 0x0c, 0x53, 0x6f, 0x6c, 0x47, 0x6f, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x41, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x41, 0x73, 0x74, 0x12,
	0x19, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e,
	0x41, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x41, 0x73, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4e, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x41,
	0x73, 0x74, 0x46, 0x72, 0x6f, 0x6d, 0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x1c, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x41, 0x73, 0x74,
	0x52, 0x61, 0x77, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x74, 0x78, 0x70,
	0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x61, 0x73, 0x74, 0x2e, 0x41, 0x73, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5a, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x23, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c,
	0x2e, 0x76, 0x31, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x24, 0x2e, 0x74,
	0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x50, 0x0a, 0x09, 0x47, 0x65, 0x74, 0x48, 0x65, 0x61, 0x6c, 0x74,
	0x68, 0x12, 0x1f, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68, 0x65,
	0x61, 0x6c, 0x74, 0x68, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x20, 0x2e, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2e, 0x76, 0x31, 0x2e, 0x68,
	0x65, 0x61, 0x6c, 0x74, 0x68, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x31, 0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x78, 0x70, 0x75, 0x6c, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x6f, 0x6c, 0x67, 0x6f,
	0x3b, 0x73, 0x6f, 0x6c, 0x67, 0x6f, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var file_solgo_services_proto_goTypes = []interface{}{
	(*ast.AstRequest)(nil),            // 0: txpull.v1.ast.AstRequest
	(*ast.AstRawRequest)(nil),         // 1: txpull.v1.ast.AstRawRequest
	(*metadata.MetadataRequest)(nil),  // 2: txpull.v1.metadata.MetadataRequest
	(*health.HealthRequest)(nil),      // 3: txpull.v1.health.HealthRequest
	(*ast.AstResponse)(nil),           // 4: txpull.v1.ast.AstResponse
	(*metadata.MetadataResponse)(nil), // 5: txpull.v1.metadata.MetadataResponse
	(*health.HealthResponse)(nil),     // 6: txpull.v1.health.HealthResponse
}
var file_solgo_services_proto_depIdxs = []int32{
	0, // 0: txpull.v1.solgo.SolGoService.GetAst:input_type -> txpull.v1.ast.AstRequest
	1, // 1: txpull.v1.solgo.SolGoService.GetAstFromSource:input_type -> txpull.v1.ast.AstRawRequest
	2, // 2: txpull.v1.solgo.SolGoService.GetMetadata:input_type -> txpull.v1.metadata.MetadataRequest
	3, // 3: txpull.v1.solgo.SolGoService.GetHealth:input_type -> txpull.v1.health.HealthRequest
	4, // 4: txpull.v1.solgo.SolGoService.GetAst:output_type -> txpull.v1.ast.AstResponse
	4, // 5: txpull.v1.solgo.SolGoService.GetAstFromSource:output_type -> txpull.v1.ast.AstResponse
	5, // 6: txpull.v1.solgo.SolGoService.GetMetadata:output_type -> txpull.v1.metadata.MetadataResponse
	6, // 7: txpull.v1.solgo.SolGoService.GetHealth:output_type -> txpull.v1.health.HealthResponse
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_solgo_services_proto_init() }
func file_solgo_services_proto_init() {
	if File_solgo_services_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_solgo_services_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_solgo_services_proto_goTypes,
		DependencyIndexes: file_solgo_services_proto_depIdxs,
	}.Build()
	File_solgo_services_proto = out.File
	file_solgo_services_proto_rawDesc = nil
	file_solgo_services_proto_goTypes = nil
	file_solgo_services_proto_depIdxs = nil
}
