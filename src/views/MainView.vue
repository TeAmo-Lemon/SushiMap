<template>
	<!-- <transition name="fade-transfrom" mode="out-in">
			<router-view></router-view>
		</transition> -->
	<router-view v-slot="{ Component }">
		<transition>
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<style scoped></style>