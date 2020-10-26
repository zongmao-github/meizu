<template>
    <div class="login-container">
        <div class="logo-box">
            <img src="../../assets/meizu_logo.png" alt="">
        </div>
        <div class="login-content">
            <div class="real-content">
                <div class="login-box">
                    <div class="show-type">
                        <i @click="changeType" :class="type ? 'el-icon-key' : 'el-icon-mobile'"></i>
                    </div>
                    <el-form
                        v-if="type"
                        :model="codeForm"
                        :rules="rules"
                        ref="codeForm"
                        label-width="0px"
                        class="user-box">
                        <el-form-item>
                            <p class="login-title">登录Flyme账号</p>
                        </el-form-item>
                        <el-form-item prop="phone">
                            <el-input style="width: 250px;" placeholder="手机号" v-model="codeForm.phone">
                                <el-select v-model="phoneStart" slot="prepend" placeholder="请选择">
                                    <el-option label="+86" value="+86"></el-option>
                                    <el-option label="+88" value="+88"></el-option>
                                    <el-option label="+66" value="+66"></el-option>
                                </el-select>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="vCode">
                            <el-input style="width: 250px;" placeholder="验证码" v-model="codeForm.vCode">
                                <template slot="append" @click="getCode">点击获取</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 250px;" type="primary" @click="submitForm('codeForm')">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <p class="other-link">
                                <el-link :underline="false">注册</el-link>
                                <el-link :underline="false">忘记密码</el-link>
                            </p>
                        </el-form-item>
                    </el-form>
                    <el-form
                        v-else
                        :model="psdForm"
                        :rules="rules"
                        ref="psdForm"
                        label-width="0px"
                        class="user-box">
                        <el-form-item>
                            <p class="login-title">登录Flyme账号</p>
                        </el-form-item>
                        <el-form-item prop="phone">
                            <el-input style="width: 250px;" placeholder="手机号" v-model="psdForm.phone">
                                <i slot="prepend" class="input-icon el-icon-user"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" style="width: 250px;" placeholder="密码" v-model="psdForm.password">
                                <i slot="prepend" class="input-icon el-icon-key"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 250px;" type="primary" @click="submitForm('psdForm')">登录</el-button>
                        </el-form-item>
                        <el-form-item>
                            <p class="other-link">
                                <el-link :underline="false">注册</el-link>
                                <el-link :underline="false">忘记密码</el-link>
                            </p>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="login-bottom">
            <div class="show-content">
                <ul class="about-info">
                    <li class="bottom-li" v-for="(item, index) in aboutData" :key="index">
                        {{ item }}
                    </li>
                    <li>
                        <el-dropdown>
                            <span>
                                {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="changeLanguage('简体中文')">简体中文</el-dropdown-item>
                                <el-dropdown-item @click.native="changeLanguage('English')">English</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li class="contact-phone">客服热线 400-788-3333</li>
                    <li class="online-service">在线客服</li>
                </ul>
                <ul class="contact-info">
                    <li>
                        <img src="../../../static/iconfont/weibo.svg"/>
                    </li>
                    <li>
                        <img src="../../../static/iconfont/weixin.svg"/>
                    </li>
                    <li>
                        <img src="../../../static/iconfont/qq.svg"/>
                    </li>
                </ul>
            </div>
            <p class="beian-box">{{beianInfo}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type: true,//true:loginWithCode, false: loginWithPsd
            phoneStart: '',
            vCode: '',//验证码
            codeForm: {},
            psdForm: {},
            rules: {
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                ],
                vCode: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            },
            aboutData: ['关于魅族', '工作机会', '联系我们', '法律声明', '常见问题'],
            language: '简体中文',
            beianInfo: '©2020 Meizu Telecom Equipment Co., Ltd. All rights reserved.备案号: 粤ICP备13003602号-4经营许可证编号: 粤B2-20130198营业执照粤公网安备 44049102496076号'
        }
    },
    methods:{
        changeLanguage(val){
            this.language = val;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        /*修改登录方式*/
        changeType(){
            this.type = !this.type;
        },
        //获取验证码
        getCode(){
            console.log('获取验证码')
        }
    }
}
</script>
<style lang="less">
.login-container {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    .logo-box{
        width: 60%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 20px;
        height: 80px;
        img{
            width: 100px;
        }
    }
    .login-content {
        flex: 1;
        height: 0;
        min-height: 0;
        background-image: url("../../assets/login_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .real-content {
            width: 60%;
            margin: 0 auto;
            box-sizing: border-box;
            padding-top: 100px;
            .login-box{
                position: relative;
                .show-type{
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    right: 0;
                    z-index: 22;
                    font-size: 66px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0, 0 100%);
                    cursor: pointer;
                }
            }
            .user-box{
                width: 370px;
                //height: 510px;
                box-sizing: border-box;
                padding-top: 120px;
                padding-left: 60px;
                background: #fff;
                position: absolute;
                right: 0;
                box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, .05);
                -webkit-box-shadow: #d4d2d2 0px 0px 10px;
                -moz-box-shadow: #d4d2d2 0px 0px 10px;
                .login-title{
                    color: @theme-color;
                    font-size: 20px;
                    width: 250px;
                    text-align: center;
                }
                .other-link{
                    width: 250px;
                    display: flex;
                    justify-content: space-between;
                }
                .input-icon{
                    font-size: 20px;
                }
            }
        }
    }

    .login-bottom {
        height: 130px;
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 20px;
        .show-content {
            width: 60%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .about-info {
                display: flex;
                align-items: center;
                flex: 4;
                width: 0;
                min-width: 0;

                li {
                    list-style-type: none;
                    text-align: center;
                    box-sizing: border-box;
                    padding-left: 10px;
                    padding-right: 10px;
                }

                .bottom-li {
                    border-right: 1px solid;
                }
                .contact-phone{
                    margin-left: 20px;
                }
                .online-service{
                    background: @theme-color;
                    color: #fff;
                    margin-left: 20px;
                }
            }
            .contact-info{
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: flex-end;
                width: 0;
                min-width: 0;
                li{
                    list-style-type: none;
                    text-align: center;
                    margin-left: 20px;
                    img{
                        //box-sizing: border-box;
                        padding: 5px;
                        width: 20px;
                        border-radius: 50%;
                        border: 1px solid;
                    }
                }
            }
        }
        .beian-box{
            width: 60%;
            margin: 20px auto;
        }
    }
}
</style>