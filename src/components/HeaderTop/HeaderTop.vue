<template>
  <div>
    <van-nav-bar @click-left="toSearch" @click-right="toLogin" class="navbar">
      <template slot="left" v-if=isshow>
        <i class="iconfont icon-icon-search"></i>
      </template>
      <template slot="right" v-if=isshow>
        <span>登录|注册</span>
      </template>
      <template slot="title">
        <span>{{ title }}</span>
      </template>
    </van-nav-bar>
    <div class="zhanwei"></div>
  </div>
</template>

<script>
import "../../fonts/iconfont.css";

export default {
    props:{
        isshow:Boolean,
        title:String
    },
  data() {
    return {
    };
  },
  mouthed(){
      console.log(this.$route.path)
      if(this.$route.path == "/search"||this.$route.path == "/order"||this.$route.path == "/profile"){
          this.isshow = false
      }
  },
  methods: {
    toSearch() {
      this.$router.replace({ path: "/search" });
    },
    toLogin() {},
  },
};
</script>

<style lang="less" scoped>
.zhanwei{
  width: 100%;
  height: 46px;
  background-color: red;
}
.navbar {
  position: fixed;
  width: 100%;
  background-color: #009474;
  color: white;
  span {
    color: white;
  }
}
</style>


