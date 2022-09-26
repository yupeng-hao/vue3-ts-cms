<template>
  <div class="navHeader">
    <div class="foldAndExpand" @click="handleClick">
      <el-icon v-if="!isFold" class="fold"><Fold /></el-icon>
      <el-icon v-else class="expand"><Expand /></el-icon>
    </div>
    <div class="content">
      <div>面包屑</div>
      <div>用户信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleClick
    }
  }
})
</script>

<style lang="less" scoped>
.navHeader {
  display: flex;
  width: 100%;
  .fold {
    font-size: 30px;
    cursor: pointer;
  }
  .expand {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    margin-left: 15px;
  }
}
</style>
