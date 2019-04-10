<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="dataJson" :context="'Order Control Status'" />
	</div>
</template>

<script>
	import Crud from '@/components/crud/Crud.vue';

	export default {
		name: 'OrderControlStatus',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Message Type', value: 'messageType', textField: true},
					{text: 'Processing Trigger', value: 'processingTrigger', textField: true},
					{text: 'Description', value: 'description', textArea: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				dataJson: []
			}
		}
	}
</script>