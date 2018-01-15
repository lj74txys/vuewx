import Vue from 'vue'
import Router from 'vue-router'
import WxIndex from '@/components/WxIndex'
import ChatDetails from '@/components/ChatDetails'
import UserDetails from '@/components/UserDatails'
import AddressBook from '@/components/AddressBook'
import FindOut from '@/components/FindOut'
import My from '@/components/my'
import UserFriend from '@/components/UserFriend'



Vue.use(Router)

export default new Router({
  routes: [
   	{
   	 path: '/', 
   	 redirect:'/index',
   	},,
    {
      path: '/index',
      name: 'WxIndex',
      component: WxIndex
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: ChatDetails
    },
    {
      path: '/user/detail/:id',
      name: 'userdetail',
      component: UserDetails
    	
    },
    {
      path: '/address',
      name: 'AddressBook',
      component: AddressBook
    },
    {
      path: '/user/friend',
      name: 'UserFriend',
      component: UserFriend
    },
    {
      path: '/findout',
      name: 'FindOut',
      component: FindOut
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
