<template>
    <div class="show-item-ul">
        <ul class="item-top">
            <li v-for="(item, index) in data" :key="index">
                <h2 class="phone-title">{{ item.title }}</h2>
                <p class="phone-content">{{ item.content }}</p>
                <p class="phone-price">{{ item.price }}</p>
                <div class="phone-img">
                    <img :src="item.img" :alt="item.title">
                </div>
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
    .item-top{
        display: flex;
        li{
            box-sizing: border-box;
            padding: 30px;
            background: #fff;
            flex: 1;
            display: flex;
            flex-flow: column;
            height: 300px;
            width: 0;
            min-width: 0;
            list-style-type: none;
            text-align: center;
            margin-right: 15px;
            &:last-child{
                margin-right: 0px;
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
</style>