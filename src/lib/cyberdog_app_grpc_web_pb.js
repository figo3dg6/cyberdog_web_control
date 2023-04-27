/**
 * @fileoverview gRPC-Web generated client stub for cyberdogapp
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.cyberdogapp = require('./cyberdog_app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cyberdogapp.CyberdogAppClient =
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
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.cyberdogapp.CyberdogAppPromiseClient =
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
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.CheckoutMode_request,
 *   !proto.cyberdogapp.CheckoutMode_respond>}
 */
const methodDescriptor_CyberdogApp_setMode = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setMode',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.CheckoutMode_request,
  proto.cyberdogapp.CheckoutMode_respond,
  /**
   * @param {!proto.cyberdogapp.CheckoutMode_request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.CheckoutMode_respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.CheckoutMode_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CheckoutMode_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setMode =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setMode',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setMode);
};


/**
 * @param {!proto.cyberdogapp.CheckoutMode_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CheckoutMode_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setMode =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setMode',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setMode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.CheckoutPattern_request,
 *   !proto.cyberdogapp.CheckoutPattern_respond>}
 */
const methodDescriptor_CyberdogApp_setPattern = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setPattern',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.CheckoutPattern_request,
  proto.cyberdogapp.CheckoutPattern_respond,
  /**
   * @param {!proto.cyberdogapp.CheckoutPattern_request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.CheckoutPattern_respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.CheckoutPattern_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CheckoutPattern_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setPattern =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setPattern',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setPattern);
};


/**
 * @param {!proto.cyberdogapp.CheckoutPattern_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CheckoutPattern_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setPattern =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setPattern',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setPattern);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.BodyRegion_Request,
 *   !proto.cyberdogapp.BodyRegion_Respond>}
 */
const methodDescriptor_CyberdogApp_setFollowRegion = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setFollowRegion',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.BodyRegion_Request,
  proto.cyberdogapp.BodyRegion_Respond,
  /**
   * @param {!proto.cyberdogapp.BodyRegion_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.BodyRegion_Respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.BodyRegion_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.BodyRegion_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setFollowRegion =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setFollowRegion',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setFollowRegion);
};


/**
 * @param {!proto.cyberdogapp.BodyRegion_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.BodyRegion_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setFollowRegion =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setFollowRegion',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setFollowRegion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.CameraService_request,
 *   !proto.cyberdogapp.CameraService_respond>}
 */
const methodDescriptor_CyberdogApp_requestCamera = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/requestCamera',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.CameraService_request,
  proto.cyberdogapp.CameraService_respond,
  /**
   * @param {!proto.cyberdogapp.CameraService_request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.CameraService_respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.CameraService_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CameraService_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.requestCamera =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestCamera',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestCamera);
};


/**
 * @param {!proto.cyberdogapp.CameraService_request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.CameraService_respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.requestCamera =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestCamera',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Voiceprint_Request,
 *   !proto.cyberdogapp.Voiceprint_Response>}
 */
const methodDescriptor_CyberdogApp_requestVoice = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/requestVoice',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.Voiceprint_Request,
  proto.cyberdogapp.Voiceprint_Response,
  /**
   * @param {!proto.cyberdogapp.Voiceprint_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Voiceprint_Response.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Voiceprint_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Voiceprint_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.requestVoice =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestVoice',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestVoice);
};


/**
 * @param {!proto.cyberdogapp.Voiceprint_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Voiceprint_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.requestVoice =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestVoice',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestVoice);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.FaceManager_Request,
 *   !proto.cyberdogapp.FaceManager_Response>}
 */
const methodDescriptor_CyberdogApp_requestFaceManager = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/requestFaceManager',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.FaceManager_Request,
  proto.cyberdogapp.FaceManager_Response,
  /**
   * @param {!proto.cyberdogapp.FaceManager_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.FaceManager_Response.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.FaceManager_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.FaceManager_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.requestFaceManager =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestFaceManager',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestFaceManager);
};


/**
 * @param {!proto.cyberdogapp.FaceManager_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.FaceManager_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.requestFaceManager =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/requestFaceManager',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_requestFaceManager);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Decissage,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_sendAppDecision = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/sendAppDecision',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Decissage,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Decissage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Decissage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.sendAppDecision =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendAppDecision',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendAppDecision,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Decissage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.sendAppDecision =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendAppDecision',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendAppDecision);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.TokenPass_Request,
 *   !proto.cyberdogapp.TokenPass_Response>}
 */
const methodDescriptor_CyberdogApp_sendAiToken = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/sendAiToken',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.TokenPass_Request,
  proto.cyberdogapp.TokenPass_Response,
  /**
   * @param {!proto.cyberdogapp.TokenPass_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.TokenPass_Response.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.TokenPass_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.TokenPass_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.sendAiToken =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendAiToken',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendAiToken);
};


/**
 * @param {!proto.cyberdogapp.TokenPass_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.TokenPass_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.sendAiToken =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendAiToken',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendAiToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Target_Request,
 *   !proto.cyberdogapp.Target_Response>}
 */
