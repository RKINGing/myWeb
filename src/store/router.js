import { createWebHistory, createRouter } from "vue-router";
import IndexView from "@/views/index/IndexView.vue";
import BlogView from "@/views/blog/BlogView.vue";
import ExperienceView from "@/views/experience/ExperienceView.vue";

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: IndexView
  },
  {
    path: "/blog",
    name: "BlogView",
    component: BlogView
  },
  {
    path: "/experience",
    name: "ExperienceView",
    component: ExperienceView
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes,
});

export default router;
