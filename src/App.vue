<template>
  <div :class="isDark ? 'dark' : 'light'">
    <!-- 固定导航栏 -->
    <HeaderView />

    <!-- 内容区域，添加顶部间距以避免被导航栏遮挡 -->
    <div class="container">

      <RouterView />
      <p>当前主题: {{ isDark ? '深色' : '浅色' }}</p>

    </div>
  </div>
</template>

<script setup>
import { useDarkMode } from '@/store/toggle.js';
import HeaderView from '@/views/HeaderView.vue';
import { RouterView } from 'vue-router';

const { isDark, toggleDark } = useDarkMode();
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding: 20px;
  padding-top: 80px;
  /* 为固定导航栏留出空间 */
  background-image: url('img/RainyCat.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}
</style>