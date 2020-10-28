<template>
    <div class="m-footer-container">
        <div class="footer-detail-box">
            <div class="footer-top">
                <ul class="tsfw-info">
                    <li class="bottom-li" v-for="(item, index) in tsfwData" :key="index">
                        <el-link :underline="false" href="">
                            <img :src="item.img" :alt="item.title">
                            <p class="tsfw-title">{{item.title}}</p>
                        </el-link>
                    </li>
                </ul>
                <div class="kefu-info">
                    <p class="kefu-time">周一至周日 8:00-20:00</p>
                    <p class="kefu-phone">400-788-3333</p>
                    <span class="online-kefu">在线客服</span>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="about-info-all">
                    <ul class="about-info">
                        <li class="bottom-li" v-for="(item, index) in aboutData" :key="index">
                            <el-link :underline="false" href="">{{ item }}</el-link>
                        </li>
                        <li>
                            <el-dropdown>
                            <span class="language">
                                {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item @click.native="changeLanguage('简体中文')">简体中文</el-dropdown-item>
                                    <el-dropdown-item @click.native="changeLanguage('English')">English</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                    </ul>
                    <ul class="contact-info">
                        <li>
                            <img src="../../static/iconfont/weibo.svg"/>
                        </li>
                        <li>
                            <img src="../../static/iconfont/weixin.svg"/>
                        </li>
                        <li>
                            <img src="../../static/iconfont/qq.svg"/>
                        </li>
                    </ul>
                </div>
                <p class="beian-info">
                    {{beianInfo}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tsfwData: [
                {
                    img: require('@/assets/bottom/bottom_1.png'),
                    title: '满80免运费'
                },
                {
                    img: require('@/assets/bottom/bottom_2.png'),
                    title: '100+城市次日送达'
                },
                {
                    img: require('@/assets/bottom/bottom_3.png'),
                    title: '7天无理由退货'
                },
                {
                    img: require('@/assets/bottom/bottom_4.png'),
                    title: '15天换货保障'
                },
                {
                    img: require('@/assets/bottom/bottom_5.png'),
                    title: '1年免费保修'
                },
                {
                    img: require('@/assets/bottom/bottom_6.png'),
                    title: '上门快修'
                },
            ],
            aboutData: ['了解魅族', '加入我们', '联系我们', 'Flyme', '魅族社区', '天猫旗舰店', '问题反馈', '线上销售授权名单公示', '出版物经营许可证'],
            language: '简体中文',
            beianInfo: '©2020 Meizu Telecom Equipment Co., Ltd. All rights reserved.备案号: 粤ICP备13003602号-4经营许可证编号: 粤B2-20130198营业执照粤公网安备 44049102496076号'
        }
    },
    methods:{
        changeLanguage(val) {
            this.language = val;
        },
    }
}
</script>
<style lang="less">
.m-footer-container{
    background: #fff;
    height: 250px;
    .footer-detail-box{
        width: 60%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        align-items: center;
        .footer-top{
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            height: 0;
            min-height: 0;
            .tsfw-info{
                flex: 5;
                width: 0;
                min-width: 0;
                display: flex;
                li{
                    flex: 1;
                    width: 0;
                    min-width: 0;
                    text-align: center;
                    list-style-type: none;
                    img{
                        width: 50px;
                    }
                    .tsfw-title{
                        color: #babbc0;
                        font-size: 12px;
                    }
                }
            }
            .kefu-info{
                flex: 1;
                width: 0;
                min-width: 0;
                text-align: right;
                .kefu-time{
                    color: #babbc0;
                    font-size: 12px;
                    line-height: 18px;
                }
                .kefu-phone{
                    color: @theme-color;
                    font-size: 22px;
                }
                .online-kefu{
                    background: @theme-color;
                    color: #fff;
                    display: inline-block;
                    border-radius: 10px;
                    text-align: center;
                    height: 25px;
                    line-height: 25px;
                    width: 88px;
                    cursor: pointer;
                }
            }
        }
        .footer-bottom{
            width: 100%;
            box-sizing: border-box;
            border-top: 1px solid #f4f4f4;
            flex: 1;
            height: 0;
            min-height: 0;
            padding-top: 30px;
            .about-info-all{
                display: flex;
                align-items: center;
                .about-info {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    flex:6;
                    width: 0;
                    min-width: 0;
                    li {
                        list-style-type: none;
                        text-align: center;
                        box-sizing: border-box;
                        padding-left: 10px;
                        padding-right: 10px;
                    }

                    .bottom-li {
                        border-right: 1px solid;
                    }

                    .contact-phone {
                        margin-left: 20px;
                    }

                    .online-service {
                        background: @theme-color;
                        color: #fff;
                        margin-left: 20px;
                    }
                }

                .contact-info {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: flex-end;
                    width: 0;
                    min-width: 0;

                    li {
                        list-style-type: none;
                        text-align: center;
                        margin-left: 20px;

                        img {
                            //box-sizing: border-box;
                            padding: 5px;
                            width: 20px;
                            border-radius: 50%;
                            border: 1px solid;
                        }
                    }
                }
            }
            .beian-info{
                margin-top: 20px;
                box-sizing: border-box;
                padding-left: 10px;
            }
        }
    }
}
</style>