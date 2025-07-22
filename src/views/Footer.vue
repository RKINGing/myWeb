<template>
  <footer class="footer">
    <div class="copyright">
      <p>© {{ currentYear }} Rking's Web. All rights reserved.</p>
      <p>使用 Vue 3 + Vite 构建</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 获取当前年份
const currentYear = ref('');
onMounted(() => {
  currentYear.value = new Date().getFullYear().toString();
});
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 1rem 0;
  margin-top: auto; /* 自动顶到底部 */
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-color, #666); /* 适配主题色 */
  background-color: rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright p {
  margin: 0.3rem 0;
}
</style>