<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    class="shoplist"
  >
    <div class="listone">
      <img src="./images/shop/1.jpg" />
      <div class="pp"><span>品牌</span></div>
      <span>锄禾日当午，汗滴禾...</span><br />
      <div class="stars">
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <span class="number">5.0</span>
        <span class="out">月售106单</span>
      </div>
      <span class="message">￥20起送/配送费约￥5</span>
      <div class="youhui">
        <div class="oneyouhui">
          <span>保</span>
        </div>
        <div class="oneyouhui">
          <span>准</span>
        </div>
        <div class="oneyouhui">
          <span>票</span>
        </div>
      </div>
      <div class="howsend">
        <span>峡谷专送</span>
      </div>
    </div>
    <div class="listone">
      <img src="./images/shop/2.jpg" />
      <div class="pp"><span>品牌</span></div>
      <span>锄禾日当午，汗滴禾...</span><br />
      <div class="stars">
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <span class="number">5.0</span>
        <span class="out">月售106单</span>
      </div>
      <span class="message">￥20起送/配送费约￥5</span>
      <div class="youhui">
        <div class="oneyouhui">
          <span>保</span>
        </div>
        <div class="oneyouhui">
          <span>准</span>
        </div>
        <div class="oneyouhui">
          <span>票</span>
        </div>
      </div>
      <div class="howsend">
        <span>峡谷专送</span>
      </div>
    </div>
    <div class="listone">
      <img src="./images/shop/3.jpg" />
      <div class="pp"><span>品牌</span></div>
      <span>锄禾日当午，汗滴禾...</span><br />
      <div class="stars">
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <span class="number">5.0</span>
        <span class="out">月售106单</span>
      </div>
      <span class="message">￥20起送/配送费约￥5</span>
      <div class="youhui">
        <div class="oneyouhui">
          <span>保</span>
        </div>
        <div class="oneyouhui">
          <span>准</span>
        </div>
        <div class="oneyouhui">
          <span>票</span>
        </div>
      </div>
      <div class="howsend">
        <span>峡谷专送</span>
      </div>
    </div>
    <div class="listone">
      <img src="./images/shop/4.jpg" />
      <div class="pp"><span>品牌</span></div>
      <span>锄禾日当午，汗滴禾...</span><br />
      <div class="stars">
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <img class="star" src="./images/stars/star24_on@2x.png" />
        <span class="number">5.0</span>
        <span class="out">月售106单</span>
      </div>
      <span class="message">￥20起送/配送费约￥5</span>
      <div class="youhui">
        <div class="oneyouhui">
          <span>保</span>
        </div>
        <div class="oneyouhui">
          <span>准</span>
        </div>
        <div class="oneyouhui">
          <span>票</span>
        </div>
      </div>
      <div class="howsend">
        <span>峡谷专送</span>
      </div>
    </div>
  </van-list>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.listone {
  margin-bottom: 20px;
  height: 80px;
  span {
    font-size: 16px;
  }
  .howsend {
    display: inline-block;
    color: #009574;
    float: right;
    margin-right: 27px;
    span {
      font-size: 10px;
      border: 1px #009574 solid;
    }
  }
  .youhui {
    float: right;
    margin-right: 30px;
    margin-top: -40px;
    .oneyouhui {
      display: inline-block;
      margin-left: -2px;
      color: #a4a4a4;
      border: 1px #a4a4a4 solid;
    }
  }
  .pp {
    background-color: yellow;
    display: inline-block;
    span {
      font-size: 10px;
    }
  }
  img {
    width: 80px;
    height: 100%;
    float: left;
  }
  .stars {
    margin-top: 20px;
    .number {
      color: orange;
    }
    .star {
      width: 12px;
      height: 12px;
    }
    .out {
      font-size: 10px;
    }
  }
  .message {
    display: inline-block;
    margin-top: 15px;
    font-size: 12px;
  }
}
.shoplist {
  overflow: scroll;
  padding-bottom: 50px;
}
.type {
  height: 200px;
  overflow: scroll;
}
</style>
