// source: cyberdog_app.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.cyberdogapp.Around', null, global);
goog.exportSymbol('proto.cyberdogapp.AudioUser', null, global);
goog.exportSymbol('proto.cyberdogapp.AudioUser.AudioCommand', null, global);
goog.exportSymbol('proto.cyberdogapp.Bms', null, global);
goog.exportSymbol('proto.cyberdogapp.Body', null, global);
goog.exportSymbol('proto.cyberdogapp.BodyInfo', null, global);
goog.exportSymbol('proto.cyberdogapp.BodyRegion_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.BodyRegion_Respond', null, global);
goog.exportSymbol('proto.cyberdogapp.BtRemoteCommand_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.BtRemoteCommand_Request.COMMAND', null, global);
goog.exportSymbol('proto.cyberdogapp.BtRemoteCommand_Respond', null, global);
goog.exportSymbol('proto.cyberdogapp.CameraService_request', null, global);
goog.exportSymbol('proto.cyberdogapp.CameraService_request.Command', null, global);
goog.exportSymbol('proto.cyberdogapp.CameraService_respond', null, global);
goog.exportSymbol('proto.cyberdogapp.CameraService_respond.Result', null, global);
goog.exportSymbol('proto.cyberdogapp.Caution', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutMode_request', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutMode_request.Command', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutMode_request.Type', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutMode_respond', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutPattern_request', null, global);
goog.exportSymbol('proto.cyberdogapp.CheckoutPattern_respond', null, global);
goog.exportSymbol('proto.cyberdogapp.CompressedImage', null, global);
goog.exportSymbol('proto.cyberdogapp.DecisionStamped', null, global);
goog.exportSymbol('proto.cyberdogapp.Decissage', null, global);
goog.exportSymbol('proto.cyberdogapp.Disconnect', null, global);
goog.exportSymbol('proto.cyberdogapp.DogPose', null, global);
goog.exportSymbol('proto.cyberdogapp.ErrorFlag', null, global);
goog.exportSymbol('proto.cyberdogapp.ExtMonOrder_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.ExtMonOrder_Respond', null, global);
goog.exportSymbol('proto.cyberdogapp.ExtMonOrder_Respond.ERR_CODE', null, global);
goog.exportSymbol('proto.cyberdogapp.FaceManager_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.FaceManager_Request.Command', null, global);
goog.exportSymbol('proto.cyberdogapp.FaceManager_Response', null, global);
goog.exportSymbol('proto.cyberdogapp.FaceManager_Response.FaceResult', null, global);
goog.exportSymbol('proto.cyberdogapp.FaceResult', null, global);
goog.exportSymbol('proto.cyberdogapp.Freameid', null, global);
goog.exportSymbol('proto.cyberdogapp.Freameid.FRAMEID', null, global);
goog.exportSymbol('proto.cyberdogapp.Header', null, global);
goog.exportSymbol('proto.cyberdogapp.MapMetaData', null, global);
goog.exportSymbol('proto.cyberdogapp.Mode', null, global);
goog.exportSymbol('proto.cyberdogapp.ModeStamped', null, global);
goog.exportSymbol('proto.cyberdogapp.MonOrder', null, global);
goog.exportSymbol('proto.cyberdogapp.MonOrder.ID', null, global);
goog.exportSymbol('proto.cyberdogapp.MotionCommand', null, global);
goog.exportSymbol('proto.cyberdogapp.MotionCommand.Command', null, global);
goog.exportSymbol('proto.cyberdogapp.OccupancyGrid', null, global);
goog.exportSymbol('proto.cyberdogapp.Odometry', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetCalibationData', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetCalibationData.Result', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetRequest', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetRequest.Gait', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetRequest_result', null, global);
goog.exportSymbol('proto.cyberdogapp.OffsetRequest_result.Result', null, global);
goog.exportSymbol('proto.cyberdogapp.Parameters', null, global);
goog.exportSymbol('proto.cyberdogapp.Path', null, global);
goog.exportSymbol('proto.cyberdogapp.Pattern', null, global);
goog.exportSymbol('proto.cyberdogapp.Pattern.GAIT', null, global);
goog.exportSymbol('proto.cyberdogapp.PatternStamped', null, global);
goog.exportSymbol('proto.cyberdogapp.Point', null, global);
goog.exportSymbol('proto.cyberdogapp.Pose', null, global);
goog.exportSymbol('proto.cyberdogapp.PoseStamped', null, global);
goog.exportSymbol('proto.cyberdogapp.PoseWithCovariance', null, global);
goog.exportSymbol('proto.cyberdogapp.Quaternion', null, global);
goog.exportSymbol('proto.cyberdogapp.Range', null, global);
goog.exportSymbol('proto.cyberdogapp.Range.Radiation', null, global);
goog.exportSymbol('proto.cyberdogapp.RawStatus', null, global);
goog.exportSymbol('proto.cyberdogapp.RegionOfInterest', null, global);
goog.exportSymbol('proto.cyberdogapp.RemoteEvent', null, global);
goog.exportSymbol('proto.cyberdogapp.Result', null, global);
goog.exportSymbol('proto.cyberdogapp.ResultCode', null, global);
goog.exportSymbol('proto.cyberdogapp.Safety', null, global);
goog.exportSymbol('proto.cyberdogapp.Scene', null, global);
goog.exportSymbol('proto.cyberdogapp.Scene.TYPE', null, global);
goog.exportSymbol('proto.cyberdogapp.Source', null, global);
goog.exportSymbol('proto.cyberdogapp.States', null, global);
goog.exportSymbol('proto.cyberdogapp.StatusStamped', null, global);
goog.exportSymbol('proto.cyberdogapp.Target_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.Target_Response', null, global);
goog.exportSymbol('proto.cyberdogapp.Ticks', null, global);
goog.exportSymbol('proto.cyberdogapp.Timestamp', null, global);
goog.exportSymbol('proto.cyberdogapp.Token', null, global);
goog.exportSymbol('proto.cyberdogapp.TokenPass_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.TokenPass_Request.Code', null, global);
goog.exportSymbol('proto.cyberdogapp.TokenPass_Response', null, global);
goog.exportSymbol('proto.cyberdogapp.TokenPass_Response.Code', null, global);
goog.exportSymbol('proto.cyberdogapp.TrackingStatus', null, global);
goog.exportSymbol('proto.cyberdogapp.TrackingStatus.Status', null, global);
goog.exportSymbol('proto.cyberdogapp.Twist', null, global);
goog.exportSymbol('proto.cyberdogapp.TwistWithCovariance', null, global);
goog.exportSymbol('proto.cyberdogapp.Ultrasonic', null, global);
goog.exportSymbol('proto.cyberdogapp.Vector3', null, global);
goog.exportSymbol('proto.cyberdogapp.VoiceprintEntry', null, global);
goog.exportSymbol('proto.cyberdogapp.VoiceprintEntry.VoiceCommand', null, global);
goog.exportSymbol('proto.cyberdogapp.VoiceprintResult', null, global);
goog.exportSymbol('proto.cyberdogapp.VoiceprintResult.ErrorCode', null, global);
goog.exportSymbol('proto.cyberdogapp.Voiceprint_Request', null, global);
goog.exportSymbol('proto.cyberdogapp.Voiceprint_Response', null, global);
goog.exportSymbol('proto.cyberdogapp.WifiRssi', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.Path.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Path.displayName = 'proto.cyberdogapp.Path';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.PoseStamped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.PoseStamped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.PoseStamped.displayName = 'proto.cyberdogapp.PoseStamped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.RemoteEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.RemoteEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.RemoteEvent.displayName = 'proto.cyberdogapp.RemoteEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.BtRemoteCommand_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.BtRemoteCommand_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.BtRemoteCommand_Request.displayName = 'proto.cyberdogapp.BtRemoteCommand_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.BtRemoteCommand_Respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.BtRemoteCommand_Respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.BtRemoteCommand_Respond.displayName = 'proto.cyberdogapp.BtRemoteCommand_Respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Disconnect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Disconnect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Disconnect.displayName = 'proto.cyberdogapp.Disconnect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.ExtMonOrder_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.ExtMonOrder_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.ExtMonOrder_Request.displayName = 'proto.cyberdogapp.ExtMonOrder_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.ExtMonOrder_Respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.ExtMonOrder_Respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.ExtMonOrder_Respond.displayName = 'proto.cyberdogapp.ExtMonOrder_Respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Freameid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Freameid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Freameid.displayName = 'proto.cyberdogapp.Freameid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.DogPose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.DogPose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.DogPose.displayName = 'proto.cyberdogapp.DogPose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.OffsetRequest_result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.OffsetRequest_result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.OffsetRequest_result.displayName = 'proto.cyberdogapp.OffsetRequest_result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.OffsetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.OffsetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.OffsetRequest.displayName = 'proto.cyberdogapp.OffsetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.OffsetCalibationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.OffsetCalibationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.OffsetCalibationData.displayName = 'proto.cyberdogapp.OffsetCalibationData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.MotionCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.MotionCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.MotionCommand.displayName = 'proto.cyberdogapp.MotionCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Around = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Around, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Around.displayName = 'proto.cyberdogapp.Around';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Ultrasonic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Ultrasonic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Ultrasonic.displayName = 'proto.cyberdogapp.Ultrasonic';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Range = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Range, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Range.displayName = 'proto.cyberdogapp.Range';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Caution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Caution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Caution.displayName = 'proto.cyberdogapp.Caution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Ticks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Ticks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Ticks.displayName = 'proto.cyberdogapp.Ticks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.WifiRssi = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.WifiRssi, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.WifiRssi.displayName = 'proto.cyberdogapp.WifiRssi';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Mode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Mode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Mode.displayName = 'proto.cyberdogapp.Mode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Pattern = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Pattern, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Pattern.displayName = 'proto.cyberdogapp.Pattern';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Result = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Result, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Result.displayName = 'proto.cyberdogapp.Result';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Decissage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Decissage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Decissage.displayName = 'proto.cyberdogapp.Decissage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Safety = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Safety, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Safety.displayName = 'proto.cyberdogapp.Safety';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Parameters.displayName = 'proto.cyberdogapp.Parameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Twist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Twist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Twist.displayName = 'proto.cyberdogapp.Twist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Pose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Pose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Pose.displayName = 'proto.cyberdogapp.Pose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Vector3.displayName = 'proto.cyberdogapp.Vector3';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Point.displayName = 'proto.cyberdogapp.Point';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Quaternion.displayName = 'proto.cyberdogapp.Quaternion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Bms = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Bms, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Bms.displayName = 'proto.cyberdogapp.Bms';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.StatusStamped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.StatusStamped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.StatusStamped.displayName = 'proto.cyberdogapp.StatusStamped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.ErrorFlag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.ErrorFlag.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.ErrorFlag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.ErrorFlag.displayName = 'proto.cyberdogapp.ErrorFlag';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.RawStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.RawStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.RawStatus.displayName = 'proto.cyberdogapp.RawStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.States = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.States, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.States.displayName = 'proto.cyberdogapp.States';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Header.displayName = 'proto.cyberdogapp.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Timestamp.displayName = 'proto.cyberdogapp.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.TwistWithCovariance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.TwistWithCovariance.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.TwistWithCovariance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.TwistWithCovariance.displayName = 'proto.cyberdogapp.TwistWithCovariance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.PoseWithCovariance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.PoseWithCovariance.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.PoseWithCovariance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.PoseWithCovariance.displayName = 'proto.cyberdogapp.PoseWithCovariance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Scene = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Scene, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Scene.displayName = 'proto.cyberdogapp.Scene';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.DecisionStamped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.DecisionStamped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.DecisionStamped.displayName = 'proto.cyberdogapp.DecisionStamped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Source = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Source, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Source.displayName = 'proto.cyberdogapp.Source';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.ModeStamped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.ModeStamped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.ModeStamped.displayName = 'proto.cyberdogapp.ModeStamped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CheckoutMode_request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CheckoutMode_request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CheckoutMode_request.displayName = 'proto.cyberdogapp.CheckoutMode_request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CheckoutMode_respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CheckoutMode_respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CheckoutMode_respond.displayName = 'proto.cyberdogapp.CheckoutMode_respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.PatternStamped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.PatternStamped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.PatternStamped.displayName = 'proto.cyberdogapp.PatternStamped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CheckoutPattern_request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CheckoutPattern_request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CheckoutPattern_request.displayName = 'proto.cyberdogapp.CheckoutPattern_request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CheckoutPattern_respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CheckoutPattern_respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CheckoutPattern_respond.displayName = 'proto.cyberdogapp.CheckoutPattern_respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.TrackingStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.TrackingStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.TrackingStatus.displayName = 'proto.cyberdogapp.TrackingStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.BodyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.BodyInfo.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.BodyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.BodyInfo.displayName = 'proto.cyberdogapp.BodyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Body = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Body, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Body.displayName = 'proto.cyberdogapp.Body';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.BodyRegion_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.BodyRegion_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.BodyRegion_Request.displayName = 'proto.cyberdogapp.BodyRegion_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.BodyRegion_Respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.BodyRegion_Respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.BodyRegion_Respond.displayName = 'proto.cyberdogapp.BodyRegion_Respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.RegionOfInterest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.RegionOfInterest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.RegionOfInterest.displayName = 'proto.cyberdogapp.RegionOfInterest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.MonOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.MonOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.MonOrder.displayName = 'proto.cyberdogapp.MonOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CameraService_request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CameraService_request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CameraService_request.displayName = 'proto.cyberdogapp.CameraService_request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CameraService_respond = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.CameraService_respond, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CameraService_respond.displayName = 'proto.cyberdogapp.CameraService_respond';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.FaceManager_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.FaceManager_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.FaceManager_Request.displayName = 'proto.cyberdogapp.FaceManager_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.FaceManager_Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.FaceManager_Response.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.FaceManager_Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.FaceManager_Response.displayName = 'proto.cyberdogapp.FaceManager_Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.CompressedImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.CompressedImage.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.CompressedImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.CompressedImage.displayName = 'proto.cyberdogapp.CompressedImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Target_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Target_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Target_Request.displayName = 'proto.cyberdogapp.Target_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.MapMetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.MapMetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.MapMetaData.displayName = 'proto.cyberdogapp.MapMetaData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Target_Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Target_Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Target_Response.displayName = 'proto.cyberdogapp.Target_Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Odometry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Odometry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Odometry.displayName = 'proto.cyberdogapp.Odometry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.OccupancyGrid = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.OccupancyGrid.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.OccupancyGrid, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.OccupancyGrid.displayName = 'proto.cyberdogapp.OccupancyGrid';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.FaceResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cyberdogapp.FaceResult.repeatedFields_, null);
};
goog.inherits(proto.cyberdogapp.FaceResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.FaceResult.displayName = 'proto.cyberdogapp.FaceResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.VoiceprintResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.VoiceprintResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.VoiceprintResult.displayName = 'proto.cyberdogapp.VoiceprintResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Voiceprint_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Voiceprint_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Voiceprint_Request.displayName = 'proto.cyberdogapp.Voiceprint_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.VoiceprintEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.VoiceprintEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.VoiceprintEntry.displayName = 'proto.cyberdogapp.VoiceprintEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.AudioUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.AudioUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.AudioUser.displayName = 'proto.cyberdogapp.AudioUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Voiceprint_Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Voiceprint_Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Voiceprint_Response.displayName = 'proto.cyberdogapp.Voiceprint_Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.TokenPass_Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.TokenPass_Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.TokenPass_Request.displayName = 'proto.cyberdogapp.TokenPass_Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.Token = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.Token, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.Token.displayName = 'proto.cyberdogapp.Token';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cyberdogapp.TokenPass_Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cyberdogapp.TokenPass_Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cyberdogapp.TokenPass_Response.displayName = 'proto.cyberdogapp.TokenPass_Response';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.Path.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    posestampedList: jspb.Message.toObjectList(msg.getPosestampedList(),
    proto.cyberdogapp.PoseStamped.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Path}
 */
proto.cyberdogapp.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Path;
  return proto.cyberdogapp.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Path}
 */
proto.cyberdogapp.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.PoseStamped;
      reader.readMessage(value,proto.cyberdogapp.PoseStamped.deserializeBinaryFromReader);
      msg.addPosestamped(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getPosestampedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.cyberdogapp.PoseStamped.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Path.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.Path} returns this
*/
proto.cyberdogapp.Path.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Path} returns this
 */
proto.cyberdogapp.Path.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Path.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PoseStamped posestamped = 2;
 * @return {!Array<!proto.cyberdogapp.PoseStamped>}
 */
proto.cyberdogapp.Path.prototype.getPosestampedList = function() {
  return /** @type{!Array<!proto.cyberdogapp.PoseStamped>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cyberdogapp.PoseStamped, 2));
};


/**
 * @param {!Array<!proto.cyberdogapp.PoseStamped>} value
 * @return {!proto.cyberdogapp.Path} returns this
*/
proto.cyberdogapp.Path.prototype.setPosestampedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cyberdogapp.PoseStamped=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.PoseStamped}
 */