const methodDescriptor_CyberdogApp_setNavPosition = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setNavPosition',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.Target_Request,
  proto.cyberdogapp.Target_Response,
  /**
   * @param {!proto.cyberdogapp.Target_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Target_Response.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Target_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Target_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setNavPosition =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setNavPosition',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setNavPosition);
};


/**
 * @param {!proto.cyberdogapp.Target_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Target_Response>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setNavPosition =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setNavPosition',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setNavPosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.ExtMonOrder_Request,
 *   !proto.cyberdogapp.ExtMonOrder_Respond>}
 */
const methodDescriptor_CyberdogApp_setExtmonOrder = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setExtmonOrder',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.ExtMonOrder_Request,
  proto.cyberdogapp.ExtMonOrder_Respond,
  /**
   * @param {!proto.cyberdogapp.ExtMonOrder_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.ExtMonOrder_Respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.ExtMonOrder_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.ExtMonOrder_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setExtmonOrder =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setExtmonOrder',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setExtmonOrder);
};


/**
 * @param {!proto.cyberdogapp.ExtMonOrder_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.ExtMonOrder_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setExtmonOrder =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setExtmonOrder',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setExtmonOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Disconnect,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_disconnect = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/disconnect',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.Disconnect,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Disconnect} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Disconnect} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.disconnect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/disconnect',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_disconnect);
};


/**
 * @param {!proto.cyberdogapp.Disconnect} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.disconnect =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/disconnect',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_disconnect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.BtRemoteCommand_Request,
 *   !proto.cyberdogapp.BtRemoteCommand_Respond>}
 */
const methodDescriptor_CyberdogApp_setBtRemoteCmd = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setBtRemoteCmd',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.BtRemoteCommand_Request,
  proto.cyberdogapp.BtRemoteCommand_Respond,
  /**
   * @param {!proto.cyberdogapp.BtRemoteCommand_Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.BtRemoteCommand_Respond.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.BtRemoteCommand_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.BtRemoteCommand_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setBtRemoteCmd =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setBtRemoteCmd',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setBtRemoteCmd);
};


/**
 * @param {!proto.cyberdogapp.BtRemoteCommand_Request} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.BtRemoteCommand_Respond>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setBtRemoteCmd =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setBtRemoteCmd',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setBtRemoteCmd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Parameters,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_setBodyPara = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setBodyPara',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Parameters,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Parameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Parameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setBodyPara =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setBodyPara',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setBodyPara,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Parameters} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setBodyPara =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setBodyPara',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setBodyPara);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.MotionCommand,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_sendMotionTestRequest = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/sendMotionTestRequest',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.MotionCommand,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.MotionCommand} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.MotionCommand} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.sendMotionTestRequest =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendMotionTestRequest',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendMotionTestRequest,
      callback);
};


/**
 * @param {!proto.cyberdogapp.MotionCommand} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.sendMotionTestRequest =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/sendMotionTestRequest',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_sendMotionTestRequest);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.OffsetRequest,
 *   !proto.cyberdogapp.OffsetCalibationData>}
 */
const methodDescriptor_CyberdogApp_getOffsetData = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/getOffsetData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.OffsetRequest,
  proto.cyberdogapp.OffsetCalibationData,
  /**
   * @param {!proto.cyberdogapp.OffsetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.OffsetCalibationData.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.OffsetRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.OffsetCalibationData>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.getOffsetData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/getOffsetData',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_getOffsetData);
};


/**
 * @param {!proto.cyberdogapp.OffsetRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.OffsetCalibationData>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.getOffsetData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/getOffsetData',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_getOffsetData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.OffsetCalibationData,
 *   !proto.cyberdogapp.OffsetRequest_result>}
 */
