<template>
    <div class="orderDetail-container">
        <el-dialog
            title="订单详情"
            :visible.sync="showDialog"
            class="common-dialog"
            width="50%"
            :before-close="handleClose">
            <div>
                <el-steps :active="4" align-center>
                    <el-step icon="el-icon-success" title="提交订单" description="2017-11-01 12:53:45"></el-step>
                    <el-step icon="el-icon-success" title="买家已付款" description="2017-11-01 12:54:00"></el-step>
                    <el-step icon="el-icon-success" title="发货中" description="2017-11-01 13:48:45"></el-step>
                    <el-step icon="el-icon-success" title="交易成功" description="2017-11-02 14:54:07"></el-step>
                </el-steps>
            </div>
            <div class="gaishu">
                <p class="gaishu-title">订单状态: <span>订单完成</span></p>
                <p class="gaishu-content"><i class="el-icon-s-promotion"></i>百城速递 <span>订单已交易完成，欢迎再次光临魅族商城。</span></p>
            </div>
            <p style="margin-top: 20px;">物流信息</p>
            <el-divider></el-divider>
            <div class="wuliu-box">
                <p class="orderNumber">顺丰：782453647788</p>
                <p class="wuliu-tip">* 物流信息仅供参考，准确信息可前往该物流官网查询。</p>
            </div>
            <div class="timeline-box">
                <el-timeline>
                    <el-timeline-item
                        placement="top"
                        v-for="(activity, index) in activities"
                        :key="index"
                        :icon="activity.icon"
                        :type="activity.type"
                        :color="activity.color"
                        :size="activity.size"
                        :timestamp="activity.timestamp">
                        <div class="show-time-detail">
                            <p v-for="(item, index) in activity.content" :key="index">
                                <span class="time">{{item.time}}</span>
                                <span class="content">{{item.content}}</span>
                            </p>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <el-divider></el-divider>
            <div class="zhifu-box">
                <p class="orderNumber">订单号：3142536475686978</p>
                <p class="zhifu-type">支付方式：支付宝</p>
            </div>
            <div class="one-order-detail" v-for="(item, index) in orderData" :key="index">
                <div class="one-order-top">
                    <ul class="common-ul">
                        <li class="two">供应商：魅族</li>
                        <li class="three" style="cursor: pointer; color: #008cff;">
                            <i class="el-icon-service">联系客服</i>
                        </li>
                        <li class="four">单价</li>
                        <li class="five">数量</li>
                        <li class="six">小计</li>
                    </ul>
                </div>
                <div class="one-order-content">
                    <ul class="common-ul">
                        <li class="one">
                            <img :src="item.shopInfo.img" :alt="item.shopInfo.content">
                        </li>
                        <li class="two">
                            <p>{{item.shopInfo.content}}</p>

                        </li>
                        <li class="four">
                            <p>￥{{item.price.toFixed(2)}}</p>
                        </li>
                        <li class="five">
                            <p>{{item.shopInfo.num}}</p>
                        </li>
                        <li class="six">
                            <p>￥{{item.shopInfo.price.toFixed(2)}}</p>
                        </li>
                    </ul>
                </div>
                <div class="one-order-footer">
                    <p style="margin-right: 15px;">发票类型：电子发票
                        <el-tooltip :content="fpContent" placement="bottom" effect="light">
                            <i class="el-icon-question"></i>
                        </el-tooltip>
                    </p>
                    <p>发票抬头：彭于晏</p>
                </div>
            </div>
            <div class="all-info-box">
                <p class="one-line">
                    <span class="miaoshu">商品总计</span>
                    <span class="money">￥1679.00</span>
                </p>
                <p class="one-line">
                    <span class="miaoshu">回购金抵扣</span>
                    <span class="money" style="color: red;">-￥0.00</span>
                </p>
                <p class="one-line">
                    <span class="miaoshu">礼品卡抵扣</span>
                    <span class="money" style="color: red;">-￥0.00</span>
                </p>
                <p class="one-line">
                    <span class="miaoshu">运费</span>
                    <span class="money">￥0.00</span>
                </p>
                <p class="one-line" style="margin-top: 20px;">
                    <span class="miaoshu">商品总计</span>
                    <span class="money" style="color: red;">￥1679.00</span>
                </p>
            </div>
            <el-divider></el-divider>
            <div class="receiver-info-box">
                <h2>收货人信息</h2>
                <p>收货人：彭于晏</p>
                <p>地址：浙江省杭州市江干区下沙街道浙江水利水电学院生活区</p>
                <p>电话：13888888888</p>
                <p>邮编：310016</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        showDialog: {
            default: false,
        }
    },
    data() {
        return {
            fpContent: '为什么要选择电子发票？' +
                '电子发票是纳税义务人通过互联网录入数据，然后开具给客户。' +
                '电子发票获取更便捷，可重复下载，避免丢失，方便查验，售后维权更有保障。' +
                '发货效率更高，退换货更方便！电子发票低碳环保，节能减排，符合加强环境保护的国家策略。' +
                '选择电子发票，省力省心，更能为环境保护贡献一份力。',
            activities: [{
                content: [
                    {
                        time: '15:28:02',
                        content: '已签收,感谢使用顺丰,期待再次为您服务'
                    },
                    {
                        time: '12:28:02',
                        content: '快件在【杭州下沙中转场】装车，已发往下一站'
                    },
                    {
                        time: '10:28:02',
                        content: '快件到达 【上海浦江集散中心】'
                    },
                    {
                        time: '09:28:02',
                        content: '快件在【上海浦江集散中心】装车，已发往下一站'
                    },
                ],
                timestamp: '2017-11-02 15:28:47',
                color: '#00c3f5'
            }, {
                content: [
                    {
                        time: '15:28:02',
                        content: '已签收,感谢使用顺丰,期待再次为您服务'
                    },
                    {
                        time: '12:28:02',
                        content: '快件在【杭州下沙中转场】装车，已发往下一站'
                    },
                    {
                        time: '10:28:02',
                        content: '快件到达 【上海浦江集散中心】'
                    },
                    {
                        time: '09:28:02',
                        content: '快件在【上海浦江集散中心】装车，已发往下一站'
                    },
                ],
                timestamp: '2017-11-01 20:43:08',
            },],
            orderData: [
                {
                    buyTime: '2017-11-01 12:53:45',
                    orderNumber: '213243546',
                    price: 1679,
                    shopInfo: {
                        img: require('@/assets/phone/meizu_17_1.png'),
                        content: '魅族17 全网通公开版 孔雀青 8GB+128GB',
                        price: 1699,
                        num: 1
                    },
                },
                {
                    buyTime: '2020-06-01 10:53:45',
                    orderNumber: '213345688',
                    price: 2699,
                    shopInfo: {
                        img: require('@/assets/phone/meizu_17_1.png'),
                        content: '魅族17Pro 全网通公开版 AG渣渣灰 8GB+256GB',
                        price: 2699,
                        num: 1,
                    },
                }
            ]
        }
    },
    methods: {
        handleClose() {
            this.$emit('update:showDialog', false);
        }
    }
}
</script>
<style lang="less">
.orderDetail-container {
    .el-dialog__body {
        .gaishu {
            border: 1px solid #00c3f5;
            background: #f7feff;
            box-sizing: border-box;
            padding: 15px;

            .gaishu-title {
                font-size: 18px;
                line-height: 50px;

                span {
                    color: #00c3f5;
                }
            }

            .gaishu-content {
                line-height: 20px;

                i {
                    font-size: 18px;
                    color: #00c3f5;
                }

                span {
                    margin-left: 8px;
                    color: #babbc0;
                }
            }
        }

        .wuliu-box {
            display: flex;
            align-items: center;

            .orderNumber {
                width: 250px;
            }

            .wuliu-tip {
                background: #f5f5f5;
                box-sizing: border-box;
                padding: 5px;
            }
        }

        .timeline-box {
            margin-top: 20px;
            .el-timeline-item__content{
                .show-time-detail{
                    box-sizing: border-box;
                    padding-left: 68px;
                    p{
                        line-height: 30px;
                        .time{
                            color: #909399;
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
        .zhifu-box {
            display: flex;
            align-items: center;

            .orderNumber {
                margin-right: 20px;
            }
        }
        .one-order-detail{
            margin-top: 20px;
            border: 1px solid #EBEEF5;
            .one-order-top{
                border-bottom: 1px solid #EBEEF5;
                height: 40px;
                box-sizing: border-box;
                padding-left: 10px;
                .common-ul{
                    height: 100%;
                }
            }
            .one-order-content{
                height: 100px;
                img{
                    width: 100px;
                }
                .common-ul{
                    height: 100%;
                    .four,.five,.six{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                    }
                }
            }
            .one-order-footer{
                border-top: 1px solid #EBEEF5;
                box-sizing: border-box;
                padding-left: 10px;
                height: 50px;
                display: flex;
                align-items: center;
                i{
                    color: #00c3f5;
                    cursor: pointer;
                }
            }
        }
        .all-info-box{
            .one-line{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                line-height: 25px;
                .miaoshu{
                    width: 128px;
                    text-align: left;
                }
                .money{
                    width: 88px;
                    text-align: right;
                }
            }
        }
        .receiver-info-box{
            p{
                line-height: 25px;
            }
        }
        .common-ul {
            display: flex;
            align-items: center;

            li {
                list-style-type: none;
            }

            .one {
                text-align: center;
                width: 150px;
            }

            .two {
                flex: 1;
                width: 0;
                min-width: 0;
            }

            .three {
                text-align: center;
                width: 100px;
            }

            .four {
                text-align: center;
                width: 100px;
            }

            .five {
                text-align: center;
                width: 100px;
            }

            .six {
                text-align: center;
                width: 100px;
            }
        }
    }
}
</style>