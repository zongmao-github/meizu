<template>
    <div class="m-header-container">
        <div class="m-nav-menu">
            <div class="m-logo-box">
                <img style="cursor:pointer;" @click="$router.push('/home')" :src="logoImg" alt="">
            </div>
            <div class="m-menu-box">
                <ul>
                    <li
                        v-for="(item, index) in menuData"
                        @mouseover="showHandle(true, item.name)"
                        @mouseout="showHandle(false, item.name)"
                        :key="index">
                        <el-link
                            :underline="false"
                            :href="item.link">
                            {{ item.name }}
                        </el-link>
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
                <el-dropdown v-if="!isLogin">
                    <i class="el-icon-user public-icon"></i>
                    <el-dropdown-menu slot="dropdown" :key="1">
                        <el-dropdown-item @click.native="goLogin">立即登录</el-dropdown-item>
                        <el-dropdown-item @click.native="goLogin">立即注册</el-dropdown-item>
                        <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
                        <el-dropdown-item>我的订单</el-dropdown-item>
                        <el-dropdown-item>M码通道</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown v-if="isLogin">
                    <el-avatar style="margin-left: 10px; cursor: pointer;"> {{isLogin.slice(0,5)}} </el-avatar>
                    <el-dropdown-menu slot="dropdown" :key="2">
                        <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
                        <el-dropdown-item @click.native="()=>{$router.push('/order')}">我的订单</el-dropdown-item>
                        <el-dropdown-item>M码通道</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <el-badge :value="isLogin?shopCarData.length:0" class="item">
                        <i class="el-icon-shopping-cart-1 public-icon"></i>
                    </el-badge>
                    <el-dropdown-menu slot="dropdown" style="padding: 10px">
                        <span v-if="!isLogin">登录即可查看您的购物车内容哦！</span>
                        <show-shop-car :is-login="isLogin" :shop-car-data="shopCarData"/>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
<!--        <show-some-->
<!--            @showHandleSelf="showHandleSelf"-->
<!--            class="show-some"-->
<!--            :key="type"-->
<!--            v-show="showSome"-->
<!--            :type="type"/>-->
        <transition name="el-zoom-in-top">
            <show-some
                @showHandleSelf="showHandleSelf"
                class="show-some"
                :key="type"
                v-show="showSome"
                :type="type"/>
        </transition>
    </div>
</template>
<script>
import showSome from "@/components/showSome";
import showShopCar from "@/components/showShopCar";
import { MessageBox } from 'element-ui';
export default {
    components: { showSome, showShopCar },
    inject: ['reload'],
    data() {
        return {
            timer: null,
            shopCarData: [
                {
                    id: 'shopCar_1',
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG梦幻独角兽 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    id: 'shopCar_2',
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG星际灰 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    id: 'shopCar_3',
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG渣渣灰 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    id: 'shopCar_4',
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG原谅绿 8+128',
                    price: 3699,
                    num: 1
                },
            ],
            isLogin: this.Cookie.get('mz_token'),
            showSome: false,//是否显示菜单下详情
            showSomeSelf: false,
            type: '',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            noImg: require('@/assets/noData.png'),
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
    },
    methods:{
        showHandle(isShow, menu){
            // this.showSome = isShow;
            if(menu && (menu === '手机' || menu === '声学' || menu === 'App下载')){
                this.type = menu;
                if (isShow){
                    this.showSome = isShow;
                    if (this.timer){
                        clearTimeout(this.timer);
                        this.timer = null;
                    }
                }else {
                    let _this = this;
                    this.timer = setTimeout(function (){
                        _this.showSome = isShow;
                    }, 300);
                }
            }
        },
        showHandleSelf(isShow){
            if (isShow){
                this.showSome = isShow;
                if (this.timer){
                    clearTimeout(this.timer);
                    this.timer = null;
                }
            }else {
                let _this = this;
                this.timer= setTimeout(function (){
                    _this.showSome = isShow;
                }, 300);
            }
        },
        //退出登录
        signout(){
            this.$confirm('确认退出登录?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.isLogin = '';
                this.Cookie.remove("mz_token");
                this.$store.commit('isSignOut');
            }).catch(() => {

            });
        },
        //前往登录
        goLogin(){
            this.$router.push('login');
        }
    }
}
</script>
<style lang="less">
.m-header-container {
    width: 100%;
    //height: 550px;
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
            flex: 3.5;
            width: 0;
            min-width: 0;
            ul {
                display: flex;
                li {
                    list-style-type: none;
                    margin-right: 20px;
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

    .show-some{
        position: absolute;
        top: 80px;
        z-index: 222;
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