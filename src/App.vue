<template>
	<!-- External Router -->
	<v-app class="grey lighten-2">
		<router-view></router-view>
	</v-app>
</template>

<script>
	export default {
		name: 'App',
		components: {
		},
		data () {
			return {
			}
		}
	}
</script>

<style>
	html {
		overflow: hidden;
	}
</style>