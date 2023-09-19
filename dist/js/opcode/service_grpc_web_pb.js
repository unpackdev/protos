/**
 * @fileoverview gRPC-Web generated client stub for unpack.v1.opcode
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: opcode/service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var opcode_service_parameters_pb = require('../opcode/service_parameters_pb.js')

var health_health_pb = require('../health/health_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.unpack = {};
proto.unpack.v1 = {};
proto.unpack.v1.opcode = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.unpack.v1.opcode.ServiceClient =
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
proto.unpack.v1.opcode.ServicePromiseClient =
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
 *   !proto.unpack.v1.opcode.Request,
 *   !proto.unpack.v1.opcode.Response>}
 */
const methodDescriptor_Service_Get = new grpc.web.MethodDescriptor(
  '/unpack.v1.opcode.Service/Get',
  grpc.web.MethodType.UNARY,
  opcode_service_parameters_pb.Request,
  opcode_service_parameters_pb.Response,
  /**
   * @param {!proto.unpack.v1.opcode.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  opcode_service_parameters_pb.Response.deserializeBinary
);


/**
 * @param {!proto.unpack.v1.opcode.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.unpack.v1.opcode.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.unpack.v1.opcode.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.unpack.v1.opcode.ServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/unpack.v1.opcode.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get,
      callback);
};


/**
 * @param {!proto.unpack.v1.opcode.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.unpack.v1.opcode.Response>}
 *     Promise that resolves to the response
 */
proto.unpack.v1.opcode.ServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/unpack.v1.opcode.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.unpack.v1.opcode.Request,
 *   !proto.unpack.v1.opcode.Response>}
 */
const methodDescriptor_Service_Decompile = new grpc.web.MethodDescriptor(
  '/unpack.v1.opcode.Service/Decompile',
  grpc.web.MethodType.UNARY,
  opcode_service_parameters_pb.Request,
  opcode_service_parameters_pb.Response,
  /**
   * @param {!proto.unpack.v1.opcode.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  opcode_service_parameters_pb.Response.deserializeBinary
);


/**
 * @param {!proto.unpack.v1.opcode.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.unpack.v1.opcode.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.unpack.v1.opcode.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.unpack.v1.opcode.ServiceClient.prototype.decompile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/unpack.v1.opcode.Service/Decompile',
      request,
      metadata || {},
      methodDescriptor_Service_Decompile,
      callback);
};


/**
 * @param {!proto.unpack.v1.opcode.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.unpack.v1.opcode.Response>}
 *     Promise that resolves to the response
 */
proto.unpack.v1.opcode.ServicePromiseClient.prototype.decompile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/unpack.v1.opcode.Service/Decompile',
      request,
      metadata || {},
      methodDescriptor_Service_Decompile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.unpack.v1.health.HealthRequest,
 *   !proto.unpack.v1.health.HealthResponse>}
 */
const methodDescriptor_Service_GetHealth = new grpc.web.MethodDescriptor(
  '/unpack.v1.opcode.Service/GetHealth',
  grpc.web.MethodType.UNARY,
  health_health_pb.HealthRequest,
  health_health_pb.HealthResponse,
  /**
   * @param {!proto.unpack.v1.health.HealthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  health_health_pb.HealthResponse.deserializeBinary
);


/**
 * @param {!proto.unpack.v1.health.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.unpack.v1.health.HealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.unpack.v1.health.HealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.unpack.v1.opcode.ServiceClient.prototype.getHealth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/unpack.v1.opcode.Service/GetHealth',
      request,
      metadata || {},
      methodDescriptor_Service_GetHealth,
      callback);
};


/**
 * @param {!proto.unpack.v1.health.HealthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.unpack.v1.health.HealthResponse>}
 *     Promise that resolves to the response
 */
proto.unpack.v1.opcode.ServicePromiseClient.prototype.getHealth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/unpack.v1.opcode.Service/GetHealth',
      request,
      metadata || {},
      methodDescriptor_Service_GetHealth);
};


module.exports = proto.unpack.v1.opcode;

