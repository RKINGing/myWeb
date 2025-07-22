<template>

  <img class="logo-img" src="/img/Avatar.jpg" alt="个人头像" />

  <div class="message">
    <SocialLink />
  </div>

  <div class="card-effect">
    <h1>欢迎来到我的个人网站</h1>
    <p>这是一个使用 Vue.js 构建的个人网站，展示了我的技能和项目。</p>
  </div>

</template>

<script setup>
import SocialLink from '@/components/SocialLink.vue';
</script>

<style scoped>
.logo-img {
  width: clamp(80px, 15vw, 150px);
  height: clamp(80px, 15vw, 150px);
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: rotate(0.5turn) scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  }

}


.card-effect {
  border-radius: 24px;
  padding: var(--padding-sm, 12px) var(--padding-md, 20px);
  max-width: 100%;

}

/* 大屏时限制最大宽度 */
@media (min-width: 1200px) {
  .card-effect {
    max-width: 600px;
  }
}

.card-effect:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.12);
}
</style>