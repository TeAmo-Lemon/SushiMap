<template>
    <div id="map"></div>
    <div class="poem">
        <PoemContent v-model="contentVisibility" :poemid="poemid" :title="title" :poem="poem" :note="note"
            :appreciation="appreciation" :picture="picture" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PoemContent from './PoemContent.vue';
import cola from '/src/assets/icons/cola.png';
import { getPositionsService } from "@/api/poem.js";
import { getPoemsService } from '@/api/poem.js';
const contentVisibility = ref(false);
const poemid = ref("");
const title = ref("");
const poem = ref("");
const note = ref("This is an explanation");
const appreciation = ref("Here comes note");
const picture = ref("");

const onPopupClicked = async (id) => {
    try {
        let result = await getPoemsService(id);
        // console.log(result);
        contentVisibility.value = true;

        // 将读取到的数据赋值给响应式变量
        poemid.value = id;
        title.value = result.data.title;
        poem.value = result.data.poem;
        note.value = result.data.note;
        appreciation.value = result.data.appreciation;

    } catch (error) {
        console.error('Error loading positions.json:', error);
    }


    // try {
    //     const jsonUrl = new URL(`../poems/${id}.json`, import.meta.url)
    //     const response = await fetch(jsonUrl);
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();

    //     // 将读取到的数据赋值给响应式变量
    //     title.value = data.title;
    //     poem.value = data.poem;
    //     note.value = data.note;
    //     appreciation.value = data.appreciation;
    // } catch (error) {
    //     console.error('Error fetching the poem:', error);
    // }
};

onMounted(async () => {
    const map = L.map('map').setView([0, 0], 1);

    // 添加地图点击事件监听器
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        console.log(`Clicked coordinates: Latitude: ${lat}, Longitude: ${lng}`);
    });

    // 读取 positions.json 文件
    // const positionUrl = new URL(`../positions/position.json`, import.meta.url)
    // fetch(positionUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         // 处理从 JSON 文件中读取的数据
    //         data.items.forEach(item => {
    //             const position = item.position;

    //             // console.log(item.id);
    //             const iconUrl = () => { return new URL(item.icon, import.meta.url); }
    //             // 检查 item 是否有定义的 icon URL
    //             const customIcon = L.icon({
    //                 iconUrl: iconUrl(),
    //                 iconSize: [32, 32], // 设置图标大小
    //                 iconAnchor: [16, 32] // 图标的锚点，决定了图标放置时相对于其位置的偏移
    //             });
    //             // 添加标记点到地图
    //             L.marker([position.latitude, position.longitude], { icon: customIcon })
    //                 .addTo(map)
    //                 .on('click', () => onPopupClicked(item.id));
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Error loading positions.json:', error);
    //     });
    try {
        let result = await getPositionsService();
        // console.log(result.data);
        result.data.forEach(item => {
            const iconUrl = () => { return new URL(item.icon, import.meta.url); }
            // 检查 item 是否有定义的 icon URL
            const customIcon = L.icon({
                iconUrl: iconUrl(),
                iconSize: [64, 64], // 设置图标大小
                // iconAnchor: [16, 32] // 图标的锚点，决定了图标放置时相对于其位置的偏移 
            })
            // 添加标记点到地图
            L.marker([item.latitude, item.longitude], { icon: customIcon })
                .addTo(map)
                .on('click', () => onPopupClicked(item.id));
        })
    } catch (error) {
        console.error('Error loading positions.json:', error);
    }



    L.tileLayer("/output_tiles/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 7,
        minZoom: 0,
        noWrap: true,
        tileSize: L.point(256, 141)
    }).addTo(map);
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
