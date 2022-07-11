<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <Fold />
      </template>
      <template v-else>
        <Expand />
      </template>
    </el-icon>
    <div class="content">
      <gx-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import GxBreadcrumb from '@/base-ui/breadcrumb'
import UserInfo from './user-info.vue'
import useUserStore from 'store/user/user'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus.ts'

export default defineComponent({
  components: {
    GxBreadcrumb,
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const userStore = useUserStore()
    const breadcrumbs = computed(() => {
      const userMenus = userStore.userMenus
      const route = useRoute()
      const currentPath = route.path
      console.log('currentPath', currentPath)
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 15px;
  }
}
</style>
