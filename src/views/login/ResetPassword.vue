<template>
  <BasePage class="auth-page">
    <main class="auth-content">
      <header class="auth-header">
        <RouterLink class="back" to="/login" aria-label="返回登录">←</RouterLink>
        <h1>重置密码</h1>
      </header>
      <p class="intro">请验证账号后设置新密码</p>

      <form class="form" @submit.prevent="submit">
        <BaseInput v-model="form.username" label="用户名" placeholder="请输入用户名" autocomplete="username" />
        <PasswordInput v-model="form.password" label="当前密码" placeholder="请输入当前密码" autocomplete="current-password" />
        <PasswordInput v-model="form.newPassword" label="新密码" placeholder="至少 6 位" autocomplete="new-password" />
        <PasswordInput v-model="confirmPassword" label="确认新密码" placeholder="请再次输入新密码" autocomplete="new-password" />
        <BaseButton native-type="submit" :loading="loading">确认重置</BaseButton>
      </form>
    </main>
  </BasePage>
</template>

<script setup lang="ts">
import { changePassword } from "@/api/auth";
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
const form = reactive({ username: "", password: "", newPassword: "" });

const submit = async () => {
  if (!form.username || !form.password || !form.newPassword) return showToast("请完善密码信息");
  if (form.newPassword.length < 6) return showToast("新密码至少 6 位");
  if (form.newPassword !== confirmPassword.value) return showToast("两次输入的新密码不一致");

  loading.value = true;
  try {
    await changePassword(form);
    showToast("密码已重置，请重新登录");
    router.replace("/login");
  } catch (error) {
    showToast(error instanceof Error ? error.message : "密码重置失败，请稍后重试");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
@use "./auth-form.scss";

.intro { margin: -20px 0 30px; color: $text-secondary; font-size: 14px; }
.form { display: flex; flex-direction: column; gap: 16px; }
</style>
