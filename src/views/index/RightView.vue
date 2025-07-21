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
.time {
   position: fixed;
   top: 80px;
   right: 20px;
   bottom: auto;
   padding: 20px;


}

.weather {
   position: fixed;
   right: 0px;
   bottom: 0px;
}
</style>
