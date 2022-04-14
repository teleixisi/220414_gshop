<template>
  <div>
    <HeaderTop title="订单列表" :isshow="false"> </HeaderTop>
    <div class="nulldiv">
      <img src="./order/person.png" /><br />
      <span>登录后查看外卖订单</span><br />
      <van-button class="nullbtn">立即登录</van-button>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  components: {
    HeaderTop,
  },
};
</script>
<style lang="less" scoped>
.nulldiv {
  margin-top: 10%;
    width: 80%;
    margin-left: 10%;
    text-align: center;
    .nullbtn {
      color: white;
      background-color: #009474;
      margin-top: 10px;
      height: 30px;
  }
}
</style>