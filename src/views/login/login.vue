<template>
  <div class="login">
    <LoginHeader class="wrap-v1" />
    <div class="login-wrapper">
      <LoginPanel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginHeader from './cpns/login-header.vue'
import LoginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: url('../../assets/img/login-bg2.svg');

  .login-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
