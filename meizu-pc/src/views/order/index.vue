<template>
    <div class="order-container">
        <div class="order-content">
            <div class="column-box">
                <el-menu
                    default-active="1-1"
                    unique-opened
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>订单中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">我的订单</el-menu-item>
                            <el-menu-item index="1-2">我的回购单</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>个人中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">地址管理</el-menu-item>
                            <el-menu-item index="2-2">我的收藏</el-menu-item>
                            <el-menu-item index="2-3">消息提醒</el-menu-item>
                            <el-menu-item index="2-4">建议反馈</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-wallet"></i>
                            <span>资产中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">我的优惠券</el-menu-item>
                            <el-menu-item index="3-2">我的红包</el-menu-item>
                            <el-menu-item index="3-3">我的回购金</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-service"></i>
                            <span>服务中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">退款/退换货跟踪</el-menu-item>
                            <el-menu-item index="4-2">以旧换新</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>
            <div class="show-order-box">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部订单" name="first"></el-tab-pane>
                    <el-tab-pane label="待发货" name="second"></el-tab-pane>
                    <el-tab-pane label="已发货" name="third"></el-tab-pane>
                    <el-tab-pane label="其他" name="fourth"></el-tab-pane>
                </el-tabs>
                <div class="show-order-detail">
                    <div class="show-order-title">
                        <ul class="common-ul">
                            <li class="one">
                                <el-select style="width: 135px" size="mini" v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li class="two">订单明细</li>
                            <li class="three">售后</li>
                            <li class="four">金额</li>
                            <li class="five">状态</li>
                            <li class="six">操作</li>
                        </ul>
                    </div>
                    <div class="one-order-detail" v-for="(item, index) in orderData" :key="index">
                        <div class="one-order-top">
                            <ul class="common-ul">
                                <li class="two">
                                    <span style="color: #8c8c8c;">下单时间：</span>
                                    <span style="margin-right: 20px;">{{ item.buyTime }}</span>
                                    <span style="color: #8c8c8c;">订单号：</span>
                                    <span>{{ item.orderNumber }}</span>
                                </li>
                                <li class="three" style="cursor: pointer; color: #008cff;">
                                    <i class="el-icon-service">联系客服</i>
                                </li>
                                <li class="four"></li>
                                <li class="five"></li>
                                <li class="six"></li>
                            </ul>
                        </div>
                        <div class="one-order-content">
                            <ul class="common-ul">
                                <li class="one">
                                    <img v-lazy="item.shopInfo.img" :alt="item.shopInfo.content">
                                </li>
                                <li class="two">
                                    <p>{{item.shopInfo.content}}</p>
                                    <p>￥{{item.shopInfo.price.toFixed(2)}}x{{item.shopInfo.num}}</p>
                                </li>
                                <li class="four">
                                    <p>￥{{item.price.toFixed(2)}}</p>
                                </li>
                                <li class="five">
                                    <p>{{item.state === 0 ? '已取消': item.state === 1 ? '进行中' : '已完成'}}</p>
                                </li>
                                <li class="six">
                                    <el-link :underline="false" @click="()=>{showDialog = true;}">查看详情</el-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style="text-align: right;margin-top: 10px;">
                    <el-pagination
                        background
                        :page-size="3"
                        layout="total, prev, pager, next"
                        :total="orderData.length * 10">
                    </el-pagination>
                </div>
            </div>
        </div>
        <m-footer/>
        <order-detail :show-dialog.sync="showDialog"/>
    </div>
</template>
<script>
import mFooter from "@/components/mFooter";
import orderDetail from "@/views/order/subpage/orderDetail";
export default {
    components: { mFooter, orderDetail },
    data() {
        return {
            showDialog: false,
            options: [{
                value: '全部订单',
                label: '全部订单'
            }, {
                value: '三个月以内订单',
                label: '三个月以内订单'
            },],
            value: '全部订单',
            activeName: '',
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
                    state: 0,//0已取消、1进行中、2交易完成
                },
                {
                    buyTime: '2020-06-01 10:53:45',
                    orderNumber: '213345688',
                    price: 2345,
                    shopInfo: {
                        img: require('@/assets/phone/meizu_17_1.png'),
                        content: '魅族17Pro 全网通公开版 AG梦幻独角兽 8GB+256GB',
                        price: 2399,
                        num: 1,
                    },
                    state: 2,//0已取消、1进行中、2交易完成
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
                    state: 1,//0已取消、1进行中、2交易完成
                }
            ]
        }
    },
    watch: {
        isLogin(val) {
            if (!val) {
                this.$router.go(0);
            }
        }
    },
    computed: {
        isLogin() {
            return this.$store.state.isLogin;
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick() {

        }
    }
}
</script>
<style lang="less">
.order-container {
    .order-content {
        width: 60%;
        margin: 20px auto;
        min-height: 600px;
        display: flex;

        .column-box {
            flex: 1;
            width: 0;
            min-width: 0;
            margin-right: 20px;
            background: #fff;
        }

        .show-order-box {
            flex: 4;
            width: 0;
            min-width: 0;
            background: #fff;
            box-sizing: border-box;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;

            .show-order-detail {
                .show-order-title {

                }
                .one-order-detail{
                    margin-top: 20px;
                    border: 1px solid #EBEEF5;
                    .one-order-top{
                        background: #fafafc;
                        border-bottom: 1px solid #EBEEF5;
                        height: 40px;
                        box-sizing: border-box;
                        padding-left: 10px;
                        .common-ul{
                            height: 100%;
                        }
                    }
                    .one-order-content{
                        height: 140px;
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
                                border-left: 1px solid #EBEEF5;
                            }
                        }
                    }
                }
            }
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
</style>