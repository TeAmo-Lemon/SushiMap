<template>
    <div id="map"></div>
    <div class="poem">
        <PoemContent v-model="contentVisibility" :title="title" :poem="poem" :note="note" :appreciation="appreciation"
            :picture="picture" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PoemContent from './PoemContent.vue';
import cola from '/src/assets/icons/cola.png';

const contentVisibility = ref(false);
const title = ref("");
const poem = ref("");
const note = ref("This is an explanation");
const appreciation = ref("Here comes note");
const picture = ref("/src/assets/icons/cola.png");

const onPopupClicked = async (id) => {
    contentVisibility.value = true;

    try {
        const jsonUrl = new URL(`../poems/${id}.json`, import.meta.url)
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // 将读取到的数据赋值给响应式变量
        title.value = data.title;
        poem.value = data.poem;
        note.value = data.note;
        appreciation.value = data.appreciation;
    } catch (error) {
        console.error('Error fetching the poem:', error);
    }
};

onMounted(() => {
    const map = L.map('map').setView([0, 0], 1);

    // 把这里的地址改成实际的地址
    ///tiles/{z}/{x}/{y}.png
    //https://raw.githubusercontent.com/TeAmo-Lemon/SushiMap/main/public/tiles/{z}/{x}/{y}.png
    L.tileLayer("/tiles/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 7, // 设置最大缩放级别，根据你的瓦片地图情况调整
        minZoom: 0,
        noWrap: true,
    }).addTo(map);

    var colaIcon = L.icon({
        iconUrl: cola,
        iconSize: [38, 38], // size of the icon
    });

    var closeIcon = L.icon({
        iconUrl: '/src/assets/icons/close.png',
        iconSize: [38, 38], // size of the icon
    });

    // 定义一个包含多个位置和图标信息的数组
    const markersData = [
        { position: [90, 0], icon: colaIcon, id: '1' },
        { position: [29, 120], icon: colaIcon, id: '1' },
    ];

    // 遍历数组并添加标记
    markersData.forEach(marker => {
        L.marker(marker.position, { icon: marker.icon })
            .addTo(map)
            .on('click', () => onPopupClicked(marker.id));
    });

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
