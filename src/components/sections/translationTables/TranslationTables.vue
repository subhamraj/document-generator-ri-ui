<template>
	<div>
		
		<v-card class="mb-5">
			<v-card-title>
				<h2 class="primary--text">Translation Tables</h2>
				<v-spacer></v-spacer>
				<v-menu offset-y class="dropdown">
					<v-btn flat slot="activator" color="">
						<v-icon left>expand_more</v-icon>
						<span>Select</span>
					</v-btn>
					<v-list>
						<v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
							<v-list-tile-title>{{link.text}}</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
			</v-card-title>
		</v-card>

		<!-- Internal Router Inside Here -->
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'TranslationTables',
		data() {
			return {
				links: [
					{text: 'Race', route: '/dashboard/translationTables/race'},
					{text: 'Patient Class', route: '/dashboard/translationTables/patientClass'},
					{text: 'Order Control Code', route: '/dashboard/translationTables/orderControlCode'},
					{text: 'Order Status', route: '/dashboard/translationTables/orderStatus'},
					{text: 'Order Control Status', route: '/dashboard/translationTables/orderControlStatus'},
					{text: 'Exam Modality Type', route: '/dashboard/translationTables/examModalityType'},
				]
			}
		}
	}
</script>