proto.cyberdogapp.Path.prototype.addPosestamped = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cyberdogapp.PoseStamped, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.Path} returns this
 */
proto.cyberdogapp.Path.prototype.clearPosestampedList = function() {
  return this.setPosestampedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.PoseStamped.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.PoseStamped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.PoseStamped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PoseStamped.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    pose: (f = msg.getPose()) && proto.cyberdogapp.Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.PoseStamped}
 */
proto.cyberdogapp.PoseStamped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.PoseStamped;
  return proto.cyberdogapp.PoseStamped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.PoseStamped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.PoseStamped}
 */
proto.cyberdogapp.PoseStamped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Pose;
      reader.readMessage(value,proto.cyberdogapp.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.PoseStamped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.PoseStamped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.PoseStamped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PoseStamped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.PoseStamped.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.PoseStamped} returns this
*/
proto.cyberdogapp.PoseStamped.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.PoseStamped} returns this
 */
proto.cyberdogapp.PoseStamped.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.PoseStamped.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pose pose = 2;
 * @return {?proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.PoseStamped.prototype.getPose = function() {
  return /** @type{?proto.cyberdogapp.Pose} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pose, 2));
};


/**
 * @param {?proto.cyberdogapp.Pose|undefined} value
 * @return {!proto.cyberdogapp.PoseStamped} returns this
*/
proto.cyberdogapp.PoseStamped.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.PoseStamped} returns this
 */
proto.cyberdogapp.PoseStamped.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.PoseStamped.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.RemoteEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.RemoteEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.RemoteEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RemoteEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    scanStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
    remoteStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scanDeviceInfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    error: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.RemoteEvent}
 */
proto.cyberdogapp.RemoteEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.RemoteEvent;
  return proto.cyberdogapp.RemoteEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.RemoteEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.RemoteEvent}
 */
proto.cyberdogapp.RemoteEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setScanStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRemoteStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setScanDeviceInfo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.RemoteEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.RemoteEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.RemoteEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RemoteEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScanStatus();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getRemoteStatus();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScanDeviceInfo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional fixed32 scan_status = 1;
 * @return {number}
 */
proto.cyberdogapp.RemoteEvent.prototype.getScanStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RemoteEvent} returns this
 */
proto.cyberdogapp.RemoteEvent.prototype.setScanStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 remote_status = 2;
 * @return {number}
 */
proto.cyberdogapp.RemoteEvent.prototype.getRemoteStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RemoteEvent} returns this
 */
proto.cyberdogapp.RemoteEvent.prototype.setRemoteStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.cyberdogapp.RemoteEvent.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.RemoteEvent} returns this
 */
proto.cyberdogapp.RemoteEvent.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string scan_device_info = 4;
 * @return {string}
 */
proto.cyberdogapp.RemoteEvent.prototype.getScanDeviceInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.RemoteEvent} returns this
 */
proto.cyberdogapp.RemoteEvent.prototype.setScanDeviceInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string error = 5;
 * @return {string}
 */
proto.cyberdogapp.RemoteEvent.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.RemoteEvent} returns this
 */
proto.cyberdogapp.RemoteEvent.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.BtRemoteCommand_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.BtRemoteCommand_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BtRemoteCommand_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.BtRemoteCommand_Request}
 */
proto.cyberdogapp.BtRemoteCommand_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.BtRemoteCommand_Request;
  return proto.cyberdogapp.BtRemoteCommand_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.BtRemoteCommand_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.BtRemoteCommand_Request}
 */
proto.cyberdogapp.BtRemoteCommand_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.BtRemoteCommand_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.BtRemoteCommand_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BtRemoteCommand_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.BtRemoteCommand_Request.COMMAND = {
  GET_STATUS: 0,
  SCAN_DEVICE: 1,
  CONNECT_DEVICE: 2,
  DISCONNECT_DEVICE: 3,
  REMOTE_RECONNECT_DEVICE: 4
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.BtRemoteCommand_Request} returns this
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.BtRemoteCommand_Request} returns this
 */
proto.cyberdogapp.BtRemoteCommand_Request.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.BtRemoteCommand_Respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.BtRemoteCommand_Respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.BtRemoteCommand_Respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BtRemoteCommand_Respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.BtRemoteCommand_Respond}
 */
proto.cyberdogapp.BtRemoteCommand_Respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.BtRemoteCommand_Respond;
  return proto.cyberdogapp.BtRemoteCommand_Respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.BtRemoteCommand_Respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.BtRemoteCommand_Respond}
 */
proto.cyberdogapp.BtRemoteCommand_Respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.BtRemoteCommand_Respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.BtRemoteCommand_Respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.BtRemoteCommand_Respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BtRemoteCommand_Respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.cyberdogapp.BtRemoteCommand_Respond.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.BtRemoteCommand_Respond} returns this
 */
proto.cyberdogapp.BtRemoteCommand_Respond.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Disconnect.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Disconnect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Disconnect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Disconnect.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Disconnect}
 */
proto.cyberdogapp.Disconnect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Disconnect;
  return proto.cyberdogapp.Disconnect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Disconnect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Disconnect}
 */
proto.cyberdogapp.Disconnect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Disconnect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Disconnect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Disconnect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Disconnect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * optional fixed32 reason = 1;
 * @return {number}
 */
proto.cyberdogapp.Disconnect.prototype.getReason = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Disconnect} returns this
 */
proto.cyberdogapp.Disconnect.prototype.setReason = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.ExtMonOrder_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.ExtMonOrder_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ExtMonOrder_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.cyberdogapp.MonOrder.toObject(includeInstance, f),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.ExtMonOrder_Request}
 */
proto.cyberdogapp.ExtMonOrder_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.ExtMonOrder_Request;
  return proto.cyberdogapp.ExtMonOrder_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.ExtMonOrder_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.ExtMonOrder_Request}
 */
proto.cyberdogapp.ExtMonOrder_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.MonOrder;
      reader.readMessage(value,proto.cyberdogapp.MonOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.ExtMonOrder_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.ExtMonOrder_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ExtMonOrder_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.MonOrder.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional MonOrder order = 1;
 * @return {?proto.cyberdogapp.MonOrder}
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.getOrder = function() {
  return /** @type{?proto.cyberdogapp.MonOrder} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MonOrder, 1));
};


/**
 * @param {?proto.cyberdogapp.MonOrder|undefined} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Request} returns this
*/
proto.cyberdogapp.ExtMonOrder_Request.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.ExtMonOrder_Request} returns this
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 timeout = 2;
 * @return {number}
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Request} returns this
 */
proto.cyberdogapp.ExtMonOrder_Request.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.ExtMonOrder_Respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.ExtMonOrder_Respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ExtMonOrder_Respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.cyberdogapp.MonOrder.toObject(includeInstance, f),
    errCode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    succeed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isFeedback: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    requestId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond}
 */
proto.cyberdogapp.ExtMonOrder_Respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.ExtMonOrder_Respond;
  return proto.cyberdogapp.ExtMonOrder_Respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.ExtMonOrder_Respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond}
 */
proto.cyberdogapp.ExtMonOrder_Respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.MonOrder;
      reader.readMessage(value,proto.cyberdogapp.MonOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setErrCode(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceed(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeedback(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.ExtMonOrder_Respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.ExtMonOrder_Respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ExtMonOrder_Respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.MonOrder.serializeBinaryToWriter
    );
  }
  f = message.getErrCode();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getSucceed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsFeedback();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.ExtMonOrder_Respond.ERR_CODE = {
  NORMAL: 0,
  EXE_FAILED: 1,
  REJECT: 2,
  CANCELED: 4,
  BAD_TIMESTAMP: 8
};

/**
 * optional MonOrder order = 1;
 * @return {?proto.cyberdogapp.MonOrder}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.getOrder = function() {
  return /** @type{?proto.cyberdogapp.MonOrder} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MonOrder, 1));
};


/**
 * @param {?proto.cyberdogapp.MonOrder|undefined} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
*/
proto.cyberdogapp.ExtMonOrder_Respond.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 err_code = 2;
 * @return {number}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.getErrCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.setErrCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool succeed = 3;
 * @return {boolean}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.getSucceed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.setSucceed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_feedback = 4;
 * @return {boolean}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.getIsFeedback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.setIsFeedback = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional fixed32 request_id = 5;
 * @return {number}
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ExtMonOrder_Respond} returns this
 */
proto.cyberdogapp.ExtMonOrder_Respond.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Freameid.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Freameid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Freameid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Freameid.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Freameid}
 */
proto.cyberdogapp.Freameid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Freameid;
  return proto.cyberdogapp.Freameid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Freameid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Freameid}
 */
proto.cyberdogapp.Freameid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Freameid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Freameid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Freameid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Freameid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.Freameid.FRAMEID = {
  DEFAULT_FRAME: 0,
  BODY_FRAME: 1,
  ODOM_FRAME: 2,
  VISION_FRAME: 3,
  NAVI_FRAME: 4
};

/**
 * optional fixed32 id = 1;
 * @return {number}
 */
proto.cyberdogapp.Freameid.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Freameid} returns this
 */
proto.cyberdogapp.Freameid.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.DogPose.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.DogPose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.DogPose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.DogPose.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameid: (f = msg.getFrameid()) && proto.cyberdogapp.Freameid.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && proto.cyberdogapp.Timestamp.toObject(includeInstance, f),
    positionX: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    positionY: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    positionZ: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    rotationW: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    rotationX: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    rotationY: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    rotationZ: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.DogPose}
 */
proto.cyberdogapp.DogPose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.DogPose;
  return proto.cyberdogapp.DogPose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.DogPose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.DogPose}
 */
proto.cyberdogapp.DogPose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Freameid;
      reader.readMessage(value,proto.cyberdogapp.Freameid.deserializeBinaryFromReader);
      msg.setFrameid(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Timestamp;
      reader.readMessage(value,proto.cyberdogapp.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionY(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionZ(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationW(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationX(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationY(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.DogPose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.DogPose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.DogPose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.DogPose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Freameid.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPositionX();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPositionY();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getPositionZ();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getRotationW();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getRotationX();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getRotationY();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getRotationZ();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
};


/**
 * optional Freameid frameid = 1;
 * @return {?proto.cyberdogapp.Freameid}
 */
proto.cyberdogapp.DogPose.prototype.getFrameid = function() {
  return /** @type{?proto.cyberdogapp.Freameid} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Freameid, 1));
};


/**
 * @param {?proto.cyberdogapp.Freameid|undefined} value
 * @return {!proto.cyberdogapp.DogPose} returns this
*/
proto.cyberdogapp.DogPose.prototype.setFrameid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.clearFrameid = function() {
  return this.setFrameid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.DogPose.prototype.hasFrameid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Timestamp timestamp = 2;
 * @return {?proto.cyberdogapp.Timestamp}
 */
proto.cyberdogapp.DogPose.prototype.getTimestamp = function() {
  return /** @type{?proto.cyberdogapp.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Timestamp, 2));
};


/**
 * @param {?proto.cyberdogapp.Timestamp|undefined} value
 * @return {!proto.cyberdogapp.DogPose} returns this
*/
proto.cyberdogapp.DogPose.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.DogPose.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double position_x = 3;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getPositionX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setPositionX = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double position_y = 4;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getPositionY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setPositionY = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double position_z = 5;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getPositionZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setPositionZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double rotation_w = 6;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getRotationW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setRotationW = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double rotation_x = 7;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getRotationX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setRotationX = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double rotation_y = 8;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getRotationY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setRotationY = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double rotation_z = 9;
 * @return {number}
 */
proto.cyberdogapp.DogPose.prototype.getRotationZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.DogPose} returns this
 */
proto.cyberdogapp.DogPose.prototype.setRotationZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.OffsetRequest_result.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.OffsetRequest_result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.OffsetRequest_result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetRequest_result.toObject = function(includeInstance, msg) {
  var f, obj = {
    gait: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.OffsetRequest_result}
 */
proto.cyberdogapp.OffsetRequest_result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.OffsetRequest_result;
  return proto.cyberdogapp.OffsetRequest_result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.OffsetRequest_result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.OffsetRequest_result}
 */
proto.cyberdogapp.OffsetRequest_result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setGait(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.OffsetRequest_result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.OffsetRequest_result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.OffsetRequest_result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetRequest_result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGait();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.OffsetRequest_result.Result = {
  SUCCESS: 0,
  FAILED: 1
};

/**
 * optional fixed32 gait = 1;
 * @return {number}
 */
proto.cyberdogapp.OffsetRequest_result.prototype.getGait = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetRequest_result} returns this
 */
proto.cyberdogapp.OffsetRequest_result.prototype.setGait = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 result = 2;
 * @return {number}
 */
proto.cyberdogapp.OffsetRequest_result.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetRequest_result} returns this
 */
proto.cyberdogapp.OffsetRequest_result.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.OffsetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.OffsetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.OffsetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gait: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.OffsetRequest}
 */
proto.cyberdogapp.OffsetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.OffsetRequest;
  return proto.cyberdogapp.OffsetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.OffsetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.OffsetRequest}
 */
proto.cyberdogapp.OffsetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setGait(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.OffsetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.OffsetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.OffsetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGait();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.OffsetRequest.Gait = {
  WALK: 0,
  TROT: 1,
  FLY_TROT: 2,
  SLOW_TROT: 3
};

/**
 * optional fixed32 gait = 1;
 * @return {number}
 */
proto.cyberdogapp.OffsetRequest.prototype.getGait = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetRequest} returns this
 */
proto.cyberdogapp.OffsetRequest.prototype.setGait = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.OffsetCalibationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.OffsetCalibationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetCalibationData.toObject = function(includeInstance, msg) {
  var f, obj = {
    gait: jspb.Message.getFieldWithDefault(msg, 1, 0),
    xOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    yawOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    result: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.OffsetCalibationData}
 */
proto.cyberdogapp.OffsetCalibationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.OffsetCalibationData;
  return proto.cyberdogapp.OffsetCalibationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.OffsetCalibationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.OffsetCalibationData}
 */
proto.cyberdogapp.OffsetCalibationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setGait(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setXOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYOffset(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYawOffset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.OffsetCalibationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.OffsetCalibationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OffsetCalibationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGait();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getXOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getYOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getYawOffset();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getResult();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.OffsetCalibationData.Result = {
  SUCCESS: 0,
  FAILED: 1
};

/**
 * optional fixed32 gait = 1;
 * @return {number}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.getGait = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetCalibationData} returns this
 */
proto.cyberdogapp.OffsetCalibationData.prototype.setGait = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double x_offset = 2;
 * @return {number}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.getXOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetCalibationData} returns this
 */
proto.cyberdogapp.OffsetCalibationData.prototype.setXOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double y_offset = 3;
 * @return {number}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.getYOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetCalibationData} returns this
 */
proto.cyberdogapp.OffsetCalibationData.prototype.setYOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double yaw_offset = 4;
 * @return {number}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.getYawOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetCalibationData} returns this
 */
proto.cyberdogapp.OffsetCalibationData.prototype.setYawOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional fixed32 result = 5;
 * @return {number}
 */
proto.cyberdogapp.OffsetCalibationData.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.OffsetCalibationData} returns this
 */
proto.cyberdogapp.OffsetCalibationData.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.MotionCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.MotionCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.MotionCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MotionCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.MotionCommand}
 */
proto.cyberdogapp.MotionCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.MotionCommand;
  return proto.cyberdogapp.MotionCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.MotionCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.MotionCommand}
 */
proto.cyberdogapp.MotionCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.MotionCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.MotionCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.MotionCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MotionCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.MotionCommand.Command = {
  DEFAULT: 0,
  TEST_INIT: 1,
  TEST_DEINIT: 2,
  TEST_START: 3,
  TEST_STOP: 4,
  TURN_LEFT: 5,
  TURN_RIGHT: 6,
  GO_AHEAD: 7,
  GO_BACK: 8,
  GO_LEFT: 9,
  GO_RIGHT: 10
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.MotionCommand.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MotionCommand} returns this
 */
proto.cyberdogapp.MotionCommand.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Around.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Around.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Around} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Around.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontDistance: (f = msg.getFrontDistance()) && proto.cyberdogapp.Ultrasonic.toObject(includeInstance, f),
    backDistance: (f = msg.getBackDistance()) && proto.cyberdogapp.Ultrasonic.toObject(includeInstance, f),
    leftDistance: (f = msg.getLeftDistance()) && proto.cyberdogapp.Ultrasonic.toObject(includeInstance, f),
    rightDistance: (f = msg.getRightDistance()) && proto.cyberdogapp.Ultrasonic.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Around}
 */
