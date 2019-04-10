<template>
	<div>
		<Crud :tableHeaders="headers" :tableData="defaultJson" :context="'ADT'" />
	</div>
</template>

<script>
	import Crud from '@/components/crudPartial/Crud.vue';

	export default {
		name: 'Adt',
		components: {
			Crud
		},
		data() {
			return {
				headers: [
					{text: 'Field', value: 'field', displayOnly: true},
					{text: 'PlatDefault', value: 'platDefault', textField: true},
					{text: 'Change', value: 'change', textField: true},
					{text: 'Notes', value: 'notes', textArea: true},
					{text: 'Actions', value: 'name', sortable: false, align: 'center', actions: true}
				],
				defaultJson: [
					{
						id: '1',
						field: 'Org',
						platDefault: 'PACS_Platinum_HL7Org(default=HL7DEFAULT)',
						change: '',
						notes: 'By default, nothing is looked up in the table, so the default is always used. If 3.6 site is a single org, just mod the default value to the single org name.  If multi-org, make sure to map in the source field into the Lookup() function as appropriate.  For multi-org, customer has option to leave default "" (which would cause a study to go into exception if no org can be determined) or specify one of the orgs as default (which means some exceptions may end up in the incorrect org).',
					},
					{
						id: '2',
						field: 'MPI',
						platDefault: 'N/A',
						change: '',
						notes: 'Must be added manually, map to out.PID-2.1 w/ PID-2.4 = "Enterprise".  Also requires "MPI Enable" to be checked in HL7 Processing Rules for this message set.',
					},
					{
						id: '3',
						field: 'MRN',
						platDefault: 'PID-3.1',
						change: '',
						notes: '',
					},
					{
						id: '4',
						field: 'Name',
						platDefault: 'PID-5',
						change: '',
						notes: '',
					},
					{
						id: '5',
						field: 'Sex',
						platDefault: 'PACS_Platinum_PatientSex(PID-8)',
						change: '',
						notes: '',
					},
					{
						id: '6',
						field: 'DOB',
						platDefault: 'PID-7',
						change: '',
						notes: '',
					},
					{
						id: '7',
						field: 'SSN',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '7.1',
						field: 'MMN',
						platDefault: 'PID-6',
						change: '',
						notes: '',
					},
					{
						id: '8',
						field: 'Address',
						platDefault: 'PID-11',
						change: '',
						notes: '',
					},
					{
						id: '9',
						field: 'Phone Home',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '10',
						field: 'Phone Work',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '11',
						field: 'PCP',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '12',
						field: 'Visit',
						platDefault: 'PID-18.1 | PV1-19.1',
						change: '',
						notes: '',
					},
					{
						id: '13',
						field: 'PatStatus',
						platDefault: 'PACS_Platinum_PatientClass(PV1-2.1)',
						change: '',
						notes: '',
					},
					{
						id: '14',
						field: 'Location',
						platDefault: 'PV1-3.1',
						change: '',
						notes: '',
					},
					{
						id: '15',
						field: 'Attending',
						platDefault: 'ProviderMagic(PV1-7)',
						change: '',
						notes: 'Uses ProviderMagic sub-map, equivalent to 3.6 script.',
					},
					{
						id: '16',
						field: 'AdmitDTTM',
						platDefault: 'PV1-44',
						change: '',
						notes: '',
					},
					{
						id: '17',
						field: 'Pregnancy',
						platDefault: 'PACS_Platinum_PregnancyIndicator(PV1-15)',
						change: '',
						notes: '',
					},
					{
						id: '18',
						field: 'S&S',
						platDefault: 'PV2-3',
						change: '',
						notes: '',
					},
					{
						id: '19',
						field: 'Admitting',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '20',
						field: 'VisitCustom1',
						platDefault: 'Commented',
						change: '',
						notes: '',
					},
					{
						id: '21',
						field: 'VisitCustom2',
						platDefault: 'N/A',
						change: '',
						notes: 'Only 1 custom avail in 4.4, concatenate together and file into custom1',
					},
					{
						id: '22',
						field: 'OldMRN',
						platDefault: 'MRG-1.1',
						change: '',
						notes: 'Note that if 3.6 merges are set to merge MPI (MRN isn\'t mapped) then MPI source field should be mapped to MRG-1.1 w/ MRG-1.4 as "Enterprise" and PID-3.1 should be new MPI with PID-3.4 as "Enterprise".',
					},
				]
			}
		}
	}
</script>