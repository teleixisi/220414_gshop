<template>
  <div>
    <ul class="list">
      <router-link tag="li" class="item" to="msite" :class="{active:'/msite' == $route.path}">
        <i class="iconfont icon-icon-waimai"></i><br />
        <span>外卖</span>
      </router-link>
      <router-link tag="li" class="item" to="search" :class="{active:'/search' == $route.path}">
        <i class="iconfont icon-icon-search"></i><br />
        <span>搜索</span>
      </router-link>
      <router-link tag="li" class="item" to="order" :class="{active:'/order' == $route.path}">
        <i class="iconfont icon-icon-dingdan"></i><br />
        <span>订单</span>
      </router-link>
      <router-link tag="li" class="item" to="profile" :class="{active:'/proflie' == $route.path}">
        <i class="iconfont icon-icon-geren"></i><br />
        <span>我的</span>
      </router-link>
    </ul>
  </div>

  <!-- <van-tabbar class="dh" v-model="active" active-color="#009474" @change="change">
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
  </van-tabbar> -->
</template>

<script>
import "../../fonts/iconfont.css";
import router from "../../router/index.js";
export default {
  data() {
    return {
      one: "item active",
      tow: "item",
      three: "item",
      four: "item",
      // active: this.$route.path.slice(1),
    };
  },
  mounted() {},
  methods: {
    // change(val) {
    //   if(this.$route.path.slice(1)!=val){
    //     this.$router.replace({ path: val });
    //   }
    // },
  },
};
</script>
<style lang='less' scoped>
.list {
  border-top: 1px rgba(122, 140, 143, 0.2) solid;
  position: fixed;
  bottom: 0;
  background-color: white;
  color: #7d8b8f;
  width: 100%;
  .item {
    padding-top: 10px;
    padding-bottom: 5px;
    display: inline-block;
    float: left;
    font-size: 10px;
    text-align: center;
    width: 25%;
    i {
      font-size: 24px;
    }
  }
  .active {
    color: #009474;
  }
}
</style>