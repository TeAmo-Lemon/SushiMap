<template>
    <div class="app-main">
        <MainMap></MainMap>
    </div>
</template>

<script setup>
import MainMap from '@/components/MainMap.vue'
</script>

<style scoped>
.app-main {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}
</style>