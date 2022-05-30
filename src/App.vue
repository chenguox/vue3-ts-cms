<template>
  <div id="app">
      <UsePinia />
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import UsePinia from './components/usePinia.vue'
</script>



<style></style>
