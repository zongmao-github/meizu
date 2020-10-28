<template>
    <div class="show-item-container">
        <h1>{{title}}</h1>
        <img v-if="img" :src="img" alt="">
    </div>
</template>
<script>
export default {
    props:{
        title:{
            default: '',
        },
        img:{
            default: ''
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
.show-item-container{
    margin-top: 30px;
    h1{
        text-align: center;
        margin-bottom: 20px;
    }
    img{
        width: 100%;
        height: 450px;
    }
}
</style>