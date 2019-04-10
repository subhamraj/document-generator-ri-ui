<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'Order Entry'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'OrderEntry',
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
						test: 'Exam: New',
						testDescription: 'Order an exam on a patient in the RIS.  May need to arrive the patient to see in Pacs.',
						expectedResult: 'New exam in "S" status should appear in Exam Lookup. Verify Scheduled Date Time; Exam Code; Laterality; Providers; Priority; History; Signs & Symptoms; Comments; Exam Custom',
						status: '',
						notes: ''
					},
					{
						id: '2',
						test: 'Exam: Modify Scheduled Date Time',
						testDescription: 'Modify the scheduled Date Time of an exam in RIS.',
						expectedResult: 'Modified Scheduled Date Time should appear in Exam Lookup. If linked exam workflow is in place, confirm all linked exams update accordingly.',
						status: '',
						notes: ''
					},
					{
						id: '3',
						test: 'Exam: Modify Exam Code',
						testDescription: 'Modify the exam code of an exam in RIS.',
						expectedResult: 'Modified exam code should appear in Exam Lookup. If linked exam workflow is in place, confirm all linked exams update accordingly.',
						status: '',
						notes: ''
					},
					{
						id: '4',
						test: 'Exam Priority – STAT',
						testDescription: 'Order exam as STAT in RIS. Complete exam and send images to ISP. Dictate and Finalize a result.',
						expectedResult: 'STAT Exam is displayed above non-STAT exams in Exam Lookup (before and after image acquisition, and through all statuses).',
						status: '',
						notes: ''
					},
				]
			}
		}
	}
</script>