<template>
  <div class="search">
    <HeaderTop title="搜索" :isshow="false"> </HeaderTop>
    <div class="header">
      <van-search
        v-model="searchMessage"
        show-action
        placeholder="请输入搜索关键词"
        left-icon=""
        @search="onSearch"
      >
        <template slot="action">
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  components: {
    HeaderTop,
  },
  data() {
    return {
      searchMessage: "",
    };
  },
  methods: {
    onSearch() {
      console.log(666);
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  .header {
    background-color: red;
  }
}
</style>