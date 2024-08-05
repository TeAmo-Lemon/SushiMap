<template>
    <div id="map"></div>
    <div class="poem">
        <PoemContent v-model="contentVisibility" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PoemContent from './PoemContent.vue';
import cola from '@/assets/icons/cola.png';

const contentVisibility = ref(false)

const onPopupClicked = (() => {
    contentVisibility.value = true;
})

onMounted(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    // 把这里的地址改成实际的地址
    ///tiles/{z}/{x}/{y}.png
    //https://raw.githubusercontent.com/TeAmo-Lemon/SushiMap/main/public/tiles/{z}/{x}/{y}.png
    L.tileLayer("https://raw.githubusercontent.com/TeAmo-Lemon/SushiMap/main/public/tiles/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 7, // 设置最大缩放级别，根据你的瓦片地图情况调整
        minZoom: 0,
        noWrap: true,
    }).addTo(map);

    var colaIcon = L.icon({
        iconUrl: cola,
        iconSize: [38, 38], // size of the icon
    });

    L.marker([51.5, -0.09], { icon: colaIcon })
        .addTo(map).on('click', onPopupClicked);
});
</script>

<style scoped>
#map {
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
}
</style>
