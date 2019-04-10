<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="dataJson" :context="'Patient Class'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'PatientClass',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Source Value', value: 'sourceValue', textField: true},
					{text: 'Destination Value', value: 'destinationValue', textField: true},
					{text: 'Description', value: 'description', textArea: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				dataJson: []
			}
		}
	}
</script>