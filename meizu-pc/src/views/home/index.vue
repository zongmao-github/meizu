<template>
    <div class="home-container">
        <show-img :home-img="homeImg" :time-space="timeSpace"/>
        <div class="first-box">
            <ul class="first-box-list">
                <li v-for="(item, index) in firstBoxImgs" :key="index">
                    <el-link :underline="false" href="/detail">
                        <img v-lazy="item.img" :alt="item.title">
                        <h2 class="title">{{ item.title }}</h2>
                        <p class="content">{{ item.content }}</p>
                    </el-link>
                </li>
            </ul>
        </div>
        <div class="phone-box">
            <show-item title="手机" :img="phoneImg"/>
            <div class="phone-item-detail public-box">
                <ul class="phone-item-top">
                    <li v-for="(item, index) in phoneItemImg.topImg" :key="index">
                        <el-link :underline="false" href="/detail">
                            <div class="a-box">
                                <div class="mianxi">免息</div>
                                <h2 class="phone-title">{{ item.title }}</h2>
                                <p class="phone-content">{{ item.content }}</p>
                                <p class="phone-price">{{ item.price }}</p>
                                <div class="phone-img">
                                    <img v-lazy="item.img" :alt="item.title">
                                </div>
                            </div>
                        </el-link>
                    </li>
                </ul>
                <div class="phone-item-bottom">
                    <show-item-ul :data="phoneItemImg.bottomImg" :is-first="false"/>
                </div>
            </div>
        </div>
        <div class="voice-box">
            <show-item title="魅族声学" :img="voiceImg"/>
            <div class="voice-item-detail-box public-box">
                <show-item-ul
                    v-for="(item, index ) in voiceItemImg"
                    :data="item"
                    :is-first="true"
                    :key="index"/>
            </div>
        </div>
        <div class="peijian-box">
            <show-item title="智能配件" :img="peijianImg"/>
            <div class="peijian-item-detail-box public-box">
                <show-item-ul
                    v-for="(item, index ) in peijianItemImg"
                    :data="item"
                    :is-first="true"
                    :key="index"/>
            </div>
        </div>
        <div class="live-box">
            <show-item title="生活周边" :img="liveImg"/>
            <div class="live-item-detail-box public-box">
                <show-item-ul
                    v-for="(item, index ) in liveItemImg"
                    :data="item"
                    :is-first="true"
                    :key="index"/>
            </div>
        </div>
        <div class="sqrt-box">
            <show-item title="社区热帖"/>
            <div class="sqrt-item-detail-box public-box">
                <show-sqrt-item
                    v-for="(item, index ) in sqrtItemImg"
                    :data="item"
                    :key="index"/>
            </div>
        </div>
        <m-footer/>
    </div>