proto.cyberdogapp.Around.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Around;
  return proto.cyberdogapp.Around.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Around} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Around}
 */
proto.cyberdogapp.Around.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Ultrasonic;
      reader.readMessage(value,proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader);
      msg.setFrontDistance(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Ultrasonic;
      reader.readMessage(value,proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader);
      msg.setBackDistance(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Ultrasonic;
      reader.readMessage(value,proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader);
      msg.setLeftDistance(value);
      break;
    case 4:
      var value = new proto.cyberdogapp.Ultrasonic;
      reader.readMessage(value,proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader);
      msg.setRightDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Around.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Around.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Around} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Around.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontDistance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter
    );
  }
  f = message.getBackDistance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter
    );
  }
  f = message.getLeftDistance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter
    );
  }
  f = message.getRightDistance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ultrasonic front_distance = 1;
 * @return {?proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Around.prototype.getFrontDistance = function() {
  return /** @type{?proto.cyberdogapp.Ultrasonic} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Ultrasonic, 1));
};


/**
 * @param {?proto.cyberdogapp.Ultrasonic|undefined} value
 * @return {!proto.cyberdogapp.Around} returns this
*/
proto.cyberdogapp.Around.prototype.setFrontDistance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Around} returns this
 */
proto.cyberdogapp.Around.prototype.clearFrontDistance = function() {
  return this.setFrontDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Around.prototype.hasFrontDistance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ultrasonic back_distance = 2;
 * @return {?proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Around.prototype.getBackDistance = function() {
  return /** @type{?proto.cyberdogapp.Ultrasonic} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Ultrasonic, 2));
};


/**
 * @param {?proto.cyberdogapp.Ultrasonic|undefined} value
 * @return {!proto.cyberdogapp.Around} returns this
*/
proto.cyberdogapp.Around.prototype.setBackDistance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Around} returns this
 */
proto.cyberdogapp.Around.prototype.clearBackDistance = function() {
  return this.setBackDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Around.prototype.hasBackDistance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ultrasonic left_distance = 3;
 * @return {?proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Around.prototype.getLeftDistance = function() {
  return /** @type{?proto.cyberdogapp.Ultrasonic} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Ultrasonic, 3));
};


/**
 * @param {?proto.cyberdogapp.Ultrasonic|undefined} value
 * @return {!proto.cyberdogapp.Around} returns this
*/
proto.cyberdogapp.Around.prototype.setLeftDistance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Around} returns this
 */
proto.cyberdogapp.Around.prototype.clearLeftDistance = function() {
  return this.setLeftDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Around.prototype.hasLeftDistance = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Ultrasonic right_distance = 4;
 * @return {?proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Around.prototype.getRightDistance = function() {
  return /** @type{?proto.cyberdogapp.Ultrasonic} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Ultrasonic, 4));
};


/**
 * @param {?proto.cyberdogapp.Ultrasonic|undefined} value
 * @return {!proto.cyberdogapp.Around} returns this
*/
proto.cyberdogapp.Around.prototype.setRightDistance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Around} returns this
 */
proto.cyberdogapp.Around.prototype.clearRightDistance = function() {
  return this.setRightDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Around.prototype.hasRightDistance = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Ultrasonic.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Ultrasonic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Ultrasonic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Ultrasonic.toObject = function(includeInstance, msg) {
  var f, obj = {
    rangeInfo: (f = msg.getRangeInfo()) && proto.cyberdogapp.Range.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Ultrasonic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Ultrasonic;
  return proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Ultrasonic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Ultrasonic}
 */
proto.cyberdogapp.Ultrasonic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Range;
      reader.readMessage(value,proto.cyberdogapp.Range.deserializeBinaryFromReader);
      msg.setRangeInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Ultrasonic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Ultrasonic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Ultrasonic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRangeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Range.serializeBinaryToWriter
    );
  }
};


/**
 * optional Range range_info = 1;
 * @return {?proto.cyberdogapp.Range}
 */
proto.cyberdogapp.Ultrasonic.prototype.getRangeInfo = function() {
  return /** @type{?proto.cyberdogapp.Range} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Range, 1));
};


/**
 * @param {?proto.cyberdogapp.Range|undefined} value
 * @return {!proto.cyberdogapp.Ultrasonic} returns this
*/
proto.cyberdogapp.Ultrasonic.prototype.setRangeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Ultrasonic} returns this
 */
proto.cyberdogapp.Ultrasonic.prototype.clearRangeInfo = function() {
  return this.setRangeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Ultrasonic.prototype.hasRangeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Range.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Range.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Range} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Range.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    radiationType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fieldOfView: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    minRange: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    maxRange: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    range: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Range}
 */
proto.cyberdogapp.Range.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Range;
  return proto.cyberdogapp.Range.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Range} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Range}
 */
proto.cyberdogapp.Range.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRadiationType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFieldOfView(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinRange(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxRange(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Range.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Range.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Range} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Range.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getRadiationType();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getFieldOfView();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMinRange();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMaxRange();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getRange();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.Range.Radiation = {
  ULTRASOUND: 0,
  INFRARED: 1
};

/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Range.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.Range} returns this
*/
proto.cyberdogapp.Range.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Range.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 radiation_type = 2;
 * @return {number}
 */
proto.cyberdogapp.Range.prototype.getRadiationType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.setRadiationType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float field_of_view = 3;
 * @return {number}
 */
proto.cyberdogapp.Range.prototype.getFieldOfView = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.setFieldOfView = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float min_range = 4;
 * @return {number}
 */
proto.cyberdogapp.Range.prototype.getMinRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.setMinRange = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float max_range = 5;
 * @return {number}
 */
proto.cyberdogapp.Range.prototype.getMaxRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.setMaxRange = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float range = 6;
 * @return {number}
 */
proto.cyberdogapp.Range.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Range} returns this
 */
proto.cyberdogapp.Range.prototype.setRange = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Caution.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Caution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Caution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Caution.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    robotMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Caution}
 */
proto.cyberdogapp.Caution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Caution;
  return proto.cyberdogapp.Caution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Caution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Caution}
 */
proto.cyberdogapp.Caution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setErrorType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRobotMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Caution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Caution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Caution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Caution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorType();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getRobotMode();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional fixed32 error_type = 1;
 * @return {number}
 */
proto.cyberdogapp.Caution.prototype.getErrorType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Caution} returns this
 */
proto.cyberdogapp.Caution.prototype.setErrorType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 robot_mode = 2;
 * @return {number}
 */
proto.cyberdogapp.Caution.prototype.getRobotMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Caution} returns this
 */
proto.cyberdogapp.Caution.prototype.setRobotMode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Ticks.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Ticks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Ticks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Ticks.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Ticks}
 */
proto.cyberdogapp.Ticks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Ticks;
  return proto.cyberdogapp.Ticks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Ticks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Ticks}
 */
proto.cyberdogapp.Ticks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Ticks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Ticks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Ticks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Ticks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.cyberdogapp.Ticks.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Ticks} returns this
 */
proto.cyberdogapp.Ticks.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.WifiRssi.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.WifiRssi.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.WifiRssi} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.WifiRssi.toObject = function(includeInstance, msg) {
  var f, obj = {
    rssi: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.WifiRssi}
 */
proto.cyberdogapp.WifiRssi.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.WifiRssi;
  return proto.cyberdogapp.WifiRssi.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.WifiRssi} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.WifiRssi}
 */
proto.cyberdogapp.WifiRssi.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRssi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.WifiRssi.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.WifiRssi.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.WifiRssi} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.WifiRssi.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRssi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rssi = 1;
 * @return {string}
 */
proto.cyberdogapp.WifiRssi.prototype.getRssi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.WifiRssi} returns this
 */
proto.cyberdogapp.WifiRssi.prototype.setRssi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Mode.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Mode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Mode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Mode.toObject = function(includeInstance, msg) {
  var f, obj = {
    controlMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    modeType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Mode}
 */
proto.cyberdogapp.Mode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Mode;
  return proto.cyberdogapp.Mode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Mode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Mode}
 */
proto.cyberdogapp.Mode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setControlMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setModeType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Mode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Mode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Mode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Mode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getControlMode();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getModeType();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional fixed32 control_mode = 1;
 * @return {number}
 */
proto.cyberdogapp.Mode.prototype.getControlMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Mode} returns this
 */
proto.cyberdogapp.Mode.prototype.setControlMode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 mode_type = 2;
 * @return {number}
 */
proto.cyberdogapp.Mode.prototype.getModeType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Mode} returns this
 */
proto.cyberdogapp.Mode.prototype.setModeType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Pattern.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Pattern.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Pattern} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Pattern.toObject = function(includeInstance, msg) {
  var f, obj = {
    gaitPattern: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.Pattern.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Pattern;
  return proto.cyberdogapp.Pattern.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Pattern} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.Pattern.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setGaitPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Pattern.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Pattern.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Pattern} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Pattern.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGaitPattern();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.Pattern.GAIT = {
  GAIT_TRANS: 0,
  GAIT_PASSIVE: 1, // 被动
  GAIT_KNEEL: 2, // 趴下
  GAIT_STAND_R: 3, //恢复站立
  GAIT_STAND_B: 4, // 姿态展示
  GAIT_AMBLE: 5, // 慢走 //实际是姿态展示
  GAIT_WALK: 6, // 行走
  GAIT_SLOW_TROT: 7, // 缓跑
  GAIT_TROT: 8, // 小跑
  GAIT_FLYTROT: 9, // 奔跑
  GAIT_BOUND: 10, // 跳路
  GAIT_PRONK: 11, // 跳跃
  GAIT_TRACTION: 12, // 新增的溜狗模式
  GAIT_DEFAULT: 99
};

/**
 * optional fixed32 gait_pattern = 1;
 * @return {number}
 */
proto.cyberdogapp.Pattern.prototype.getGaitPattern = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Pattern} returns this
 */
proto.cyberdogapp.Pattern.prototype.setGaitPattern = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Result.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Result.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Result} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Result.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Result}
 */
proto.cyberdogapp.Result.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Result;
  return proto.cyberdogapp.Result.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Result} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Result}
 */
proto.cyberdogapp.Result.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Result.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Result.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Result} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Result.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.cyberdogapp.Result.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Result} returns this
 */
proto.cyberdogapp.Result.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Decissage.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Decissage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Decissage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Decissage.toObject = function(includeInstance, msg) {
  var f, obj = {
    twist: (f = msg.getTwist()) && proto.cyberdogapp.Twist.toObject(includeInstance, f),
    pose: (f = msg.getPose()) && proto.cyberdogapp.Pose.toObject(includeInstance, f),
    safety: (f = msg.getSafety()) && proto.cyberdogapp.Safety.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Decissage}
 */
proto.cyberdogapp.Decissage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Decissage;
  return proto.cyberdogapp.Decissage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Decissage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Decissage}
 */
proto.cyberdogapp.Decissage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Twist;
      reader.readMessage(value,proto.cyberdogapp.Twist.deserializeBinaryFromReader);
      msg.setTwist(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Pose;
      reader.readMessage(value,proto.cyberdogapp.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Safety;
      reader.readMessage(value,proto.cyberdogapp.Safety.deserializeBinaryFromReader);
      msg.setSafety(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Decissage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Decissage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Decissage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Decissage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTwist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Twist.serializeBinaryToWriter
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Pose.serializeBinaryToWriter
    );
  }
  f = message.getSafety();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.Safety.serializeBinaryToWriter
    );
  }
};


/**
 * optional Twist twist = 1;
 * @return {?proto.cyberdogapp.Twist}
 */
proto.cyberdogapp.Decissage.prototype.getTwist = function() {
  return /** @type{?proto.cyberdogapp.Twist} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Twist, 1));
};


/**
 * @param {?proto.cyberdogapp.Twist|undefined} value
 * @return {!proto.cyberdogapp.Decissage} returns this
*/
proto.cyberdogapp.Decissage.prototype.setTwist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Decissage} returns this
 */
proto.cyberdogapp.Decissage.prototype.clearTwist = function() {
  return this.setTwist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Decissage.prototype.hasTwist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pose pose = 2;
 * @return {?proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.Decissage.prototype.getPose = function() {
  return /** @type{?proto.cyberdogapp.Pose} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pose, 2));
};


/**
 * @param {?proto.cyberdogapp.Pose|undefined} value
 * @return {!proto.cyberdogapp.Decissage} returns this
*/
proto.cyberdogapp.Decissage.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Decissage} returns this
 */
proto.cyberdogapp.Decissage.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Decissage.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Safety safety = 3;
 * @return {?proto.cyberdogapp.Safety}
 */
proto.cyberdogapp.Decissage.prototype.getSafety = function() {
  return /** @type{?proto.cyberdogapp.Safety} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Safety, 3));
};


/**
 * @param {?proto.cyberdogapp.Safety|undefined} value
 * @return {!proto.cyberdogapp.Decissage} returns this
*/
proto.cyberdogapp.Decissage.prototype.setSafety = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Decissage} returns this
 */
proto.cyberdogapp.Decissage.prototype.clearSafety = function() {
  return this.setSafety(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Decissage.prototype.hasSafety = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Safety.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Safety.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Safety} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Safety.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Safety}
 */
proto.cyberdogapp.Safety.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Safety;
  return proto.cyberdogapp.Safety.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Safety} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Safety}
 */
proto.cyberdogapp.Safety.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Safety.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Safety.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Safety} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Safety.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 status = 1;
 * @return {number}
 */
proto.cyberdogapp.Safety.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Safety} returns this
 */
proto.cyberdogapp.Safety.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Parameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    bodyHeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    gaitHeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Parameters}
 */
proto.cyberdogapp.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Parameters;
  return proto.cyberdogapp.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Parameters}
 */
proto.cyberdogapp.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBodyHeight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGaitHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Parameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Parameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBodyHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getGaitHeight();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double body_height = 1;
 * @return {number}
 */
proto.cyberdogapp.Parameters.prototype.getBodyHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Parameters} returns this
 */
proto.cyberdogapp.Parameters.prototype.setBodyHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double gait_height = 2;
 * @return {number}
 */
proto.cyberdogapp.Parameters.prototype.getGaitHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Parameters} returns this
 */
proto.cyberdogapp.Parameters.prototype.setGaitHeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Twist.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Twist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Twist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Twist.toObject = function(includeInstance, msg) {
  var f, obj = {
    linear: (f = msg.getLinear()) && proto.cyberdogapp.Vector3.toObject(includeInstance, f),
    angular: (f = msg.getAngular()) && proto.cyberdogapp.Vector3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Twist}
 */
proto.cyberdogapp.Twist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Twist;
  return proto.cyberdogapp.Twist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Twist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Twist}
 */
proto.cyberdogapp.Twist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Vector3;
      reader.readMessage(value,proto.cyberdogapp.Vector3.deserializeBinaryFromReader);
      msg.setLinear(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Vector3;
      reader.readMessage(value,proto.cyberdogapp.Vector3.deserializeBinaryFromReader);
      msg.setAngular(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Twist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Twist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Twist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Twist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinear();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getAngular();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vector3 linear = 1;
 * @return {?proto.cyberdogapp.Vector3}
 */
proto.cyberdogapp.Twist.prototype.getLinear = function() {
  return /** @type{?proto.cyberdogapp.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Vector3, 1));
};


/**
 * @param {?proto.cyberdogapp.Vector3|undefined} value
 * @return {!proto.cyberdogapp.Twist} returns this
*/
proto.cyberdogapp.Twist.prototype.setLinear = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Twist} returns this
 */
proto.cyberdogapp.Twist.prototype.clearLinear = function() {
  return this.setLinear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Twist.prototype.hasLinear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vector3 angular = 2;
 * @return {?proto.cyberdogapp.Vector3}
 */
proto.cyberdogapp.Twist.prototype.getAngular = function() {
  return /** @type{?proto.cyberdogapp.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Vector3, 2));
};


/**
 * @param {?proto.cyberdogapp.Vector3|undefined} value
 * @return {!proto.cyberdogapp.Twist} returns this
*/
proto.cyberdogapp.Twist.prototype.setAngular = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Twist} returns this
 */
proto.cyberdogapp.Twist.prototype.clearAngular = function() {
  return this.setAngular(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Twist.prototype.hasAngular = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Pose.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Pose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Pose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Pose.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.cyberdogapp.Point.toObject(includeInstance, f),
    orientation: (f = msg.getOrientation()) && proto.cyberdogapp.Quaternion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.Pose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Pose;
  return proto.cyberdogapp.Pose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Pose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.Pose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Point;
      reader.readMessage(value,proto.cyberdogapp.Point.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Quaternion;
      reader.readMessage(value,proto.cyberdogapp.Quaternion.deserializeBinaryFromReader);
      msg.setOrientation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Pose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Pose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Pose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Pose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Point.serializeBinaryToWriter
    );
  }
  f = message.getOrientation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point position = 1;
 * @return {?proto.cyberdogapp.Point}
 */
proto.cyberdogapp.Pose.prototype.getPosition = function() {
  return /** @type{?proto.cyberdogapp.Point} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Point, 1));
};


/**
 * @param {?proto.cyberdogapp.Point|undefined} value
 * @return {!proto.cyberdogapp.Pose} returns this
*/
proto.cyberdogapp.Pose.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Pose} returns this
 */
proto.cyberdogapp.Pose.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Pose.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion orientation = 2;
 * @return {?proto.cyberdogapp.Quaternion}
 */
proto.cyberdogapp.Pose.prototype.getOrientation = function() {
  return /** @type{?proto.cyberdogapp.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Quaternion, 2));
};


/**
 * @param {?proto.cyberdogapp.Quaternion|undefined} value
 * @return {!proto.cyberdogapp.Pose} returns this
*/
proto.cyberdogapp.Pose.prototype.setOrientation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Pose} returns this
 */
proto.cyberdogapp.Pose.prototype.clearOrientation = function() {
  return this.setOrientation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Pose.prototype.hasOrientation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Vector3}
 */
proto.cyberdogapp.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Vector3;
  return proto.cyberdogapp.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Vector3}
 */
proto.cyberdogapp.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.cyberdogapp.Vector3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Vector3} returns this
 */
proto.cyberdogapp.Vector3.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.cyberdogapp.Vector3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Vector3} returns this
 */
proto.cyberdogapp.Vector3.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.cyberdogapp.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Vector3} returns this
 */
