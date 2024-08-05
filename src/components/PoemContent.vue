<template>
    <div id="container" v-if='contentVisibility'>
        <div class="close">
            <button @click="contentVisibility = false">
                <img src="@/assets/icons/multiply.svg" alt="X" />
            </button>
        </div>
        <div class="content">
            <div class="poem">
                <h3>过云龙山人张天骥[1]</h3>
                <pre>
郊原雨初足，风日清且好。
病守亦欣然，肩舆白门道。
荒田咽蛩蚓，村巷悬梨枣。
下有幽人居，闭门空雀噪。
西风高正厉，落叶纷可扫。
孤童卧斜日，病马放秋草。
墟里通有无，垣墙任摧倒。
君家本冠盖，丝竹闹邻保。
脱身声利中，道德自濯澡。
躬耕抱羸疾，奉养百岁老。
诗书膏吻颊，菽水媚翁媪。
饥寒天随子，杞菊自撷芼。
慈孝董邵南，鸡狗相乳抱。
吾生如寄耳，归计失不早。
故山岂敢忘，但恐迫华皓。
从君好种秫，斗酒时相劳。
                </pre>
                <p>
                    [1]作于熙宁十年(1077年)八月。云龙山:《徐州府志》卷一一:“城南为云龙山”，“山有云气，蜿蜒如龙。亦名石佛山”。《明一统志》卷一八:“云龙山，在(徐)州城东南二里”。张天骥，字圣涂。
                </p>
            </div>
            <div class="note">
                <p>
                    这首诗作于熙宁十年(1077年)八月，是苏轼访云龙山人张天骥的所思所感，其中对于云龙山环境的描绘以及对张天骥的道德品质的赞美，使得整首诗具有一种超脱情怀。
                    苏轼热爱大自然，热爱徐州的山山水水，云龙山、百步洪、吕梁洪、桓山等自然景观都在苏轼笔下熠熠生辉，光耀千古。他在徐州时期创作的许多著名诗文都与云龙山有关。云龙山是苏轼寄寓抒发个人情感的自然载体，也是他徐州时期诗意人生的栖息之地，更是他得以超脱现实枷锁的精神家园。初到徐州的苏轼是失意的，在苏轼到徐州写作的第一首诗(《徐州送交代仲达少卿》)中就可看出他内心的苦闷与些许牢骚。“此身无用且东来，赖有江山慰不才”，这其中的“无用”与“不才”暗含了苏轼对自己被皇帝拒之门外的伤心与对自身前途的忧虑。另在同年六月的《与梁先、舒焕泛舟，得临、酿字，二首》(其二)中有:“老守厌簿书，先生罢函丈。”可以得见初任徐州的苏轼是无心办公的，甚至对公务心生厌倦之感。面对这种消极悲观的情绪，苏轼走出府衙，拥抱大自然，从徐州的山山水水之中消解负面情绪。故而苏轼在徐任职期间曾多次到云龙山拜访张山人，其中直接描写云龙山的诗文就有15篇之多。
                    清代诗人朱迈曾道苏轼与云龙山是“名士与高山，人地两相依”。是啊，一座山往往因为名士的隐居而闻名。在这座云龙山上便有一位令苏轼十分钦佩的云龙山人张天骥。张山人，即张天骥，字圣涂，修养深厚，满腹才华，饱读诗书，品行高洁，脱身声利，隐居于云龙山中，过着闲适清幽的生活，深受苏轼的赞赏与崇敬。本诗由“郊原雨初足”至“垣墙任摧倒”写苏轼访张天骥，并对“山人之居”的环境进行描写，但与我们想象中的清幽高雅的山林小筑似有不同，这里的张山人故居似乎有些破败与萧索之气，其中“荒田咽蛩蚓”“病马放秋草”“墟里通有无，垣墙任摧倒”等等，显然一幅无人问津的萧索图景，但细细品来却又觉得萧索之中带有几分恬静与悠闲。“下有幽人居，闭门空雀噪”，寂静的夏日午后，寂静的小院，没有聒噪的蝉鸣，也没有麻雀的吵闹，牧童安静地躺在枣树下乘凉休息，懂事的马儿在一旁吃草，一切都是那样静谧和谐，具有一种“诗中有画”的美感。
                    在这首首次拜访张山人的诗歌中苏轼赞赏他:“君家本冠盖，丝竹闹邻保。脱身声利中，道德自濯澡。躬耕抱羸疾，奉养百岁老。诗书膏吻颊，菽水媚翁媪。饥寒天随子，杞菊自撷芼。慈孝董邵南，鸡狗相乳抱。”在这几句诗中可以看出苏轼对于张山人品德、孝心、学问、安贫乐道的生活态度等方面的赞赏与钦佩。笔者认为苏轼之所以对这位初次见面的朋友产生倾盖如故之感，是因为从张山人的身上看到了自己的影子，他们拥有相同的兴趣爱好与价值观念，不同的是苏轼无法真正脱身声利，解放身心，因而他更加渴望像张山人一样能摆脱官场的束缚，实现身心的自由。在元丰元年(1078年)四月的《游张山人园》中苏轼更是写下了“惯与先生为酒伴，不嫌刺史亦颜开”，可见在苏轼的心目中张山人是高于自己的，这绝不是他的自谦之辞，通读苏轼描写张山人的诗文，这种崇敬之情一以贯之，是他从心底流露出来的感受。
                </p>
                <div class="image-placeholder">
                    <p>图片位置</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contentVisibility = defineModel()

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
.note {
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

.note {
    background-color: #fbf6ed;
    flex: 2;
    font-size: large;
    color: #666;
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

/* .note p {
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
    /* border: 1px dashed #ccc; */
}
</style>
