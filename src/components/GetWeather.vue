<template>
    <div class="weather-container">
        <div class="weather-display">
            <h2 class="weather-title">当前天气</h2>
            <div class="weather-info">
                <p class="weather-item"><span class="label">省份:</span> {{ state.province }}</p>
                <p class="weather-item"><span class="label">城市:</span> {{ state.city }}</p>
                <p class="weather-item temperature">
                    <span class="label">温度:</span> 
                    <span class="value">{{ state.weather.temperature }}℃</span>
                </p>
                <p class="weather-item"><span class="label">天气:</span> {{ state.weather.weather }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getIpLocation, getWeather } from '../api/weather.js';

const state = ref({
    province: '',
    city: '',
    weather: {
        temperature: '',
        weather: ''
    }
});

onMounted(async () => {
    try {
        const adcode = await getIpLocation();
        const weatherData = await getWeather(adcode);
        if (weatherData) {
            state.value.province = weatherData.province;
            state.value.city = weatherData.city;
            state.value.weather.temperature = weatherData.temperature;
            state.value.weather.weather = weatherData.weather;
        } else {
            console.error('获取天气数据失败');
        }
    } catch (error) {
        console.error('天气数据获取出错:', error);
    }
});
</script>

<style scoped>
.weather-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.weather-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  width: 100%;
}

.weather-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.weather-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.weather-item {
  font-size: 1.2rem;
  color: #666;
  padding: 0.5rem 0;
  margin: 0;
  width: 100%;
  display: flex;
}

.label {
  font-weight: bold;
  color: #333;
  min-width: 70px;
}

.temperature .value {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.4rem;
}

/* 加载状态样式 */
.weather-item:empty::before {
  content: "加载中...";
  color: #7f8c8d;
  font-style: italic;
}
</style>
