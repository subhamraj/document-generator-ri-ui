<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="dataJson" :context="'Exam Modality Type'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'ExamModalityType',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Exam Code', value: 'examCode', textField: true},
					{text: 'Study Type', value: 'studyType', textField: true},
					{text: 'Modality', value: 'modality', textField: true},
					{text: 'AE Title', value: 'aeTitle', textField: true},
					{text: 'ProcStep Protocol Codes', value: 'procStep', textField: true},
					{text: 'CPT Code', value: 'cpt', textField: true},
					{text: 'ProcStep Exam Code Description', value: 'procStepDescription', textArea: true},
					{text: 'CDR Exam Code', value: 'cdr', textField: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				dataJson: []
			}
		}
	}
</script>