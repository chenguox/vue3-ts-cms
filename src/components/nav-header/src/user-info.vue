<template>
  <div class="user-info">
    <actions-panel />
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="avatar"></el-avatar>
        <span>{{ realName }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="UserIcon">个人中心</el-dropdown-item>
          <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useUserStore from '@/store/user/user'
import ActionsPanel from '@/base-ui/actions'

export default defineComponent({
  components: {
    ActionsPanel
  },
  setup() {
    const store = useUserStore()
    const { avatar, realName } = store.userInfo
    console.log('avatar:', avatar)

    return {
      avatar,
      realName
    }
  }
})
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;

  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
}
</style>