proto.cyberdogapp.Vector3.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Point}
 */
proto.cyberdogapp.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Point;
  return proto.cyberdogapp.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Point}
 */
proto.cyberdogapp.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.cyberdogapp.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Point} returns this
 */
proto.cyberdogapp.Point.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.cyberdogapp.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Point} returns this
 */
proto.cyberdogapp.Point.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.cyberdogapp.Point.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Point} returns this
 */
proto.cyberdogapp.Point.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Quaternion.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    w: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Quaternion}
 */
proto.cyberdogapp.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Quaternion;
  return proto.cyberdogapp.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Quaternion}
 */
proto.cyberdogapp.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setW(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Quaternion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getW();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.cyberdogapp.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Quaternion} returns this
 */
proto.cyberdogapp.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.cyberdogapp.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Quaternion} returns this
 */
proto.cyberdogapp.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.cyberdogapp.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Quaternion} returns this
 */
proto.cyberdogapp.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double w = 4;
 * @return {number}
 */
proto.cyberdogapp.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Quaternion} returns this
 */
proto.cyberdogapp.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Bms.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Bms.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Bms} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Bms.toObject = function(includeInstance, msg) {
  var f, obj = {
    battVolt: jspb.Message.getFieldWithDefault(msg, 1, 0),
    battCurr: jspb.Message.getFieldWithDefault(msg, 2, 0),
    battSoc: jspb.Message.getFieldWithDefault(msg, 3, 0),
    battTemp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    battSt: jspb.Message.getFieldWithDefault(msg, 5, 0),
    keyVal: jspb.Message.getFieldWithDefault(msg, 6, 0),
    disableCharge: jspb.Message.getFieldWithDefault(msg, 7, 0),
    powerSupply: jspb.Message.getFieldWithDefault(msg, 8, 0),
    buzze: jspb.Message.getFieldWithDefault(msg, 9, 0),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Bms}
 */
proto.cyberdogapp.Bms.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Bms;
  return proto.cyberdogapp.Bms.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Bms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Bms}
 */
proto.cyberdogapp.Bms.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setBattVolt(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setBattCurr(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setBattSoc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setBattTemp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setBattSt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKeyVal(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setDisableCharge(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setPowerSupply(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setBuzze(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Bms.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Bms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Bms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Bms.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBattVolt();
  if (f !== 0) {
    writer.writeSfixed32(
      1,
      f
    );
  }
  f = message.getBattCurr();
  if (f !== 0) {
    writer.writeSfixed32(
      2,
      f
    );
  }
  f = message.getBattSoc();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
  f = message.getBattTemp();
  if (f !== 0) {
    writer.writeSfixed32(
      4,
      f
    );
  }
  f = message.getBattSt();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
  f = message.getKeyVal();
  if (f !== 0) {
    writer.writeFixed32(
      6,
      f
    );
  }
  f = message.getDisableCharge();
  if (f !== 0) {
    writer.writeFixed32(
      7,
      f
    );
  }
  f = message.getPowerSupply();
  if (f !== 0) {
    writer.writeFixed32(
      8,
      f
    );
  }
  f = message.getBuzze();
  if (f !== 0) {
    writer.writeFixed32(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeFixed32(
      10,
      f
    );
  }
};


/**
 * optional sfixed32 batt_volt = 1;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBattVolt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBattVolt = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional sfixed32 batt_curr = 2;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBattCurr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBattCurr = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional fixed32 batt_soc = 3;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBattSoc = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBattSoc = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional sfixed32 batt_temp = 4;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBattTemp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBattTemp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional fixed32 batt_st = 5;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBattSt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBattSt = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional fixed32 key_val = 6;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getKeyVal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setKeyVal = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional fixed32 disable_charge = 7;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getDisableCharge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setDisableCharge = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional fixed32 power_supply = 8;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getPowerSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setPowerSupply = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional fixed32 buzze = 9;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getBuzze = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setBuzze = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional fixed32 status = 10;
 * @return {number}
 */
proto.cyberdogapp.Bms.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Bms} returns this
 */
proto.cyberdogapp.Bms.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.StatusStamped.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.StatusStamped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.StatusStamped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.StatusStamped.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    childFrameId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: (f = msg.getStatus()) && proto.cyberdogapp.RawStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.StatusStamped}
 */
proto.cyberdogapp.StatusStamped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.StatusStamped;
  return proto.cyberdogapp.StatusStamped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.StatusStamped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.StatusStamped}
 */
proto.cyberdogapp.StatusStamped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChildFrameId(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.RawStatus;
      reader.readMessage(value,proto.cyberdogapp.RawStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.StatusStamped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.StatusStamped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.StatusStamped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.StatusStamped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getChildFrameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.RawStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.StatusStamped.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.StatusStamped} returns this
*/
proto.cyberdogapp.StatusStamped.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.StatusStamped} returns this
 */
proto.cyberdogapp.StatusStamped.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.StatusStamped.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string child_frame_id = 2;
 * @return {string}
 */
proto.cyberdogapp.StatusStamped.prototype.getChildFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.StatusStamped} returns this
 */
proto.cyberdogapp.StatusStamped.prototype.setChildFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RawStatus status = 3;
 * @return {?proto.cyberdogapp.RawStatus}
 */
proto.cyberdogapp.StatusStamped.prototype.getStatus = function() {
  return /** @type{?proto.cyberdogapp.RawStatus} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.RawStatus, 3));
};


/**
 * @param {?proto.cyberdogapp.RawStatus|undefined} value
 * @return {!proto.cyberdogapp.StatusStamped} returns this
*/
proto.cyberdogapp.StatusStamped.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.StatusStamped} returns this
 */
proto.cyberdogapp.StatusStamped.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.StatusStamped.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.ErrorFlag.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.ErrorFlag.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.ErrorFlag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.ErrorFlag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ErrorFlag.toObject = function(includeInstance, msg) {
  var f, obj = {
    existError: jspb.Message.getFieldWithDefault(msg, 1, 0),
    oriError: jspb.Message.getFieldWithDefault(msg, 2, 0),
    footposError: jspb.Message.getFieldWithDefault(msg, 3, 0),
    motorErrorList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.ErrorFlag}
 */
proto.cyberdogapp.ErrorFlag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.ErrorFlag;
  return proto.cyberdogapp.ErrorFlag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.ErrorFlag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.ErrorFlag}
 */
proto.cyberdogapp.ErrorFlag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setExistError(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setOriError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setFootposError(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMotorError(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.ErrorFlag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.ErrorFlag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.ErrorFlag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ErrorFlag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExistError();
  if (f !== 0) {
    writer.writeSfixed32(
      1,
      f
    );
  }
  f = message.getOriError();
  if (f !== 0) {
    writer.writeSfixed32(
      2,
      f
    );
  }
  f = message.getFootposError();
  if (f !== 0) {
    writer.writeSfixed32(
      3,
      f
    );
  }
  f = message.getMotorErrorList();
  if (f.length > 0) {
    writer.writePackedFixed32(
      4,
      f
    );
  }
};


/**
 * optional sfixed32 exist_error = 1;
 * @return {number}
 */
proto.cyberdogapp.ErrorFlag.prototype.getExistError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.setExistError = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional sfixed32 ori_error = 2;
 * @return {number}
 */
proto.cyberdogapp.ErrorFlag.prototype.getOriError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.setOriError = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional sfixed32 footpos_error = 3;
 * @return {number}
 */
proto.cyberdogapp.ErrorFlag.prototype.getFootposError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.setFootposError = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated fixed32 motor_error = 4;
 * @return {!Array<number>}
 */
proto.cyberdogapp.ErrorFlag.prototype.getMotorErrorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.setMotorErrorList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.addMotorError = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.ErrorFlag} returns this
 */
proto.cyberdogapp.ErrorFlag.prototype.clearMotorErrorList = function() {
  return this.setMotorErrorList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.RawStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.RawStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.RawStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RawStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: (f = msg.getMode()) && proto.cyberdogapp.Mode.toObject(includeInstance, f),
    pattern: (f = msg.getPattern()) && proto.cyberdogapp.Pattern.toObject(includeInstance, f),
    twist: (f = msg.getTwist()) && proto.cyberdogapp.TwistWithCovariance.toObject(includeInstance, f),
    pose: (f = msg.getPose()) && proto.cyberdogapp.PoseWithCovariance.toObject(includeInstance, f),
    para: (f = msg.getPara()) && proto.cyberdogapp.Parameters.toObject(includeInstance, f),
    safety: (f = msg.getSafety()) && proto.cyberdogapp.Safety.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && proto.cyberdogapp.Scene.toObject(includeInstance, f),
    errorFlag: (f = msg.getErrorFlag()) && proto.cyberdogapp.ErrorFlag.toObject(includeInstance, f),
    footContact: jspb.Message.getFieldWithDefault(msg, 10, 0),
    cachedPattern: (f = msg.getCachedPattern()) && proto.cyberdogapp.Pattern.toObject(includeInstance, f),
    order: (f = msg.getOrder()) && proto.cyberdogapp.MonOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.RawStatus}
 */
proto.cyberdogapp.RawStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.RawStatus;
  return proto.cyberdogapp.RawStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.RawStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.RawStatus}
 */
proto.cyberdogapp.RawStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Mode;
      reader.readMessage(value,proto.cyberdogapp.Mode.deserializeBinaryFromReader);
      msg.setMode(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Pattern;
      reader.readMessage(value,proto.cyberdogapp.Pattern.deserializeBinaryFromReader);
      msg.setPattern(value);
      break;
    case 4:
      var value = new proto.cyberdogapp.TwistWithCovariance;
      reader.readMessage(value,proto.cyberdogapp.TwistWithCovariance.deserializeBinaryFromReader);
      msg.setTwist(value);
      break;
    case 5:
      var value = new proto.cyberdogapp.PoseWithCovariance;
      reader.readMessage(value,proto.cyberdogapp.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 6:
      var value = new proto.cyberdogapp.Parameters;
      reader.readMessage(value,proto.cyberdogapp.Parameters.deserializeBinaryFromReader);
      msg.setPara(value);
      break;
    case 7:
      var value = new proto.cyberdogapp.Safety;
      reader.readMessage(value,proto.cyberdogapp.Safety.deserializeBinaryFromReader);
      msg.setSafety(value);
      break;
    case 8:
      var value = new proto.cyberdogapp.Scene;
      reader.readMessage(value,proto.cyberdogapp.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    case 9:
      var value = new proto.cyberdogapp.ErrorFlag;
      reader.readMessage(value,proto.cyberdogapp.ErrorFlag.deserializeBinaryFromReader);
      msg.setErrorFlag(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setFootContact(value);
      break;
    case 11:
      var value = new proto.cyberdogapp.Pattern;
      reader.readMessage(value,proto.cyberdogapp.Pattern.deserializeBinaryFromReader);
      msg.setCachedPattern(value);
      break;
    case 12:
      var value = new proto.cyberdogapp.MonOrder;
      reader.readMessage(value,proto.cyberdogapp.MonOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.RawStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.RawStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.RawStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RawStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Mode.serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.Pattern.serializeBinaryToWriter
    );
  }
  f = message.getTwist();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cyberdogapp.TwistWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cyberdogapp.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getPara();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cyberdogapp.Parameters.serializeBinaryToWriter
    );
  }
  f = message.getSafety();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cyberdogapp.Safety.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cyberdogapp.Scene.serializeBinaryToWriter
    );
  }
  f = message.getErrorFlag();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.cyberdogapp.ErrorFlag.serializeBinaryToWriter
    );
  }
  f = message.getFootContact();
  if (f !== 0) {
    writer.writeSfixed32(
      10,
      f
    );
  }
  f = message.getCachedPattern();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.cyberdogapp.Pattern.serializeBinaryToWriter
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.cyberdogapp.MonOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional Mode mode = 1;
 * @return {?proto.cyberdogapp.Mode}
 */
