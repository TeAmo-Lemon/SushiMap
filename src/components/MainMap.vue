<template>
    <div id="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

onMounted(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer("/tiles/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 7, // 设置最大缩放级别，根据你的瓦片地图情况调整
        minZoom: 1,
        noWrap: true,
    }).addTo(map);

    // L.marker([51.505, -0.09]).addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
});
</script>

<style scoped>
#map {
    height: 100vh;
    width: 100wh;
    padding: 0;
    margin: 0;
    /* position: absolute;
    top: 0;
    left: 0; */
}
</style>
