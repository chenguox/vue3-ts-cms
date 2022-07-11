<template>
  <div class="header-actions">
    <span title="搜索">
      <el-icon :size="18"><Search /></el-icon>
    </span>
    <span title="消息">
      <el-badge :value="12" class="item">
        <el-icon :size="18"><Bell /></el-icon>
      </el-badge>
    </span>
    <span title="刷新">
      <el-icon :size="18"><RefreshLeft /></el-icon>
    </span>
    <span title="全屏">
      <el-icon :size="18"><FullScreen /></el-icon>
    </span>
    <span title="设置">
      <el-icon :size="18"><Setting /></el-icon>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.header-actions {
  display: flex;
  align-items: center;

  span {
    cursor: pointer;
    margin-right: 22px;
  }
}
</style>
