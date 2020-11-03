<template>
    <div class="show-sqrt-item-container">
        <ul class="item-top">
            <li v-for="(item, index) in data" :key="index">
                <el-link :underline="false" href="/detail">
                    <div class="a-box">
                        <div class="item-img">
                            <img v-lazy="item.img" :alt="item.content">
                        </div>
                        <div class="text-info">
                            <p class="user-info">
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                <span>{{item.user}}</span>
                            </p>
                            <h3 class="sqrt-content">{{item.content}}</h3>
                            <p class="phone-info">{{item.phoneInfo}}</p>
                        </div>
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
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
.show-sqrt-item-container{
    margin-bottom: 15px;
    .item-top{
        display: flex;
        li{
            box-sizing: border-box;
            flex: 1;
            height: 300px;
            background: #fff;
            width: 0;
            min-width: 0;
            list-style-type: none;
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
                    .item-img{
                        height: 160px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text-info{
                        box-sizing: border-box;
                        padding: 10px;
                        .user-info{
                            display: flex;
                            align-items: center;
                        }
                        .sqrt-content{
                            margin-top: 10px;
                            font-size: 14px;
                            line-height: 18px;
                        }
                        .phone-info{
                            margin-top: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>