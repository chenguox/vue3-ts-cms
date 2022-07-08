<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">Vue3+TS+Vite</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.menuName }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.menuName">
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>{{ subitem.menuName }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
import useUserStore from 'store/user/user'
const { userMenus } = useUserStore()
console.log(userMenus)
// const userList = comp
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  // background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      // color: white;
    }
  }

  .el-menu {
    // 去掉右边的白线
    border-right: none;
  }

  // .el-submenu {
  //   background-color: #001529 !important;
  //   // 二级菜单 ( 默认背景 )
  //   .el-menu-item {
  //     padding-left: 50px !important;
  //     background-color: #0c2135 !important;
  //   }
  // }

  // ::deep .el-submenu__title {
  //   background-color: #001529 !important;
  // }

  // hover 高亮
  // .el-menu-item:hover {
  //   color: #fff !important; // 菜单
  // }

  // .el-menu-item.is-active {
  //   color: #fff !important;
  //   background-color: #0a60bd !important;
  // }
}

// .el-menu-vertical:not(.el-menu--collapse) {
//   width: 100%;
//   height: calc(100% - 48px);
// }
</style>
