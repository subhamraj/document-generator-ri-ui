<template>
	<v-container fill-height>
		<v-content style="text-align: center;">
			<v-container><h2>Welcome to Document Generator - RI</h2></v-container>
			<SiteSearch />
			<v-btn router to="dashboard">Go</v-btn>
		</v-content>
	</v-container>
</template>

<script>
	import SiteSearch from '@/components/search/SiteSearch.vue';

	export default {
		name: 'Home',
		components: {
			SiteSearch
		}
	}
</script>

<style scoped>
</style>