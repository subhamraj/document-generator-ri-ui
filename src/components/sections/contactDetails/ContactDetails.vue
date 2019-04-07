<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="holidays" :context="'Contact Details'" />
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
					{text: 'Name', value: 'contactName', textField: true},
					{text: 'Role', value: 'contactRole', textField: true},
					{text: 'Organization', value: 'contactOrg', selectType: true, selectOptions: ['Philips', 'Customer', 'Third Party']},
					{text: 'Email', value: 'contactMail', textField: true},
					{text: 'Phone', value: 'contactPhone', textField: true},
					{text: 'Remark', value: 'contactRemark', textField: true},
					{text: 'Status', value: 'contactStatus', selectType: true, selectOptions: ['Active', 'Inactive']},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				holidays: [
					{
						id: '124u8129jdi2',
						contactName: 'Bacon',
						contactRole: 'Developer',
						contactOrg: 'Philips',
						contactMail: 'bacon@philips.com',
						contactPhone: '8013758776',
						contactRemark: 'None',
						contactStatus: 'Active',
					},
					{
						id: 'ASFSFASFMASKMSK',
						contactName: 'Hambone',
						contactRole: 'Maintainer',
						contactOrg: 'Philips',
						contactMail: 'hambone@philips.com',
						contactPhone: '9432370713',
						contactRemark: 'Again None',
						contactStatus: 'Active',
					},
					{
						id: '124uaosfnk8129jdi2',
						contactName: 'Porkchop',
						contactRole: 'Tester',
						contactOrg: 'Customer',
						contactMail: 'porkchop@philips.com',
						contactPhone: 'Just Chill',
						contactRemark: 'Still None',
						contactStatus: 'Inactive',
					}
				]
			}
		}
	}
</script>

<style scoped>
	
</style>