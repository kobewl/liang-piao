<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(['1'])
</script>

<template>
  <div class="box" :style="{ width: '800px' }">
    <t-head-menu default-value="1-1" :default-expanded="expanded">
      <template #logo>
        <img height="28" src="../src/assets/logo.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>发券中心</span>
        </template>

        <t-menu-item value="1-1">
          <span>
            <router-link to="/create/ticket"> 创建优惠券 </router-link>
          </span>
        </t-menu-item>

        <t-menu-item value="1-2">
          <span>
            <router-link to="/send/ticket"> 发送优惠券 </router-link>
          </span>
        </t-menu-item>

        <t-menu-item value="1-3">
          <span>
            <router-link to="/manage/ticket"> 管理优惠券 </router-link>
          </span>
        </t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>兑券中心</span>
        </template>
        <t-menu-item value="2-1">
          <span>
            <router-link to="/use/ticket"> 兑换优惠券 </router-link>
          </span>
        </t-menu-item>
        <t-menu-item value="2-2">
          <span>
            <router-link to="/use/history"> 兑券历史 </router-link>
          </span>
        </t-menu-item>
      </t-submenu>
    </t-head-menu>

    <!-- 路由视图 - 用于显示路由组件 -->
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style>
.box {
  min-height: 100vh;
  background: #f5f5f5;
}

.content {
  padding: 20px;
  min-height: calc(100vh - 60px);
  background: white;
  margin: 0 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
