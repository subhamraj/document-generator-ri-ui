<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'Validation'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'Validation',
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
						test: 'Organizations',
						testDescription: 'View Organizations',
						expectedResult: 'Verify that organizations are consistent between versions; AutoCreate organizations are configured as such if applicable',
						status: '',
						notes: ''
					},
					{
						id: '2',
						test: 'Exam Code Dictionary',
						testDescription: 'View Exam Code dictionary for non-AutoCreate organizations',
						expectedResult: 'ECDs are available for the HL7 orgs',
						status: '',
						notes: ''
					},
					{
						id: '3',
						test: 'Auto-Create – Exam Codes',
						testDescription: 'Send an Auto-Create study from modality.',
						expectedResult: 'Verify exam code is processed according to Auto-Create Exam Code Rule configuration',
						status: '',
						notes: ''
					},
				]
			}
		}
	}
</script>