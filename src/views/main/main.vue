<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavHeader from 'components/nav-header'
import NavMenu from 'components/nav-Menu'
</script>

<style scoped lang="less">
.main {
  position: fiexd;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-header {
  height: 48px;
}

.page-content {
  height: calc(100% - 48px);
  color: #333;
  text-align: center;
  background-color: #f0f2f5;

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
