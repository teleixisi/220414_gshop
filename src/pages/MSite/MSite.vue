<template>
  <div class="home">
    <HeaderTop title="江苏省常州市职业技..." :isshow="true"> </HeaderTop>
    <div class="body">
      <van-swipe class="my-swipe" :loop="true" indicator-color="#009474">
        <van-swipe-item
          ><div class="gongge">
            <img src="./images/nav/1.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/2.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/3.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/4.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/5.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/6.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/7.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/8.jpg" /><br />
            <span>甜品饮品</span>
          </div>
        </van-swipe-item>
        <van-swipe-item
          ><div class="gongge">
            <img src="./images/nav/9.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/10.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/11.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/12.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/13.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/14.jpg" /><br />
            <span>甜品饮品</span>
          </div></van-swipe-item
        >
      </van-swipe>
      <!-- <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="gongge">
            <img src="./images/nav/1.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/2.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/3.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/4.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/5.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/6.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/7.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/8.jpg" /><br />
            <span>甜品饮品</span>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="gongge">
            <img src="./images/nav/9.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/10.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/11.jpg" /><br />
            <span>甜品饮品</span>
          </div>
          <div class="gongge">
            <img src="./images/nav/12.jpg" /><br />
            <span>甜品饮品</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->

      <!-- <van-grid :border="false" :column-num="4" class="type">
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/1.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/2.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/3.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/4.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/5.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/6.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/7.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/8.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/9.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/10.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/11.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
      <van-grid-item text="文字" class="gongge">
        <img src="./images/nav/12.jpg" />
        <span>甜品饮品</span>
      </van-grid-item>
    </van-grid> -->
      <div class="nearShop">
        <div class="nearmessage">
          <i class="iconfont icon-icon-xuanxiang"></i>
          <span>附近商家</span>
        </div>
        <ShopList />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper, { Pagination, Navigation } from "swiper";
import "../../../node_modules/swiper/swiper.min.css";
Swiper.use([Pagination, Navigation]);

export default {
  mounted() {
    var mySwiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
    toSearch() {},
    toLogin() {},
  },
};
</script>
<style lang="less" scoped>
.home {
  .body {
    .my-swipe {
      height: 200px;
      .van-swipe-item {
        color: black;
        font-size: 20px;
        text-align: center;
        .gongge {
          float: left;
          width: 25%;
          font-size: 10px;
          text-align: center;
          margin-top: 15px;
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
  .nearShop {
    margin: auto;
    margin-top: 20px;
    width: 95%;
    .nearmessage {
      margin-bottom: 10px;
    }
  }
}
</style>