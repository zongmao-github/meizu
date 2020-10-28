<template>
    <div class="shop-car-container">
        <div class="shop-car-content">
            <el-table
                :data="shopCarData"
                style="width: 100%;min-height: 600px">
                <el-table-column
                    type="selection"
                    align="center"
                    width="55">
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
                        <span>￥{{scope.row.price}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="num"
                    align="center"
                    label="数量">
                </el-table-column>
                <el-table-column
                    prop="shopPrice"
                    align="center"
                    label="小计(元)">
                    <template slot-scope="scope">
                        <span style="color: red">￥{{scope.row.price * scope.row.num}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    align="center"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="danger" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="computed-box">
                <div class="computed-left">
                    <el-checkbox v-model="checked">全选</el-checkbox>
                    <el-link :underline="false">删除选中的商品</el-link>
                    <span>共1件商品， 已选择1件</span>
                </div>
                <div class="computed-right">
                    <span>已优惠0.00元，合计（不含运费）：￥3699.00</span>
                    <el-button type="danger" size="small">去结算</el-button>
                </div>
            </div>
        </div>
    <m-footer/>
    </div>
</template>
<script>
import mFooter from "@/components/mFooter";
export default {
    components: {mFooter},
    data(){
        return{
            checked: '',
            shopCarData: [
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG梦幻独角兽 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG梦幻独角兽 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG梦幻独角兽 8+128',
                    price: 3699,
                    num: 1
                },
                {
                    img: require('@/assets/phone/meizu_17_1.png'),
                    name: '魅族17',
                    introduce: '公开全网通版 AG梦幻独角兽 8+128',
                    price: 3699,
                    num: 1
                },
            ],
        }
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
        }
    }
}
</style>