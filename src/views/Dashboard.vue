<template>
	<v-app class="grey lighten-2">
		
		<!-- Imports Toolbar, Drawer & Footer -->
		<Layout />

		<!-- Internal Router Inside Here -->
		<v-content class="scroll-y" id="mainContainer">
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
		
	</v-app>
</template>

<script>
	import Layout from '@/components/layout/Layout.vue';

	export default {
		name: 'Dashboard',
		components: {
			Layout
		},
		data() {
			return {
			}
		}
	}
</script>

<style>
	#mainContainer {
		max-height: 100vh;
	}
</style>