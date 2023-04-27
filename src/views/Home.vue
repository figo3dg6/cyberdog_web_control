<template>
    <div class="home">
        <!--    <img alt="Vue logo" src="../assets/logo.png">-->
        <h1>CYBERDOG WEB DOME</h1>
        <!--    <video autoplay controls width="640" height="360" id="live"></video>-->
        <div>
            连接状态：
            <el-button v-if="isConnected" size="small" type="success" @click="close()"
            >已连接</el-button
            >
            <el-button v-else size="small" type="danger" @click="connect()"
            >未连接</el-button
            >
        </div>
        <br />
        <el-tabs :modelValue="'控制'">
            <el-tab-pane label="调试" name="调试">
                <el-form inline>
                    <el-form-item label="节点">
                        <el-select v-model="node" @change="getNodeDetails">
                            <el-option
                                    v-for="(item, index) in nodes"
                                    :key="index"
                                    :value="item"
                                    :label="item"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <br />
                    <el-form-item label="订阅">
                        <el-select v-model="subscribing">
                            <el-option
                                    v-for="(item, index) in details.subscribing"
                                    :key="index"
                                    :value="item"
                                    :label="item"
                            ></el-option>
                        </el-select>
                        <el-button @click="addTable('subscribing', subscribing)"
                        >添加</el-button
                        >
                    </el-form-item>
                    <el-form-item label="话题">
                        <el-select v-model="publishing">
                            <el-option
                                    v-for="(item, index) in details.publishing"
                                    :key="index"
                                    :value="item"
                                    :label="item"
                            ></el-option>
                        </el-select>
                        <el-button @click="addTable('publishing', publishing)"
                        >添加</el-button
                        >
                    </el-form-item>
                    <el-form-item label="服务">
                        <el-select v-model="services">
                            <el-option
                                    v-for="(item, index) in details.services"
                                    :key="index"
                                    :value="item"
                                    :label="item"
                            ></el-option>
                        </el-select>
                        <el-button @click="addTable('services', services)">添加</el-button>
                    </el-form-item>
                    <!--      <el-form-item label="节点">-->
                    <!--        <el-select v-model="node">-->
                    <!--          <el-option v-for="(item,index) in nodes" :key="index" :value="item" :label="item"></el-option>-->
                    <!--        </el-select>-->
                    <!--      </el-form-item>-->
                </el-form>
                <el-table :data="list" border>
                    <el-table-column
                            label="节点"
                            align="center"
                            prop="node"
                    ></el-table-column>
                    <el-table-column
                            label="类型"
                            align="center"
                            prop="type"
                            width="120px"
                    ></el-table-column>
                    <el-table-column
                            label="名称"
                            align="center"
                            prop="name"
                    ></el-table-column>
                    <el-table-column label="操作" align="center" width="120px">
                        <template #default="scope">
                            <el-button
                                    v-if="
                  !scope.row.topic &&
                  (scope.row.type = log =
                    'subscribing' || scope.row.type == 'publishing')
                "
                                    @click="subscribe(scope.row)"
                            >监听
                            </el-button>
                            <span v-else>监听中</span>
                            <!--          <el-button v-if="!scope.row.topic && (scope.row.type=log='subscribing'||scope.row.type=='publishing')" @click="subscribe(scope.row)">监听</el-button>-->
                            <!--          <el-button v-if="scope.row.topic" @click="showLog(scope.row)">查看</el-button>-->
                            <!--          <el-button v-if="scope.row.topic" @click="unsubscribe(scope.row)">取消</el-button>-->
                            <!--          <el-button v-if="scope.row.type=='services'">请求</el-button>-->
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: left">
                    <div style="font-weight: bold">Topic：{{ itemLog.name }}</div>
                    <pre>{{ itemLog.log }}</pre>
                </div>
            </el-tab-pane>
            <el-tab-pane label="控制" name="控制">
                <div>
                    <!--          <el-button @click="subscribeStatus">订阅状态</el-button>-->
                    <el-button @click="standUp">站立</el-button>
                    <el-button @click="getDown">趴下</el-button>
                    <br />
                    <br />
                    <span>控制模式：</span>
                    <el-select v-model="controlMode">
                        <el-option
                                v-for="(item, index) in controlModelist"
                                :key="index"
                                :value="item.id"
                                :label="item.name"
                        ></el-option>
                    </el-select>
