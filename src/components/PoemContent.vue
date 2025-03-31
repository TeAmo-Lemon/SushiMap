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
                    <img :src="picture" alt="我是图片">
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
    /* align-items: center; */
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
    /* 确保宽度不会超过父容器 */
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
    /* background-color: #f0f0f0; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: #999; */
    font-size: 20px;
    margin: 20px 0;
    user-select: none;
}

.image-placeholder img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    /* 保持图片的纵横比 */
}

/* 响应式设计：针对较小屏幕 */
@media (max-width: 768px) {
    #container {
        width: 70vw;
        height: 75vh;
    }

    .content {
        flex-direction: column;
        /* 在小屏幕上内容纵向排列 */
    }

    .poem,
    .appreciation {
        flex: 1 1 100%;
        /* 在小屏幕下，内容占据100%宽度，纵向排列 */
    }

    pre {
        font-size: 20px;
    }
}

/* 针对超小屏幕的优化，如手机 */
/* @media (max-width: 480px) {
    #container {
        width: 100vw;
        height: 90vh;
        padding: 5px;
    }

    h3 {
        font-size: 1.1em;
    }

    pre {
        font-size: 18px;
    }

    .image-placeholder {
        height: 150px;
    }
} */
</style>
