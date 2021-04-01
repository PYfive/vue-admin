import {login} from '../../api/auth'
import {userInfo} from "../../api/user";
import {getToken, setToken, removeToken} from '../../utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: JSON.parse(localStorage.getItem('userInfo'))||{}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

const actions = {
  // user login
  login({commit}, userInfo) {
    const {username, password} = userInfo
    return new Promise((resolve, reject) => {
      login({username: username.trim(), password: password})
        .then(response => {
          const {data} = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch((error) => {
        reject(error)
      })
    })
  },

  // userInfo
  userInfo({commit}) {
    return new Promise((resolve, reject) => {
      userInfo()
        .then(response => {
          const {data} = response
          localStorage.setItem('info',JSON.stringify(data))
          commit('SET_USER_INFO', data)
          resolve()
        }).catch((error) => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({commit}) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

