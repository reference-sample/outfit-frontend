<template>
  <BasePage class="auth-page">
    <main class="auth-content">
      <header class="auth-header">
        <RouterLink class="back" to="/login" aria-label="返回登录">←</RouterLink>
        <h1>注册账号</h1>
      </header>

      <form class="form" @submit.prevent="submit">
        <BaseInput v-model="form.username" label="用户名" placeholder="请输入用户名" autocomplete="username" />
        <BaseInput v-model="form.nickname" label="昵称" placeholder="请输入昵称" />
        <BaseInput v-model="form.email" label="邮箱" placeholder="请输入邮箱" type="email" autocomplete="email" />
        <PasswordInput v-model="form.password" label="密码" placeholder="至少 6 位" autocomplete="new-password" />
        <PasswordInput v-model="confirmPassword" label="确认密码" placeholder="请再次输入密码" autocomplete="new-password" />

        <p class="agreement">○ 我已阅读并同意 <a href="javascript:void(0)">《用户协议》</a> 和 <a href="javascript:void(0)">《隐私政策》</a></p>
        <BaseButton native-type="submit" :loading="loading">注册</BaseButton>
      </form>

      <p class="footer">已有账号？<RouterLink to="/login">去登录</RouterLink></p>
    </main>
  </BasePage>
</template>

<script setup lang="ts">
import { register } from "@/api/auth";
import BaseButton from "@/components/base/BaseButton.vue";
import BasePage from "@/components/base/BasePage.vue";
import BaseInput from "@/components/form/BaseInput.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";
import { showToast } from "vant";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);
const confirmPassword = ref("");
const form = reactive({ username: "", nickname: "", email: "", password: "" });

const submit = async () => {
  if (!form.username || !form.nickname || !form.email || !form.password) return showToast("请完善注册信息");
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return showToast("请输入正确的邮箱地址");
  if (form.password.length < 6) return showToast("密码至少 6 位");
  if (form.password !== confirmPassword.value) return showToast("两次输入的密码不一致");

  loading.value = true;
  try {
    await register(form);
    showToast("注册成功，请登录");
    router.replace("/login");
  } catch (error) {
    showToast(error instanceof Error ? error.message : "注册失败，请稍后重试");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
@use "./auth-form.scss";

.form { display: flex; flex-direction: column; gap: 14px; }
.agreement { margin: 2px 0; color: $text-secondary; font-size: 11px; line-height: 1.6; }
.agreement a, .footer a { color: $primary-color; }
.footer { margin-top: 26px; text-align: center; color: $text-secondary; font-size: 14px; }
</style>
