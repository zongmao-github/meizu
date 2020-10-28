<template>
    <div class="show-item-ul">
        <ul class="item-top">
            <li
                v-for="(item, index) in data"
                :key="index"
                :style="isFirst && index === 0 ? 'background-image: url(\'' + item.img + '\');background-size: 100% 100%;background-repeat: no-repeat;' : ''">
                <el-link :underline="false" href="/detail">
                    <div class="a-box">
                        <div class="item-img">
                            <img v-if="!isFirst || index != 0" :src="item.img" :alt="item.title">
                        </div>
                        <h2 :class="['item-title', isFirst && index === 0 ? 'isFirstWhite' : '']">{{ item.title }}</h2>
                        <p :class="['item-content', isFirst && index === 0 ? 'isFirstWhite' : '']">{{ item.content }}</p>
                        <p :class="isFirst && index === 0 ? 'isFirstPrice' : 'item-price'">{{ item.price }}</p>
                    </div>
                </el-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        data:{
            default: function (){
                return [];
            }
        },
        isFirst:{
            //是否每行第一个显示背景图
            type: Boolean,
            default: false
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
.show-item-ul{
    margin-bottom: 15px;
    .item-top{
        display: flex;
        li{
            box-sizing: border-box;
            padding: 30px;
            flex: 1;
            height: 300px;
            background: #fff;
            width: 0;
            min-width: 0;
            list-style-type: none;
            text-align: center;
            margin-right: 15px;
            &:last-child{
                margin-right: 0px;
            }
            .el-link{
                display: block;
                width: 100%;
                height: 100%;
                .a-box{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                    .item-title{
                        line-height: 50px;
                    }
                    .item-content{
                        line-height: 30px;
                    }
                    .item-price{
                        color: #cc0000;
                    }
                    .item-img{
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
    .isFirstWhite{
        color: white;
    }
    .isFirstPrice{
        color: #ebce6b;
    }
}
</style>