<template>
	<v-dialog v-model="dialog" max-width="500px">

		<!-- Activator -->
		<v-icon small class="mr-3" slot="activator" v-if="type=='Trim'">delete</v-icon>
		<v-icon small class="mr-3" slot="activator" v-if="type=='View'">open_in_new</v-icon>

		<!-- Dialog Content -->
		<v-card>

			<!-- Dialog Header -->
			<v-card-title>
				<h3 class="headline red--text" v-if="type=='Trim'">Sure you want to delete this row?</h3>
				<h3 class="headline primary--text" v-if="type=='View'">Component View</h3>
			</v-card-title>

			<v-divider></v-divider>

			<v-card-text style="height: 300px; overflow-y: scroll;">
				<v-container grid-list-md class="py-0">
					<v-layout wrap>

						<!-- Loop Through All Fields -->
						<v-flex xs12 class="my-1" v-for="(header, index) in headers" :key="index">

							<!-- Field Header -->
							<h4 v-if="!header.actions">{{ header.text }}</h4>

							<!-- Field Value -->
							<p v-if="!header.actions">{{ itemData[header.value] }}</p>

						</v-flex>


					</v-layout>
				</v-container>
			</v-card-text>

			<v-divider></v-divider>

			<!-- Actions -->
			<v-card-actions>
				<v-btn color="green lighten-1" @click="dialog=false" flat>Cancel</v-btn>
				<v-btn color="red lighten-1" flat @click="confirmTrim" v-if="type=='Trim'">Delete</v-btn>
			</v-card-actions>

		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		name: 'Trim',
		props: ['itemData', 'headers', 'type'],
		data() {
			return {
				dialog: false
			}
		},
		methods: {
			confirmTrim() {
				this.$emit('trim', this.itemData);
				this.dialog = false ;
			}
		}
	}
</script>