<template>
    <div id="app">
        <router-view v-if="isRouterAlive"/>
        <el-backtop target="#app" :bottom="100">
            <div
                style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
            >
                <i class="el-icon-upload2"></i>
            </div>
        </el-backtop>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            reload: this.reload
        }
    },
    data() {
        return {
            isRouterAlive: true,
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false;
            this.$nextTick(() => {
                this.isRouterAlive = true;
            })
        }
    }
}
</script>
<style lang="less">
html, body {
    font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
    font-size: 14px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-width: 1680px;
    overflow: auto !important;
    background: #f4f4f4;
}

#app {
    width: 100%;
    height: 100%;
}

/* 滚动条颜色 */
::-webkit-scrollbar {
    width: 8px !important;
    height: 8px;
    background: transparent;
    opacity: .8;
}

::-webkit-scrollbar-button {
    width: 0;
    height: 0;
}

::-webkit-scrollbar-thumb {
    background: rgba(119, 118, 118, 0.3);
    border-radius: 8px;
    -webkit-transition: background .25s linear;
}

::-webkit-scrollbar-track {
    background: transparent;
    border: 1px solid transparent;
    box-shadow: none;
    border-radius: 0;
}
</style>