<!--                    <el-input-number v-model="controlMode" @change="setControlMode(controlMode)"></el-input-number>-->
                    <br />
                    <br />
                    <span>模式类型：</span>
                    <el-select v-model="modeType">
                        <el-option
                                v-for="(item, index) in modeTypeList"
                                :key="index"
                                :value="item.id"
                                :label="item.name"
                        ></el-option>
                    </el-select>
                    <br />
                    <br />
                    <span>动作：</span>
                    <el-select v-model="orderId">
                        <el-option
                                v-for="(item, index) in orderList"
                                :key="index"
                                :value="item.id"
                                :label="item.name"
                        ></el-option>
                    </el-select>
<!--                    <el-input-number v-model="orderId" @change="setExtmonOrder(orderId)"></el-input-number>-->
                    <el-button @click="setExtmonOrder(orderId)">执行</el-button>
                    <br />
                    <br />
                    <span>步态：</span>
                    <el-select v-model="gaitId" @change="setGait(gaitId)">
                        <el-option
                                v-for="(item, index) in gaitList"
                                :key="index"
                                :value="item.id"
                                :label="item.name"
                        ></el-option>
                    </el-select>
                    <el-button @click="setGait(gaitId)">确定</el-button>
                    <br />
                    <br />
                    <div
                            style="display: flex; align-items: center; justify-content: center"
                    >
                        <div class="demonstration">线速度：</div>
                        <el-slider
                                v-model="linearSpeed"
                                :step="0.1"
                                :min="0.1"
                                :max="linearSpeedMax"
                                style="width: 180px; padding: 0 10px"
                        ></el-slider>
                        <div class="demonstration">{{ linearSpeed.toFixed(1) }}m/s</div>
                    </div>
                    <div
                            style="display: flex; align-items: center; justify-content: center"
                    >
                        <div class="demonstration">角速度：</div>
                        <el-slider
                                v-model="angularSpeed"
                                :step="0.1"
                                :min="0.1"
                                :max="1"
                                style="width: 180px; padding: 0 10px"
                        ></el-slider>
                        <div class="demonstration">{{ angularSpeed.toFixed(1) }}m/s</div>
                    </div>
                    <div style="display: flex; justify-content: space-around">
                        <div style="padding: 150px 130px">
                            <ezjoystick
                                    :touchRadius="130"
                                    :ballMoveRadius="50"
                                    :transition="true"
                                    @onJoyStickUpdate="onLeftJoystickUpdate"
                            >
                                <template v-slot:ball>
                                    <div style="width: 50px; height: 50px">
                                        <img
                                                src="@/assets/Ball.png"
                                                style="width: 100%; height: 100%"
                                        />
                                    </div>
                                </template>
                                <template v-slot:stick>
                                    <div style="width: 20px; height: 100%">
                                        <img
                                                src="@/assets/Stick.png"
                                                style="width: 100%; height: 100%; display: block"
                                        />
                                    </div>
                                </template>
                                <template v-slot:bottom>
                                    <div style="width: 130px; height: 130px">
                                        <img
                                                src="@/assets/Dock.png"
                                                style="width: 100%; height: 100%"
                                        />
                                    </div>
                                </template>
                            </ezjoystick>
                        </div>
                        <video
                                ref="video"
                                style="width: 400px; height: 300px; background-color: black"
                        ></video>
                        <div style="padding: 150px 130px">
                            <ezjoystick
                                    :touchRadius="130"
                                    :ballMoveRadius="50"
                                    :transition="true"
                                    @onJoyStickUpdate="onRightJoystickUpdate"
                            >
                                <template v-slot:ball>
                                    <div style="width: 50px; height: 50px">
                                        <img
                                                src="@/assets/Ball.png"
                                                style="width: 100%; height: 100%"
                                        />
                                    </div>
                                </template>
                                <template v-slot:stick>
                                    <div style="width: 20px; height: 100%">
                                        <img
                                                src="@/assets/Stick.png"
                                                style="width: 100%; height: 100%; display: block"
                                        />
                                    </div>
                                </template>
                                <template v-slot:bottom>
                                    <div style="width: 130px; height: 130px">
                                        <img
                                                src="@/assets/Dock.png"
                                                style="width: 100%; height: 100%"
                                        />
                                    </div>
                                </template>
                            </ezjoystick>
                        </div>
                    </div>
                    <br />
                    <!--          <el-button @click="subscribeBms">BMS</el-button>-->
                    <!--          <el-button @click="subscribeWifiRssi">WIFI</el-button>-->
                    <el-button @click="startLiveStream">开启图传</el-button>
                    <el-button @click="stopLiveStream">关闭图传</el-button>
                    <div
                            style="
              text-align: left;
              display: flex;
              justify-content: space-around;
              margin-top: 20px;
            "
                    >
                        <div v-if="bms">
                            <div>电量：{{ bms.batt_soc }} %</div>
                            <div>电压：{{ bms.batt_volt / 1000 }} V</div>
                            <div>电流：{{ bms.batt_curr / 1000 }} A</div>
                            <div>
                                功率：{{
                                    Number(
                                        (((bms.batt_curr / 1000) * bms.batt_volt) / 1000).toFixed(2)
                                    )
                                }}
                                W
                            </div>
                            <div>温度：{{ bms.batt_temp }} ℃</div>
                            <div>健康：{{ bms.batt_health }} %</div>
                            <div>循环：{{ bms.batt_loop_number }}</div>
                            <div>状态：{{ bms.status === 1 ? "充电中" : "使用中" }}</div>
                        </div>
                        <div v-if="statusOut">
                            <div>控制模式：{{ getDictLable(ControlMode, statusOut.modestamped.control_mode) }}</div>
                            <div>模式类型：{{ getDictLable(ModeType, statusOut.modestamped.mode_type) }}</div>
                            <div>步态：{{ getDictLable(GAIT, statusOut.gaitstamped.gait) }}</div>
                            <div>缓存步态：{{ getDictLable(GAIT, statusOut.cached_gait.gait) }}</div>
                            <div>动作：{{ getDictLable(MonOrder, statusOut.orderstamped.id) }}</div>
                            <div>动作参数：{{ statusOut.orderstamped.para }}</div>
                            <div>身体高度：{{ statusOut.parastamped.body_height }}</div>
                            <div>步态高度：{{ statusOut.parastamped.gait_height }}</div>
                        </div>
                        <div v-if="statusOut">
                            <div>
                                线速度：({{ statusOut.velocitystamped.linear_x.toFixed(2) }},
                                {{ statusOut.velocitystamped.linear_y.toFixed(2) }},
                                {{ statusOut.velocitystamped.linear_z.toFixed(2) }})
                            </div>
                            <div>
                                角速度：({{ statusOut.velocitystamped.angular_x.toFixed(2) }},
                                {{ statusOut.velocitystamped.angular_y.toFixed(2) }},
                                {{ statusOut.velocitystamped.angular_z.toFixed(2) }})
                            </div>
                            <div>
                                位置：({{ statusOut.posestamped.position_x.toFixed(2) }},
                                {{ statusOut.posestamped.position_y.toFixed(2) }},
                                {{ statusOut.posestamped.position_x.toFixed(2) }})
                            </div>
                            <div>
                                位姿：({{ statusOut.posestamped.rotation_w.toFixed(2) }},
                                {{ statusOut.posestamped.rotation_x.toFixed(2) }},
                                {{ statusOut.posestamped.rotation_y.toFixed(2) }},
                                {{ statusOut.posestamped.rotation_z.toFixed(2) }})
                            </div>
                            <div>场景：{{ statusOut.scene.type }}</div>
                            <div>
                                GPS：({{ statusOut.scene.lat }}, {{ statusOut.scene.lon }})
                            </div>
                            <div>足触：{{ statusOut.foot_contact.toString(2) }}</div>
                            <div>图传帧率：{{ frameSrcRate }}</div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <!--    <joy></joy>-->
    </div>
