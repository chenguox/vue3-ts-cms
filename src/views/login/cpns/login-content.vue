<template>
  <div class="login-content">
    <div class="left-content">
      <img src="@/assets/img/login-box-bg.svg" />
    </div>
    <div class="right-content">
      <LoginPanel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './login-panel.vue'
</script>

<style scoped lang="less">
.login-content {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  .left-content {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url('../../../assets/img/login-bg.svg');
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;

    img {
      width: 300px;
    }
  }

  .right-content {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
