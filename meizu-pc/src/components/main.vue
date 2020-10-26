<template>
    <div class="main-container">
        <m-header/>
        <router-view></router-view>
    </div>
</template>
<script>
import mHeader from '@/components/mVeader'
export default {
    components: { mHeader },
    data(){
        return{

        }
    }
}
</script>
<style lang="less">

</style>