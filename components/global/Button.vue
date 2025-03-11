<template>
	<button v-if="text" class="btn">{{ text }}</button>
</template>
<script setup lang="ts">
	interface Props {
		text: string;
		variant?: string;
	}

	defineProps<Props>();
</script>
<style lang="scss">
	.btn {
		@apply bg-pink-300;
	}
</style>
