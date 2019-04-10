<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'ADT'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'Adt',
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
						test: 'Patient: New',
						testDescription: 'Create/Admit a patient in the HIS/RIS that does not currently exist in ISP.  Test for each type of patient class.  If patients can be created in more than one system (for the same issuer) repeat test for each workflow.',
						expectedResult: 'Patient established with correct demographics and Patient Class in ISP.',
						status: '',
						notes: ''
					},
					{
						id: '2',
						test: 'Patient: Update Demographics',
						testDescription: 'Change patient name, DOB, gender, SSN, address in HIS/RIS.',
						expectedResult: 'Patient updated with correct demographics in ISP.',
						status: '',
						notes: ''
					},
					{
						id: '3',
						test: 'Merge Patients - List',
						testDescription: 'Merge two patients in the HIS/RIS which already exist in ISP. Commonly ISP is NOT configured to auto-merge based on HL7 merge messages, find the pair of patients in the Merge Candidate List and manually perform the merge.',
						expectedResult: 'Verify that only the destination MRN appears in ISP, and that any exams/images from the source MRN have moved to the destination MRN.',
						status: '',
						notes: ''
					},
					{
						id: '4',
						test: 'Link Patients – List',
						testDescription: 'Enable link candidacy with either Exact or Weighted Match. Admit two patients in different orgs with demographics that match enough to meet candidacy. Test between organizations',
						expectedResult: 'Find the pair of patients in the Merge Candidate List. Ensure patients are only found in the Merge Candidate List for those Orgs configured accordingly.',
						status: '',
						notes: ''
					},
					{
						id: '5',
						test: 'Link Patients – MPI',
						testDescription: 'Admit a patient in one Org, then admit a patient with the same MPI in another Org.  Place exams for both patients, and send images for both exams.',
						expectedResult: 'ISP will show two or more patients when queried by the patient name.  Opening either patient will show both exams on a single timeline.  ',
						status: '',
						notes: ''
					},
					{
						id: '6',
						test: 'Link Patients – Auto Link (No MPI)',
						testDescription: 'Admit a patient in one Org, then admit the same patient in another Org.  Order exams for both patients, and send images for both exams. Test between HL7 Orgs, AutoCreate Orgs, and a mix of HL7 and AutoCreate Orgs.',
						expectedResult: 'ISP will show two or more patients when queried by the patient name.  Opening either patient will show both exams on a single timeline. Ensure patients are only linked for those Orgs configured accordingly.',
						status: '',
						notes: ''
					},
				]
			}
		}
	}
</script>