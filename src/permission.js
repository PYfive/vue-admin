import router from './router'
import store from './store'

router.beforeEach(async(to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token) {
    await store.dispatch('user/userInfo')
    if(to.path === '/welcome'){
      next()
    }else{
      next('/welcome')
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {

})

