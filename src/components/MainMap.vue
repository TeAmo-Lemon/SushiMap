<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    // 把这里的地址改成实际的地址
    ///tiles/{z}/{x}/{y}.png
    //https://raw.githubusercontent.com/TeAmo-Lemon/SushiMap/main/public/tiles/{z}/{x}/{y}.png
    L.tileLayer("/tiles/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 7, // 设置最大缩放级别，根据你的瓦片地图情况调整
        minZoom: 0,
        noWrap: true,
    }).addTo(map);

    // L.marker([51.505, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
});
</script>

<style scoped>
#map {
    display: flex;
    height: 100vh;
    width: 100wh;
    padding: 0;
    margin: 0;
    position: relative
}
</style>
