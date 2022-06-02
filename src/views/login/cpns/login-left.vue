<template>
  <div class="login-left">
    <img src="@/assets/img/login-box-bg.svg"/>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.login-left {
  width: 50%;
  height: 100%;

  background: url('../../../assets/img/login-bg.svg');
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 28px;
    margin-bottom: 40px;
  }

  img {
    width: 300px;
  }
}
</style>