proto.cyberdogapp.RawStatus.prototype.getMode = function() {
  return /** @type{?proto.cyberdogapp.Mode} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Mode, 1));
};


/**
 * @param {?proto.cyberdogapp.Mode|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setMode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearMode = function() {
  return this.setMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pattern pattern = 3;
 * @return {?proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.RawStatus.prototype.getPattern = function() {
  return /** @type{?proto.cyberdogapp.Pattern} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pattern, 3));
};


/**
 * @param {?proto.cyberdogapp.Pattern|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setPattern = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearPattern = function() {
  return this.setPattern(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasPattern = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TwistWithCovariance twist = 4;
 * @return {?proto.cyberdogapp.TwistWithCovariance}
 */
proto.cyberdogapp.RawStatus.prototype.getTwist = function() {
  return /** @type{?proto.cyberdogapp.TwistWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.TwistWithCovariance, 4));
};


/**
 * @param {?proto.cyberdogapp.TwistWithCovariance|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setTwist = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearTwist = function() {
  return this.setTwist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasTwist = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PoseWithCovariance pose = 5;
 * @return {?proto.cyberdogapp.PoseWithCovariance}
 */
proto.cyberdogapp.RawStatus.prototype.getPose = function() {
  return /** @type{?proto.cyberdogapp.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.PoseWithCovariance, 5));
};


/**
 * @param {?proto.cyberdogapp.PoseWithCovariance|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasPose = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Parameters para = 6;
 * @return {?proto.cyberdogapp.Parameters}
 */
proto.cyberdogapp.RawStatus.prototype.getPara = function() {
  return /** @type{?proto.cyberdogapp.Parameters} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Parameters, 6));
};


/**
 * @param {?proto.cyberdogapp.Parameters|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setPara = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearPara = function() {
  return this.setPara(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasPara = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Safety safety = 7;
 * @return {?proto.cyberdogapp.Safety}
 */
proto.cyberdogapp.RawStatus.prototype.getSafety = function() {
  return /** @type{?proto.cyberdogapp.Safety} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Safety, 7));
};


/**
 * @param {?proto.cyberdogapp.Safety|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setSafety = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearSafety = function() {
  return this.setSafety(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasSafety = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Scene scene = 8;
 * @return {?proto.cyberdogapp.Scene}
 */
proto.cyberdogapp.RawStatus.prototype.getScene = function() {
  return /** @type{?proto.cyberdogapp.Scene} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Scene, 8));
};


/**
 * @param {?proto.cyberdogapp.Scene|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasScene = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ErrorFlag error_flag = 9;
 * @return {?proto.cyberdogapp.ErrorFlag}
 */
proto.cyberdogapp.RawStatus.prototype.getErrorFlag = function() {
  return /** @type{?proto.cyberdogapp.ErrorFlag} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.ErrorFlag, 9));
};


/**
 * @param {?proto.cyberdogapp.ErrorFlag|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setErrorFlag = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearErrorFlag = function() {
  return this.setErrorFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasErrorFlag = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional sfixed32 foot_contact = 10;
 * @return {number}
 */
proto.cyberdogapp.RawStatus.prototype.getFootContact = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.setFootContact = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Pattern cached_pattern = 11;
 * @return {?proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.RawStatus.prototype.getCachedPattern = function() {
  return /** @type{?proto.cyberdogapp.Pattern} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pattern, 11));
};


/**
 * @param {?proto.cyberdogapp.Pattern|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setCachedPattern = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearCachedPattern = function() {
  return this.setCachedPattern(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasCachedPattern = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MonOrder order = 12;
 * @return {?proto.cyberdogapp.MonOrder}
 */
proto.cyberdogapp.RawStatus.prototype.getOrder = function() {
  return /** @type{?proto.cyberdogapp.MonOrder} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MonOrder, 12));
};


/**
 * @param {?proto.cyberdogapp.MonOrder|undefined} value
 * @return {!proto.cyberdogapp.RawStatus} returns this
*/
proto.cyberdogapp.RawStatus.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.RawStatus} returns this
 */
proto.cyberdogapp.RawStatus.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.RawStatus.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.States.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.States.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.States} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.States.toObject = function(includeInstance, msg) {
  var f, obj = {
    motionState: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.States}
 */
proto.cyberdogapp.States.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.States;
  return proto.cyberdogapp.States.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.States} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.States}
 */
proto.cyberdogapp.States.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setMotionState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.States.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.States.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.States} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.States.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMotionState();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * optional fixed32 motion_state = 1;
 * @return {number}
 */
proto.cyberdogapp.States.prototype.getMotionState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.States} returns this
 */
proto.cyberdogapp.States.prototype.setMotionState = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    stamp: (f = msg.getStamp()) && proto.cyberdogapp.Timestamp.toObject(includeInstance, f),
    frameId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Header;
  return proto.cyberdogapp.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Timestamp;
      reader.readMessage(value,proto.cyberdogapp.Timestamp.deserializeBinaryFromReader);
      msg.setStamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Timestamp stamp = 1;
 * @return {?proto.cyberdogapp.Timestamp}
 */
proto.cyberdogapp.Header.prototype.getStamp = function() {
  return /** @type{?proto.cyberdogapp.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Timestamp, 1));
};


/**
 * @param {?proto.cyberdogapp.Timestamp|undefined} value
 * @return {!proto.cyberdogapp.Header} returns this
*/
proto.cyberdogapp.Header.prototype.setStamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Header} returns this
 */
proto.cyberdogapp.Header.prototype.clearStamp = function() {
  return this.setStamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Header.prototype.hasStamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string frame_id = 2;
 * @return {string}
 */
proto.cyberdogapp.Header.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Header} returns this
 */
proto.cyberdogapp.Header.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    sec: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nanosec: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Timestamp}
 */
proto.cyberdogapp.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Timestamp;
  return proto.cyberdogapp.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Timestamp}
 */
proto.cyberdogapp.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setSec(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setNanosec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSec();
  if (f !== 0) {
    writer.writeSfixed32(
      1,
      f
    );
  }
  f = message.getNanosec();
  if (f !== 0) {
    writer.writeSfixed32(
      2,
      f
    );
  }
};


/**
 * optional sfixed32 sec = 1;
 * @return {number}
 */
proto.cyberdogapp.Timestamp.prototype.getSec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Timestamp} returns this
 */
proto.cyberdogapp.Timestamp.prototype.setSec = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional sfixed32 nanosec = 2;
 * @return {number}
 */
proto.cyberdogapp.Timestamp.prototype.getNanosec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Timestamp} returns this
 */
proto.cyberdogapp.Timestamp.prototype.setNanosec = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.TwistWithCovariance.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.TwistWithCovariance.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.TwistWithCovariance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.TwistWithCovariance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TwistWithCovariance.toObject = function(includeInstance, msg) {
  var f, obj = {
    twist: (f = msg.getTwist()) && proto.cyberdogapp.Twist.toObject(includeInstance, f),
    covarianceList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.TwistWithCovariance}
 */
proto.cyberdogapp.TwistWithCovariance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.TwistWithCovariance;
  return proto.cyberdogapp.TwistWithCovariance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.TwistWithCovariance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.TwistWithCovariance}
 */
proto.cyberdogapp.TwistWithCovariance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Twist;
      reader.readMessage(value,proto.cyberdogapp.Twist.deserializeBinaryFromReader);
      msg.setTwist(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCovariance(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.TwistWithCovariance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.TwistWithCovariance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.TwistWithCovariance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TwistWithCovariance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTwist();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Twist.serializeBinaryToWriter
    );
  }
  f = message.getCovarianceList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
};


/**
 * optional Twist twist = 1;
 * @return {?proto.cyberdogapp.Twist}
 */
proto.cyberdogapp.TwistWithCovariance.prototype.getTwist = function() {
  return /** @type{?proto.cyberdogapp.Twist} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Twist, 1));
};


/**
 * @param {?proto.cyberdogapp.Twist|undefined} value
 * @return {!proto.cyberdogapp.TwistWithCovariance} returns this
*/
proto.cyberdogapp.TwistWithCovariance.prototype.setTwist = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.TwistWithCovariance} returns this
 */
proto.cyberdogapp.TwistWithCovariance.prototype.clearTwist = function() {
  return this.setTwist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.TwistWithCovariance.prototype.hasTwist = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double covariance = 2;
 * @return {!Array<number>}
 */
proto.cyberdogapp.TwistWithCovariance.prototype.getCovarianceList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cyberdogapp.TwistWithCovariance} returns this
 */
proto.cyberdogapp.TwistWithCovariance.prototype.setCovarianceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.TwistWithCovariance} returns this
 */
proto.cyberdogapp.TwistWithCovariance.prototype.addCovariance = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.TwistWithCovariance} returns this
 */
proto.cyberdogapp.TwistWithCovariance.prototype.clearCovarianceList = function() {
  return this.setCovarianceList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.PoseWithCovariance.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.PoseWithCovariance.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.PoseWithCovariance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.PoseWithCovariance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PoseWithCovariance.toObject = function(includeInstance, msg) {
  var f, obj = {
    pose: (f = msg.getPose()) && proto.cyberdogapp.Pose.toObject(includeInstance, f),
    covarianceList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.PoseWithCovariance}
 */
proto.cyberdogapp.PoseWithCovariance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.PoseWithCovariance;
  return proto.cyberdogapp.PoseWithCovariance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.PoseWithCovariance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.PoseWithCovariance}
 */
proto.cyberdogapp.PoseWithCovariance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Pose;
      reader.readMessage(value,proto.cyberdogapp.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCovariance(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.PoseWithCovariance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.PoseWithCovariance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.PoseWithCovariance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PoseWithCovariance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Pose.serializeBinaryToWriter
    );
  }
  f = message.getCovarianceList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
};


/**
 * optional Pose pose = 1;
 * @return {?proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.PoseWithCovariance.prototype.getPose = function() {
  return /** @type{?proto.cyberdogapp.Pose} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pose, 1));
};


/**
 * @param {?proto.cyberdogapp.Pose|undefined} value
 * @return {!proto.cyberdogapp.PoseWithCovariance} returns this
*/
proto.cyberdogapp.PoseWithCovariance.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.PoseWithCovariance} returns this
 */
proto.cyberdogapp.PoseWithCovariance.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.PoseWithCovariance.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double covariance = 2;
 * @return {!Array<number>}
 */
proto.cyberdogapp.PoseWithCovariance.prototype.getCovarianceList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cyberdogapp.PoseWithCovariance} returns this
 */
proto.cyberdogapp.PoseWithCovariance.prototype.setCovarianceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.PoseWithCovariance} returns this
 */
proto.cyberdogapp.PoseWithCovariance.prototype.addCovariance = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.PoseWithCovariance} returns this
 */
proto.cyberdogapp.PoseWithCovariance.prototype.clearCovarianceList = function() {
  return this.setCovarianceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Scene.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Scene.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Scene} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Scene.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    lon: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    ifDanger: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Scene}
 */
proto.cyberdogapp.Scene.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Scene;
  return proto.cyberdogapp.Scene.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Scene} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Scene}
 */
proto.cyberdogapp.Scene.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setIfDanger(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Scene.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Scene.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Scene} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Scene.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getLon();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getIfDanger();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.Scene.TYPE = {
  UNSET: 0,
  INDOOR: 1,
  OUTDOOR: 2
};

/**
 * optional fixed32 type = 1;
 * @return {number}
 */
proto.cyberdogapp.Scene.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Scene} returns this
 */
proto.cyberdogapp.Scene.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float lat = 2;
 * @return {number}
 */
proto.cyberdogapp.Scene.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Scene} returns this
 */
proto.cyberdogapp.Scene.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float lon = 3;
 * @return {number}
 */
proto.cyberdogapp.Scene.prototype.getLon = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Scene} returns this
 */
proto.cyberdogapp.Scene.prototype.setLon = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional fixed32 if_danger = 4;
 * @return {number}
 */
proto.cyberdogapp.Scene.prototype.getIfDanger = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Scene} returns this
 */
proto.cyberdogapp.Scene.prototype.setIfDanger = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.DecisionStamped.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.DecisionStamped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.DecisionStamped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.DecisionStamped.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    id: (f = msg.getId()) && proto.cyberdogapp.Source.toObject(includeInstance, f),
    decissage: (f = msg.getDecissage()) && proto.cyberdogapp.Decissage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.DecisionStamped}
 */
proto.cyberdogapp.DecisionStamped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.DecisionStamped;
  return proto.cyberdogapp.DecisionStamped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.DecisionStamped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.DecisionStamped}
 */
proto.cyberdogapp.DecisionStamped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Source;
      reader.readMessage(value,proto.cyberdogapp.Source.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Decissage;
      reader.readMessage(value,proto.cyberdogapp.Decissage.deserializeBinaryFromReader);
      msg.setDecissage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.DecisionStamped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.DecisionStamped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.DecisionStamped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.DecisionStamped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Source.serializeBinaryToWriter
    );
  }
  f = message.getDecissage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.Decissage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.DecisionStamped.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
*/
proto.cyberdogapp.DecisionStamped.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
 */
proto.cyberdogapp.DecisionStamped.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.DecisionStamped.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Source id = 2;
 * @return {?proto.cyberdogapp.Source}
 */
proto.cyberdogapp.DecisionStamped.prototype.getId = function() {
  return /** @type{?proto.cyberdogapp.Source} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Source, 2));
};


/**
 * @param {?proto.cyberdogapp.Source|undefined} value
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
*/
proto.cyberdogapp.DecisionStamped.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
 */
proto.cyberdogapp.DecisionStamped.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.DecisionStamped.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Decissage decissage = 3;
 * @return {?proto.cyberdogapp.Decissage}
 */
proto.cyberdogapp.DecisionStamped.prototype.getDecissage = function() {
  return /** @type{?proto.cyberdogapp.Decissage} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Decissage, 3));
};


/**
 * @param {?proto.cyberdogapp.Decissage|undefined} value
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
*/
proto.cyberdogapp.DecisionStamped.prototype.setDecissage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.DecisionStamped} returns this
 */
proto.cyberdogapp.DecisionStamped.prototype.clearDecissage = function() {
  return this.setDecissage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.DecisionStamped.prototype.hasDecissage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Source.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Source.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Source} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Source.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Source}
 */
proto.cyberdogapp.Source.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Source;
  return proto.cyberdogapp.Source.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Source} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Source}
 */
proto.cyberdogapp.Source.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setSourceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Source.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Source.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Source} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Source.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceId();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * optional fixed32 source_id = 1;
 * @return {number}
 */
proto.cyberdogapp.Source.prototype.getSourceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Source} returns this
 */
proto.cyberdogapp.Source.prototype.setSourceId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.ModeStamped.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.ModeStamped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.ModeStamped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ModeStamped.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    mode: (f = msg.getMode()) && proto.cyberdogapp.Mode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.ModeStamped}
 */
proto.cyberdogapp.ModeStamped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.ModeStamped;
  return proto.cyberdogapp.ModeStamped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.ModeStamped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.ModeStamped}
 */
proto.cyberdogapp.ModeStamped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Mode;
      reader.readMessage(value,proto.cyberdogapp.Mode.deserializeBinaryFromReader);
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.ModeStamped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.ModeStamped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.ModeStamped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.ModeStamped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getMode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Mode.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.ModeStamped.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.ModeStamped} returns this
*/
proto.cyberdogapp.ModeStamped.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.ModeStamped} returns this
 */
proto.cyberdogapp.ModeStamped.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.ModeStamped.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mode mode = 2;
 * @return {?proto.cyberdogapp.Mode}
 */
proto.cyberdogapp.ModeStamped.prototype.getMode = function() {
  return /** @type{?proto.cyberdogapp.Mode} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Mode, 2));
};


/**
 * @param {?proto.cyberdogapp.Mode|undefined} value
 * @return {!proto.cyberdogapp.ModeStamped} returns this
*/
proto.cyberdogapp.ModeStamped.prototype.setMode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.ModeStamped} returns this
 */
proto.cyberdogapp.ModeStamped.prototype.clearMode = function() {
  return this.setMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.ModeStamped.prototype.hasMode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CheckoutMode_request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CheckoutMode_request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CheckoutMode_request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutMode_request.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextMode: (f = msg.getNextMode()) && proto.cyberdogapp.ModeStamped.toObject(includeInstance, f),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CheckoutMode_request}
 */
proto.cyberdogapp.CheckoutMode_request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CheckoutMode_request;
  return proto.cyberdogapp.CheckoutMode_request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CheckoutMode_request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CheckoutMode_request}
 */
proto.cyberdogapp.CheckoutMode_request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.ModeStamped;
      reader.readMessage(value,proto.cyberdogapp.ModeStamped.deserializeBinaryFromReader);
      msg.setNextMode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CheckoutMode_request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CheckoutMode_request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CheckoutMode_request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutMode_request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextMode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.ModeStamped.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.CheckoutMode_request.Command = {
  DEFAULT: 0,
  LOCK: 1,
  CONFIG: 2,
  MANUAL: 3,
  SEMI: 13,
  EXPLOR: 14,
  TRACK: 15
};

/**
 * @enum {number}
 */
proto.cyberdogapp.CheckoutMode_request.Type = {
  DEFAULT_TYPE: 0,
  TRACK_F: 1,
  TRACK_S: 2,
  EXPLOR_NAV_AB: 3,
  EXPLOR_MAP_U: 4,
  EXPLOR_MAP_N: 5
};

/**
 * optional ModeStamped next_mode = 1;
 * @return {?proto.cyberdogapp.ModeStamped}
 */
proto.cyberdogapp.CheckoutMode_request.prototype.getNextMode = function() {
  return /** @type{?proto.cyberdogapp.ModeStamped} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.ModeStamped, 1));
};


/**
 * @param {?proto.cyberdogapp.ModeStamped|undefined} value
 * @return {!proto.cyberdogapp.CheckoutMode_request} returns this
*/
proto.cyberdogapp.CheckoutMode_request.prototype.setNextMode = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutMode_request} returns this
 */
proto.cyberdogapp.CheckoutMode_request.prototype.clearNextMode = function() {
  return this.setNextMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutMode_request.prototype.hasNextMode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 timeout = 2;
 * @return {number}
 */
proto.cyberdogapp.CheckoutMode_request.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutMode_request} returns this
 */
proto.cyberdogapp.CheckoutMode_request.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CheckoutMode_respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CheckoutMode_respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutMode_respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    isFeedback: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    currentState: jspb.Message.getFieldWithDefault(msg, 3, 0),
    errCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errState: jspb.Message.getFieldWithDefault(msg, 5, 0),
    succeed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    nextMode: (f = msg.getNextMode()) && proto.cyberdogapp.Mode.toObject(includeInstance, f),
    requestId: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CheckoutMode_respond}
 */
proto.cyberdogapp.CheckoutMode_respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CheckoutMode_respond;
  return proto.cyberdogapp.CheckoutMode_respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CheckoutMode_respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CheckoutMode_respond}
 */
proto.cyberdogapp.CheckoutMode_respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeedback(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCurrentState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setErrCode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setErrState(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceed(value);
      break;
    case 7:
      var value = new proto.cyberdogapp.Mode;
      reader.readMessage(value,proto.cyberdogapp.Mode.deserializeBinaryFromReader);
      msg.setNextMode(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CheckoutMode_respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CheckoutMode_respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutMode_respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsFeedback();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getCurrentState();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
  f = message.getErrCode();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
  f = message.getErrState();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
  f = message.getSucceed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getNextMode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.cyberdogapp.Mode.serializeBinaryToWriter
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeFixed32(
      8,
      f
    );
  }
};


/**
 * optional bool is_feedback = 1;
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getIsFeedback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setIsFeedback = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Header header = 2;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 2));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
*/
proto.cyberdogapp.CheckoutMode_respond.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional fixed32 current_state = 3;
 * @return {number}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getCurrentState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setCurrentState = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional fixed32 err_code = 4;
 * @return {number}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getErrCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setErrCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional fixed32 err_state = 5;
 * @return {number}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getErrState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setErrState = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool succeed = 6;
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getSucceed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setSucceed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Mode next_mode = 7;
 * @return {?proto.cyberdogapp.Mode}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getNextMode = function() {
  return /** @type{?proto.cyberdogapp.Mode} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Mode, 7));
};


/**
 * @param {?proto.cyberdogapp.Mode|undefined} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
*/
proto.cyberdogapp.CheckoutMode_respond.prototype.setNextMode = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.clearNextMode = function() {
  return this.setNextMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.hasNextMode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional fixed32 request_id = 8;
 * @return {number}
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutMode_respond} returns this
 */
proto.cyberdogapp.CheckoutMode_respond.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.PatternStamped.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.PatternStamped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.PatternStamped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PatternStamped.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    pattern: (f = msg.getPattern()) && proto.cyberdogapp.Pattern.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.PatternStamped}
 */
proto.cyberdogapp.PatternStamped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.PatternStamped;
  return proto.cyberdogapp.PatternStamped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.PatternStamped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.PatternStamped}
 */
