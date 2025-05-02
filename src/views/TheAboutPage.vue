<template>
    <div class="about-container">
        <h1>关于苏轼诗文可视化项目</h1>
        <p>苏轼（1037-1101），字子瞻，号东坡居士，北宋著名的文学家、书法家、画家和政治家。他的诗文不仅在中国文学史上具有重要地位，而且对后世产生了深远影响。本项目旨在通过现代技术手段，将苏轼的诗文以可视化的形式展现，帮助更多人理解和欣赏他的文学作品。
        </p>

        <div class="image-container">
            <img src="/sushi1.png" alt="苏轼图片" class="responsive-image">
        </div>

        <h2>项目背景</h2>
        <p>随着信息技术的发展，越来越多的文化资源以数字化形式保存和传播。苏轼的诗文作为中华文化的重要组成部分，具有极高的学术价值和文化价值。该项目的主要目标是通过数字人文技术，系统爬梳苏轼徐州诗文创作，并将文本信息转化为图形化表现形式，如交互性网站和数字文学地图。
        </p>

        <h2>项目目标</h2>
        <ul>
            <li>利用数字人文技术，将苏轼在徐州的诗文文本资料进行可视化处理，制作出交互性网站和数字文学地图。</li>
            <li>激发公众对苏轼徐州诗文的兴趣，特别是青少年，从而推动中华优秀传统文化的传承和弘扬。</li>
            <li>使普通读者和游客能够更易于理解和欣赏苏轼的诗文作品，同时助力地方旅游资源的宣传与开发。</li>
            <li>探索苏轼徐州诗文的可视化路径，揭示其在当下进行可视化研究的必要性和实践价值。</li>
        </ul>

        <div class="image-container">
            <img src="/xuzhou.png" alt="苏轼图片" class="responsive-image">
        </div>

        <h2>项目团队</h2>
        <p>本项目由一支跨学科团队共同完成，成员来自汉语言文学，环境设计和计算机科学与技术专业。团队成员致力于通过现代技术手段，推动传统文化的传承和发展。</p>

        <div class="image-container">
            <img src="/members.png" alt="苏轼图片" class="responsive-image">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.about-container {
    max-width: 800px;
    margin: 0 auto;
    /* margin-left: 20px;
    margin-right: 20px; */
    padding: 2px;
    font-family: 'Arial', sans-serif;
    color: #333;
    font-size: 14px;
    line-height: 1.8;
}

h1 {
    text-align: center;
    color: #2c3e50;
    font-size: 32px;
    margin-bottom: 20px;
}

h2 {
    color: #34495e;
    margin-top: 30px;
    font-size: 26px;
}

p {
    margin-bottom: 20px;
}

ul,
ol {
    margin-left: 20px;
    line-height: 1.8;
}

li {
    margin-bottom: 10px;
}

.image-container {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.responsive-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.responsive-image:hover {
    transform: scale(1.02);
}
</style>