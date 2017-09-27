import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MyInfo from '@/components/MyInfo'
import MyFeed from '@/components/MyFeed'
import TagSearch from '@/components/TagSearch'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/v-stagrem',
      redirect: '/v-stagrem/me'
    },
    {
      path: '/v-stagrem/me',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/v-stagrem/feeds',
      name: 'MyFeed',
      component: MyFeed
    },
    {
      path: '/v-stagrem/search',
      name: 'TagSearch',
      component: TagSearch
    },
    {
      path: '/v-stagrem/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null) {
    if (to.hash.includes('#access_token')) {
      const tokenHash = to.hash
      const tokenValue = tokenHash.split('=')[1]
      localStorage.setItem('token', tokenValue)
      next('/v-stagrem/me')
      return
    }
    next('/v-stagrem/login')
    return
  }
  next()
})

export default router








