<template>
    <div id="container" v-if='contentVisibility'>
        <div class="close">
            <button @click="contentVisibility = false">
                <img src="@/assets/icons/multiply.svg" alt="X" />
            </button>
        </div>
        <div class="content">
            <div class="poem">
                <h3>{{ title }}</h3>
                <pre>
{{ poem }}
                </pre>
                <p>
                    {{ note }}
                </p>
            </div>
            <div class="appreciation">
                <p>
                    {{ appreciation }}
                </p>
                <div class="image-placeholder">
                    <img :src="picture" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contentVisibility = defineModel()
defineProps(['title', 'poem', 'note', 'appreciation', 'picture']);

</script>

<style scoped>
#container {
    animation: fadeIn 0.5s ease-in-out;
    width: 70vw;
    height: 80vh;
    background-color: #f4efe6;
    /* 温暖的米黄色背景 */
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 16px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    padding: 10px;
    /* 增加内边距 */
    border: 2px solid #d3b58d;
    /* 边框颜色类似于古典家具的木色 */
}

.close {
    display: flex;
    justify-content: flex-end;
    user-select: none;
}

.close button {
    border-radius: 10px;
    background-color: inherit;
    width: 25px;
    height: 25px;
    margin: 0;
    padding: 0px;
}

.content {
    display: flex;
    flex-direction: row;
    overflow: auto;
    height: 100%;
}

.poem {
    display: flex;
}

.poem,
.appreciation {
    /* display: flex; */
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    overflow: auto;
    box-sizing: border-box;
}

@font-face {
    font-family: 'handwriting';
    src: url('@/assets/fonts/handwriting.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.poem {
    background-color: #f7f2e8;
    /* 柔和的米白色背景 */
    border-right: 1px solid #d3b58d;
    /* 分隔线 */
    flex: 1;
    font-size: large;
    flex-shrink: 0;
}

.appreciation {
    background-color: #fbf6ed;
    flex: 2;
    font-size: medium;
    color: #666;
    overflow-wrap: break-word;
    white-space: pre-wrap;
}

h3 {
    margin: 0;
    padding-bottom: 10px;
    font-size: 1.3em;
    color: #333;
}

pre {
    font-family: 'handwriting';
    color: #555;
    text-align: left;
    font-size: 24px;
}

/* .appreciation p {
    height: 100%;
    margin: 0;
    font-size: 1em;
    color: #666;
} */

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.image-placeholder {
    width: 100%;
    height: 200px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 20px;
    margin: 20px 0;
    user-select: none;
}
</style>
