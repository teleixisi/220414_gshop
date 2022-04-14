<template>
  <div class="login">
    <van-icon
      class="iconfont icon-icon-arrow-left"
      @click="$router.back()"
    ></van-icon>
    <div class="title">芜湖外卖</div>
    <div class="loginType">
      <a href="#" class="on">短信登录</a>
      <a href="#">密码登录</a><br />
      <br />
      <form>
        <div class="loginMessage">
          <input type="tel" maxlength="11" placeholder="请输入手机号" />
          <van-button type="default" class="getyanzhengma"
            >获取验证码</van-button
          >
          <input
            id="yanzhengma"
            type="tel"
            maxlength="8"
            placeholder="验证码"
          />
        </div>
      </form>
    </div>
    <div class="message">
      <span
        >温馨提示：未注册芜湖外卖账号的手机号，登录时将自动注册，且代表已同意</span
      ><span style="color: #009471">《用户服务协议》</span>
      <van-button class="loginbtn" type="primary">登录</van-button>
      <p class="about">关于我们</p>
    </div>
  </div>
</template>
<script>
import "../../fonts/iconfont.css";
export default {};
</script>
<style lang="less" scoped>
.login {
  .icon-icon-arrow-left {
    position: absolute;
    top: 12px;
    left: 10px;
    color: rgb(122, 140, 143);
  }
  .title {
    font-size: 40px;
    font-weight: 900;
    color: #009471;
    text-align: center;
    width: 100%;
    margin-top: 80px;
  }
  .loginType {
    .on {
      color: #009471;
      border-bottom: 2px solid #009471;
    }
    margin-top: 40px;
    font-size: 10px;
    font-weight: 900;
    width: 100%;
    text-align: center;
    .loginMessage {
      width: 300px;
      margin: auto;
      //   background-color: red;
      input {
        border: 1px solid rgba(122, 140, 143, 0.2);
        border-radius: 5px;
        height: 40px;
        width: 300px;
        font-size: 14px;
        font-weight: 200;
      }
      #yanzhengma {
        margin-top: -20px;
      }
      .getyanzhengma {
        z-index: 999;
        float: right;
        height: 40px;
        top: -43px;
        border: 0;
        font-weight: 200;
        color: rgb(122, 140, 143);
      }
    }
  }
  .message {
    margin: auto;
    margin-top: 10px;
    font-size: 14px;
    width: 308px;
    line-height: 18px;
    .about {
      font-size: 12px;
      margin-top: 20px;
      text-align: center;
      color: rgb(122, 140, 143);
    }
    .loginbtn {
      width: 100%;
    }
  }
}
</style>