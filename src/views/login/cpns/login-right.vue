<template>
  <div class="login-right">
    <LoginPanel />
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './login-panel.vue'
</script>

<style scoped lang="less">
.login-right {
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
