<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="holidays" :context="'Issue List'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'ContactDetails',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Issue Number', value: 'issueNumber', textField: true},
					{text: 'Case Number', value: 'caseNumber', textField: true},
					{text: 'Issue Name', value: 'issueName', textField: true},
					{text: 'Priority', value: 'issuePriority', selectType: true, selectOptions: ['High', 'Medium', 'Low']},
					{text: 'Status', value: 'issueStatus', selectType: true, selectOptions: ['Open', 'Resolved']},
					{text: 'Log Date', value: 'logDate', textField: true},
					{text: 'Resolve Date', value: 'resolveDate', textField: true},
					{text: 'System', value: 'issueSystem', textField: true},
					{text: 'Update', value: 'issueUpdate', textField: true},
					{text: 'Owner', value: 'issueOwner', textField: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				holidays: [
					{
						id: '124u8129jdi2',
						issueNumber: 'I-123',
						caseNumber: 'C-123',
						issueName: 'XML Differentiator',
						issuePriority: 'Medium',
						issueStatus: 'Open',
						logDate: '1st April, 2019',
						resolveDate: '',
						issueSystem: '',
						issueUpdate: 'Work in Progress',
						issueOwner: 'Dipanjan',
					},
				]
			}
		}
	}
</script>

<style scoped>
	
</style>