<template>
	<v-dialog v-model="dialog" max-width="500px">

		<!-- Activator 1 -->
		<v-btn v-if="type=='Add'" flat outline fab small slot="activator" color="primary">
			<v-icon dark>add</v-icon>
		</v-btn>

		<!-- Activator 2 -->
		<v-icon v-else small class="mr-3" slot="activator">edit</v-icon>

		<!-- Dialog Content -->
		<v-card>

			<!-- Dialog Header -->
			<v-card-title><h3 class="headline primary--text">{{ this.type }} {{ this.context }}</h3></v-card-title>

			<v-divider></v-divider>

			<v-card-text style="height: 300px; overflow-y: scroll;">
				<v-container grid-list-md class="py-0">

					<!-- For Edit Mode -->
					<v-layout wrap v-if="type=='Edit'">
						<v-flex xs12 class="my-1" v-for="(header, index) in headers" :key="index">
							<v-select v-if="!header.actions && header.selectType" menu-props="offsetY" :items="header.selectOptions" hide-details v-model="itemData[header.value]" :label="header.text"></v-select>
							<v-text-field v-if="!header.actions && header.textField" hide-details v-model="itemData[header.value]" :label="header.text"></v-text-field>
						</v-flex>
					</v-layout>

					<!-- For New Items -->
					<v-layout wrap v-else>
						<v-flex xs12 class="my-1" v-for="(header, index) in headers" :key="index">
							<v-select v-if="!header.actions && header.selectType" menu-props="offsetY" :items="header.selectOptions" hide-details v-model="newItem[header.value]" :label="header.text"></v-select>
							<v-text-field v-if="!header.actions && header.textField" hide-details v-model="newItem[header.value]" :label="header.text"></v-text-field>
						</v-flex>
					</v-layout>

				</v-container>
			</v-card-text>

			<v-divider></v-divider>

			<!-- Actions -->
			<v-card-actions>
				<v-btn color="red lighten-1" @click="dialog=false" flat>Discard</v-btn>
				<v-btn color="green lighten-1" flat @click="submit">Save</v-btn>
			</v-card-actions>

		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'Operations',
		props:['type', 'context', 'itemData', 'headers'],
		data() {
			return {
				dialog: false,
				newItem: {}
			}
		},
		methods: {
			submit() {
				if(this.type=="Edit") {
					this.$emit('submit', this.itemData);
					this.dialog = false ;
				}
				else {
					this.$emit('submit', this.newItem);
					this.dialog = false ;
				}
			}
		}
	}
</script>