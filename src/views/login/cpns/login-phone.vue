<template>
  <div class="loginPhone">
    <el-form
      ref="ruleFormRef"
      :model="phone"
      :rules="rules"
      label-width="65px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <div class="getCode">
        <el-form-item label="验证码" prop="authCode">
          <el-input v-model="phone.authCode" />
        </el-form-item>
        <el-button type="primary">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      authCode: ''
    })
    const ruleFormRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...phone })
        }
      })
    }
    return {
      phone,
      rules,
      loginAction,
      ruleFormRef
    }
  }
})
</script>

<style lang="less" scoped>
.getCode {
  display: flex;
  .el-form-item {
    flex: 3;
    margin-right: 15px;
  }
  .el-button {
    flex: 1;
  }
}
</style>