</template>
<script>
import showItem from "@/views/home/subpage/showItem";
import showItemUl from "@/views/home/subpage/showItemUl";
import showSqrtItem from "@/views/home/subpage/showSqrtItem";
import mFooter from "@/components/mFooter";
import showImg from "@/components/showImg";
export default {
    components: {showItem, showItemUl, showSqrtItem, mFooter, showImg},
    data() {
        return {
            phoneImg: require('@/assets/home_item/home_phone.jpg'),
            voiceImg: require('@/assets/home_item/meizu_voice.jpg'),
            peijianImg: require('@/assets/home_item/meizu_peijian.jpg'),
            liveImg: require('@/assets/home_item/meizu_live.jpg'),
            homeImg:[
                require('@/assets/home/home_1.png'),
                require('@/assets/home/home_2.png'),
                require('@/assets/home/home_3.png'),
                require('@/assets/home/home_4.png'),
            ],
            timeSpace: 6666,//走马灯切换间隔时间
            sqrtItemImg: [
                [
                    {
                        img: require('@/assets/sqrt/sqrt_1.png'),
                        user: '小宇鲜森',
                        content: '不只是标值出众，可谓是秀外慧中。',
                        phoneInfo: '魅族17'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_2.png'),
                        user: '明日之星',
                        content: '魅族17 Pro 6400W全场景AR 专业影像系统体验。',
                        phoneInfo: '魅族17 Pro周形作品'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_3.png'),
                        user: '用户2435',
                        content: '多一点耐心，多一点发现，多一点想象，去留意身边风景。',
                        phoneInfo: '魅族16s'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_4.png'),
                        user: '吴彦祖分祖',
                        content: '陪你一路风光陪你一起风光！',
                        phoneInfo: '魅族情怀'
                    },
                ],
                [
                    {
                        img: require('@/assets/sqrt/sqrt_4.png'),
                        user: '吴彦祖分祖',
                        content: '陪你一路风光陪你一起风光！',
                        phoneInfo: '魅族情怀'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_1.png'),
                        user: '小宇鲜森',
                        content: '不只是标值出众，可谓是秀外慧中。',
                        phoneInfo: '魅族17'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_3.png'),
                        user: '用户2435',
                        content: '多一点耐心，多一点发现，多一点想象，去留意身边风景。',
                        phoneInfo: '魅族16s'
                    },
                    {
                        img: require('@/assets/sqrt/sqrt_2.png'),
                        user: '明日之星',
                        content: '魅族17 Pro 6400W全场景AR 专业影像系统体验。',
                        phoneInfo: '魅族17 Pro周形作品'
                    },
                ],
            ],
            liveItemImg:[
                [
                    {
                        img: require('@/assets/live/meizu_live1.jpg'),
                        title: 'Pandaer[17]系列T恤',
                        content: '[双11狂欢价79元]',
                        price: '￥269'
                    },
                    {
                        img: require('@/assets/live/live_1.png'),
                        title: '魅族防飞溅声波电动牙刷',
                        content: '[双11狂欢价179元]',
                        price: '￥299'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: 'Pandaer[17]系列果冻包',
                        content: '[双11狂欢价59元包邮]',
                        price: '￥99'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: '魅族极简都市双肩包',
                        content: '[双11狂欢价109元包邮]',
                        price: '￥179'
                    },
                ],
                [
                    {
                        img: require('@/assets/live/meizu_live2.jpg'),
                        title: 'Lifeme双肩包',
                        content: '[双11狂欢价239元+3期兔息]',
                        price: '￥299'
                    },
                    {
                        img: require('@/assets/live/live_1.png'),
                        title: '魅族防飞溅声波电动牙刷',
                        content: '[双11狂欢价179元]',
                        price: '￥299'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: 'Pandaer[17]系列果冻包',
                        content: '[双11狂欢价59元包邮]',
                        price: '￥99'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: '魅族极简都市双肩包',
                        content: '[双11狂欢价109元包邮]',
                        price: '￥179'
                    },
                ],
                [
                    {
                        img: require('@/assets/voice/meizu_vioce_3.jpg'),
                        title: 'Lifeme 梨木伞',
                        content: '[双11狂欢价399元+12期免息]',
                        price: '￥699'
                    },
                    {
                        img: require('@/assets/live/live_1.png'),
                        title: '魅族防飞溅声波电动牙刷',
                        content: '[双11狂欢价179元]',
                        price: '￥299'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: 'Pandaer[17]系列果冻包',
                        content: '[双11狂欢价59元包邮]',
                        price: '￥99'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: '魅族极简都市双肩包',
                        content: '[双11狂欢价109元包邮]',
                        price: '￥179'
                    },
                ],
            ],
            peijianItemImg:[
                [
                    {
                        img: require('@/assets/peijian/meizu_peijian1.jpg'),
                        title: '魅族超充GaN 三中充电器',
                        content: '[双11狂欢价139]',
                        price: '￥199'
                    },
                    {
                        img: require('@/assets/peijian/peijian_1.png'),
                        title: '魅族超充USB-C移动电源',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: '魅族无线超充板',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: 'Pandaer[17]夏日系列壳膜套装',
                        content: '[双11狂欢价49元包邮]',
                        price: '￥49'
                    },
                ],
                [
                    {
                        img: require('@/assets/peijian/meizu_peijian3.jpg'),
                        title: 'Pandaer[17]系列手机',
                        content: '[双11狂欢价29元包邮]',
                        price: '￥49'
                    },
                    {
                        img: require('@/assets/peijian/peijian_1.png'),
                        title: '魅族超充USB-C移动电源',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: '魅族无线超充板',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: 'Pandaer[17]夏日系列壳膜套装',
                        content: '[双11狂欢价49元包邮]',
                        price: '￥49'
                    },
                ],
                [
                    {
                        img: require('@/assets/voice/meizu_vioce_3.jpg'),
                        title: 'MEIZU UR高端定制耳机 预约',
                        content: '[预约专用]私人定制，为你而声',
                        price: '￥200'
                    },
                    {
                        img: require('@/assets/peijian/peijian_1.png'),
                        title: '魅族超充USB-C移动电源',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_2.png'),
                        title: '魅族无线超充板',
                        content: '[双11狂欢价139元]',
                        price: '￥139'
                    },
                    {
                        img: require('@/assets/peijian/peijian_3.png'),
                        title: 'Pandaer[17]夏日系列壳膜套装',
                        content: '[双11狂欢价49元包邮]',
                        price: '￥49'
                    },
                ],
            ],
            voiceItemImg:[
                [
                    {
                        img: require('@/assets/voice/meizu_voice_1.jpg'),
                        title: '魅族EP3C耳机',
                        content: '[双11狂欢价89元]',
                        price: '￥129'
                    },
                    {
                        img: require('@/assets/voice/voice_1.png'),
                        title: '魅族HD60降噪耳机',
                        content: '[双11狂欢价799元+12期免息]',
                        price: '￥1099'
                    },
                    {
                        img: require('@/assets/voice/voice_2.png'),
                        title: '魅族EP63NC 无线降噪耳机',
                        content: '[双11狂欢价249元+3期免息]',
                        price: '￥329'
                    },
                    {
                        img: require('@/assets/voice/voice_3.png'),
                        title: 'POP 真无线蓝牙耳机',
                        content: '[双11狂欢价299元]',
                        price: '￥499'
                    },
                ],
                [
                    {
                        img: require('@/assets/voice/meizu_voice_2.jpg'),
                        title: '魅族HD60头戴式蓝牙耳机',
                        content: '[双11狂欢价369元+3期免息]',
                        price: '￥499'
                    },
                    {
                        img: require('@/assets/voice/voice_1.png'),
                        title: '魅族HD60降噪耳机',
                        content: '[双11狂欢价799元+12期免息]',
                        price: '￥1099'
                    },
                    {
                        img: require('@/assets/voice/voice_2.png'),
                        title: '魅族EP63NC 无线降噪耳机',
                        content: '[双11狂欢价249元+3期免息]',
                        price: '￥329'
                    },
                    {
                        img: require('@/assets/voice/voice_3.png'),
                        title: 'POP 真无线蓝牙耳机',
                        content: '[双11狂欢价299元]',
                        price: '￥499'
                    },
                ],
                [
                    {
                        img: require('@/assets/voice/meizu_vioce_3.jpg'),
                        title: 'MEIZU UR高端定制耳机 预约',
                        content: '[预约专用]私人定制，为你而声',
                        price: '￥200'
                    },
                    {
                        img: require('@/assets/voice/voice_1.png'),
                        title: '魅族HD60降噪耳机',
                        content: '[双11狂欢价799元+12期免息]',
                        price: '￥1099'
                    },
                    {
                        img: require('@/assets/voice/voice_2.png'),
                        title: '魅族EP63NC 无线降噪耳机',
                        content: '[双11狂欢价249元+3期免息]',
                        price: '￥329'
                    },
                    {
                        img: require('@/assets/voice/voice_3.png'),
                        title: 'POP 真无线蓝牙耳机',
                        content: '[双11狂欢价299元]',
                        price: '￥499'
                    },
                ],
            ],
            phoneItemImg: {
                topImg: [
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17',
                        content: '限时领券立省100|3期免息',
                        price: '￥3699'
                    },
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17 Pro',
                        content: '限时领券立省100|6期免息',
                        price: '￥4299'
                    }
                ],
                bottomImg: [
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17',
                        content: '限时领券立省100|3期免息',
                        price: '￥3699'
                    },
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17 Pro',
                        content: '限时领券立省100|6期免息',
                        price: '￥4299'
                    },
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17',
                        content: '限时领券立省100|3期免息',
                        price: '￥3699'
                    },
                    {
                        img: require('@/assets/phone/meizu_big17.png'),
                        title: '魅族17 Pro',
                        content: '限时领券立省100|6期免息',
                        price: '￥4299'
                    }
                ]
            },
            firstBoxImgs: [
                {
                    img: require('@/assets/home_box1/home_box1_1.png'),
                    title: '魅族17Pro',
                    content: '限时享6期免息'
                },
                {
                    img: require('@/assets/home_box1/home_box1_2.png'),
                    title: '5G之家',
                    content: '电信套餐享大额补贴'
                },
                {
                    img: require('@/assets/home_box1/home_box1_3.png'),
                    title: '魅族年度影像大赛',
                    content: '将生活一按成诗'
                },
                {
                    img: require('@/assets/home_box1/home_box1_4.png'),
                    title: 'mCycle',
                    content: '以旧换新享17系列补贴红包'
                },
            ]
        }
    }
}
</script>
<style lang="less">
.home-container {
    .first-box {
        background: #fff;

        .first-box-list {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;

            li {
                flex: 1;
                list-style-type: none;
                box-sizing: border-box;
                padding-top: 20px;
                padding-bottom: 20px;
                width: 0;
                min-width: 0;
                text-align: center;

                img {
                    width: 140px;
                    height: 140px;
                }
            }
        }
    }

    .phone-box {
        .phone-item-detail {
            .phone-item-top{
                display: flex;
                margin-bottom: 15px;
                li{
                    box-sizing: border-box;
                    padding: 30px;
                    background: #fff;
                    flex: 1;
                    display: flex;
                    flex-flow: column;
                    height: 550px;
                    width: 0;
                    min-width: 0;
                    list-style-type: none;
                    text-align: center;
                    &:first-child{
                        margin-right: 15px;
                    }
                    .el-link{
                        display: block;
                        flex: 1;
                        height: 0;
                        min-height: 0;
                        .a-box{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-flow: column;
                            .mianxi{
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                color: #fff;
                                background: #ff5285;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                            .phone-title{
                                line-height: 50px;
                            }
                            .phone-content{
                                line-height: 30px;
                            }
                            .phone-price{
                                color: #cc0000;
                            }
                            .phone-img{
                                flex: 1;
                                height: 0;
                                min-height: 0;
                                img{
                                    width: 60%;
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .public-box{
        width: 60%;
        margin: 15px auto;
    }
}
</style>