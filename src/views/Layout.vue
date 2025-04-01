<script lang="ts" setup>
import TheNavBar from './TheNavBar.vue'
import MainView from './MainView.vue'
import { currentUserService } from '@/api/user.js'
import { ref } from 'vue'

const getUser = async () => {
    await currentUserService()
}
getUser()

</script>

<template>
    <div class="common-layout" style="height: 100vh; display: flex; flex-direction: column">
        <div class="navbar-container">
            <TheNavBar />
        </div>

        <el-container style="flex: 1; overflow: hidden"> <!-- 新增overflow隐藏 -->
            <el-main style="padding: 56px 0px 0 0px; height: 100%;"> <!-- 调整底部padding -->
                <MainView />
            </el-main>

            <el-footer style="position: fixed; bottom: 0; width: 100%">
                <div class="footer-content" style="text-align: center;">
                    <div>浙ICP备2024126164号</div>
                    <div>联系我:huai_min@foxmail.com</div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
    height: 38px;
    padding: 0;
    background: transparent !important;
    /* 强制透明背景 */
    z-index: 1;
    /* 确保在内容上方 */
}
</style>