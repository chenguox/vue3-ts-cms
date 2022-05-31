<template>
  <h2>11122211</h2>
  <div>{{ userStore.name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserStore } from '@/store/modules/user.ts'

export default defineComponent({
  name: 'usePinia',
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  }
})
</script>
