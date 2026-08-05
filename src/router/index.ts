import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () => import("@/views/mine/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 简单路由守卫：判断登录
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  // 需要登录的页面判断
  if (to.path === "/mine" && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
