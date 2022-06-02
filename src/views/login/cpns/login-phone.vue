<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input v-model="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input v-model="account.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const account = reactive({
  phone: '',
  code: ''
})

const loginAction = () => {
  console.log('手机验证码登录')
}
</script>

<style scoped lang="less">
.login-phone {
  .get-code {
    display: flex;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
