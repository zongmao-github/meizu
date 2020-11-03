<template>
    <div class="m-show-imgs">
        <el-carousel :interval="timeSpace" arrow="never">
            <el-carousel-item v-for="(item, index) in homeImg" :key="index">
                <router-link to="detail">
                    <img v-lazy="item" alt="">
                </router-link>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    props:{
        homeImg:{
            type: Array,
            default: function (){
                return [];
            }
        },
        timeSpace:{
            type: Number,
            default: 6666
        }
    },
    data(){
        return{
        }
    }
}
</script>
<style lang="less">
.m-show-imgs {
    width: 100%;
    height: 470px;
    .el-carousel {
        width: 100%;
        height: 100%;
        .el-carousel__indicators{
            .el-carousel__indicator{
                .el-carousel__button{
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }
            }
        }
    }

    .el-carousel__container {
        width: 100%;
        height: 100%;
    }

    .el-carousel__item {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>