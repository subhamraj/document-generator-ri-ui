<template>
	<v-card>

		<!-- Title Section -->
		<v-card-title>
			<v-layout row wrap>

				<!-- Card Header -->
				<v-flex xs12 md5><h2 class="primary--text" style="padding-top: 10px;">{{this.context}}</h2></v-flex>

				<!-- Search Bar -->
				<v-flex xs12 md7>
					<v-text-field solo append-icon="search" v-model="search" single-line hide-details placeholder="Search by Anything"></v-text-field>
				</v-flex>
			</v-layout>
		</v-card-title>

		<v-divider></v-divider>

		<!-- Data Table -->
		<v-card-text>
			<v-data-table :headers="tableHeaders" :items="tableData" :search="search">
				<template v-slot:items="props">
					<td v-for="(header, index) in tableHeaders" :key="index">

						<!-- Action Items -->
						<div v-if="header.actions" class="justify-center layout px-0">

							<!-- Dialog To View Items -->
							<Trim :itemData="props.item" :headers="tableHeaders" />

							<!-- Dialog To Edit Items -->
							<Operations :type="'Edit'" :itemData="props.item" @submit="editItem" :headers="tableHeaders" :context="context" />

						</div>

						<!-- Raw Data -->
						<div v-else>
							{{ props.item[header.value] }}
						</div>

					</td>
				</template>
			</v-data-table>
		</v-card-text>

	</v-card>
</template>

<script>
	import Operations from '@/components/crudPartial/components/Operations.vue';
	import Trim from '@/components/crudPartial/components/Trim.vue';

	export default {
		name: 'Crud',
		props:['tableHeaders', 'tableData', 'context'],
		components: {
			Operations,
			Trim
		},
		data() {
			return {
				dialog: false,
				search: '',
			}
		},
		methods: {
			addItem(item) {
				//Mutate in Server and Push to Local
				this.tableData.push(item);
			},
			editItem(item) {
				//Mutate in Server and Push to Local
				const index = this.tableData.indexOf(item);
				Object.assign(this.tableData[index], item)
			},
		}
	}
</script>