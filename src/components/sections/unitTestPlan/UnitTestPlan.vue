<template>
	<div>
		
		<v-card class="mb-5">
			<v-card-title>
				<h2 class="primary--text">IS PACS Unit Test Plan</h2>
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
		name: 'Mappings',
		data() {
			return {
				links: [
					{text: 'ADT', route: '/dashboard/testPlan/adt'},
					{text: 'Order Entry', route: '/dashboard/testPlan/orderentry'},
					{text: 'DMWL', route: '/dashboard/testPlan/dmwl'},
					{text: 'DICOM', route: '/dashboard/testPlan/dicom'},
					{text: 'AutoCreate', route: '/dashboard/testPlan/autocreate'},
					{text: 'Validation', route: '/dashboard/testPlan/validation'},
				]
			}
		}
	}
</script>