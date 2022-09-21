import myRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './type'

enum loginURL {
  accountLogin = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}
// 账号登录
export function accountLoginApi(account: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: loginURL.accountLogin,
    data: account
  })
}
// 用户信息
export function userInfoByIdApi(id: number) {
  return myRequest.get<IDataType>({
    url: loginURL.userInfo + id,
    showLoading: false
  })
}

// 角色菜单
export function userRoleMenusApi(id: number) {
  return myRequest.get<IDataType>({
    url: loginURL.userMenus + id + '/menu',
    showLoading: false
  })
}
