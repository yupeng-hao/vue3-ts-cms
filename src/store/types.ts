import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  password: string
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
