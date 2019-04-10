<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'AutoCreate'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'AutoCreate',
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
						test: 'Auto-Create – Patients and Exams',
						testDescription: 'Send one Auto-Create study from modality for MRN and ACC which do not already exist in system, and another for which the MRN already exists but the ACC does not.',
						expectedResult: 'If Auto-Create Patient and Exams: Verify that both the patient and exam are auto-created. If Auto-Create Exams: Verify that ONLY the exam is created. Study should be resolved to exam accordingly.',
						status: '',
						notes: ''
					},
					{
						id: '2',
						test: 'Auto-Create – Exam Status',
						testDescription: 'Send an Auto-Create study from modality.',
						expectedResult: 'Verify exam status is processed according to Auto-Create Exam Status configuration:',
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