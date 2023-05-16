// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package chains

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

// ChainsClient is the client API for Chains service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ChainsClient interface {
	Filter(ctx context.Context, in *FilterChainRequest, opts ...grpc.CallOption) (*FilterChainResponse, error)
	Get(ctx context.Context, in *GetChainRequest, opts ...grpc.CallOption) (*GetChainResponse, error)
}

type chainsClient struct {
	cc grpc.ClientConnInterface
}

func NewChainsClient(cc grpc.ClientConnInterface) ChainsClient {
	return &chainsClient{cc}
}

func (c *chainsClient) Filter(ctx context.Context, in *FilterChainRequest, opts ...grpc.CallOption) (*FilterChainResponse, error) {
	out := new(FilterChainResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.chains.Chains/Filter", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *chainsClient) Get(ctx context.Context, in *GetChainRequest, opts ...grpc.CallOption) (*GetChainResponse, error) {
	out := new(GetChainResponse)
	err := c.cc.Invoke(ctx, "/txpull.v1.chains.Chains/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ChainsServer is the server API for Chains service.
// All implementations must embed UnimplementedChainsServer
// for forward compatibility
type ChainsServer interface {
	Filter(context.Context, *FilterChainRequest) (*FilterChainResponse, error)
	Get(context.Context, *GetChainRequest) (*GetChainResponse, error)
	mustEmbedUnimplementedChainsServer()
}

// UnimplementedChainsServer must be embedded to have forward compatible implementations.
type UnimplementedChainsServer struct {
}

func (UnimplementedChainsServer) Filter(context.Context, *FilterChainRequest) (*FilterChainResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Filter not implemented")
}
func (UnimplementedChainsServer) Get(context.Context, *GetChainRequest) (*GetChainResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedChainsServer) mustEmbedUnimplementedChainsServer() {}

// UnsafeChainsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ChainsServer will
// result in compilation errors.
type UnsafeChainsServer interface {
	mustEmbedUnimplementedChainsServer()
}

func RegisterChainsServer(s grpc.ServiceRegistrar, srv ChainsServer) {
	s.RegisterService(&Chains_ServiceDesc, srv)
}

func _Chains_Filter_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FilterChainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChainsServer).Filter(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.chains.Chains/Filter",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChainsServer).Filter(ctx, req.(*FilterChainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Chains_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetChainRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ChainsServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/txpull.v1.chains.Chains/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ChainsServer).Get(ctx, req.(*GetChainRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Chains_ServiceDesc is the grpc.ServiceDesc for Chains service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Chains_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "txpull.v1.chains.Chains",
	HandlerType: (*ChainsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Filter",
			Handler:    _Chains_Filter_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _Chains_Get_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "chains/chains.proto",
}
