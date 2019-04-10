<template>
	<div>
		<v-autocomplete placeholder="Start typing to Search" :loading="isLoading" hide-selected prepend-icon="mdi-database-search"></v-autocomplete>
	</div>
</template>

<script>
	export default {
		name: 'SiteSearch',
		data() {
			return {
				model: null,
				isLoading: false,
				search: null,
				entries: []
			}
		}
	}
</script>