proto.cyberdogapp.PatternStamped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Pattern;
      reader.readMessage(value,proto.cyberdogapp.Pattern.deserializeBinaryFromReader);
      msg.setPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.PatternStamped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.PatternStamped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.PatternStamped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.PatternStamped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Pattern.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.PatternStamped.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.PatternStamped} returns this
*/
proto.cyberdogapp.PatternStamped.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.PatternStamped} returns this
 */
proto.cyberdogapp.PatternStamped.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.PatternStamped.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Pattern pattern = 2;
 * @return {?proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.PatternStamped.prototype.getPattern = function() {
  return /** @type{?proto.cyberdogapp.Pattern} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pattern, 2));
};


/**
 * @param {?proto.cyberdogapp.Pattern|undefined} value
 * @return {!proto.cyberdogapp.PatternStamped} returns this
*/
proto.cyberdogapp.PatternStamped.prototype.setPattern = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.PatternStamped} returns this
 */
proto.cyberdogapp.PatternStamped.prototype.clearPattern = function() {
  return this.setPattern(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.PatternStamped.prototype.hasPattern = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CheckoutPattern_request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CheckoutPattern_request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutPattern_request.toObject = function(includeInstance, msg) {
  var f, obj = {
    patternstamped: (f = msg.getPatternstamped()) && proto.cyberdogapp.PatternStamped.toObject(includeInstance, f),
    timeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CheckoutPattern_request}
 */
proto.cyberdogapp.CheckoutPattern_request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CheckoutPattern_request;
  return proto.cyberdogapp.CheckoutPattern_request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CheckoutPattern_request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CheckoutPattern_request}
 */
proto.cyberdogapp.CheckoutPattern_request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.PatternStamped;
      reader.readMessage(value,proto.cyberdogapp.PatternStamped.deserializeBinaryFromReader);
      msg.setPatternstamped(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CheckoutPattern_request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CheckoutPattern_request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutPattern_request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPatternstamped();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.PatternStamped.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
};


/**
 * optional PatternStamped patternstamped = 1;
 * @return {?proto.cyberdogapp.PatternStamped}
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.getPatternstamped = function() {
  return /** @type{?proto.cyberdogapp.PatternStamped} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.PatternStamped, 1));
};


/**
 * @param {?proto.cyberdogapp.PatternStamped|undefined} value
 * @return {!proto.cyberdogapp.CheckoutPattern_request} returns this
*/
proto.cyberdogapp.CheckoutPattern_request.prototype.setPatternstamped = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutPattern_request} returns this
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.clearPatternstamped = function() {
  return this.setPatternstamped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.hasPatternstamped = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 timeout = 2;
 * @return {number}
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutPattern_request} returns this
 */
proto.cyberdogapp.CheckoutPattern_request.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CheckoutPattern_respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CheckoutPattern_respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutPattern_respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    isFeedback: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    currentChecking: (f = msg.getCurrentChecking()) && proto.cyberdogapp.Pattern.toObject(includeInstance, f),
    lastPattern: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    errCode: jspb.Message.getFieldWithDefault(msg, 5, 0),
    errPattern: (f = msg.getErrPattern()) && proto.cyberdogapp.Pattern.toObject(includeInstance, f),
    succeed: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    patternstamped: (f = msg.getPatternstamped()) && proto.cyberdogapp.PatternStamped.toObject(includeInstance, f),
    requestId: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond}
 */
proto.cyberdogapp.CheckoutPattern_respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CheckoutPattern_respond;
  return proto.cyberdogapp.CheckoutPattern_respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CheckoutPattern_respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond}
 */
proto.cyberdogapp.CheckoutPattern_respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFeedback(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Pattern;
      reader.readMessage(value,proto.cyberdogapp.Pattern.deserializeBinaryFromReader);
      msg.setCurrentChecking(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLastPattern(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setErrCode(value);
      break;
    case 6:
      var value = new proto.cyberdogapp.Pattern;
      reader.readMessage(value,proto.cyberdogapp.Pattern.deserializeBinaryFromReader);
      msg.setErrPattern(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceed(value);
      break;
    case 8:
      var value = new proto.cyberdogapp.PatternStamped;
      reader.readMessage(value,proto.cyberdogapp.PatternStamped.deserializeBinaryFromReader);
      msg.setPatternstamped(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CheckoutPattern_respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CheckoutPattern_respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CheckoutPattern_respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsFeedback();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getCurrentChecking();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.Pattern.serializeBinaryToWriter
    );
  }
  f = message.getLastPattern();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getErrCode();
  if (f !== 0) {
    writer.writeFixed32(
      5,
      f
    );
  }
  f = message.getErrPattern();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cyberdogapp.Pattern.serializeBinaryToWriter
    );
  }
  f = message.getSucceed();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPatternstamped();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.cyberdogapp.PatternStamped.serializeBinaryToWriter
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeFixed32(
      9,
      f
    );
  }
};


/**
 * optional bool is_feedback = 1;
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getIsFeedback = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.setIsFeedback = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional Header header = 2;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 2));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
*/
proto.cyberdogapp.CheckoutPattern_respond.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pattern current_checking = 3;
 * @return {?proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getCurrentChecking = function() {
  return /** @type{?proto.cyberdogapp.Pattern} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pattern, 3));
};


/**
 * @param {?proto.cyberdogapp.Pattern|undefined} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
*/
proto.cyberdogapp.CheckoutPattern_respond.prototype.setCurrentChecking = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.clearCurrentChecking = function() {
  return this.setCurrentChecking(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.hasCurrentChecking = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool last_pattern = 4;
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getLastPattern = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.setLastPattern = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional fixed32 err_code = 5;
 * @return {number}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getErrCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.setErrCode = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Pattern err_pattern = 6;
 * @return {?proto.cyberdogapp.Pattern}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getErrPattern = function() {
  return /** @type{?proto.cyberdogapp.Pattern} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pattern, 6));
};


/**
 * @param {?proto.cyberdogapp.Pattern|undefined} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
*/
proto.cyberdogapp.CheckoutPattern_respond.prototype.setErrPattern = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.clearErrPattern = function() {
  return this.setErrPattern(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.hasErrPattern = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool succeed = 7;
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getSucceed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.setSucceed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional PatternStamped patternstamped = 8;
 * @return {?proto.cyberdogapp.PatternStamped}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getPatternstamped = function() {
  return /** @type{?proto.cyberdogapp.PatternStamped} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.PatternStamped, 8));
};


/**
 * @param {?proto.cyberdogapp.PatternStamped|undefined} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
*/
proto.cyberdogapp.CheckoutPattern_respond.prototype.setPatternstamped = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.clearPatternstamped = function() {
  return this.setPatternstamped(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.hasPatternstamped = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional fixed32 request_id = 9;
 * @return {number}
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CheckoutPattern_respond} returns this
 */
proto.cyberdogapp.CheckoutPattern_respond.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.TrackingStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.TrackingStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.TrackingStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TrackingStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.TrackingStatus}
 */
proto.cyberdogapp.TrackingStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.TrackingStatus;
  return proto.cyberdogapp.TrackingStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.TrackingStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.TrackingStatus}
 */
proto.cyberdogapp.TrackingStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.TrackingStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.TrackingStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.TrackingStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TrackingStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.TrackingStatus.Status = {
  OBJECT_FAR: 0,
  OBJECT_NEAR: 1,
  OBJECT_LOST: 2,
  OBJECT_EDGE: 3
};

/**
 * optional fixed32 status = 1;
 * @return {number}
 */
proto.cyberdogapp.TrackingStatus.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.TrackingStatus} returns this
 */
proto.cyberdogapp.TrackingStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.BodyInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.BodyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.BodyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.BodyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    infosList: jspb.Message.toObjectList(msg.getInfosList(),
    proto.cyberdogapp.Body.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.BodyInfo}
 */
proto.cyberdogapp.BodyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.BodyInfo;
  return proto.cyberdogapp.BodyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.BodyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.BodyInfo}
 */
proto.cyberdogapp.BodyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCount(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.Body;
      reader.readMessage(value,proto.cyberdogapp.Body.deserializeBinaryFromReader);
      msg.addInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.BodyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.BodyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.BodyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cyberdogapp.Body.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.BodyInfo.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.BodyInfo} returns this
*/
proto.cyberdogapp.BodyInfo.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.BodyInfo} returns this
 */
proto.cyberdogapp.BodyInfo.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.BodyInfo.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 count = 2;
 * @return {number}
 */
proto.cyberdogapp.BodyInfo.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.BodyInfo} returns this
 */
proto.cyberdogapp.BodyInfo.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Body infos = 3;
 * @return {!Array<!proto.cyberdogapp.Body>}
 */
proto.cyberdogapp.BodyInfo.prototype.getInfosList = function() {
  return /** @type{!Array<!proto.cyberdogapp.Body>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cyberdogapp.Body, 3));
};


/**
 * @param {!Array<!proto.cyberdogapp.Body>} value
 * @return {!proto.cyberdogapp.BodyInfo} returns this
*/
proto.cyberdogapp.BodyInfo.prototype.setInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cyberdogapp.Body=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.Body}
 */
proto.cyberdogapp.BodyInfo.prototype.addInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cyberdogapp.Body, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.BodyInfo} returns this
 */
proto.cyberdogapp.BodyInfo.prototype.clearInfosList = function() {
  return this.setInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Body.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Body.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Body} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Body.toObject = function(includeInstance, msg) {
  var f, obj = {
    roi: (f = msg.getRoi()) && proto.cyberdogapp.RegionOfInterest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Body}
 */
proto.cyberdogapp.Body.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Body;
  return proto.cyberdogapp.Body.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Body} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Body}
 */
proto.cyberdogapp.Body.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.RegionOfInterest;
      reader.readMessage(value,proto.cyberdogapp.RegionOfInterest.deserializeBinaryFromReader);
      msg.setRoi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Body.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Body.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Body} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Body.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoi();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.RegionOfInterest.serializeBinaryToWriter
    );
  }
};


/**
 * optional RegionOfInterest roi = 1;
 * @return {?proto.cyberdogapp.RegionOfInterest}
 */
proto.cyberdogapp.Body.prototype.getRoi = function() {
  return /** @type{?proto.cyberdogapp.RegionOfInterest} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.RegionOfInterest, 1));
};


/**
 * @param {?proto.cyberdogapp.RegionOfInterest|undefined} value
 * @return {!proto.cyberdogapp.Body} returns this
*/
proto.cyberdogapp.Body.prototype.setRoi = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Body} returns this
 */
proto.cyberdogapp.Body.prototype.clearRoi = function() {
  return this.setRoi(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Body.prototype.hasRoi = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.BodyRegion_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.BodyRegion_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.BodyRegion_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyRegion_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    roi: (f = msg.getRoi()) && proto.cyberdogapp.RegionOfInterest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.BodyRegion_Request}
 */
proto.cyberdogapp.BodyRegion_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.BodyRegion_Request;
  return proto.cyberdogapp.BodyRegion_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.BodyRegion_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.BodyRegion_Request}
 */
proto.cyberdogapp.BodyRegion_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.RegionOfInterest;
      reader.readMessage(value,proto.cyberdogapp.RegionOfInterest.deserializeBinaryFromReader);
      msg.setRoi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.BodyRegion_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.BodyRegion_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.BodyRegion_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyRegion_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoi();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.RegionOfInterest.serializeBinaryToWriter
    );
  }
};


/**
 * optional RegionOfInterest roi = 1;
 * @return {?proto.cyberdogapp.RegionOfInterest}
 */
proto.cyberdogapp.BodyRegion_Request.prototype.getRoi = function() {
  return /** @type{?proto.cyberdogapp.RegionOfInterest} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.RegionOfInterest, 1));
};


/**
 * @param {?proto.cyberdogapp.RegionOfInterest|undefined} value
 * @return {!proto.cyberdogapp.BodyRegion_Request} returns this
*/
proto.cyberdogapp.BodyRegion_Request.prototype.setRoi = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.BodyRegion_Request} returns this
 */
proto.cyberdogapp.BodyRegion_Request.prototype.clearRoi = function() {
  return this.setRoi(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.BodyRegion_Request.prototype.hasRoi = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.BodyRegion_Respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.BodyRegion_Respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.BodyRegion_Respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyRegion_Respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.BodyRegion_Respond}
 */
proto.cyberdogapp.BodyRegion_Respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.BodyRegion_Respond;
  return proto.cyberdogapp.BodyRegion_Respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.BodyRegion_Respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.BodyRegion_Respond}
 */
proto.cyberdogapp.BodyRegion_Respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.BodyRegion_Respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.BodyRegion_Respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.BodyRegion_Respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.BodyRegion_Respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.cyberdogapp.BodyRegion_Respond.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.BodyRegion_Respond} returns this
 */
proto.cyberdogapp.BodyRegion_Respond.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.RegionOfInterest.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.RegionOfInterest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.RegionOfInterest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RegionOfInterest.toObject = function(includeInstance, msg) {
  var f, obj = {
    xOffset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    yOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    width: jspb.Message.getFieldWithDefault(msg, 4, 0),
    doRectify: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.RegionOfInterest}
 */
proto.cyberdogapp.RegionOfInterest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.RegionOfInterest;
  return proto.cyberdogapp.RegionOfInterest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.RegionOfInterest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.RegionOfInterest}
 */
proto.cyberdogapp.RegionOfInterest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setXOffset(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setYOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoRectify(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.RegionOfInterest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.RegionOfInterest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.RegionOfInterest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.RegionOfInterest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXOffset();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getYOffset();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
  f = message.getDoRectify();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional fixed32 x_offset = 1;
 * @return {number}
 */
proto.cyberdogapp.RegionOfInterest.prototype.getXOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RegionOfInterest} returns this
 */
proto.cyberdogapp.RegionOfInterest.prototype.setXOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 y_offset = 2;
 * @return {number}
 */
proto.cyberdogapp.RegionOfInterest.prototype.getYOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RegionOfInterest} returns this
 */
proto.cyberdogapp.RegionOfInterest.prototype.setYOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional fixed32 height = 3;
 * @return {number}
 */
proto.cyberdogapp.RegionOfInterest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RegionOfInterest} returns this
 */
proto.cyberdogapp.RegionOfInterest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional fixed32 width = 4;
 * @return {number}
 */
proto.cyberdogapp.RegionOfInterest.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.RegionOfInterest} returns this
 */
proto.cyberdogapp.RegionOfInterest.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool do_rectify = 5;
 * @return {boolean}
 */
proto.cyberdogapp.RegionOfInterest.prototype.getDoRectify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.RegionOfInterest} returns this
 */
proto.cyberdogapp.RegionOfInterest.prototype.setDoRectify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.MonOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.MonOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.MonOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MonOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    para: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.MonOrder}
 */
proto.cyberdogapp.MonOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.MonOrder;
  return proto.cyberdogapp.MonOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.MonOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.MonOrder}
 */
proto.cyberdogapp.MonOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPara(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.MonOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.MonOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.MonOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MonOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getPara();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.MonOrder.ID = {
  MONO_ORDER_NULL: 0,
  MONO_ORDER_WAKE_STOP: 1,
  MONO_ORDER_SHUT_STOP: 2,
  MONO_ORDER_STAND_UP: 9,
  MONO_ORDER_PROSTRATE: 10,
  MONO_ORDER_COME_HERE: 11,
  MONO_ORDER_STEP_BACK: 12,
  MONO_ORDER_TURN_AROUND: 13,
  MONO_ORDER_HI_FIVE: 14,
  MONO_ORDER_DANCE: 15,
  MONO_ORDER_WELCOME: 16,
  MONO_ORDER_TURN_OVER: 17,
  MONO_ORDER_SIT: 18,
  MONO_ORDER_BOW: 19,
  MONO_ORDER_MAX: 20
};

/**
 * optional fixed32 id = 1;
 * @return {number}
 */
proto.cyberdogapp.MonOrder.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MonOrder} returns this
 */
