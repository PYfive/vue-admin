import router from './router'
import store from './store'
import { Message } from 'element-ui'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await store.dispatch('user/getInfo')

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
