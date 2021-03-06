import Vue from 'vue'
import VueRouter from 'vue-router'

import EadCourses from './components/admin/pages/courses/EadCourses.vue'
import EadDashboard from './components/admin/pages/dashboard/EadDashboard.vue'
import EadAdmin from './components/admin/EadAdmin.vue'

Vue.use(VueRouter)

export default new VueRouter({
        //mode: 'history',
	routes: [
                {
                        path: '/admin', 
                        component: EadAdmin,
                        children: [
                                {path: 'cursos', component: EadCourses, name:'admin.courses'},
                                {path: '', component: EadDashboard, name:'admin.dashboard'},
                        ]
                },
                
	],
})