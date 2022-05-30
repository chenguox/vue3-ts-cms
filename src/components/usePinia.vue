<template>
  <h2>1111111111</h2>
  <!-- <div>{{ userStore.name }}</div> -->
  <el-button type="primary">Primary</el-button>
  <el-link type="primary">primary</el-link>
  <el-rate v-model="value1" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { useUserStore } from '@/store/modules/user'

// const userStore = useUserStore()

export default defineComponent({
  name: 'usePinia',
  setup() {
    const value1 = ref(null)
    return {
      value1
    }
  }
})
</script>
