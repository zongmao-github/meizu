<template>
    <div class="item-title-container">
        <div class="item-title">
            <div class="show-item-title-detail public-box">
                <p class="item-main">
                    {{ itemMainData.name }}
                </p>
                <ul class="list-main">
                    <li v-for="(item, index) in itemMainData.list" :key="index">
                        <el-link :underline="false" :href="item.link">{{ item.name }}</el-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="item-detail">
            <div class="show-item-box public-box">
                <div class="show-item-img">
                    <div class="show-big-img">
                        <img :src="bigImg" alt="">
                    </div>
                    <div class="show-all-img">
                        <ul>
                            <li style="cursor: pointer;" v-for="(item, index) in allImg" :key="index"
                                @click="changeBigImg(item)">
                                <img :src="item" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="show-scdb">
                        <div class="scdb-box">
                            <i class="el-icon-star-off"></i>
                            <span>收藏</span>
                        </div>
                        <div class="scdb-box">
                            <i class="el-icon-sort"></i>
                            <span>对比</span>
                        </div>
                    </div>
                </div>
                <div class="show-item-price">
                    <div class="price-top">
                        <h1 class="item-name">{{ itemDetailData.name }}</h1>
                        <p class="item-introduce">{{ itemDetailData.introduce }}</p>
                        <div class="show-price">
                            <p class="price-money">{{ itemDetailData.price }}</p>
                            <p class="youhui-p">
                                <span class="youhui">优惠券</span>
                                <span class="youhui-content" style="color: red;">满3699减100</span>
                                <el-link style="font-size: 12px;" type="primary" :underline="false" href="other">更多>
                                </el-link>
                            </p>
                            <p class="youhui-p">
                                <span class="youhui">加价购</span>
                                <span class="youhui-content">另加29元起，即可换购超值商品</span>
                                <el-link style="font-size: 12px;" type="primary" :underline="false" href="other">
                                    立即加购>>
                                </el-link>
                            </p>
                        </div>
                        <div class="zhichi-box">
                            <p class="zhichi">支持</p>
                            <div class="zhichi-right">
                                <span class="zhichi-item">
                                    <i class="el-icon-circle-check"></i>
                                    花呗分期
                                </span>
                                <span class="zhichi-item">
                                    <i class="el-icon-circle-check"></i>
                                    顺丰发货
                                </span>
                                <span class="zhichi-item">
                                    <i class="el-icon-circle-check"></i>
                                    7天无理由退货（具体查看详情）
                                </span>
                            </div>
                        </div>
                        <div class="zhichi-box has-line">
                            <p class="zhichi">配送服务</p>
                            <div class="zhichi-right">
                                <el-cascader
                                    size="mini"
                                    v-model="value"
                                    :options="options"></el-cascader>
                                <p>本商品由魅族负责发货并提供售后服务
                                    <el-link style="font-size: 12px;" :underline="false" type="primary" href="other"><i
                                        class="el-icon-service">商城客服</i></el-link>
                                </p>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">型号</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in xinghao"
                                     @click="changeValue(item,'xinghao1')"
                                     :style="xinghao1 === item ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">网络类型</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in wangluo"
                                     @click="changeValue(item,'wangluo1')"
                                     :style="wangluo1 === item ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">颜色分类</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in colorType"
                                     @click="changeValue(item,'colorType1')"
                                     :style="colorType1 === item ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">内存容量</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in neicun"
                                     @click="changeValue(item,'neicun1')"
                                     :style="neicun1 === item ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">选择套餐</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in taocan"
                                     @click="changeValue(item,'taocan1')"
                                     :style="taocan1 === item ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    {{ item }}
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">花呗分期</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <div class="choose-item"
                                     v-for="(item, index) in huabei"
                                     @click="changeValue(item.title,'huabei1')"
                                     :style="huabei1 === item.title ? 'color:black;border:1px solid black;' : ''"
                                     :key="index">
                                    <p>{{ item.title }}</p>
                                    <span>{{ item.shouxu }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="zhichi-box zhichi-box-flex">
                            <p class="zhichi">数量</p>
                            <div class="zhichi-right zhichi-right-with-flex">
                                <el-input-number v-model="num" :min="1" :max="10" size="small"></el-input-number>
                            </div>
                        </div>
                        <div class="handle-box">
                            <el-button type="primary" v-if="isLogin">立即购买</el-button>
                            <el-button plain v-if="isLogin">加入购物车</el-button>
                            <el-button plain v-if="!isLogin">请先登录</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="show-img-detail public-box">
            <h1>商品详情</h1>
            <img class="item-img" v-for="(item, index) in itemImgs" :key="index" :src="item" alt="">
        </div>
        <m-footer/>
    </div>
</template>
<script>
import mFooter from "@/components/mFooter";
export default {
    components: {mFooter},
    props: {
        url: {
            //加载数据链接
            default: false,
        }
    },
    data() {
        return {
            itemImgs: [
                require('@/assets/detail/detail1.jpg'),
                require('@/assets/detail/detail2.jpg'),
                require('@/assets/detail/detail3.jpg'),
                require('@/assets/detail/detail4.jpg'),
                require('@/assets/detail/detail5.jpg'),
                require('@/assets/detail/detail6.jpg'),
                require('@/assets/detail/detail7.jpg'),
                require('@/assets/detail/detail8.jpg'),
                require('@/assets/detail/detail9.jpg'),
            ],
            num: 1,
            isLogin: this.Cookie.get('mz_token'),
            xinghao1: '魅族17',
            xinghao: ['魅族17', '魅族17 Pro', '【老用户】魅族17', '【老用户】魅族17 Pro'],
            wangluo1: '全网通公开版',
            wangluo: ['全网通公开版'],
            colorType1: '松深入墨',
            colorType: ['松深入墨', '十七度灰', 'AG梦幻独角兽', 'AG星际灰', 'AG原野绿'],
            neicun1: '8+128',
            neicun: ['8+128', '8+256'],
            taocan1: '官方标配',
            taocan: ['官方标配', 'EP3C套餐', '碎屏保套餐', '充电套餐'],
            huabei1: '',
            huabei: [
                {
                    title: '￥1233.00x3期',
                    shouxu: '免手续费'
                },
                {
                    title: '￥644.24x6期',
                    shouxu: '含手续费￥27.74/期'
                },
                {
                    title: '￥331.26x12期',
                    shouxu: '含手续费￥23.11/期'
                },
            ],
            value: '',
            options: [
                {
                    value: '浙江',
                    label: '浙江',
                    children: [
                        {
                            value: '杭州',
                            label: '杭州',
                            children: [
                                {
                                    value: '江干区',
                                    label: '江干区'
                                }, {
                                    value: '萧山区',
                                    label: '萧山区'
                                },
                            ]
                        }, {
                            value: '温州',
                            label: '温州',
                            children: [
                                {
                                    value: '苍南',
                                    label: '苍南'
                                }, {
                                    value: '龙港',
                                    label: '龙港'
                                },
                            ]
                        }
                    ]
                }
            ],
            itemDetailData: {
                name: '魅族17',
                introduce: '【①限时领券省100 | ②享3期免息 | ③购机赠壳膜套装】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                price: '￥3699'
            },
            bigImg: require('@/assets/detail/meizu_detail_1.jpg'),
            allImg: [
                require('@/assets/detail/meizu_detail_1.jpg'),
                require('@/assets/detail/meizu_detail_2.jpg'),
                require('@/assets/detail/meizu_detail_3.jpg'),
                require('@/assets/detail/meizu_detail_4.jpg'),
            ],
            itemMainData: {
                name: '魅族17',
                list: [
                    {
                        name: '概述',
                        link: '/other'
                    },
                    {
                        name: '魅族17航母限定版',
                        link: '/other'
                    },
                    {
                        name: '参数',
                        link: '/other'
                    },
                    {
                        name: '换机指引',
                        link: '/other'
                    }
                ]
            }
        }
    },
    methods: {
        changeBigImg(img) {
            this.bigImg = img;
        },
        changeValue(value, type){
            if(type === 'huabei1' && this.huabei1 === value){
                this.huabei1 = '';
            }else {
                this[type] = value;
            }
        }
    }
}
</script>
<style lang="less">
.item-title-container {
    .item-title {
        background: #f6f8fb;
        height: 66px;

        .show-item-title-detail {
            display: flex;
            align-items: center;
            height: 100%;

            .item-main {
                font-size: 20px;
            }

            .list-main {
                flex: 1;
                width: 0;
                min-width: 0;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                li {
                    list-style-type: none;
                    margin-left: 20px;
                    border-right: 1px solid;
                    text-align: center;
                    box-sizing: border-box;
                    padding-right: 20px;

                    &:last-child {
                        border: none;
                    }
                }
            }
        }
    }

    .item-detail {
        background: #fff;
        //height: 800px;

        .show-item-box {
            height: 100%;
            display: flex;

            .show-item-img {
                flex: 1;
                width: 0;
                min-width: 0;
                height: 100%;

                .show-big-img {
                    height: 500px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .show-all-img {
                    ul {
                        display: flex;
                        align-items: center;

                        li {
                            flex: 1;
                            width: 0;
                            min-width: 0;
                            list-style-type: none;
                            text-align: center;

                            img {
                                width: 66px;
                                height: 66px;
                            }
                        }
                    }
                }

                .show-scdb {
                    padding-top: 20px;
                    display: flex;

                    .scdb-box {
                        width: 66px;
                        text-align: center;
                        display: flex;
                        flex-flow: column;
                        color: #babbc0;
                        cursor: pointer;

                        i {
                            font-size: 20px;
                        }

                        p {
                            font-size: 12px;
                        }
                    }
                }
            }

            .show-item-price {
                flex: 1;
                width: 0;
                min-width: 0;
                height: 100%;
                box-sizing: border-box;
                padding: 20px;

                .price-top {
                    padding-bottom: 20px;

                    .item-introduce {
                        line-height: 16px;
                        color: red;
                    }

                    .show-price {
                        background: #f4f6fa;
                        margin-top: 20px;
                        box-sizing: border-box;
                        padding: 15px;

                        .price-money {
                            color: red;
                            font-size: 26px;
                        }

                        .youhui-p {
                            height: 20px;
                            line-height: 20px;
                            display: flex;
                            align-items: center;
                            margin-top: 10px;

                            .youhui {
                                display: inline-block;
                                width: 60px;
                                height: 20px;
                                text-align: center;
                                color: red;
                                background: #f2eaef;
                            }

                            .youhui-content {
                                margin-left: 15px;
                                margin-right: 15px;
                            }
                        }
                    }

                    .zhichi-box-flex {
                        align-items: center;
                    }

                    .zhichi-box {
                        font-size: 12px;
                        margin-top: 15px;
                        display: flex;
                        //align-items: center;
                        .zhichi {
                            flex: 1;
                            width: 0;
                            min-width: 0;
                            text-align: justify;
                            color: #8c8c8c;

                            &:after {
                                content: "";
                                width: 100%;
                                display: inline-block;
                                overflow: hidden;
                                height: 0;
                            }
                        }

                        .zhichi-right {
                            flex: 8;
                            width: 0;
                            min-width: 0;
                            margin-left: 20px;

                            .zhichi-item {
                                margin-right: 20px;
                            }
                        }

                        .zhichi-right-with-flex {
                            display: flex;
                            flex-wrap: wrap;

                            .choose-item {
                                border: 1px solid #bfbfbf;
                                color: #bfbfbf;
                                width: 130px;
                                height: 40px;
                                text-align: center;
                                //line-height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-flow: column;
                                margin-right: 10px;
                                margin-top: 10px;
                                cursor: pointer;
                            }
                        }
                    }
                    .handle-box{
                        margin-top: 20px;
                    }
                }
            }
        }
    }

    .show-img-detail{
        h1{
            line-height: 50px;
        }
        .item-img{
            width: 100%;
            cursor: pointer;
        }
    }
    .public-box {
        width: 60%;
        margin: 0 auto;
    }

    .has-line {
        border-bottom: 1px dashed #babbc0;
        padding-bottom: 20px;
    }

    .active {
        border: 1px solid black;
        color: black;
    }
}
</style>