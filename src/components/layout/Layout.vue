<template>
	<nav>
		
		<!-- Toolbar -->
		<v-toolbar app dense dark fixed clipped-left scroll-target="#mainContainer">
			<v-toolbar-side-icon class="primary--text" @click="drawer=!drawer"></v-toolbar-side-icon>
			<v-toolbar-title class="text-uppercase grey-text"> 
				<span class="font-weight-light">RI </span>
				<span class="primary--text">Document Generator</span>
			</v-toolbar-title>
		</v-toolbar>		

		<!-- Navigation Drawer -->
		<v-navigation-drawer clipped fixed v-model="drawer" app dark class="black">
			<v-list>
				<div v-for="link in links" :key="link.text">
					<v-list-tile v-if="link.route" router :to="link.route">
						<v-list-tile-action>
							<v-icon class="primary--text">{{ link.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title class="white--text">{{ link.name }}</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<div v-else>
						<v-list-group :prepend-icon="link.icon" no-action value="true">
							<template v-slot:activator>
								<v-list-tile>
									<v-list-tile-title>{{ link.name }}</v-list-tile-title>
								</v-list-tile>
							</template>
							<v-list-tile v-for="section in link.submenu" :key="section.name" router :to="section.route">
								<v-list-tile-title v-text="section.name"></v-list-tile-title>
								<v-list-tile-action>
									<v-icon>{{ section.icon }}</v-icon>
								</v-list-tile-action>
							</v-list-tile>
						</v-list-group>
					</div>
				</div>
			</v-list>
		</v-navigation-drawer>		

		<!-- Footer -->
		<v-footer app fixed dark class="justify-center" id="footerContent">
			&copy; Copyright {{ this.year }} | EIS
		</v-footer>

	</nav>
</template>

<script>

	export default {
		name: 'Layout',
		mounted() {
			var date = new Date();
			this.year = date.getFullYear();
		},
		data() {
			return {
				year: '',
				drawer: false,
				links: [
					{
						name: 'Site Dashboard',
						icon: 'dashboard',
						route: '/dashboard'
					},
					{
						name: 'Sections',
						icon: 'home',
						submenu: [
							{
								name: 'Contact Details',
								icon: 'person_pin',
								route: '/dashboard/contactDetails'
							},
							{
								name: 'Technical Details',
								icon: 'settings_applications',
								route: '/dashboard/technicalDetails'
							},
							{
								name: 'Connectivity Details',
								icon: 'wifi',
								route: '/dashboard/connectivityDetails'
							},
							{
								name: 'Sample Messages',
								icon: 'chat_bubble_outline',
								route: '/dashboard/sampleMessages'
							},
							{
								name: 'Issue List',
								icon: 'sync_problem',
								route: '/dashboard/issueList'
							},
							{
								name: 'Mappings',
								icon: 'pin_drop',
								route: '/dashboard/mappings'
							},
						]
					},
					{
						name: 'Search Other Sites',
						icon: 'search',
						route: '/'
					},
					{
						name: 'Support & Feedback',
						icon: 'chat',
						route: '/feedback'
					}
				]
			}
		}
	}
</script>