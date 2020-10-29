<template>
    <div class="shop-car-container">
        <div class="shop-car-content">
            <el-table
                :data="shopCarData"
                ref="shopCarTable"
                @selection-change="handleSelectionChange"
                style="width: 100%;min-height: 600px">
                <el-table-column
                    type="selection"
                    align="center"
                    label="全选"
                    width="66px;">
                </el-table-column>
                <el-table-column
                    prop="phone"
                    width="400px"
                    label="">
                    <template slot-scope="scope">
                        <div style="display: flex; align-items: center;">
                            <img style="width: 100px;" :src="scope.row.img" alt="">
                            <div>
                                <h3>{{scope.row.name}}</h3>
                                <p>{{scope.row.introduce}}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="price"
                    align="center"
                    label="单价(元)">
                    <template slot-scope="scope">
                        <span>￥{{scope.row.price.toFixed(2)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="num"
                    align="center"
                    label="数量">
                    <template slot-scope="{ row, column, $index }">
                        <el-input-number
                            size="mini"
                            style="width: 100px;"
                            v-model="shopCarData[$index].num"
                            @change="handleSelectionChange(chooseItems)"
                            :min="1" :max="10"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="shopPrice"
                    align="center"
                    label="小计(元)">
                    <template slot-scope="scope">
                        <span style="color: red">￥{{(scope.row.price * scope.row.num).toFixed(2)}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="操作">
                    <template slot-scope="{ row, column, $index}">
                        <el-button type="danger" size="mini" @click="deleteShop($index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="computed-box">
                <div class="computed-left">
                    <el-checkbox v-model="checked" class="check-all" @change="toggleSelection(shopCarData)">全选</el-checkbox>
                    <el-link :underline="false" class="delete-choose" @click="deleteChooseShop">删除选中的商品</el-link>
                    <span>共{{ shopCarData.length }}件商品， 已选择<span class="choose-num">{{ chooseNum }}</span>件</span>
                </div>
                <div class="computed-right">
                    <span class="all-money">已优惠0.00元，合计(不含运费)：<span class="all-price">￥{{ allMoney.toFixed(2) }}</span></span>
                    <el-button type="danger" size="small">去结算</el-button>
                </div>
            </div>
        </div>
    <m-footer/>
    </div>
</template>
<script>
import mFooter from "@/components/mFooter";
import { Message } from 'element-ui';
export default {
    components: {mFooter},
    data(){
        return{
            chooseItems: [],//选中的项目
            chooseNum: 0,//选中的数量
            allMoney: 0,//选中商品的总价值
            checked: false,
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
        }
    },
    watch: {
        // checked(val){
        //     if (val){
        //         this.toggleSelection(this.shopCarData);
        //     }else {
        //         this.toggleSelection('');
        //     }
        // },
        isLogin(val){
            if (!val){
                this.$router.go(0);
            }
        }
    },
    created() {
    },
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
        }
    },
    methods: {
        //操作全选或者取消全选
        toggleSelection(rows) {
            if (this.checked) {
                rows.forEach(row => {
                    this.$refs.shopCarTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.shopCarTable.clearSelection();
            }
        },
        //选中项目时进行对应的逻辑操作
        handleSelectionChange(val) {
            this.chooseItems = val;
            this.chooseNum = val.length;
            if(val.length < this.shopCarData.length || this.shopCarData.length === 0){
                this.checked = false;
            }else if (val.length === this.shopCarData.length){
                this.checked = true;
            }
            if (val.length === 0){
                this.allMoney = 0;
            }else {
                let tempMoney = 0;
                val.forEach(item =>{
                    tempMoney += item.price * item.num;
                })
                this.allMoney = tempMoney;
            }
        },
        //删除当前项目
        deleteShop(index){
            this.shopCarData.splice(index, 1);
        },
        //删除选中的项目
        deleteChooseShop(){
            if (this.chooseItems.length === 0){
                Message({
                    showClose: true,
                    type: 'warning',
                    message: '您暂未选择商品'
                })
            }else {
                this.chooseItems.forEach( item =>{
                    for (let i in this.shopCarData){
                        if (item.id === this.shopCarData[i].id){
                            this.shopCarData.splice(i,1);
                        }
                    }
                })
            }
        },
    }
}
</script>
<style lang="less">
.shop-car-container{
    .shop-car-content{
        width: 60%;
        margin: 20px auto;
        .computed-box{
            background: #fff;
            margin-top: 10px;
            height: 80px;
            box-sizing: border-box;
            padding: 20px;
            display: flex;
            align-items: center;
            .computed-left{
                flex: 1;
                width: 0;
                min-width: 0;
                display: flex;
                align-items: center;
                .check-all{
                    margin-right: 10px;
                }
                .delete-choose{
                    margin-right: 10px;
                }
                .choose-num{
                    color: @theme-color;
                }
            }
            .computed-right{
                text-align: right;
                flex: 1;
                width: 0;
                min-width: 0;
                .all-money{
                    margin-right: 10px;
                }
                .all-price{
                    color: red;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>