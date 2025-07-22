<template>
   <div>
      <GetTime class="time" />
      <GetWeather class="weather" />
   </div>
</template>
<script setup>
import GetTime from '@/components/GetTime.vue';
import GetWeather from '@/components/GetWeather.vue';
</script>

<style scoped>
/* 移除原固定定位，由父组件控制布局 */
.time, .weather {
  position: static; /* 覆盖原 fixed */
  padding: var(--padding-sm, 12px);
  margin: 0 auto;
}


</style>