// import Cookies from 'js-cookie'
import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getCookies, setCookies, removeCookies } from '@/utils/cookies'
import login_store from '../../store'
import { getStore, setStore } from '@/utils/storage'
import _CONST from '@/utils/globalConfig'

const state = {
  token: getCookies(_CONST.TOKEN),
    userInfo: getStore(_CONST.USER_INFO)
}
const actions = {
  LoginByUsername({ commit }, userInfo) {
    const username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      loginByUsername(username, userInfo.password).then(response => {
        setCookies(_CONST.TOKEN, response.access_token)
        login_store.dispatch('GetUserInfo')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  GetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        commit('SET_USER_INFO', response)
        setStore(_CONST.USER_INFO, response)  //多页面通信需要依赖localStorage
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', {})
        removeCookies(_CONST.TOKEN)
        removeStore(_CONST.USER_INFO)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 前端 登出
  FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', {})
      removeCookies(_CONST.TOKEN)
      removeStore(_CONST.USER_INFO)
      resolve()
    })
  },
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const getters = {
    ['getToken'](state) {
        return state.token;
    },
    ['getUserInfo'](state) {
        return state.userInfo;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
