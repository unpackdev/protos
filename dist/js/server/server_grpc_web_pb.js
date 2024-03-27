/**
 * @fileoverview gRPC-Web generated client stub for unpack.v1.server
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.12.4
// source: server/server.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var server_parameters_pb = require('../server/parameters_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.unpack = {};
proto.unpack.v1 = {};
proto.unpack.v1.server = require('./server_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.unpack.v1.server.UnpackClient =
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
proto.unpack.v1.server.UnpackPromiseClient =
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
 *   !proto.unpack.v1.server.UnpackRequest,
 *   !proto.unpack.v1.server.UnpackResponse>}
 */
const methodDescriptor_Unpack_Unpack = new grpc.web.MethodDescriptor(
  '/unpack.v1.server.Unpack/Unpack',
  grpc.web.MethodType.UNARY,
  server_parameters_pb.UnpackRequest,
  server_parameters_pb.UnpackResponse,
  /**
   * @param {!proto.unpack.v1.server.UnpackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  server_parameters_pb.UnpackResponse.deserializeBinary
);


/**
 * @param {!proto.unpack.v1.server.UnpackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.unpack.v1.server.UnpackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.unpack.v1.server.UnpackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.unpack.v1.server.UnpackClient.prototype.unpack =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/unpack.v1.server.Unpack/Unpack',
      request,
      metadata || {},
      methodDescriptor_Unpack_Unpack,
      callback);
};


/**
 * @param {!proto.unpack.v1.server.UnpackRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.unpack.v1.server.UnpackResponse>}
 *     Promise that resolves to the response
 */
proto.unpack.v1.server.UnpackPromiseClient.prototype.unpack =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/unpack.v1.server.Unpack/Unpack',
      request,
      metadata || {},
      methodDescriptor_Unpack_Unpack);
};


module.exports = proto.unpack.v1.server;
