import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('./views/Dashboard.vue'),
			children: [
				{
					path: '/',
					component: () => import('./components/sections/Landing.vue'),
				},
				{
					path: 'contactDetails',
					component: () => import('./components/sections/contactDetails/ContactDetails.vue'),
				},
				{
					path: 'technicalDetails',
					component: () => import('./components/sections/technicalDetails/TechnicalDetails.vue'),
				},
				{
					path: 'connectivityDetails',
					component: () => import('./components/sections/connectivityDetails/ConnectivityDetails.vue'),
				},
				{
					path: 'sampleMessages',
					component: () => import('./components/sections/sampleMessages/SampleMessages.vue'),
				},
				{
					path: 'issueList',
					component: () => import('./components/sections/issueList/IssueList.vue'),
				},
				{
					path: 'mappings',
					component: () => import('./components/sections/mappings/Mappings.vue'),
					children: [
						{
							path: 'adt',
							component: () => import('./components/sections/mappings/adt/Adt.vue'),
						},
					]
				}
			]
		}
	]
})
