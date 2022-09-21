import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import {
  accountLoginApi,
  userInfoByIdApi,
  userRoleMenusApi
} from '../../service/login/login'
import type { IAccount } from '@/service/login/type'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeRoleMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    // 用户登录
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginApi(payload)
      const { id, token } = loginResult.data
      localCache.setCache('token', token)
      commit('changeToken', token)

      // 请求用户信息
      const userInfoResult = await userInfoByIdApi(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await userRoleMenusApi(userInfo.role.id)
      const userMenusInfo = userMenusResult.data
      commit('changeRoleMenus', userMenusInfo)
      localCache.setCache('roleMenus', userMenusInfo)

      // 跳转首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log(payload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (token) {
        commit('changeRoleMenus', userMenus)
      }
    }
  }
}

export default loginModule
