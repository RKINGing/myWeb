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
  <div class="bottom">
    <h1>vue</h1>
  </div>
</template>

<script setup>
import { useDarkMode } from '@/store/toggle.js';
import HeaderView from '@/views/HeaderView.vue';
import { RouterView } from 'vue-router';

const { isDark, toggleDark } = useDarkMode();
</script>

<style scoped>
/* 浅色模式默认样式 */
.light {
  background-color: #ffffff;
  color: #333333;
}

/* 深色模式样式 */
.dark {
  background-color: #1a1a1a;
  color: #f0f0f0;
}


.light .container {
  min-height: 100vh;
  padding: 20px;
  padding-top: 80px;
  /* 为固定导航栏留出空间 */
 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

.dark .container {
  min-height: 100vh;
  padding: 20px;
  padding-top: 80px;
  /* 为固定导航栏留出空间 */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  padding: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>