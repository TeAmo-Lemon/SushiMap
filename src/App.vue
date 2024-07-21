<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue'
</script>

<template>
  <div class="container">
    <TheNavBar class="navbar" />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* overflow: auto; */
}

.navbar {
  position: sticky;
  top: 0;
  height: 60px;
  box-sizing: border-box;
  z-index: 1;
}

.router-view {
  flex: 1;
  overflow: auto;
}
</style>
