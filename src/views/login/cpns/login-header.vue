<template>
  <el-row class="login-header" justify="space-between" align="middle">
    <el-col class="left" :span="10">
      <img src="@/assets/img/element-plus-logo.svg" alt="" />
      <span class="tip">欢迎登录</span>
    </el-col>
    <el-col class="right" :span="10">
      <span>后台管理系统</span>
      <span
        >基于 Vue3 + Vite + Ts + Pinia + Element
        <span class="sub">+</span> 开发</span
      >
    </el-col>
  </el-row>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.login-header {
  height: 80px;

  .left {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      height: 100px;
    }
    .tip {
      margin-left: 20px;
      font-weight: 600;
      font-size: 28px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-child(1) {
      font-weight: 500;
      font-size: 20px;
      color: #419efb;
    }

    span:nth-child(2) {
      font-weight: 500;
      font-size: 18px;
    }

    .sub {
      vertical-align: super;
    }
  }
}
</style>
