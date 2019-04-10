<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'DMWL'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'Dmwl',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Test', value: 'test', textField: true},
					{text: 'Test Description', value: 'testDescription', textArea: true},
					{text: 'Expected Result', value: 'expectedResult', textArea: true},
					{text: 'Status', value: 'status', selectType: true, selectOptions: ['Pass', 'Fail']},
					{text: 'Notes', value: 'notes', textArea: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				defaultJson: [
					{
						id: '1',
						test: 'DMWL: Allowed Statuses',
						testDescription: 'Execute DMWL query at the modality for an exam in each status for which DMWL is configured to return results',
						expectedResult: 'Verify that the exam is received at a modality from DMWL.',
						status: '',
						notes: ''
					},
				]
			}
		}
	}
</script>