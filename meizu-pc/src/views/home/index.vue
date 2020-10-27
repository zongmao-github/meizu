<template>
    <div class="home-container">
        <div class="first-box">
            <ul class="first-box-list">
                <li v-for="(item, index) in firstBoxImgs" :key="index">
                    <el-link :underline="false" href="/detail">
                        <img :src="item.img" :alt="item.title">
                        <h2 class="title">{{ item.title }}</h2>
                        <p class="content">{{ item.content }}</p>
                    </el-link>
                </li>
            </ul>
        </div>
        <div class="phone-box">
            <show-item title="手机" :img="phoneImg"/>
            <div class="phone-item-detail">
                <ul class="phone-item-top">
                    <li v-for="(item, index) in phoneItemImg.topImg" :key="index">
                        <div class="mianxi">免息</div>
                        <h2 class="phone-title">{{ item.title }}</h2>
                        <p class="phone-content">{{ item.content }}</p>
                        <p class="phone-price">{{ item.price }}</p>
                        <div class="phone-img">
                            <img :src="item.img" :alt="item.title">
                        </div>
                    </li>
                </ul>
                <div class="phone-item-bottom">
                    <show-item-ul :data="phoneItemImg.bottomImg"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import showItem from "@/views/home/subpage/showItem";
import showItemUl from "@/views/home/subpage/showItemUl";
export default {
    components: {showItem, showItemUl},
    data() {
        return {
            phoneImg: require('@/assets/home_item/home_phone.jpg'),
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
            width: 60%;
            margin: 15px auto;
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
</style>