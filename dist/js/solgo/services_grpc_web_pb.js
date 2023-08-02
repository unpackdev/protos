/**
 * @fileoverview gRPC-Web generated client stub for txpull.v1.solgo
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: solgo/services.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var ast_ast_pb = require('../ast/ast_pb.js')

var metadata_metadata_pb = require('../metadata/metadata_pb.js')

var health_health_pb = require('../health/health_pb.js')
const proto = {};
proto.txpull = {};
proto.txpull.v1 = {};
proto.txpull.v1.solgo = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.txpull.v1.solgo.SolGoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.txpull.v1.solgo.SolGoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.txpull.v1.ast.AstRequest,
 *   !proto.txpull.v1.ast.AstResponse>}
 */
const methodDescriptor_SolGoService_GetAst = new grpc.web.MethodDescriptor(
  '/txpull.v1.solgo.SolGoService/GetAst',
  grpc.web.MethodType.UNARY,
  ast_ast_pb.AstRequest,
  ast_ast_pb.AstResponse,
  /**
   * @param {!proto.txpull.v1.ast.AstRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ast_ast_pb.AstResponse.deserializeBinary
);


/**
 * @param {!proto.txpull.v1.ast.AstRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.txpull.v1.ast.AstResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.txpull.v1.ast.AstResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.txpull.v1.solgo.SolGoServiceClient.prototype.getAst =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetAst',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetAst,
      callback);
};


/**
 * @param {!proto.txpull.v1.ast.AstRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.txpull.v1.ast.AstResponse>}
 *     Promise that resolves to the response
 */
proto.txpull.v1.solgo.SolGoServicePromiseClient.prototype.getAst =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetAst',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetAst);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.txpull.v1.ast.AstRawRequest,
 *   !proto.txpull.v1.ast.AstResponse>}
 */
const methodDescriptor_SolGoService_GetAstFromSource = new grpc.web.MethodDescriptor(
  '/txpull.v1.solgo.SolGoService/GetAstFromSource',
  grpc.web.MethodType.UNARY,
  ast_ast_pb.AstRawRequest,
  ast_ast_pb.AstResponse,
  /**
   * @param {!proto.txpull.v1.ast.AstRawRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ast_ast_pb.AstResponse.deserializeBinary
);


/**
 * @param {!proto.txpull.v1.ast.AstRawRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.txpull.v1.ast.AstResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.txpull.v1.ast.AstResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.txpull.v1.solgo.SolGoServiceClient.prototype.getAstFromSource =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetAstFromSource',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetAstFromSource,
      callback);
};


/**
 * @param {!proto.txpull.v1.ast.AstRawRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.txpull.v1.ast.AstResponse>}
 *     Promise that resolves to the response
 */
proto.txpull.v1.solgo.SolGoServicePromiseClient.prototype.getAstFromSource =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetAstFromSource',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetAstFromSource);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.txpull.v1.metadata.MetadataRequest,
 *   !proto.txpull.v1.metadata.MetadataResponse>}
 */
const methodDescriptor_SolGoService_GetMetadata = new grpc.web.MethodDescriptor(
  '/txpull.v1.solgo.SolGoService/GetMetadata',
  grpc.web.MethodType.UNARY,
  metadata_metadata_pb.MetadataRequest,
  metadata_metadata_pb.MetadataResponse,
  /**
   * @param {!proto.txpull.v1.metadata.MetadataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  metadata_metadata_pb.MetadataResponse.deserializeBinary
);


/**
 * @param {!proto.txpull.v1.metadata.MetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.txpull.v1.metadata.MetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.txpull.v1.metadata.MetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.txpull.v1.solgo.SolGoServiceClient.prototype.getMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetMetadata,
      callback);
};


/**
 * @param {!proto.txpull.v1.metadata.MetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.txpull.v1.metadata.MetadataResponse>}
 *     Promise that resolves to the response
 */
proto.txpull.v1.solgo.SolGoServicePromiseClient.prototype.getMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetMetadata',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.txpull.v1.health.HealthRequest,
 *   !proto.txpull.v1.health.HealthResponse>}
 */
const methodDescriptor_SolGoService_GetHealth = new grpc.web.MethodDescriptor(
  '/txpull.v1.solgo.SolGoService/GetHealth',
  grpc.web.MethodType.UNARY,
  health_health_pb.HealthRequest,
  health_health_pb.HealthResponse,
  /**
   * @param {!proto.txpull.v1.health.HealthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  health_health_pb.HealthResponse.deserializeBinary
);


/**
 * @param {!proto.txpull.v1.health.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.txpull.v1.health.HealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.txpull.v1.health.HealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.txpull.v1.solgo.SolGoServiceClient.prototype.getHealth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetHealth',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetHealth,
      callback);
};


/**
 * @param {!proto.txpull.v1.health.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.txpull.v1.health.HealthResponse>}
 *     Promise that resolves to the response
 */
proto.txpull.v1.solgo.SolGoServicePromiseClient.prototype.getHealth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/txpull.v1.solgo.SolGoService/GetHealth',
      request,
      metadata || {},
      methodDescriptor_SolGoService_GetHealth);
};


module.exports = proto.txpull.v1.solgo;
