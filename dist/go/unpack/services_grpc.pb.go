// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package unpack_pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AuthorizationServiceClient is the client API for AuthorizationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthorizationServiceClient interface {
}

type authorizationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthorizationServiceClient(cc grpc.ClientConnInterface) AuthorizationServiceClient {
	return &authorizationServiceClient{cc}
}

// AuthorizationServiceServer is the server API for AuthorizationService service.
// All implementations must embed UnimplementedAuthorizationServiceServer
// for forward compatibility
type AuthorizationServiceServer interface {
	mustEmbedUnimplementedAuthorizationServiceServer()
}

// UnimplementedAuthorizationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAuthorizationServiceServer struct {
}

func (UnimplementedAuthorizationServiceServer) mustEmbedUnimplementedAuthorizationServiceServer() {}

// UnsafeAuthorizationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthorizationServiceServer will
// result in compilation errors.
type UnsafeAuthorizationServiceServer interface {
	mustEmbedUnimplementedAuthorizationServiceServer()
}

func RegisterAuthorizationServiceServer(s grpc.ServiceRegistrar, srv AuthorizationServiceServer) {
	s.RegisterService(&AuthorizationService_ServiceDesc, srv)
}

// AuthorizationService_ServiceDesc is the grpc.ServiceDesc for AuthorizationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthorizationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "txpull.v1.unpack.AuthorizationService",
	HandlerType: (*AuthorizationServiceServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "unpack/services.proto",
}

// ObserverServiceClient is the client API for ObserverService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ObserverServiceClient interface {
	GetNetworks(ctx context.Context, in *NetworkRequest, opts ...grpc.CallOption) (*NetworkResponse, error)
	GetAST(ctx context.Context, in *AstRequest, opts ...grpc.CallOption) (*AstResponse, error)
	GetOpCode(ctx context.Context, in *OpCodeRequest, opts ...grpc.CallOption) (*OpCodeResponse, error)
	GetMethod(ctx context.Context, in *MethodRequest, opts ...grpc.CallOption) (*MethodResponse, error)
	GetMetadata(ctx context.Context, in *MetadataRequest, opts ...grpc.CallOption) (*MetadataResponse, error)
	GetAnalysis(ctx context.Context, in *AnalysisRequest, opts ...grpc.CallOption) (*AnalysisResponse, error)
	GetContract(ctx context.Context, in *ContractRequest, opts ...grpc.CallOption) (*ContractResponse, error)
	GetVerificationDetails(ctx context.Context, in *VerificationDetailsRequest, opts ...grpc.CallOption) (*VerificationDetailsResponse, error)
	GetABI(ctx context.Context, in *AbiRequest, opts ...grpc.CallOption) (*AbiResponse, error)
	GetSourceCode(ctx context.Context, in *SourceCodeRequest, opts ...grpc.CallOption) (*SourceCodeResponse, error)
	GetBytecode(ctx context.Context, in *BytecodeRequest, opts ...grpc.CallOption) (*BytecodeResponse, error)
	GetMethodsBySignature(ctx context.Context, in *MethodsBySignatureRequest, opts ...grpc.CallOption) (*MethodsBySignatureResponse, error)
	GetBlock(ctx context.Context, in *BlockRequest, opts ...grpc.CallOption) (*BlockResponse, error)
	GetTransaction(ctx context.Context, in *TransactionRequest, opts ...grpc.CallOption) (*TransactionResponse, error)
	GetReceipt(ctx context.Context, in *ReceiptRequest, opts ...grpc.CallOption) (*ReceiptResponse, error)
	GetLog(ctx context.Context, in *LogRequest, opts ...grpc.CallOption) (*LogResponse, error)
	GetTrace(ctx context.Context, in *TraceRequest, opts ...grpc.CallOption) (*TraceResponse, error)
	QueueContract(ctx context.Context, in *QueueContractRequest, opts ...grpc.CallOption) (*QueueContractResponse, error)
	QueueMethod(ctx context.Context, in *QueueMethodRequest, opts ...grpc.CallOption) (*QueueMethodResponse, error)
	QueueBytecode(ctx context.Context, in *QueueBytecodeRequest, opts ...grpc.CallOption) (*QueueBytecodeResponse, error)
	GetStatistics(ctx context.Context, in *StatisticsRequest, opts ...grpc.CallOption) (*StatisticsResponse, error)
	GetQueueStatus(ctx context.Context, in *QueueStatusRequest, opts ...grpc.CallOption) (*QueueStatusResponse, error)
	GetQueueStatistics(ctx context.Context, in *QueueStatisticsRequest, opts ...grpc.CallOption) (*QueueStatisticsResponse, error)
	GetHealth(ctx context.Context, in *HealthRequest, opts ...grpc.CallOption) (*HealthResponse, error)
}

type observerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewObserverServiceClient(cc grpc.ClientConnInterface) ObserverServiceClient {
	return &observerServiceClient{cc}
}

func (c *observerServiceClient) GetNetworks(ctx context.Context, in *NetworkRequest, opts ...grpc.CallOption) (*NetworkResponse, error) {
	out := new(NetworkResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetNetworks", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetAST(ctx context.Context, in *AstRequest, opts ...grpc.CallOption) (*AstResponse, error) {
	out := new(AstResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetAST", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetOpCode(ctx context.Context, in *OpCodeRequest, opts ...grpc.CallOption) (*OpCodeResponse, error) {
	out := new(OpCodeResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetOpCode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetMethod(ctx context.Context, in *MethodRequest, opts ...grpc.CallOption) (*MethodResponse, error) {
	out := new(MethodResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetMetadata(ctx context.Context, in *MetadataRequest, opts ...grpc.CallOption) (*MetadataResponse, error) {
	out := new(MetadataResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetMetadata", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetAnalysis(ctx context.Context, in *AnalysisRequest, opts ...grpc.CallOption) (*AnalysisResponse, error) {
	out := new(AnalysisResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetAnalysis", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetContract(ctx context.Context, in *ContractRequest, opts ...grpc.CallOption) (*ContractResponse, error) {
	out := new(ContractResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetContract", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetVerificationDetails(ctx context.Context, in *VerificationDetailsRequest, opts ...grpc.CallOption) (*VerificationDetailsResponse, error) {
	out := new(VerificationDetailsResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetVerificationDetails", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetABI(ctx context.Context, in *AbiRequest, opts ...grpc.CallOption) (*AbiResponse, error) {
	out := new(AbiResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetABI", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetSourceCode(ctx context.Context, in *SourceCodeRequest, opts ...grpc.CallOption) (*SourceCodeResponse, error) {
	out := new(SourceCodeResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetSourceCode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetBytecode(ctx context.Context, in *BytecodeRequest, opts ...grpc.CallOption) (*BytecodeResponse, error) {
	out := new(BytecodeResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetBytecode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetMethodsBySignature(ctx context.Context, in *MethodsBySignatureRequest, opts ...grpc.CallOption) (*MethodsBySignatureResponse, error) {
	out := new(MethodsBySignatureResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetMethodsBySignature", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetBlock(ctx context.Context, in *BlockRequest, opts ...grpc.CallOption) (*BlockResponse, error) {
	out := new(BlockResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetBlock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetTransaction(ctx context.Context, in *TransactionRequest, opts ...grpc.CallOption) (*TransactionResponse, error) {
	out := new(TransactionResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetTransaction", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetReceipt(ctx context.Context, in *ReceiptRequest, opts ...grpc.CallOption) (*ReceiptResponse, error) {
	out := new(ReceiptResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetReceipt", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetLog(ctx context.Context, in *LogRequest, opts ...grpc.CallOption) (*LogResponse, error) {
	out := new(LogResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetTrace(ctx context.Context, in *TraceRequest, opts ...grpc.CallOption) (*TraceResponse, error) {
	out := new(TraceResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetTrace", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) QueueContract(ctx context.Context, in *QueueContractRequest, opts ...grpc.CallOption) (*QueueContractResponse, error) {
	out := new(QueueContractResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/QueueContract", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) QueueMethod(ctx context.Context, in *QueueMethodRequest, opts ...grpc.CallOption) (*QueueMethodResponse, error) {
	out := new(QueueMethodResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/QueueMethod", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) QueueBytecode(ctx context.Context, in *QueueBytecodeRequest, opts ...grpc.CallOption) (*QueueBytecodeResponse, error) {
	out := new(QueueBytecodeResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/QueueBytecode", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetStatistics(ctx context.Context, in *StatisticsRequest, opts ...grpc.CallOption) (*StatisticsResponse, error) {
	out := new(StatisticsResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetQueueStatus(ctx context.Context, in *QueueStatusRequest, opts ...grpc.CallOption) (*QueueStatusResponse, error) {
	out := new(QueueStatusResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetQueueStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetQueueStatistics(ctx context.Context, in *QueueStatisticsRequest, opts ...grpc.CallOption) (*QueueStatisticsResponse, error) {
	out := new(QueueStatisticsResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetQueueStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *observerServiceClient) GetHealth(ctx context.Context, in *HealthRequest, opts ...grpc.CallOption) (*HealthResponse, error) {
	out := new(HealthResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.unpack.ObserverService/GetHealth", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ObserverServiceServer is the server API for ObserverService service.
// All implementations must embed UnimplementedObserverServiceServer
// for forward compatibility
type ObserverServiceServer interface {
	GetNetworks(context.Context, *NetworkRequest) (*NetworkResponse, error)
	GetAST(context.Context, *AstRequest) (*AstResponse, error)
	GetOpCode(context.Context, *OpCodeRequest) (*OpCodeResponse, error)
	GetMethod(context.Context, *MethodRequest) (*MethodResponse, error)
	GetMetadata(context.Context, *MetadataRequest) (*MetadataResponse, error)
	GetAnalysis(context.Context, *AnalysisRequest) (*AnalysisResponse, error)
	GetContract(context.Context, *ContractRequest) (*ContractResponse, error)
	GetVerificationDetails(context.Context, *VerificationDetailsRequest) (*VerificationDetailsResponse, error)
	GetABI(context.Context, *AbiRequest) (*AbiResponse, error)
	GetSourceCode(context.Context, *SourceCodeRequest) (*SourceCodeResponse, error)
	GetBytecode(context.Context, *BytecodeRequest) (*BytecodeResponse, error)
	GetMethodsBySignature(context.Context, *MethodsBySignatureRequest) (*MethodsBySignatureResponse, error)
	GetBlock(context.Context, *BlockRequest) (*BlockResponse, error)
	GetTransaction(context.Context, *TransactionRequest) (*TransactionResponse, error)
	GetReceipt(context.Context, *ReceiptRequest) (*ReceiptResponse, error)
	GetLog(context.Context, *LogRequest) (*LogResponse, error)
	GetTrace(context.Context, *TraceRequest) (*TraceResponse, error)
	QueueContract(context.Context, *QueueContractRequest) (*QueueContractResponse, error)
	QueueMethod(context.Context, *QueueMethodRequest) (*QueueMethodResponse, error)
	QueueBytecode(context.Context, *QueueBytecodeRequest) (*QueueBytecodeResponse, error)
	GetStatistics(context.Context, *StatisticsRequest) (*StatisticsResponse, error)
	GetQueueStatus(context.Context, *QueueStatusRequest) (*QueueStatusResponse, error)
	GetQueueStatistics(context.Context, *QueueStatisticsRequest) (*QueueStatisticsResponse, error)
	GetHealth(context.Context, *HealthRequest) (*HealthResponse, error)
	mustEmbedUnimplementedObserverServiceServer()
}

// UnimplementedObserverServiceServer must be embedded to have forward compatible implementations.
type UnimplementedObserverServiceServer struct {
}

func (UnimplementedObserverServiceServer) GetNetworks(context.Context, *NetworkRequest) (*NetworkResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNetworks not implemented")
}
func (UnimplementedObserverServiceServer) GetAST(context.Context, *AstRequest) (*AstResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAST not implemented")
}
func (UnimplementedObserverServiceServer) GetOpCode(context.Context, *OpCodeRequest) (*OpCodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOpCode not implemented")
}
func (UnimplementedObserverServiceServer) GetMethod(context.Context, *MethodRequest) (*MethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMethod not implemented")
}
func (UnimplementedObserverServiceServer) GetMetadata(context.Context, *MetadataRequest) (*MetadataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMetadata not implemented")
}
func (UnimplementedObserverServiceServer) GetAnalysis(context.Context, *AnalysisRequest) (*AnalysisResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAnalysis not implemented")
}
func (UnimplementedObserverServiceServer) GetContract(context.Context, *ContractRequest) (*ContractResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetContract not implemented")
}
func (UnimplementedObserverServiceServer) GetVerificationDetails(context.Context, *VerificationDetailsRequest) (*VerificationDetailsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetVerificationDetails not implemented")
}
func (UnimplementedObserverServiceServer) GetABI(context.Context, *AbiRequest) (*AbiResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetABI not implemented")
}
func (UnimplementedObserverServiceServer) GetSourceCode(context.Context, *SourceCodeRequest) (*SourceCodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSourceCode not implemented")
}
func (UnimplementedObserverServiceServer) GetBytecode(context.Context, *BytecodeRequest) (*BytecodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBytecode not implemented")
}
func (UnimplementedObserverServiceServer) GetMethodsBySignature(context.Context, *MethodsBySignatureRequest) (*MethodsBySignatureResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMethodsBySignature not implemented")
}
func (UnimplementedObserverServiceServer) GetBlock(context.Context, *BlockRequest) (*BlockResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBlock not implemented")
}
func (UnimplementedObserverServiceServer) GetTransaction(context.Context, *TransactionRequest) (*TransactionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTransaction not implemented")
}
func (UnimplementedObserverServiceServer) GetReceipt(context.Context, *ReceiptRequest) (*ReceiptResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetReceipt not implemented")
}
func (UnimplementedObserverServiceServer) GetLog(context.Context, *LogRequest) (*LogResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLog not implemented")
}
func (UnimplementedObserverServiceServer) GetTrace(context.Context, *TraceRequest) (*TraceResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTrace not implemented")
}
func (UnimplementedObserverServiceServer) QueueContract(context.Context, *QueueContractRequest) (*QueueContractResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueueContract not implemented")
}
func (UnimplementedObserverServiceServer) QueueMethod(context.Context, *QueueMethodRequest) (*QueueMethodResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueueMethod not implemented")
}
func (UnimplementedObserverServiceServer) QueueBytecode(context.Context, *QueueBytecodeRequest) (*QueueBytecodeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QueueBytecode not implemented")
}
func (UnimplementedObserverServiceServer) GetStatistics(context.Context, *StatisticsRequest) (*StatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStatistics not implemented")
}
func (UnimplementedObserverServiceServer) GetQueueStatus(context.Context, *QueueStatusRequest) (*QueueStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQueueStatus not implemented")
}
func (UnimplementedObserverServiceServer) GetQueueStatistics(context.Context, *QueueStatisticsRequest) (*QueueStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQueueStatistics not implemented")
}
func (UnimplementedObserverServiceServer) GetHealth(context.Context, *HealthRequest) (*HealthResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetHealth not implemented")
}
func (UnimplementedObserverServiceServer) mustEmbedUnimplementedObserverServiceServer() {}

// UnsafeObserverServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ObserverServiceServer will
// result in compilation errors.
type UnsafeObserverServiceServer interface {
	mustEmbedUnimplementedObserverServiceServer()
}

func RegisterObserverServiceServer(s grpc.ServiceRegistrar, srv ObserverServiceServer) {
	s.RegisterService(&ObserverService_ServiceDesc, srv)
}

func _ObserverService_GetNetworks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NetworkRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetNetworks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetNetworks",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetNetworks(ctx, req.(*NetworkRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetAST_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AstRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetAST(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetAST",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetAST(ctx, req.(*AstRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetOpCode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(OpCodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetOpCode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetOpCode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetOpCode(ctx, req.(*OpCodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetMethod(ctx, req.(*MethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetMetadata",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetMetadata(ctx, req.(*MetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetAnalysis_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AnalysisRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetAnalysis(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetAnalysis",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetAnalysis(ctx, req.(*AnalysisRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetContract_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ContractRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetContract(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetContract",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetContract(ctx, req.(*ContractRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetVerificationDetails_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerificationDetailsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetVerificationDetails(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetVerificationDetails",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetVerificationDetails(ctx, req.(*VerificationDetailsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetABI_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AbiRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetABI(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetABI",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetABI(ctx, req.(*AbiRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetSourceCode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SourceCodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetSourceCode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetSourceCode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetSourceCode(ctx, req.(*SourceCodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetBytecode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BytecodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetBytecode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetBytecode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetBytecode(ctx, req.(*BytecodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetMethodsBySignature_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MethodsBySignatureRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetMethodsBySignature(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetMethodsBySignature",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetMethodsBySignature(ctx, req.(*MethodsBySignatureRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetBlock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BlockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetBlock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetBlock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetBlock(ctx, req.(*BlockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetTransaction_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TransactionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetTransaction(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetTransaction",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetTransaction(ctx, req.(*TransactionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetReceipt_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiptRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetReceipt(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetReceipt",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetReceipt(ctx, req.(*ReceiptRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetLog(ctx, req.(*LogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetTrace_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TraceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetTrace(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetTrace",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetTrace(ctx, req.(*TraceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_QueueContract_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueueContractRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).QueueContract(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/QueueContract",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).QueueContract(ctx, req.(*QueueContractRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_QueueMethod_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueueMethodRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).QueueMethod(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/QueueMethod",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).QueueMethod(ctx, req.(*QueueMethodRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_QueueBytecode_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueueBytecodeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).QueueBytecode(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/QueueBytecode",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).QueueBytecode(ctx, req.(*QueueBytecodeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetStatistics(ctx, req.(*StatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetQueueStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueueStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetQueueStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetQueueStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetQueueStatus(ctx, req.(*QueueStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetQueueStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueueStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetQueueStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetQueueStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetQueueStatistics(ctx, req.(*QueueStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ObserverService_GetHealth_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HealthRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ObserverServiceServer).GetHealth(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.unpack.ObserverService/GetHealth",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ObserverServiceServer).GetHealth(ctx, req.(*HealthRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ObserverService_ServiceDesc is the grpc.ServiceDesc for ObserverService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ObserverService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "txpull.v1.unpack.ObserverService",
	HandlerType: (*ObserverServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetNetworks",
			Handler:    _ObserverService_GetNetworks_Handler,
		},
		{
			MethodName: "GetAST",
			Handler:    _ObserverService_GetAST_Handler,
		},
		{
			MethodName: "GetOpCode",
			Handler:    _ObserverService_GetOpCode_Handler,
		},
		{
			MethodName: "GetMethod",
			Handler:    _ObserverService_GetMethod_Handler,
		},
		{
			MethodName: "GetMetadata",
			Handler:    _ObserverService_GetMetadata_Handler,
		},
		{
			MethodName: "GetAnalysis",
			Handler:    _ObserverService_GetAnalysis_Handler,
		},
		{
			MethodName: "GetContract",
			Handler:    _ObserverService_GetContract_Handler,
		},
		{
			MethodName: "GetVerificationDetails",
			Handler:    _ObserverService_GetVerificationDetails_Handler,
		},
		{
			MethodName: "GetABI",
			Handler:    _ObserverService_GetABI_Handler,
		},
		{
			MethodName: "GetSourceCode",
			Handler:    _ObserverService_GetSourceCode_Handler,
		},
		{
			MethodName: "GetBytecode",
			Handler:    _ObserverService_GetBytecode_Handler,
		},
		{
			MethodName: "GetMethodsBySignature",
			Handler:    _ObserverService_GetMethodsBySignature_Handler,
		},
		{
			MethodName: "GetBlock",
			Handler:    _ObserverService_GetBlock_Handler,
		},
		{
			MethodName: "GetTransaction",
			Handler:    _ObserverService_GetTransaction_Handler,
		},
		{
			MethodName: "GetReceipt",
			Handler:    _ObserverService_GetReceipt_Handler,
		},
		{
			MethodName: "GetLog",
			Handler:    _ObserverService_GetLog_Handler,
		},
		{
			MethodName: "GetTrace",
			Handler:    _ObserverService_GetTrace_Handler,
		},
		{
			MethodName: "QueueContract",
			Handler:    _ObserverService_QueueContract_Handler,
		},
		{
			MethodName: "QueueMethod",
			Handler:    _ObserverService_QueueMethod_Handler,
		},
		{
			MethodName: "QueueBytecode",
			Handler:    _ObserverService_QueueBytecode_Handler,
		},
		{
			MethodName: "GetStatistics",
			Handler:    _ObserverService_GetStatistics_Handler,
		},
		{
			MethodName: "GetQueueStatus",
			Handler:    _ObserverService_GetQueueStatus_Handler,
		},
		{
			MethodName: "GetQueueStatistics",
			Handler:    _ObserverService_GetQueueStatistics_Handler,
		},
		{
			MethodName: "GetHealth",
			Handler:    _ObserverService_GetHealth_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "unpack/services.proto",
}
