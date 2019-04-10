<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="holidays" :context="'Sample Messages'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'SampleMessages',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Type', value: 'messageType', selectType: true, selectOptions: ['ADT', 'ORM', 'ORU', 'OMI', 'DMWL Inbound', 'DMWL Outbound']},
					{text: 'Source', value: 'messageSource', textField: true},
					{text: 'Message', value: 'messageBody', textArea: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				holidays: [
					{
						id: '124u8129jdi2',
						messageType: 'ADT',
						messageBody: 'No text',
						messageSource: 'Modality 11',
					},
				]
			}
		}
	}
</script>

<style scoped>
	
</style>