<template>
    <div class="show-some-container">
        <ul class="show-some-list">
            <li class="app-download" v-if="type === 'App下载'">
                <img src="../assets/app/app_1.jpg" alt="">
            </li>
            <li v-else v-for="(item, index) in tempData" :key="index">
                <el-link :underline="false" href="detail">
                    <img class="item-img" :src="item.img" :alt="item.title">
                    <p class="title">{{item.title}}</p>
                    <p class="price">{{item.price}}</p>
                </el-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        type:{
            type: String,
            default: ''
        }
    },
    created() {
        if (this.type === '手机'){
            this.tempData = this.phoneData;
        }else if(this.type === '声学'){
            this.tempData = this.voiceData;
        }
    },
    data(){
        return{
            tempData: [],
            phoneData:[
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    title: '魅族17[AG梦幻独角兽]魅族17[AG梦幻独角兽]',
                    price: '￥3699'
                },
                {
                    img: require('@/assets/phone/meizu_17_2.png'),
                    title: '魅族17[AG星际灰]',
                    price: '￥3699'
                },
                {
                    img: require('@/assets/phone/meizu_17_3.png'),
                    title: '魅族17[AG原野绿]',
                    price: '￥3699'
                },
                {
                    img: require('@/assets/phone/meizu_17_4.png'),
                    title: '魅族17Pro[AG月白天青]',
                    price: '￥4299'
                },
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    title: '魅族17[AG梦幻独角兽]',
                    price: '￥3699'
                },
                {
                    img: require('@/assets/phone/meizu_17_2.png'),
                    title: '魅族17[AG星际灰]',
                    price: '￥3699'
                },
                {
                    img: require('@/assets/phone/meizu_17_3.png'),
                    title: '魅族17[AG原野绿]',
                    price: '￥3699'
                },
            ],
            voiceData:[
                {
                    img: require('@/assets/voice/voice_1.png'),
                    title: '[新品]魅族POP2S真无线耳机',
                    price: '￥299'
                },
                {
                    img: require('@/assets/voice/voice_2.png'),
                    title: '[新品]魅族LIVE真无线耳机',
                    price: '￥1299'
                },
                {
                    img: require('@/assets/voice/voice_3.png'),
                    title: '[新品]魅族HD60真无线耳机',
                    price: '￥1099'
                },
                {
                    img: require('@/assets/voice/voice_4.png'),
                    title: '[新品]魅族HIFI解码耳放',
                    price: '￥699'
                },
                {
                    img: require('@/assets/voice/voice_5.png'),
                    title: '[新品]魅族EP3C耳机',
                    price: '￥199'
                },
                {
                    img: require('@/assets/voice/voice_3.png'),
                    title: '[新品]魅族HD60真无线耳机',
                    price: '￥1099'
                },
                {
                    img: require('@/assets/voice/voice_4.png'),
                    title: '[新品]魅族HIFI解码耳放',
                    price: '￥699'
                },
                {
                    img: require('@/assets/voice/voice_5.png'),
                    title: '[新品]魅族EP3C耳机',
                    price: '￥199'
                },
            ]
        }
    }
}
</script>
<style lang="less">
.show-some-container{
    width: 100%;
    height: 200px;
    background: #fff;
    .show-some-list{
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .app-download{
            img{
                width: 100%;
                height: 180px;
            }
        }
        li{
            flex: 1;
            width: 0;
            min-width: 0;
            list-style-type: none;
            text-align: center;
            box-sizing: border-box;
            padding: 10px;
            .el-link{
                display: block;
            }
            .item-img{
                width: 120px;
                height: 100px;
            }
            .title{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>