const methodDescriptor_CyberdogApp_setOffsetData = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/setOffsetData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cyberdogapp.OffsetCalibationData,
  proto.cyberdogapp.OffsetRequest_result,
  /**
   * @param {!proto.cyberdogapp.OffsetCalibationData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.OffsetRequest_result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.OffsetCalibationData} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.OffsetRequest_result>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.setOffsetData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setOffsetData',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setOffsetData);
};


/**
 * @param {!proto.cyberdogapp.OffsetCalibationData} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.OffsetRequest_result>}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.setOffsetData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cyberdogapp.CyberdogApp/setOffsetData',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_setOffsetData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Bms,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeBms = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeBms',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Bms,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Bms} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Bms} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeBms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeBms',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeBms,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Bms} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeBms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeBms',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeBms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.WifiRssi,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeWifiRssi = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeWifiRssi',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.WifiRssi,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.WifiRssi} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.WifiRssi} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeWifiRssi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeWifiRssi',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeWifiRssi,
      callback);
};


/**
 * @param {!proto.cyberdogapp.WifiRssi} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeWifiRssi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeWifiRssi',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeWifiRssi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.StatusStamped,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeStatus = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeStatus',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.StatusStamped,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.StatusStamped} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.StatusStamped} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeStatus,
      callback);
};


/**
 * @param {!proto.cyberdogapp.StatusStamped} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.TrackingStatus,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeTrackingStatus = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeTrackingStatus',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.TrackingStatus,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.TrackingStatus} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.TrackingStatus} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeTrackingStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeTrackingStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeTrackingStatus,
      callback);
};


/**
 * @param {!proto.cyberdogapp.TrackingStatus} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeTrackingStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeTrackingStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeTrackingStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.BodyInfo,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeBodySelect = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeBodySelect',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.BodyInfo,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.BodyInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.BodyInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeBodySelect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeBodySelect',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeBodySelect,
      callback);
};


/**
 * @param {!proto.cyberdogapp.BodyInfo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeBodySelect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeBodySelect',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeBodySelect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.BodyInfo,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeTracking = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeTracking',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.BodyInfo,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.BodyInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.BodyInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeTracking =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeTracking',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeTracking,
      callback);
};


/**
 * @param {!proto.cyberdogapp.BodyInfo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeTracking =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeTracking',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeTracking);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.OccupancyGrid,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeMap = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeMap',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.OccupancyGrid,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.OccupancyGrid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.OccupancyGrid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeMap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeMap',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeMap,
      callback);
};


/**
 * @param {!proto.cyberdogapp.OccupancyGrid} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeMap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeMap',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeMap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.DecisionStamped,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribePosition = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribePosition',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.DecisionStamped,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.DecisionStamped} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.DecisionStamped} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribePosition =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribePosition',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribePosition,
      callback);
};


/**
 * @param {!proto.cyberdogapp.DecisionStamped} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribePosition =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribePosition',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribePosition);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.VoiceprintResult,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeVoiceprintResult = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeVoiceprintResult',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.VoiceprintResult,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.VoiceprintResult} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.VoiceprintResult} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeVoiceprintResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeVoiceprintResult',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeVoiceprintResult,
      callback);
};


/**
 * @param {!proto.cyberdogapp.VoiceprintResult} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeVoiceprintResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeVoiceprintResult',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeVoiceprintResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.FaceResult,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeFaceResult = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeFaceResult',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.FaceResult,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.FaceResult} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.FaceResult} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeFaceResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeFaceResult',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeFaceResult,
      callback);
};


/**
 * @param {!proto.cyberdogapp.FaceResult} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeFaceResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeFaceResult',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeFaceResult);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Ticks,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_heartbeat = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/heartbeat',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Ticks,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Ticks} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Ticks} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/heartbeat',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_heartbeat,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Ticks} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/heartbeat',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Caution,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeNavStatus = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeNavStatus',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Caution,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Caution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Caution} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeNavStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeNavStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeNavStatus,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Caution} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeNavStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeNavStatus',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeNavStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Odometry,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeOdomOut = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeOdomOut',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Odometry,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Odometry} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Odometry} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeOdomOut =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeOdomOut',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeOdomOut,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Odometry} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeOdomOut =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeOdomOut',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeOdomOut);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Around,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeObstacleDetection = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeObstacleDetection',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Around,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Around} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Around} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeObstacleDetection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeObstacleDetection',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeObstacleDetection,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Around} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeObstacleDetection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeObstacleDetection',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeObstacleDetection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.DogPose,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeDogPose = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeDogPose',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.DogPose,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.DogPose} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.DogPose} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeDogPose =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeDogPose',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeDogPose,
      callback);
};


/**
 * @param {!proto.cyberdogapp.DogPose} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeDogPose =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeDogPose',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeDogPose);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Scene,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeGpsScene = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeGpsScene',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Scene,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Scene} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Scene} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeGpsScene =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeGpsScene',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeGpsScene,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Scene} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeGpsScene =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeGpsScene',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeGpsScene);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.RemoteEvent,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribeRemoteEvent = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribeRemoteEvent',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.RemoteEvent,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.RemoteEvent} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.RemoteEvent} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribeRemoteEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeRemoteEvent',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeRemoteEvent,
      callback);
};


/**
 * @param {!proto.cyberdogapp.RemoteEvent} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribeRemoteEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribeRemoteEvent',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribeRemoteEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cyberdogapp.Path,
 *   !proto.cyberdogapp.Result>}
 */
const methodDescriptor_CyberdogApp_subscribePath = new grpc.web.MethodDescriptor(
  '/cyberdogapp.CyberdogApp/subscribePath',
  grpc.web.MethodType.UNARY,
  proto.cyberdogapp.Path,
  proto.cyberdogapp.Result,
  /**
   * @param {!proto.cyberdogapp.Path} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cyberdogapp.Result.deserializeBinary
);


/**
 * @param {!proto.cyberdogapp.Path} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.cyberdogapp.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cyberdogapp.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cyberdogapp.CyberdogAppClient.prototype.subscribePath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribePath',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribePath,
      callback);
};


/**
 * @param {!proto.cyberdogapp.Path} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cyberdogapp.Result>}
 *     Promise that resolves to the response
 */
proto.cyberdogapp.CyberdogAppPromiseClient.prototype.subscribePath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cyberdogapp.CyberdogApp/subscribePath',
      request,
      metadata || {},
      methodDescriptor_CyberdogApp_subscribePath);
};


module.exports = proto.cyberdogapp;

