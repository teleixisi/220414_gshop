<template>
  <van-tabbar class="dh" v-model="active" active-color="#009474" @change="change">
    <van-tabbar-item
    name="msite"
      >外卖
      <template #icon="props">
        <i class="iconfont icon-icon-waimai"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item
    name="search"
      >搜索
      <template #icon="props">
        <i class="iconfont icon-icon-search"></i>
      </template> </van-tabbar-item
    ><van-tabbar-item
    name="order"
      >订单
      <template #icon="props">
        <i class="iconfont icon-icon-dingdan"></i>
      </template> </van-tabbar-item
    ><van-tabbar-item
    name="profile"
      >我的
      <template #icon="props">
        <i class="iconfont icon-icon-geren"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import "../../fonts/iconfont.css";
import router from "../../router/index.js"
export default {
  data() {
    return {
      active: this.$route.path.slice(1),
    };
  },
  mounted() {
  },
  methods: {
    change(val) {
      if(this.$route.path.slice(1)!=val){
        this.$router.replace({ path: val });
      }
    },
  },
};
</script>
<style lang='less' scoped>
.dh{
  border-top: 1px rgba(122,140,143,0.2) solid;
}
</style>