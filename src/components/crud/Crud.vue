<template>
	<v-card>

		<!-- Title Section -->
		<v-card-title>
			<v-layout row wrap>

				<!-- Card Header -->
				<v-flex xs12 md5><h2 class="primary--text" style="padding-top: 10px;">{{this.context}}</h2></v-flex>

				<!-- Search Bar -->
				<v-flex xs9 md6>
					<v-text-field solo append-icon="search" v-model="search" single-line hide-details placeholder="Search by Anything"></v-text-field>
				</v-flex>

				<!-- Dialog To Add New Items -->
				<v-flex xs3 md1 class="pl-3">
					<Operations :type="'Add'" :headers="tableHeaders" @submit="addItem" :context="context" />
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
							<Trim :itemData="props.item" :headers="tableHeaders" :type="'View'" />

							<!-- Dialog To Edit Items -->
							<Operations :type="'Edit'" :itemData="props.item" @submit="editItem" :headers="tableHeaders" :context="context" />

							<!-- Dialog To Delete Items -->
							<Trim :itemData="props.item" :headers="tableHeaders" @trim="deleteItem" :type="'Trim'" />

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
	import Operations from '@/components/crud/components/Operations.vue';
	import Trim from '@/components/crud/components/Trim.vue';

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
			deleteItem(item) {
				//Mutate in Server and Delete from Local
				const index = this.tableData.indexOf(item);
				this.tableData.splice(index, 1);
			}
		}
	}
</script>