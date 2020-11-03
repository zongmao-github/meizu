<template>
    <div class="show-shop-car" v-if="isLogin">
        <span v-if="shopCarData.length < 1">暂无商品</span>
        <ul v-else>
            <li v-for="(item, index) in shopCarData" :key="index">
                <img v-lazy="item.img" :alt="item.name">
                <div class="shop-info">
                    <p>{{item.name}}</p>
                    <p>{{item.introduce}}</p>
                </div>
                <p class="shop-price">￥{{item.price.toFixed(2)}}</p>
<!--                <p class="shop-num">{{item.num}}</p>-->
            </li>
        </ul>
        <el-button @click="$router.push('/shopCar')" type="primary" style="float: right;" size="mini">去购物车</el-button>
    </div>
</template>
<script>
export default {
    props:{
        isLogin: {
            default: ''
        },
        shopCarData:{
            default: function (){
                return []
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
.show-shop-car{
    ul{
        li{
            list-style-type: none;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            img{
                width: 88px;
            }
            .shop-info{
                width: 250px;
            }
            .shop-price{
                margin-right: 20px;
                color: red;
            }
        }
    }
}
</style>