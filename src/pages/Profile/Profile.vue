<template>
  <div class="profile">
    <HeaderTop title="我的" :isshow="false"> </HeaderTop>
    <router-link to="/login">
      <div class="message">
        <div class="loginicon">
          <i class="iconfont icon-icon-geren"></i>
        </div>
        <div class="messagetext">
          <span>登录/注册</span><br /><br />
          <span><i class="iconfont icon-icon-shouji"></i>暂无绑定手机号</span>
        </div>
        <i class="iconfont icon-icon-keyboard"></i>
      </div>
    </router-link>
    <div class="money">
      <div class="onemoney">
        <span class="yu-e-num">0.00</span>元<br />
        <span class="texts">我的余额</span>
      </div>
      <div class="onemoney">
        <span class="youhui-num">0</span>个<br />
        <span class="texts">我的优惠</span>
      </div>
      <div class="onemoney">
        <span class="jifen-num">0</span>分<br />
        <span class="texts">我的积分</span>
      </div>
    </div>
    <div class="skills">
      <div class="myOrder">
        <i class="iconfont icon-icon-dingdan"></i>我的订单
        <i class="iconfont icon-icon-keyboard"></i>
      </div>
      <div class="jifenShop">
        <i class="iconfont icon-icon-jifen"></i>积分商城
        <i class="iconfont icon-icon-keyboard"></i>
      </div>
      <div class="VIP">
        <i class="iconfont icon-icon_vip"></i>外卖会员卡
        <i class="iconfont icon-icon-keyboard"></i>
      </div>
      <div class="kefu">
        <i class="iconfont icon-icon-fuwu"></i>服务中心
        <i class="iconfont icon-icon-keyboard"></i>
      </div>
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
.profile {
  overflow: hidden;
  .skills {
    margin-left: 20px;
    div {
      height: 30px;
      border-bottom: 1px rgba(122, 140, 143, 0.2) solid;
      padding-top: 15px;
    }
    .myOrder {
      .icon-icon-dingdan {
        color: #1a9fa7;
      }
    }
    .jifenShop {
      .icon-icon-jifen {
        color: #ff763f;
      }
    }
    .VIP {
      .icon-icon_vip {
        color: #ff9f0a;
      }
    }
    .kefu {
      .icon-icon-fuwu {
        color: #009474;
      }
    }
    .icon-icon-keyboard {
      float: right;
      color: rgba(122, 140, 143, 0.5);
      padding-right: 10px;
    }
  }

  .money {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px rgba(122, 140, 143, 0.2) solid;
    margin-left: -1px;
    .onemoney {
      text-align: center;
      display: inline-block;
      width: 32%;
      border-left: 1px rgba(122, 140, 143, 0.2) solid;
      .yu-e-num {
        color: #fd9b08;
        font-size: 30px;
      }
      .youhui-num {
        color: #ff763f;
        font-size: 30px;
      }
      .jifen-num {
        color: #6aab16;
        font-size: 30px;
      }
      .texts {
        color: #a4a4a4;
        font-size: 12px;
      }
    }
  }

  .message {
    background-color: #009474;
    height: 80px;
    .icon-icon-keyboard {
      float: right;
      color: white;
      margin-top: 25px;
      margin-right: 15px;
    }
    .messagetext {
      float: left;
      margin-top: 15px;
      margin-left: 10px;
      color: white;
    }
    .loginicon {
      float: left;
      margin-top: 15px;
      margin-left: 10px;
      background-color: #7d8b8f;
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      .icon-icon-geren {
        color: #e4e4e4;
        font-size: 50px;
      }
    }
  }
}
</style>