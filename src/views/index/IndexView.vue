<template>
  <div class="index-container">
    <LeftView class="left-section" />
    <RightView class="right-section" />
  </div>
</template>

<script setup>
import LeftView from '@/views/index/LeftView.vue';
import RightView from '@/views/index/RightView.vue';
</script>

<style scoped>
.index-container {
  display: flex;
  flex-direction: column; /* 默认手机端上下布局 */
  gap: var(--padding-md, 20px);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--padding-sm, 12px);
}

/* 平板及以上：左右布局 */
@media (min-width: 768px) {
  .index-container {
    flex-direction: row;
  }
  .left-section {
    flex: 1; /* 左侧占比自适应 */
    max-width: 65%;
  }
  .right-section {
    flex: 0 0 35%; /* 右侧固定占比 */
  }
}

/* 手机端：右侧组件取消固定定位 */
@media (max-width: 767px) {
  .right-section {
    position: static !important; /* 覆盖原固定定位 */
    width: 100% !important;
    margin-top: var(--padding-md, 20px);
  }
}
</style>