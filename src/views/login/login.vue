<template>
  <div class="login">
    <LoginLeft />
    <LoginRight />
  </div>
</template>

<script lang="ts" setup>
import LoginLeft from './cpns/login-left.vue'
import LoginRight from './cpns/login-right.vue'
</script>

<style scoped lange="less">
.login {
  width: 100%;
  height: 100%;

  display: flex;
}
</style>
