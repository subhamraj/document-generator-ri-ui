<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="holidays" :context="'Connectivity Details'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'ConnectivityDetails',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Type', value: 'connectivityType', selectType: true, selectOptions: ['HL7', 'Modality', 'Server', 'VIP']},
					{text: 'Server Type', value: 'serverType', selectType: true, selectOptions: ['Test', 'Production', 'PICS']},
					{text: 'System', value: 'connectivitySystem', textField: true},
					{text: 'Interface Type', value: 'interfaceType', textField: true},
					{text: 'Message Event', value: 'messageEvent', textField: true},
					{text: 'Interface Direction', value: 'interfaceDirection', selectType: true, selectOptions: ['Inbound', 'Outbound']},
					{text: 'Source', value: 'connectivitySource', textField: true},
					{text: 'Source IP', value: 'connectivitySourceIP', textField: true},
					{text: 'Destination', value: 'connectivityDestination', textField: true},
					{text: 'Destination IP', value: 'connectivityDestinationIP', textField: true},
					{text: 'Port', value: 'connectivityPort', textField: true},
					{text: 'AE Title', value: 'connectivityAETitle', textField: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				holidays: [
					{
						id: '124u8129jdi2',
						connectivityType: 'Server',
						serverType: 'Production',
						connectivitySystem: 'XperConnect',
						interfaceType: 'Full Duplex',
						messageEvent: 'ADT_A01',
						interfaceDirection: 'Inbound',
						connectivitySource: 'Modality 11',
						connectivitySourceIP: '192.153.12.17',
						connectivityDestination: 'Modality 12',
						connectivityDestinationIP: '192.153.12.11',
						connectivityPort: '8021',
						connectivityAETitle: 'M-19523S'
					},
				]
			}
		}
	}
</script>

<style scoped>
	
</style>