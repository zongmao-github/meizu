<template>
    <div class="m-404-container">
        <div class="show-info">
            <div class="show-logo">
                <img @click="$router.push('/home')" src="../assets/meizu_logo.png" alt="魅族官网">
            </div>
            <div class="show-other">
                <img src="../assets/panda.jpg" alt="">
                <div class="text-info">
                    <h1>哎呀！找不到页面了</h1>
                    <p>不要伤心，可能是网址输错了呢，重新核对一下吧</p>
                    <el-button type="primary" @click="$router.push('/home')">返回首页</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
.m-404-container{
    background: #ffffff;
    width: 100%;
    height: 100%;
    .show-info{
        width: 60%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: column;
        .show-logo{
            box-sizing: border-box;
            padding-top: 15px;
            img{
                width: 125px;
                cursor: pointer;
            }
        }
        .show-other{
            flex: 1;
            height: 0;
            min-height: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .text-info{
                margin-left: 20px;
                h1{
                    line-height: 50px;
                }
                p{
                    line-height: 30px;
                }
            }
        }
    }
}
</style>