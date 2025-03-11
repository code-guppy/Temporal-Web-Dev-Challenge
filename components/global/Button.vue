<template>
	<button v-if="text" class="btn">{{ text }}</button>
</template>
<script setup lang="ts">
	interface Props {
		text: string;
	}

	defineProps<Props>();
</script>
<style lang="scss"></style>
