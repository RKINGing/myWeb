<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    text-color="{{isdark? #f0f0f0: #333333}}" @select="handleSelect">

    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item index="/projects">项目</el-menu-item>
    <el-menu-item index="/experience">经验</el-menu-item>
    <el-menu-item index="/blog">博客</el-menu-item>
    <el-menu-item index="/other">其他</el-menu-item>
    <el-menu-item index="dark-mode" class="dark-mode-toggle">
      <el-button @click="toggleDark()">
        <div v-if="!isDark"><sun-one theme="outline" size="23" fill="#ffd700" strokeLinejoin="bevel"
            strokeLinecap="square" />

        </div>
        <div v-else>
          <moon theme="outline" size="23" fill="#333" strokeLinejoin="bevel" strokeLinecap="square" />

        </div>
      </el-button>
    </el-menu-item>
    <el-menu-item index="spacer" class="right-spacer"></el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue';
import { SunOne, Moon } from '@icon-park/vue-next';
import { useDarkMode } from '../store/toggle.js';
import { useRoute, useRouter } from 'vue-router';



const { isDark, toggleDark } = useDarkMode();


//el-menu-item本身有默认的点击事件处理，所以不需要自己处理,使用 el-menu-item 的 select 事件

const router = useRouter();
const route = useRoute();
// 使用 ref 来存储当前选中的路由路径
const activeIndex = ref(route.path);


const handleSelect = (key) => {
  // 只处理需要路由跳转的菜单项
  if (key !== 'spacer' && key !== 'dark-mode' && key !== '/other') {
    router.push(key);
  }
};

// 监听路由变化，更新 activeIndex
watch(route, () => {
  activeIndex.value = route.path;
});



</script>

<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;

}

.el-menu-demo {
  font-size: 16px;
  /* 背景色调整 */
  position: fixed;
  /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* 确保导航栏在最上层 */
  background-color: rgba(238, 223, 223, 0);
  /* 半透明背景 */
  backdrop-filter: blur(5px);
  /* 毛玻璃效果 */


}
</style>