</template>

<script>
// @ is an alias to /src
import RosLib from "roslib"; //ros通信库
import ezjoystick from "@/components/ezjoystick.vue"; //摇杆
import VideoConverter from "h264-converter"; //视频流播放器
const {
    // CheckoutMode_request,
    // ModeStamped,
    // Header,
    // Timestamp,
    // Mode,
    // ExtMonOrder_Request,
    // MonOrder,
    // PatternStamped,
    Pattern,
    // CheckoutPattern_request,
    // Twist,
    // Vector3,
    // Decissage,
    // Bms,
    // WifiRssi,
    // CameraService_request
} = require("../lib/cyberdog_app_pb.js");
const GAIT = {
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
    GAIT_DEFAULT: 99,
};
const MonOrder = {
    MONO_ORDER_NULL: 0,
    MONO_ORDER_WAKE_STOP: 1,
    MONO_ORDER_SHUT_STOP: 2,
    MONO_ORDER_STAND_UP: 9,
    MONO_ORDER_PROSTRATE: 10, // 趴下
    MONO_ORDER_COME_HERE: 11,
    MONO_ORDER_STEP_BACK: 12,
    MONO_ORDER_TURN_AROUND: 13,
    MONO_ORDER_HI_FIVE: 14, // 握手
    MONO_ORDER_DANCE: 15, // 跳舞
    MONO_ORDER_WELCOME: 16, // 作揖
    MONO_ORDER_TURN_OVER: 17, // 翻滚
    MONO_ORDER_SIT: 18, // 坐下
    MONO_ORDER_BOW: 19, // 点头
    MONO_ORDER_MAX: 20, // 表演
};
const ModeType = {
    DEFAULT_TYPE: 0,
    TRACK_F: 1,
    TRACK_S: 2,
    EXPLOR_NAV_AB: 3,
    EXPLOR_MAP_U: 4,
    EXPLOR_MAP_N: 5,
};
const ControlMode = {
    DEFAULT: 0,
    LOCK: 1,
    CONFIG: 2,
    MANUAL: 3,
    SEMI: 13,
    EXPLOR: 14,
    TRACK: 15,
};
const CameraServiceRequestCommand = {
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
export default {
    name: "Home",
    components: { ezjoystick },
    data() {
        return {
            isConnected: false,
            ip: '192.168.10.214', // 需要配置铁蛋的IP
            port: '9090',
            prefix: "/mi1036134", // 需要配置铁蛋的前缀
            ros: null,
            GAIT,MonOrder,ControlMode,ModeType,CameraServiceRequestCommand,
            bodyCmd: null,
            node: "",
            nodes: [],
            topics: [],
            types: [],
            details: {},
            itemLog: {},
            publishing: "",
            services: "",
            subscribing: "",
            list: [],
            requestID: 0,
            controlMode: 0,
            controlModelist: [],
            modeType: 0,
            modeTypeList: [],
            orderId: "",
            orderList: [],
            gaitId: "",
            gaitList: [],
            linearSpeedMax: 1.6,
            linearSpeed: 0.3,
            angularSpeed: 0.6,
            bms: null,
            statusOut: null,
            frameSrcRate: 0,
            frameRate: 0,
            decoder: null,
            display: null,
            videoConverter: null,
            videoStreamTopic: null,
        };
    },
    mounted() {
        this.orderList = Object.keys(MonOrder).map(key=>({ name: key, id: MonOrder[key] }))
        this.gaitList = Object.keys(GAIT).map(key=>({ name: key, id: GAIT[key] }))
        this.controlModelist = Object.keys(ControlMode).map(key=>({ name: key, id: ControlMode[key] }))
        this.modeTypeList = Object.keys(ModeType).map(key=>({ name: key, id: ModeType[key] }))
        this.init();
    },
    methods: {
        init() {
            this.ros = new RosLib.Ros();

            // If there is an error on the backend, an 'error' emit will be emitted.
            this.ros.on("error", (error) => {
                console.log(error);
            });

            // Find out exactly when we made a connection.
            this.ros.on("connection", () => {
                // console.log('Connection made!');
                this.isConnected = true;
                this.getNodes();
                this.getTopics();
                this.subscribeBms();
                this.subscribeStatus();
            });

            this.ros.on("close", () => {
                console.log("Connection closed.");
                this.isConnected = false;
            });

            // 视频流
            this.videoConverter = new VideoConverter(this.$refs.video, 60, 1);
            this.videoConverter.play();

            // 延迟连接,防止刷新重连过快，造成服务端奔溃
            const t = setTimeout(() => {
                clearTimeout(t);
                this.connect();
            }, 2000);
        },
        connect() {
            this.ros.connect(`ws://${this.ip}:${this.port}`);
        },
        close() {
            this.ros.close();
        },
        onLeftJoystickUpdate(obj) {
            console.log(obj.powerX * this.linearSpeed, obj.powerY * this.linearSpeed);
            this.sendBodyCmd({
                linear_x: -obj.powerY * this.linearSpeed,
                angular_z: -obj.powerX * this.angularSpeed,
            });
            // this.beetleLeft+=Math.cos(obj.angle)*(obj.power*10);
            // this.beetleTop+=Math.sin(obj.angle)*(obj.power*10);
            // this.beetleRotate=obj.angle/(3.14159/180);
        },
        onRightJoystickUpdate(obj) {
            console.log(obj.powerX * this.linearSpeed, obj.powerY * this.linearSpeed);
            this.sendBodyCmd({
                angular_y: -obj.powerY * this.angularSpeed,
                linear_y: -obj.powerX * this.linearSpeed,
            });
        },
        getNodes() {
            this.ros.getNodes(
                (nodes) => {
                    this.nodes = nodes;
                },
                (err) => {
                    console.log(err);
                }
            );
        },
        getTopics() {
            this.ros.getTopics(
                (res) => {
                    this.topics = res.topics;
                    this.types = res.types;
                },
                (err) => {
                    console.log(err);
                }
            );
        },
        getNodeDetails() {
            this.publishing = "";
            this.services = "";
            this.subscribing = "";
            this.details = {};
            this.ros.getNodeDetails(this.node, (details) => {
                console.log(details);
                this.details = details;
            });
        },
        addTable(type, name) {
            if (type && name) {
                let item = { node: this.node, type, name };
                this.list.push(item);
                this.subscribe(item);
            }
        },
        unsubscribeVideoStream() {
            this.videoStreamTopic.unsubscribe();
        },
        subscribe(item) {
            const index = this.topics.findIndex((name) => name == item.name);
            item.topic = new RosLib.Topic({
                ros: this.ros,
                name: item.name,
                messageType: this.types[index],
            });
            // console.log(this.types[index])
            item.topic.subscribe((message) => {
                item.log = JSON.stringify(message, null, "\t");
            });
            this.showLog(item);
        },
        unsubscribe(item) {
            if (!item.topic) return;
            item.topic.unsubscribe();
            item.topic = null;
        },
        showLog(item) {
            this.unsubscribe(this.itemLog);
            this.itemLog = item;
        },
        subscribeStatus() {
            let example = new RosLib.Topic({
                ros: this.ros,
                name: "/mi1036134/status_out",
                messageType: "motion_msgs/msg/ControlState",
            });
            example.subscribe((message) => {
                this.statusOut = message;
            });
        },
        sendActionCmd(type, gait, order, control_mode, mode_type) {
            if (!this.actionCmd) {
                this.actionCmd = new RosLib.Topic({
                    ros: this.ros,
                    name: this.prefix + "/cyberdog_action",
                    messageType: "motion_msgs/msg/ActionRequest",
                });
            }
            // const timestamp = Date.now()
            let action = new RosLib.Message({
                type: type, // 开始控制：1 手动控制：2  预定动作：3
                request_id: this.requestID++, // 累加项
                mode: {
                    timestamp: this.buildTimestamp(),
                    control_mode: control_mode,
                    mode_type: mode_type,
                },
                gait: {
                    timestamp: this.buildTimestamp(),
                    gait: gait,
                },
                order: {
                    timestamp: this.buildTimestamp(),
                    id: order,
                    para: 0,
                },
                timeout: 35,
            });
            console.log(action);
            this.actionCmd.publish(action);
        },
        sendBodyCmd(cmd) {
            if (!this.bodyCmd) {
                this.bodyCmd = new RosLib.Topic({
                    ros: this.ros,
                    name: this.prefix + "/body_cmd",
                    messageType: "motion_msgs/msg/SE3VelocityCMD",
                });
            }
            let twist = new RosLib.Message({
                sourceid: 2,
                velocity: Object.assign(
                    {
                        frameid: {
                            id: 1,
                        },
                        timestamp: this.buildTimestamp(),
                        linear_x: 0,
                        linear_y: 0,
                        linear_z: 0,
                        angular_x: 0,
                        angular_y: 0,
                        angular_z: 0,
                    },
                    cmd
                ),
            });
            console.log(twist);
            this.bodyCmd.publish(twist);
        },
        buildTimestamp() {
            const timestamp = Date.now();
            return {
                sec: parseInt(timestamp / 1000),
                nanosec: (timestamp % 1000) * 1000000,
            };
        },
        getDictLable(dict,value){
            for (let dictKey in dict) {
                if(dict[dictKey]==value){
                    return dictKey
                }
            }
            return value
        },
        standUp() {
            this.setControlMode(ControlMode.MANUAL)
        },
        getDown() {
            this.setControlMode(ControlMode.DEFAULT)
        },
        setControlMode(controlMode){
            this.controlMode = controlMode
            this.sendActionCmd(
                1,
                GAIT.GAIT_TRANS,
                MonOrder.MONO_ORDER_NULL,
                controlMode,
                ModeType.DEFAULT_TYPE
            );
        },
        setExtmonOrder(order) {
            this.sendActionCmd(
                3,
                0,
                order,
                ControlMode.MANUAL,
                ModeType.DEFAULT_TYPE
            );
        },
        setGait(gait) {
            this.sendActionCmd(
                2,
                gait,
                MonOrder.MONO_ORDER_NULL,
                ControlMode.MANUAL,
                ModeType.DEFAULT_TYPE
            );
        },
        send() {
            let action = new RosLib.Topic({
                ros: this.ros,
                name: this.prefix + "/cyberdog_action",
                messageType: "motion_msgs/msg/ActionRequest",
            });
            action.subscribe();
        },
        subscribeBms() {
            let bms = new RosLib.Topic({
                ros: this.ros,
                name: "/mi1036134/bms_recv",
                messageType: "ception_msgs/msg/Bms",
            });
            bms.subscribe((message) => {
                // console.log(message)
                this.bms = message;
            });
        },
        subscribeWifiRssi() {},
        cameraService(command){
            const server = new RosLib.Service({
                ros: this.ros,
                name: this.prefix + "/camera_service",
                serviceType:'interaction_msgs/srv/camera_service'
            })
            const request = new RosLib.ServiceRequest({
                command,
                args: ''
            })
            server.callService(request, (res)=>{
                console.log(res)
                this.$message.success('操作成功！')
            }, (err)=>{
                console.log(err)
                this.$message.error('操作失败！')
            })
        },
        startLiveStream() {
            this.cameraService(CameraServiceRequestCommand.START_LIVE_STREAM)
            if (this.videoStreamTopic) return;
            this.videoStreamTopic = new RosLib.Topic({
                ros: this.ros,
                name: this.prefix + "/h264_video",
                messageType: "sensor_msgs/msg/CompressedImage",
            });

            // 计算帧率
            let frameRate = 0;
            setInterval(() => {
                this.frameSrcRate = frameRate;
                frameRate = 0;
            }, 1000);

            this.videoStreamTopic.subscribe((message) => {
                frameRate++;
                const byteCharacters = atob(message.data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                this.videoConverter.appendRawData(byteNumbers);
            });
        },
        stopLiveStream() {
            this.cameraService(CameraServiceRequestCommand.STOP_LIVE_STREAM)

            if (this.videoStreamTopic) {
                this.videoStreamTopic.unsubscribe();
                this.videoStreamTopic = null;
            }
        },
    },
};
</script>
