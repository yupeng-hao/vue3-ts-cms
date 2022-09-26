<template>
  <div class="navMenu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!collapse" class="title">Vue+Ts</span>
    </div>

    <!-- 菜单 -->
    <el-menu
      class="el-menu-vertical"
      default-active="2"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <component class="icons" :is="item.plusIcon"></component>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleClickMenu(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id">
            <i v-if="item.icon" :class="item.icon"></i>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const router = useRouter()

    const handleClickMenu = (item: any) => {
      router.push({
        path: item.url ?? '/notFound'
      })
    }
    return {
      userMenus,
      handleClickMenu
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
}

.el-submenu {
  background-color: #001529 !important;
  .el-menu-item {
    padding-left: 50px;
    background-color: #0c2135 !important;
  }
}
::v-deep .el-submenu__title {
  background-color: #001529 !important;
}
.el-menu-item:hover {
  color: #fff !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0160bd !important;
}
.el-menu {
  border-right: none;
}
.icons {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>
