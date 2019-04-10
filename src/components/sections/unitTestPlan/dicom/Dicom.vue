<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'DICOM'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'Dicom',
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
						test: 'DICOM Send: Resolution',
						testDescription: 'Send study from modality for exam scheduled in ISP. * Repeat test for various modality types. Be sure to include more complex or atypical modality types (e.g. PT/CT, digitizer, etc.). * Repeat test for each organization',
						expectedResult: 'Verify study resolves to correct exam and is viewable from Patient Timeline.',
						status: '',
						notes: ''
					},
					{
						id: '2',
						test: 'Image Availability Notification (IAN) – Auto-Resolution',
						testDescription: 'Ensure patient and exam exists in system; send corresponding study from modality.',
						expectedResult: 'Verify outbound HL7 IAN message is triggered from the system (also for linked exams). Verify the customer\’s EMR processes message as expected.',
						status: '',
						notes: ''
					},
					{
						id: '3',
						test: 'IAN – Manual',
						testDescription: 'Send exception study from modality.  Manually resolve exception.',
						expectedResult: ' Verify outbound HL7 IAN message is triggered from the system. Verify the customer\’s EMR processes message as expected.',
						status: '',
						notes: ''
					},
					{
						id: '4',
						test: 'IAN – Detach',
						testDescription: 'Find an exam with a corresponding study.  Detach study from exam.',
						expectedResult: ' Verify outbound HL7 IAN detach message is triggered from the system. Verify the customer\’s EMR processes message as expected.',
						status: '',
						notes: ''
					},
				]
			}
		}
	}
</script>