proto.cyberdogapp.MonOrder.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double para = 2;
 * @return {number}
 */
proto.cyberdogapp.MonOrder.prototype.getPara = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MonOrder} returns this
 */
proto.cyberdogapp.MonOrder.prototype.setPara = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CameraService_request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CameraService_request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CameraService_request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CameraService_request.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    args: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CameraService_request}
 */
proto.cyberdogapp.CameraService_request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CameraService_request;
  return proto.cyberdogapp.CameraService_request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CameraService_request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CameraService_request}
 */
proto.cyberdogapp.CameraService_request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CameraService_request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CameraService_request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CameraService_request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CameraService_request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.CameraService_request.Command = {
  SET_PARAMETERS: 0,
  TAKE_PICTURE: 1,
  START_RECORDING: 2,
  STOP_RECORDING: 3,
  GET_STATE: 4,
  DELETE_FILE: 5,
  GET_ALL_FILES: 6,
  START_LIVE_STREAM: 7,
  STOP_LIVE_STREAM: 8
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.CameraService_request.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CameraService_request} returns this
 */
proto.cyberdogapp.CameraService_request.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string args = 2;
 * @return {string}
 */
proto.cyberdogapp.CameraService_request.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.CameraService_request} returns this
 */
proto.cyberdogapp.CameraService_request.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CameraService_respond.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CameraService_respond.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CameraService_respond} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CameraService_respond.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CameraService_respond}
 */
proto.cyberdogapp.CameraService_respond.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CameraService_respond;
  return proto.cyberdogapp.CameraService_respond.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CameraService_respond} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CameraService_respond}
 */
proto.cyberdogapp.CameraService_respond.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CameraService_respond.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CameraService_respond.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CameraService_respond} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CameraService_respond.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.CameraService_respond.Result = {
  SUCCESS: 0,
  INVALID_ARGS: 1,
  UNSUPPORTED: 2,
  TIMEOUT: 3,
  BUSY: 4,
  INVALID_STATE: 5,
  INNER_ERROR: 6,
  UNDEFINED_ERROR: -1
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.CameraService_respond.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CameraService_respond} returns this
 */
proto.cyberdogapp.CameraService_respond.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 result = 2;
 * @return {number}
 */
proto.cyberdogapp.CameraService_respond.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.CameraService_respond} returns this
 */
proto.cyberdogapp.CameraService_respond.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.cyberdogapp.CameraService_respond.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.CameraService_respond} returns this
 */
proto.cyberdogapp.CameraService_respond.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.FaceManager_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.FaceManager_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.FaceManager_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceManager_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    args: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.FaceManager_Request}
 */
proto.cyberdogapp.FaceManager_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.FaceManager_Request;
  return proto.cyberdogapp.FaceManager_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.FaceManager_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.FaceManager_Request}
 */
proto.cyberdogapp.FaceManager_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.FaceManager_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.FaceManager_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.FaceManager_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceManager_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getArgs();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.FaceManager_Request.Command = {
  ADD_FACE: 0,
  CANCLE_ADD_FACE: 1,
  CONFIRM_LAST_FACE: 2,
  UPDATE_FACE_ID: 3,
  DELETE_FACE: 4,
  GET_ALL_FACES: 5
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.FaceManager_Request.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.FaceManager_Request} returns this
 */
proto.cyberdogapp.FaceManager_Request.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string args = 2;
 * @return {string}
 */
proto.cyberdogapp.FaceManager_Request.prototype.getArgs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.FaceManager_Request} returns this
 */
proto.cyberdogapp.FaceManager_Request.prototype.setArgs = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.FaceManager_Response.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.FaceManager_Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.FaceManager_Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.FaceManager_Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceManager_Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: jspb.Message.getFieldWithDefault(msg, 2, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    faceImagesList: jspb.Message.toObjectList(msg.getFaceImagesList(),
    proto.cyberdogapp.CompressedImage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.FaceManager_Response}
 */
proto.cyberdogapp.FaceManager_Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.FaceManager_Response;
  return proto.cyberdogapp.FaceManager_Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.FaceManager_Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.FaceManager_Response}
 */
proto.cyberdogapp.FaceManager_Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = new proto.cyberdogapp.CompressedImage;
      reader.readMessage(value,proto.cyberdogapp.CompressedImage.deserializeBinaryFromReader);
      msg.addFaceImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.FaceManager_Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.FaceManager_Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.FaceManager_Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceManager_Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getResult();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFaceImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.cyberdogapp.CompressedImage.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.FaceManager_Response.FaceResult = {
  RESULT_SUCCESS: 0,
  RESULT_INVALID_ARGS: 1,
  RESULT_UNSUPPORTED: 2,
  RESULT_TIMEOUT: 3,
  RESULT_BUSY: 4,
  RESULT_INVALID_STATE: 5,
  RESULT_INNER_ERROR: 6,
  RESULT_UNDEFINED_ERROR: -1
};

/**
 * optional fixed32 command = 1;
 * @return {number}
 */
proto.cyberdogapp.FaceManager_Response.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.FaceManager_Response} returns this
 */
proto.cyberdogapp.FaceManager_Response.prototype.setCommand = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional fixed32 result = 2;
 * @return {number}
 */
proto.cyberdogapp.FaceManager_Response.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.FaceManager_Response} returns this
 */
proto.cyberdogapp.FaceManager_Response.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.cyberdogapp.FaceManager_Response.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.FaceManager_Response} returns this
 */
proto.cyberdogapp.FaceManager_Response.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated CompressedImage face_images = 4;
 * @return {!Array<!proto.cyberdogapp.CompressedImage>}
 */
proto.cyberdogapp.FaceManager_Response.prototype.getFaceImagesList = function() {
  return /** @type{!Array<!proto.cyberdogapp.CompressedImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cyberdogapp.CompressedImage, 4));
};


/**
 * @param {!Array<!proto.cyberdogapp.CompressedImage>} value
 * @return {!proto.cyberdogapp.FaceManager_Response} returns this
*/
proto.cyberdogapp.FaceManager_Response.prototype.setFaceImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cyberdogapp.CompressedImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.CompressedImage}
 */
proto.cyberdogapp.FaceManager_Response.prototype.addFaceImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cyberdogapp.CompressedImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.FaceManager_Response} returns this
 */
proto.cyberdogapp.FaceManager_Response.prototype.clearFaceImagesList = function() {
  return this.setFaceImagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.CompressedImage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.CompressedImage.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.CompressedImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.CompressedImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CompressedImage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    format: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.CompressedImage}
 */
proto.cyberdogapp.CompressedImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.CompressedImage;
  return proto.cyberdogapp.CompressedImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.CompressedImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.CompressedImage}
 */
proto.cyberdogapp.CompressedImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addData(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.CompressedImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.CompressedImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.CompressedImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.CompressedImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedFixed32(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.CompressedImage.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.CompressedImage} returns this
*/
proto.cyberdogapp.CompressedImage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.CompressedImage} returns this
 */
proto.cyberdogapp.CompressedImage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.CompressedImage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.cyberdogapp.CompressedImage.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.CompressedImage} returns this
 */
proto.cyberdogapp.CompressedImage.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated fixed32 data = 3;
 * @return {!Array<number>}
 */
proto.cyberdogapp.CompressedImage.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cyberdogapp.CompressedImage} returns this
 */
proto.cyberdogapp.CompressedImage.prototype.setDataList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.CompressedImage} returns this
 */
proto.cyberdogapp.CompressedImage.prototype.addData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.CompressedImage} returns this
 */
proto.cyberdogapp.CompressedImage.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Target_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Target_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Target_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Target_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cyberdogapp.MapMetaData.toObject(includeInstance, f),
    targetX: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetY: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Target_Request}
 */
proto.cyberdogapp.Target_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Target_Request;
  return proto.cyberdogapp.Target_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Target_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Target_Request}
 */
proto.cyberdogapp.Target_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.MapMetaData;
      reader.readMessage(value,proto.cyberdogapp.MapMetaData.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTargetX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setTargetY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Target_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Target_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Target_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Target_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.MapMetaData.serializeBinaryToWriter
    );
  }
  f = message.getTargetX();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
  f = message.getTargetY();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Target_Request.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.Target_Request} returns this
*/
proto.cyberdogapp.Target_Request.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Target_Request} returns this
 */
proto.cyberdogapp.Target_Request.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Target_Request.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MapMetaData info = 2;
 * @return {?proto.cyberdogapp.MapMetaData}
 */
proto.cyberdogapp.Target_Request.prototype.getInfo = function() {
  return /** @type{?proto.cyberdogapp.MapMetaData} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MapMetaData, 2));
};


/**
 * @param {?proto.cyberdogapp.MapMetaData|undefined} value
 * @return {!proto.cyberdogapp.Target_Request} returns this
*/
proto.cyberdogapp.Target_Request.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Target_Request} returns this
 */
proto.cyberdogapp.Target_Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Target_Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional fixed32 target_x = 3;
 * @return {number}
 */
proto.cyberdogapp.Target_Request.prototype.getTargetX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Target_Request} returns this
 */
proto.cyberdogapp.Target_Request.prototype.setTargetX = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional fixed32 target_y = 4;
 * @return {number}
 */
proto.cyberdogapp.Target_Request.prototype.getTargetY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Target_Request} returns this
 */
proto.cyberdogapp.Target_Request.prototype.setTargetY = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.MapMetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.MapMetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.MapMetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MapMetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapLoadTime: (f = msg.getMapLoadTime()) && proto.cyberdogapp.Timestamp.toObject(includeInstance, f),
    resolution: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    origin: (f = msg.getOrigin()) && proto.cyberdogapp.Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.MapMetaData}
 */
proto.cyberdogapp.MapMetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.MapMetaData;
  return proto.cyberdogapp.MapMetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.MapMetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.MapMetaData}
 */
proto.cyberdogapp.MapMetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Timestamp;
      reader.readMessage(value,proto.cyberdogapp.Timestamp.deserializeBinaryFromReader);
      msg.setMapLoadTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setHeight(value);
      break;
    case 5:
      var value = new proto.cyberdogapp.Pose;
      reader.readMessage(value,proto.cyberdogapp.Pose.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.MapMetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.MapMetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.MapMetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.MapMetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapLoadTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cyberdogapp.Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional Timestamp map_load_time = 1;
 * @return {?proto.cyberdogapp.Timestamp}
 */
proto.cyberdogapp.MapMetaData.prototype.getMapLoadTime = function() {
  return /** @type{?proto.cyberdogapp.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Timestamp, 1));
};


/**
 * @param {?proto.cyberdogapp.Timestamp|undefined} value
 * @return {!proto.cyberdogapp.MapMetaData} returns this
*/
proto.cyberdogapp.MapMetaData.prototype.setMapLoadTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.MapMetaData} returns this
 */
proto.cyberdogapp.MapMetaData.prototype.clearMapLoadTime = function() {
  return this.setMapLoadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.MapMetaData.prototype.hasMapLoadTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float resolution = 2;
 * @return {number}
 */
proto.cyberdogapp.MapMetaData.prototype.getResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MapMetaData} returns this
 */
proto.cyberdogapp.MapMetaData.prototype.setResolution = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional fixed32 width = 3;
 * @return {number}
 */
proto.cyberdogapp.MapMetaData.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MapMetaData} returns this
 */
proto.cyberdogapp.MapMetaData.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional fixed32 height = 4;
 * @return {number}
 */
proto.cyberdogapp.MapMetaData.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.MapMetaData} returns this
 */
proto.cyberdogapp.MapMetaData.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Pose origin = 5;
 * @return {?proto.cyberdogapp.Pose}
 */
proto.cyberdogapp.MapMetaData.prototype.getOrigin = function() {
  return /** @type{?proto.cyberdogapp.Pose} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Pose, 5));
};


/**
 * @param {?proto.cyberdogapp.Pose|undefined} value
 * @return {!proto.cyberdogapp.MapMetaData} returns this
*/
proto.cyberdogapp.MapMetaData.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.MapMetaData} returns this
 */
proto.cyberdogapp.MapMetaData.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.MapMetaData.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Target_Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Target_Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Target_Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Target_Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.cyberdogapp.MapMetaData.toObject(includeInstance, f),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Target_Response}
 */
proto.cyberdogapp.Target_Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Target_Response;
  return proto.cyberdogapp.Target_Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Target_Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Target_Response}
 */
proto.cyberdogapp.Target_Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.MapMetaData;
      reader.readMessage(value,proto.cyberdogapp.MapMetaData.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Target_Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Target_Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Target_Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Target_Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.MapMetaData.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional MapMetaData info = 1;
 * @return {?proto.cyberdogapp.MapMetaData}
 */
proto.cyberdogapp.Target_Response.prototype.getInfo = function() {
  return /** @type{?proto.cyberdogapp.MapMetaData} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MapMetaData, 1));
};


/**
 * @param {?proto.cyberdogapp.MapMetaData|undefined} value
 * @return {!proto.cyberdogapp.Target_Response} returns this
*/
proto.cyberdogapp.Target_Response.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Target_Response} returns this
 */
proto.cyberdogapp.Target_Response.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Target_Response.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.cyberdogapp.Target_Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.Target_Response} returns this
 */
proto.cyberdogapp.Target_Response.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Odometry.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Odometry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Odometry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Odometry.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    childFrameId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pose: (f = msg.getPose()) && proto.cyberdogapp.PoseWithCovariance.toObject(includeInstance, f),
    twist: (f = msg.getTwist()) && proto.cyberdogapp.TwistWithCovariance.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Odometry}
 */
proto.cyberdogapp.Odometry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Odometry;
  return proto.cyberdogapp.Odometry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Odometry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Odometry}
 */
proto.cyberdogapp.Odometry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChildFrameId(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.PoseWithCovariance;
      reader.readMessage(value,proto.cyberdogapp.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 4:
      var value = new proto.cyberdogapp.TwistWithCovariance;
      reader.readMessage(value,proto.cyberdogapp.TwistWithCovariance.deserializeBinaryFromReader);
      msg.setTwist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Odometry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Odometry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Odometry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Odometry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getChildFrameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cyberdogapp.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getTwist();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cyberdogapp.TwistWithCovariance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Odometry.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.Odometry} returns this
*/
proto.cyberdogapp.Odometry.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Odometry} returns this
 */
proto.cyberdogapp.Odometry.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Odometry.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string child_frame_id = 2;
 * @return {string}
 */
proto.cyberdogapp.Odometry.prototype.getChildFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Odometry} returns this
 */
proto.cyberdogapp.Odometry.prototype.setChildFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PoseWithCovariance pose = 3;
 * @return {?proto.cyberdogapp.PoseWithCovariance}
 */
proto.cyberdogapp.Odometry.prototype.getPose = function() {
  return /** @type{?proto.cyberdogapp.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.PoseWithCovariance, 3));
};


/**
 * @param {?proto.cyberdogapp.PoseWithCovariance|undefined} value
 * @return {!proto.cyberdogapp.Odometry} returns this
*/
proto.cyberdogapp.Odometry.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Odometry} returns this
 */
proto.cyberdogapp.Odometry.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Odometry.prototype.hasPose = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TwistWithCovariance twist = 4;
 * @return {?proto.cyberdogapp.TwistWithCovariance}
 */
proto.cyberdogapp.Odometry.prototype.getTwist = function() {
  return /** @type{?proto.cyberdogapp.TwistWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.TwistWithCovariance, 4));
};


/**
 * @param {?proto.cyberdogapp.TwistWithCovariance|undefined} value
 * @return {!proto.cyberdogapp.Odometry} returns this
*/
proto.cyberdogapp.Odometry.prototype.setTwist = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Odometry} returns this
 */
proto.cyberdogapp.Odometry.prototype.clearTwist = function() {
  return this.setTwist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Odometry.prototype.hasTwist = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.OccupancyGrid.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.OccupancyGrid.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.OccupancyGrid.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.OccupancyGrid} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OccupancyGrid.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    info: (f = msg.getInfo()) && proto.cyberdogapp.MapMetaData.toObject(includeInstance, f),
    dataList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.OccupancyGrid}
 */
proto.cyberdogapp.OccupancyGrid.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.OccupancyGrid;
  return proto.cyberdogapp.OccupancyGrid.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.OccupancyGrid} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.OccupancyGrid}
 */
