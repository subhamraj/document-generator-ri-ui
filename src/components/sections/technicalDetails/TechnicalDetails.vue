<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="holidays" :context="'Technical Details'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'TechnicalDetails',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'System Type', value: 'systemType', textField: true},
					{text: 'Application Role', value: 'applicationRole', textField: true},
					{text: 'Application Name', value: 'applicationName', textField: true},
					{text: 'Version', value: 'version', textField: true},
					{text: 'IP', value: 'ipAddress', textField: true},
					{text: 'Hostname', value: 'hostname', textField: true},
					{text: 'Username', value: 'technicalUsername', textField: true},
					{text: 'Password', value: 'technicalPassword', textField: true},
					{text: 'Remark', value: 'technicalRemark', textField: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				holidays: [
					{
						id: '124u8129jdi2',
						systemType: 'Windows',
						applicationRole: 'Some Role',
						applicationName: 'XperConnect',
						version: '2.4.3',
						ipAddress: '192.140.24.12',
						hostname: 'ipasfnue',
						technicalUsername: 'None',
						technicalPassword: 'pwd',
						technicalRemark: 'No Remarks',
					},
				]
			}
		}
	}
</script>

<style scoped>
	
</style>