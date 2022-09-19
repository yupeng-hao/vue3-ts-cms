<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <loginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <loginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <!-- remember password -->
    <div class="account-control">
      <el-checkbox
        v-model="isKeepPassword"
        @click="changePasswordState"
        label="记住密码"
      />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <!-- login button -->
    <el-button class="login-btn" @click="handleLogin" type="primary"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(localCache.getCache('isKeepPassword'))
    const currentTab = ref('account')
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()

    // 保存记住密码状态
    const changePasswordState = () => {
      if (isKeepPassword.value == true) {
        localCache.setCache('isKeepPassword', false)
      } else {
        localCache.setCache('isKeepPassword', true)
      }
    }
    const handleLogin = () => {
      if (currentTab.value == 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLogin,
      changePasswordState
    }
  }
})
</script>

<style lang="less" scoped>
.title {
  text-align: center;
}
.login-panel {
  width: 320px;
  margin-bottom: 150px;
}
.account-control {
  display: flex;
  justify-content: space-around;
}
.login-btn {
  width: 100%;
}
</style>
