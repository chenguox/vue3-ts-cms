<template>
  <div class="login">
    <LoginHeader class="wrap-v1" />
    <LoginTip />
    <LoginContent />
    <!-- <LoginRight /> -->
  </div>
</template>

<script lang="ts" setup>
import LoginHeader from './cpns/login-header.vue'
import LoginTip from './cpns/login-tip.vue'
import LoginContent from './cpns/login-content.vue'
// import LoginLeft from './cpns/login-left.vue'
// import LoginRight from './cpns/login-right.vue'
</script>

<style scoped lange="less">
.login {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  /* background: url('../../assets/img/login-bg2.svg'); */
}
</style>
