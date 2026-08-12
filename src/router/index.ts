import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { getToken } from "@/utils/storage";

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
    path: "/lookbook",
    name: "LookBook",
    component: () => import("@/views/lookbook/index.vue"),
  },
  {
    path: "/outfit",
    name: "Outfit",
    component: () => import("@/views/outfit/index.vue"),
  },
  {
    path: "/outfit/:id",
    name: "OutfitDetail",
    component: () => import("@/views/outfit/Detail.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/login/Register.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("@/views/login/ResetPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 简单路由守卫：判断登录
router.beforeEach((to, from, next) => {
  const token = getToken();
  // 需要登录的页面判断
  // if (to.path === "/mine" && !token) {
  //   next("/login");
  // } else {
  //   next();
  // }
  next();
});

export default router;