proto.cyberdogapp.OccupancyGrid.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.MapMetaData;
      reader.readMessage(value,proto.cyberdogapp.MapMetaData.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed32() : [reader.readFixed32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addData(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.OccupancyGrid.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.OccupancyGrid.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.OccupancyGrid} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.OccupancyGrid.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.MapMetaData.serializeBinaryToWriter
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedFixed32(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.OccupancyGrid.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
*/
proto.cyberdogapp.OccupancyGrid.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
 */
proto.cyberdogapp.OccupancyGrid.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.OccupancyGrid.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MapMetaData info = 2;
 * @return {?proto.cyberdogapp.MapMetaData}
 */
proto.cyberdogapp.OccupancyGrid.prototype.getInfo = function() {
  return /** @type{?proto.cyberdogapp.MapMetaData} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.MapMetaData, 2));
};


/**
 * @param {?proto.cyberdogapp.MapMetaData|undefined} value
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
*/
proto.cyberdogapp.OccupancyGrid.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
 */
proto.cyberdogapp.OccupancyGrid.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.OccupancyGrid.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated fixed32 data = 3;
 * @return {!Array<number>}
 */
proto.cyberdogapp.OccupancyGrid.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
 */
proto.cyberdogapp.OccupancyGrid.prototype.setDataList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
 */
proto.cyberdogapp.OccupancyGrid.prototype.addData = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.OccupancyGrid} returns this
 */
proto.cyberdogapp.OccupancyGrid.prototype.clearDataList = function() {
  return this.setDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cyberdogapp.FaceResult.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.FaceResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.FaceResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.FaceResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    faceImagesList: jspb.Message.toObjectList(msg.getFaceImagesList(),
    proto.cyberdogapp.CompressedImage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.FaceResult}
 */
proto.cyberdogapp.FaceResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.FaceResult;
  return proto.cyberdogapp.FaceResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.FaceResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.FaceResult}
 */
proto.cyberdogapp.FaceResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = new proto.cyberdogapp.CompressedImage;
      reader.readMessage(value,proto.cyberdogapp.CompressedImage.deserializeBinaryFromReader);
      msg.addFaceImages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.FaceResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.FaceResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.FaceResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.FaceResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFaceImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cyberdogapp.CompressedImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional fixed32 result = 1;
 * @return {number}
 */
proto.cyberdogapp.FaceResult.prototype.getResult = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.FaceResult} returns this
 */
proto.cyberdogapp.FaceResult.prototype.setResult = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.cyberdogapp.FaceResult.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.FaceResult} returns this
 */
proto.cyberdogapp.FaceResult.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CompressedImage face_images = 3;
 * @return {!Array<!proto.cyberdogapp.CompressedImage>}
 */
proto.cyberdogapp.FaceResult.prototype.getFaceImagesList = function() {
  return /** @type{!Array<!proto.cyberdogapp.CompressedImage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cyberdogapp.CompressedImage, 3));
};


/**
 * @param {!Array<!proto.cyberdogapp.CompressedImage>} value
 * @return {!proto.cyberdogapp.FaceResult} returns this
*/
proto.cyberdogapp.FaceResult.prototype.setFaceImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cyberdogapp.CompressedImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cyberdogapp.CompressedImage}
 */
proto.cyberdogapp.FaceResult.prototype.addFaceImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cyberdogapp.CompressedImage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cyberdogapp.FaceResult} returns this
 */
proto.cyberdogapp.FaceResult.prototype.clearFaceImagesList = function() {
  return this.setFaceImagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.VoiceprintResult.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.VoiceprintResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.VoiceprintResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.VoiceprintResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    succeed: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    error: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.VoiceprintResult}
 */
proto.cyberdogapp.VoiceprintResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.VoiceprintResult;
  return proto.cyberdogapp.VoiceprintResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.VoiceprintResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.VoiceprintResult}
 */
proto.cyberdogapp.VoiceprintResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.VoiceprintResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.VoiceprintResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.VoiceprintResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.VoiceprintResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getSucceed();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getError();
  if (f !== 0) {
    writer.writeFixed32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.VoiceprintResult.ErrorCode = {
  NORMAL: 0,
  UNKNOWN_ERROR: 1,
  RECORD_FAILED: 2,
  PLAY_FAILED: 4,
  TOO_NOISY_BACKGROUND: 8,
  TIMEOUT: 16
};

/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.VoiceprintResult.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.VoiceprintResult} returns this
*/
proto.cyberdogapp.VoiceprintResult.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.VoiceprintResult} returns this
 */
proto.cyberdogapp.VoiceprintResult.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.VoiceprintResult.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed32 type = 2;
 * @return {number}
 */
proto.cyberdogapp.VoiceprintResult.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.VoiceprintResult} returns this
 */
proto.cyberdogapp.VoiceprintResult.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool succeed = 3;
 * @return {boolean}
 */
proto.cyberdogapp.VoiceprintResult.prototype.getSucceed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.VoiceprintResult} returns this
 */
proto.cyberdogapp.VoiceprintResult.prototype.setSucceed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional fixed32 error = 4;
 * @return {number}
 */
proto.cyberdogapp.VoiceprintResult.prototype.getError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.VoiceprintResult} returns this
 */
proto.cyberdogapp.VoiceprintResult.prototype.setError = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Voiceprint_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Voiceprint_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Voiceprint_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Voiceprint_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.cyberdogapp.VoiceprintEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Voiceprint_Request}
 */
proto.cyberdogapp.Voiceprint_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Voiceprint_Request;
  return proto.cyberdogapp.Voiceprint_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Voiceprint_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Voiceprint_Request}
 */
proto.cyberdogapp.Voiceprint_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.VoiceprintEntry;
      reader.readMessage(value,proto.cyberdogapp.VoiceprintEntry.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Voiceprint_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Voiceprint_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Voiceprint_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Voiceprint_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.VoiceprintEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional VoiceprintEntry info = 1;
 * @return {?proto.cyberdogapp.VoiceprintEntry}
 */
proto.cyberdogapp.Voiceprint_Request.prototype.getInfo = function() {
  return /** @type{?proto.cyberdogapp.VoiceprintEntry} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.VoiceprintEntry, 1));
};


/**
 * @param {?proto.cyberdogapp.VoiceprintEntry|undefined} value
 * @return {!proto.cyberdogapp.Voiceprint_Request} returns this
*/
proto.cyberdogapp.Voiceprint_Request.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Voiceprint_Request} returns this
 */
proto.cyberdogapp.Voiceprint_Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Voiceprint_Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.VoiceprintEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.VoiceprintEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.VoiceprintEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.cyberdogapp.AudioUser.toObject(includeInstance, f),
    ask: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.VoiceprintEntry}
 */
proto.cyberdogapp.VoiceprintEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.VoiceprintEntry;
  return proto.cyberdogapp.VoiceprintEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.VoiceprintEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.VoiceprintEntry}
 */
proto.cyberdogapp.VoiceprintEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.AudioUser;
      reader.readMessage(value,proto.cyberdogapp.AudioUser.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setAsk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.VoiceprintEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.VoiceprintEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.VoiceprintEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.AudioUser.serializeBinaryToWriter
    );
  }
  f = message.getAsk();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.VoiceprintEntry.VoiceCommand = {
  DEFAULT: 0,
  START: 1,
  STOP: 2,
  HAS_DATA: 3,
  DELETE_DATA: 4
};

/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.VoiceprintEntry} returns this
*/
proto.cyberdogapp.VoiceprintEntry.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.VoiceprintEntry} returns this
 */
proto.cyberdogapp.VoiceprintEntry.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioUser user = 2;
 * @return {?proto.cyberdogapp.AudioUser}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.getUser = function() {
  return /** @type{?proto.cyberdogapp.AudioUser} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.AudioUser, 2));
};


/**
 * @param {?proto.cyberdogapp.AudioUser|undefined} value
 * @return {!proto.cyberdogapp.VoiceprintEntry} returns this
*/
proto.cyberdogapp.VoiceprintEntry.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.VoiceprintEntry} returns this
 */
proto.cyberdogapp.VoiceprintEntry.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional fixed32 ask = 3;
 * @return {number}
 */
proto.cyberdogapp.VoiceprintEntry.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.VoiceprintEntry} returns this
 */
proto.cyberdogapp.VoiceprintEntry.prototype.setAsk = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.AudioUser.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.AudioUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.AudioUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.AudioUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.AudioUser}
 */
proto.cyberdogapp.AudioUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.AudioUser;
  return proto.cyberdogapp.AudioUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.AudioUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.AudioUser}
 */
proto.cyberdogapp.AudioUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.AudioUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.AudioUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.AudioUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.AudioUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.AudioUser.AudioCommand = {
  DEFAULT: 0,
  STARTER: 1,
  POWER: 2,
  TOUCH: 3,
  CAMERA: 4,
  APP: 5,
  BLUETOOTH: 6,
  WIFI: 7,
  XIAOAI: 8
};

/**
 * optional fixed32 id = 1;
 * @return {number}
 */
proto.cyberdogapp.AudioUser.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.AudioUser} returns this
 */
proto.cyberdogapp.AudioUser.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Voiceprint_Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Voiceprint_Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Voiceprint_Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Voiceprint_Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    ask: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accept: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Voiceprint_Response}
 */
proto.cyberdogapp.Voiceprint_Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Voiceprint_Response;
  return proto.cyberdogapp.Voiceprint_Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Voiceprint_Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Voiceprint_Response}
 */
proto.cyberdogapp.Voiceprint_Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setAsk(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccept(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Voiceprint_Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Voiceprint_Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Voiceprint_Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Voiceprint_Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsk();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getAccept();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional fixed32 ask = 1;
 * @return {number}
 */
proto.cyberdogapp.Voiceprint_Response.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Voiceprint_Response} returns this
 */
proto.cyberdogapp.Voiceprint_Response.prototype.setAsk = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool accept = 2;
 * @return {boolean}
 */
proto.cyberdogapp.Voiceprint_Response.prototype.getAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.cyberdogapp.Voiceprint_Response} returns this
 */
proto.cyberdogapp.Voiceprint_Response.prototype.setAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.TokenPass_Request.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.TokenPass_Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.TokenPass_Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TokenPass_Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    ask: jspb.Message.getFieldWithDefault(msg, 1, 0),
    info: (f = msg.getInfo()) && proto.cyberdogapp.Token.toObject(includeInstance, f),
    vol: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.TokenPass_Request}
 */
proto.cyberdogapp.TokenPass_Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.TokenPass_Request;
  return proto.cyberdogapp.TokenPass_Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.TokenPass_Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.TokenPass_Request}
 */
proto.cyberdogapp.TokenPass_Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setAsk(value);
      break;
    case 2:
      var value = new proto.cyberdogapp.Token;
      reader.readMessage(value,proto.cyberdogapp.Token.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setVol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.TokenPass_Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.TokenPass_Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.TokenPass_Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TokenPass_Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsk();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.cyberdogapp.Token.serializeBinaryToWriter
    );
  }
  f = message.getVol();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.TokenPass_Request.Code = {
  DEFAULT: 0,
  ASK_TOKEN: 1,
  ASK_DEVICE_ID: 2,
  ASK_XIAOAI_OFF: 3,
  ASK_XIAOAI_ON: 4,
  ASK_XIAOAI_ONLINE_OFF: 5,
  ASK_XIAOAI_ONLINE_ON: 6,
  ASK_SET_VOLUME: 7,
  ASK_GET_VOLUME: 8,
  ASK_XIAOAI_SWITCH_STATUS: 9
};

/**
 * optional fixed32 ask = 1;
 * @return {number}
 */
proto.cyberdogapp.TokenPass_Request.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.TokenPass_Request} returns this
 */
proto.cyberdogapp.TokenPass_Request.prototype.setAsk = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Token info = 2;
 * @return {?proto.cyberdogapp.Token}
 */
proto.cyberdogapp.TokenPass_Request.prototype.getInfo = function() {
  return /** @type{?proto.cyberdogapp.Token} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Token, 2));
};


/**
 * @param {?proto.cyberdogapp.Token|undefined} value
 * @return {!proto.cyberdogapp.TokenPass_Request} returns this
*/
proto.cyberdogapp.TokenPass_Request.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.TokenPass_Request} returns this
 */
proto.cyberdogapp.TokenPass_Request.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.TokenPass_Request.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional fixed32 vol = 3;
 * @return {number}
 */
proto.cyberdogapp.TokenPass_Request.prototype.getVol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.TokenPass_Request} returns this
 */
proto.cyberdogapp.TokenPass_Request.prototype.setVol = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.Token.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.Token.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.Token} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Token.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.cyberdogapp.Header.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenRefresh: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tokenMd5: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tokenRefreshMd5: jspb.Message.getFieldWithDefault(msg, 5, ""),
    expireIn: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.Token}
 */
proto.cyberdogapp.Token.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.Token;
  return proto.cyberdogapp.Token.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.Token} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.Token}
 */
proto.cyberdogapp.Token.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.cyberdogapp.Header;
      reader.readMessage(value,proto.cyberdogapp.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenRefresh(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenMd5(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenRefreshMd5(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setExpireIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.Token.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.Token.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.Token} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.Token.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.cyberdogapp.Header.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenRefresh();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTokenMd5();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTokenRefreshMd5();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExpireIn();
  if (f !== 0) {
    writer.writeFixed32(
      6,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.cyberdogapp.Header}
 */
proto.cyberdogapp.Token.prototype.getHeader = function() {
  return /** @type{?proto.cyberdogapp.Header} */ (
    jspb.Message.getWrapperField(this, proto.cyberdogapp.Header, 1));
};


/**
 * @param {?proto.cyberdogapp.Header|undefined} value
 * @return {!proto.cyberdogapp.Token} returns this
*/
proto.cyberdogapp.Token.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cyberdogapp.Token.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.cyberdogapp.Token.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token_refresh = 3;
 * @return {string}
 */
proto.cyberdogapp.Token.prototype.getTokenRefresh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.setTokenRefresh = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token_md5 = 4;
 * @return {string}
 */
proto.cyberdogapp.Token.prototype.getTokenMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.setTokenMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string token_refresh_md5 = 5;
 * @return {string}
 */
proto.cyberdogapp.Token.prototype.getTokenRefreshMd5 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.setTokenRefreshMd5 = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional fixed32 expire_in = 6;
 * @return {number}
 */
proto.cyberdogapp.Token.prototype.getExpireIn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.Token} returns this
 */
proto.cyberdogapp.Token.prototype.setExpireIn = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cyberdogapp.TokenPass_Response.prototype.toObject = function(opt_includeInstance) {
  return proto.cyberdogapp.TokenPass_Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cyberdogapp.TokenPass_Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TokenPass_Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    flage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    diviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    vol: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cyberdogapp.TokenPass_Response}
 */
proto.cyberdogapp.TokenPass_Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cyberdogapp.TokenPass_Response;
  return proto.cyberdogapp.TokenPass_Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cyberdogapp.TokenPass_Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cyberdogapp.TokenPass_Response}
 */
proto.cyberdogapp.TokenPass_Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setFlage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiviceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setVol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cyberdogapp.TokenPass_Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cyberdogapp.TokenPass_Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cyberdogapp.TokenPass_Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cyberdogapp.TokenPass_Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlage();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getDiviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVol();
  if (f !== 0) {
    writer.writeFixed32(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.cyberdogapp.TokenPass_Response.Code = {
  DEFAULT: 0,
  TOKEN_SUCCEED: 1,
  TOKEN_FAILED: 2,
  DID_SUCCEED: 3,
  DID_FAILED: 4,
  XIAOAI_OFF_SUCCEED: 5,
  XIAOAI_OFF_FAILED: 6,
  XIAOAI_ON_SUCCEED: 7,
  XIAOAI_ON_FAILED: 8,
  XIAOAI_ONLINE_OFF_SUCCEED: 9,
  XIAOAI_ONLINE_OFF_FAILED: 10,
  XIAOAI_ONLINE_ON_SUCCEED: 11,
  XIAOAI_ONLINE_ON_FAILED: 12,
  SET_VOLUME_SUCCEED: 13,
  SET_VOLUME_FAILED: 14,
  GET_VOLUME_SUCCEED: 15,
  GET_VOLUME_FAILED: 16,
  XIAOAI_OFF: 17,
  XIAOAI_ONLINE_ON: 18,
  XIAOAI_OFFLINE_ON: 19
};

/**
 * optional fixed32 flage = 1;
 * @return {number}
 */
proto.cyberdogapp.TokenPass_Response.prototype.getFlage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.TokenPass_Response} returns this
 */
proto.cyberdogapp.TokenPass_Response.prototype.setFlage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string divice_id = 2;
 * @return {string}
 */
proto.cyberdogapp.TokenPass_Response.prototype.getDiviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cyberdogapp.TokenPass_Response} returns this
 */
proto.cyberdogapp.TokenPass_Response.prototype.setDiviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional fixed32 vol = 3;
 * @return {number}
 */
proto.cyberdogapp.TokenPass_Response.prototype.getVol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.cyberdogapp.TokenPass_Response} returns this
 */
proto.cyberdogapp.TokenPass_Response.prototype.setVol = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.cyberdogapp.ResultCode = {
  FAILED: 0,
  SUCCEED: 1
};

goog.object.extend(exports, proto.cyberdogapp);
