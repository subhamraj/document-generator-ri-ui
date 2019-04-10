<template>
	<div>
		
		<v-card class="mb-5">
			<v-card-title>
				<h2 class="primary--text">Mappings</h2>
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
					{text: 'ADT', route: '/dashboard/mappings/adt'},
					{text: 'ORM', route: '/dashboard/mappings/orm'},
					{text: 'ORU', route: '/dashboard/mappings/oru'},
					{text: 'AutoCreate', route: '/dashboard/mappings/autocreate'},
					{text: 'DMWL Inbound', route: '/dashboard/mappings/dmwlin'},
					{text: 'DMWL Outbound', route: '/dashboard/mappings/dmwlout'},
					{text: 'Tables in Use', route: '/dashboard/mappings/tables'},
					{text: 'PICS', route: '/dashboard/mappings/pics'},
				]
			}
		}
	}
</script>