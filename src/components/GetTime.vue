<template>
    <div class="digital-clock">
        <div class="time-display">
            {{ formattedTime }}
        </div>
        <div class="date-display">
            {{ formattedDate }}
        </div>
        <div class="weekday-display">
            {{ formattedWeekday }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';


const currentTime = ref(new Date());

const formattedTime = ref('');
const formattedDate = ref('');
const formattedWeekday = ref('');

const updateTime = () => {
    currentTime.value = new Date();
    // 使用 date-fns 格式化时间和日期
    formattedTime.value = format(currentTime.value, 'HH:mm:ss', { locale: zhCN });
    formattedDate.value = format(currentTime.value, 'yyyy年MM月dd日', { locale: zhCN });
    formattedWeekday.value = format(currentTime.value, 'EEEE', { locale: zhCN });
};
onMounted(() => {
  // 立即更新一次时间
  updateTime();
  
  // 每秒更新一次
  currentTime.value = setInterval(updateTime, 1000);
});
  // 组件卸载时清除计时器
onUnmounted(() => {
    clearInterval(currentTime.value);
});
</script>

<style scoped>
.digital-clock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: 0 auto;
}

.time-display {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.date-display {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
}

.weekday-display {
  font-size: 1.2rem;
}</style>