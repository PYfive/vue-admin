import router from './router'
import store from './store'
import { Message } from 'element-ui'

router.beforeEach(async(to, from, next) => {
  if (store.getters.token) {
    next()
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
