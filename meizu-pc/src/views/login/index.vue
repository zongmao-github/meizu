<template>
    <div class="login-container">
        <div class="logo-box">
            <router-link to="/home">
                <img src="../../assets/meizu_logo.png" alt="">
            </router-link>
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
                            <el-input style="width: 250px;" placeholder="手机号" v-model="codeForm.phone" :disabled="countDown > 0">
                                <el-select style="width: 70px;" v-model="phoneStart" slot="prepend" placeholder="请选择">
                                    <el-option label="+86" value="+86"></el-option>
                                    <el-option label="+88" value="+88"></el-option>
                                    <el-option label="+66" value="+66"></el-option>
                                </el-select>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="vCode">
                            <el-input style="width: 250px;" placeholder="验证码" v-model="codeForm.vCode">
                                <template slot="append">
                                    <el-button @click="getCode" :disabled="countDown > 0">
                                        {{ countDown === 0 ? '点击获取' :  countDown + 's' }}
                                    </el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 250px;" type="primary" @click="submitForm('codeForm')">登录
                            </el-button>
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
                                <i slot="prepend" class="input-icon el-icon-user"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" style="width: 250px;" placeholder="密码" v-model="codeForm.password">
                                <i slot="prepend" class="input-icon el-icon-key"></i>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                v-loading="btnLoading"
                                style="width: 250px;"
                                type="primary"
                                @click="submitForm('codeForm')">
                                {{ btnLoading ? '登录中' : '登录' }}
                            </el-button>
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
                                {{ language }}<i class="el-icon-arrow-down el-icon--right"></i>
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
            <p class="beian-box">{{ beianInfo }}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let phoneNumber = (rule, value, callback) => {
            let myReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
            if (!myReg.test(value)) {
                callback(new Error('请输入正确的手机号'))
            } else {
                callback()
            }
        };
        return {
            btnLoading: false,
            type: true,//true:loginWithCode, false: loginWithPsd
            phoneStart: '+86',
            phone:'',
            vCode: '',//验证码
            codeForm: {
                vCode: '',
            },
            psdForm: {},
            countDown: 0,//获取验证码倒计时
            rules: {
                phone: [
                    {required: true, message: '请输入手机号', trigger: 'blur'},
                    {validator: phoneNumber, trigger: 'blur'}
                ],
                vCode: [
                    {required: true, message: '请输入验证码', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'}
                ]
            },
            aboutData: ['关于魅族', '工作机会', '联系我们', '法律声明', '常见问题'],
            language: '简体中文',
            beianInfo: '©2020 Meizu Telecom Equipment Co., Ltd. All rights reserved.备案号: 粤ICP备13003602号-4经营许可证编号: 粤B2-20130198营业执照粤公网安备 44049102496076号'
        }
    },
    methods: {
        changeLanguage(val) {
            this.language = val;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // this.$http("/login",{
                    //     phoneNumber: this.codeForm.phone,
                    // }).then(res =>{
                    //     if (res.code === 1){
                    //         this.Cookie.set("mz_token", res.token, {expires: 1});
                    //         this.$router.push('home');
                    //     }
                    // })
                    this.Cookie.set("mz_token", 'meizu_' + this.codeForm.phone, {expires: 1});
                    this.$store.commit('isLogin');
                    this.$router.push('home');
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        /*修改登录方式*/
        changeType() {
            this.type = !this.type;
        },
        //获取验证码
        getCode() {
            this.$refs.codeForm.validateField('phone',(errorMessage => {
                if (!errorMessage){
                    this.countDown = 60;
                    let _this = this;
                    let code = parseInt('000000' + Math.ceil(Math.random()*999999));
                    // this.$http("/getCode").then(res =>{
                    //     if (res.code === 1){
                    //         setTimeout(function (){
                    //             _this.codeForm.vCode = res.data.code;
                    //         }, 10 * 1000);
                    //     }
                    // }).catch(error=>{
                    //
                    // })
                    setTimeout(function (){
                        _this.codeForm.vCode = code;
                    },10 * 1000);
                    setInterval(function (){
                        if (_this.countDown === 0){
                            clearTimeout();
                        }else {
                            _this.countDown -=1;
                        }
                    },1000);
                }
            }));
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

    .logo-box {
        width: 60%;
        margin: 0 auto;
        box-sizing: border-box;
        padding-top: 20px;
        height: 80px;

        img {
            width: 125px;
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

            .login-box {
                position: relative;

                .show-type {
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

            .user-box {
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

                .login-title {
                    color: @theme-color;
                    font-size: 20px;
                    width: 250px;
                    text-align: center;
                }

                .other-link {
                    width: 250px;
                    display: flex;
                    justify-content: space-between;
                }

                .input-icon {
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

                .contact-phone {
                    margin-left: 20px;
                }

                .online-service {
                    background: @theme-color;
                    color: #fff;
                    margin-left: 20px;
                }
            }

            .contact-info {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: flex-end;
                width: 0;
                min-width: 0;

                li {
                    list-style-type: none;
                    text-align: center;
                    margin-left: 20px;

                    img {
                        //box-sizing: border-box;
                        padding: 5px;
                        width: 20px;
                        border-radius: 50%;
                        border: 1px solid;
                    }
                }
            }
        }

        .beian-box {
            width: 60%;
            margin: 20px auto;
        }
    }
}
</style>