<template>
    <div class="m-header-container">
        <div class="m-nav-menu">
            <div class="m-logo-box">
                <img :src="logoImg" alt="">
            </div>
            <div class="m-menu-box">
                <ul>
                    <li v-for="(item, index) in menuData" :key="index">
                        <el-link :underline="false" :href="item.link">{{ item.name }}</el-link>
                    </li>
                </ul>
            </div>
            <div class="m-userInfo-box">
                <el-input
                    size="small"
                    placeholder="请输入内容"
                    v-model="searchInput">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-dropdown>
                    <i class="el-icon-user public-icon"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <i class="el-icon-shopping-cart-1 public-icon"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="m-show-imgs">
            <el-carousel :interval="timeSpace" arrow="never">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img :src="img" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            noImg: require('@/assets/noData.png'),
            timeSpace: 6666,//走马灯切换间隔时间
            logoImg: require('@/assets/meizu_logo.png'),
            searchInput: '',//搜索输入数据
            menuData: [
                {
                    name: '手机',
                    link: ''
                },
                {
                    name: '声学',
                    link: ''
                },
                {
                    name: '配件',
                    link: ''
                },
                {
                    name: '生活',
                    link: ''
                },
                {
                    name: 'Flyme',
                    link: ''
                },
                {
                    name: '服务',
                    link: ''
                },
                {
                    name: '专卖店',
                    link: ''
                },
                {
                    name: '社区',
                    link: ''
                },
                {
                    name: '政企服务',
                    link: ''
                },
                {
                    name: 'App下载',
                    link: ''
                },
            ]
        }
    }
}
</script>
<style lang="less">
.m-header-container {
    width: 100%;
    height: 550px;
    background: #fff;
    display: flex;
    flex-flow: column;
    align-items: center;

    .m-nav-menu {
        width: 60%;
        box-sizing: border-box;
        margin: 0 auto;
        height: 80px;
        display: flex;
        align-items: center;
        .m-logo-box {
            box-sizing: border-box;
            margin-right: 60px;
            img{
                width: 125px;
            }
        }
        .m-menu-box {
            flex: 4;
            width: 0;
            min-width: 0;
            ul {
                display: flex;

                li {
                    list-style-type: none;
                    margin-right: 30px;
                }
            }
        }

        .m-userInfo-box {
            flex: 1;
            width: 0;
            min-width: 0;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-end;
            .el-input {
                width: 150px;
                .el-input__inner{
                    border-radius: 10px;
                }
                .el-input__icon {
                    font-size: 20px;
                    cursor: pointer;

                    &:hover {
                        color: @theme-color;
                    }
                }
            }
        }
    }

    .m-show-imgs {
        width: 100%;
        height: 0;
        min-height: 0;
        flex: 1;

        .el-carousel {
            width: 100%;
            height: 100%;
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
    .public-icon{
        font-size: 24px;
        cursor: pointer;
        margin-left: 15px;
        &:hover{
            color: @theme-color;
        }
    }
}
</style>