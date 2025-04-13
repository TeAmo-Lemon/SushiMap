<template>
    <div id="container" v-if="contentVisibility">
        <div class="close">
            <button @click="contentVisibility = false">
                <img src="@/assets/icons/multiply.svg" alt="X" />
            </button>
        </div>
        <div class="content">
            <div class="poem">
                <h3>{{ title }}</h3>
                <pre>{{ poem }}</pre>
                <p>
                    {{ note }}
                </p>
            </div>
            <div class="appreciation">
                <p>
                    {{ appreciation }}
                </p>
                <div class="image-placeholder">
                    <img :src="picture" alt="我是图片">
                </div>
            </div>
        </div>
        <div class="audio-player">
            <audio controls>
                <source :src="`/poemsaudio/${poemid}.mp3`" type="audio/mp3" />
                您的浏览器不支持音频播放。
            </audio>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contentVisibility = defineModel();
defineProps(['poemid', 'title', 'poem', 'note', 'appreciation', 'picture', 'audioUrl']);
</script>

<style scoped>
#container {
    animation: fadeIn 0.5s ease-in-out;
    width: 70vw;
    height: 80vh;
    background-color: #f4efe6;
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
    border: 2px solid #d3b58d;
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

.poem,
.appreciation {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 10px;
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
    display: flex;
    background-color: #f7f2e8;
    border-right: 1px solid #d3b58d;
    flex: 1;
    font-size: large;
    flex-shrink: 0;
}

.poem p {
    font-size: medium;
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
    font-size: 1em;
    color: #333;
}

pre {
    font-family: 'handwriting';
    color: #555;
    text-align: center;
    font-size: 22px;
    margin: 0;
    padding: 0;
    max-width: 100%;
}

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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 20px 0;
    user-select: none;
}

.image-placeholder img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.audio-player {
    margin-top: 20px;
    padding: 10px;
    background-color: #f7f2e8;
    display: flex;
    justify-content: center;
    border-top: 1px solid #d3b58d;
}

audio {
    width: 100%;
    max-width: 400px;
    border: none;
    outline: none;
}

@media (max-width: 768px) {
    #container {
        width: 70vw;
        height: 75vh;
    }

    .content {
        flex-direction: column;
    }

    .poem,
    .appreciation {
        flex: 1 1 100%;
    }

    pre {
        font-size: 20px;
    }

    .audio-player {
        margin-top: 15px;
    }
}
</style>
