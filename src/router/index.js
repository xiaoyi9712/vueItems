import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddStudent from "@/components/AddStudent"
import RemoveStudent from "@/components/RemoveStudent"
import UpdateStudent from "@/components/UpdateStudent"
import LookStudent from "@/components/LookStudent"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/addstudent",
      name:"addstudent",
      component:AddStudent
    },
    {
      path:"/removestudent",
      name:"removestudent",
      component:RemoveStudent
    },
    {
      path:"/updatestudent",
      name:"updatestudent",
      component:UpdateStudent
    },
    {
      path:"/lookstudent",
      name:"lookstudent",
      component:LookStudent
    }
  ]
})
