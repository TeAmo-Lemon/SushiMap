<template>
	<div class="app-main">
		<!-- <transition name="fade-transfrom" mode="out-in">
			<router-view></router-view>
		</transition> -->
		<router-view v-slot="{ Component }">
			<transition>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<style scoped>
.app-main {
    height: 100%;
    width: 100%;
    overflow: hidden; /* 禁止内容溢出 */
    position: relative;
}
</style>