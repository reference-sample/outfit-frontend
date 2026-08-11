<template>
  <BasePage class="login-page">
    <main class="login-content">
      <FormLogo />

      <div class="form">
        <BaseInput v-model="form.username" placeholder="请输入手机号/用户名" autocomplete="username" />

        <PasswordInput v-model="form.password" placeholder="请输入密码" autocomplete="current-password" />

        <div class="form-options">
          <span class="remember">○ 记住密码</span>
          <RouterLink to="/reset-password">重置密码</RouterLink>
        </div>

        <BaseButton :loading="loading" @click="submit">登录</BaseButton>
      </div>

      <div class="footer">
        <span>还没有账号？</span>
        <RouterLink to="/register">立即注册</RouterLink>
      </div>
    </main>
  </BasePage>
</template>

<script setup lang="ts">
import { login } from "@/api/auth";
import { setToken } from "@/utils/storage";
import { showToast } from "vant";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import BaseButton from "@/components/base/BaseButton.vue";
import BasePage from "@/components/base/BasePage.vue";

import BaseInput from "@/components/form/BaseInput.vue";
import FormLogo from "@/components/form/FormLogo.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";

const loading = ref(false);
const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});

const submit = async () => {
  if (!form.username) {
    return showToast("请输入账号");
  }

  if (!form.password) {
    return showToast("请输入密码");
  }

  loading.value = true;

  try {
    const data = await login(form);
    const token = typeof data === "string" ? data : data?.token;

    if (!token) {
      return showToast("登录凭证获取失败");
    }

    setToken(token);
    showToast("登录成功");
    router.replace("/home");
  } catch (error) {
    showToast(error instanceof Error ? error.message : "登录失败，请稍后重试");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(57, 38, 33, 0.08), rgba(57, 38, 33, 0.3)),
    radial-gradient(circle at 72% 18%, #f5d8c2 0, transparent 28%),
    linear-gradient(145deg, #efe3da, #c79a7f 52%, #765449);
}

.login-content {
  width: min(100%, 375px);
  padding: 0 16px;
}

.login-content :deep(.logo) {
  padding: 0 0 44px;
}

.login-content :deep(.icon) {
  display: none;
}

.login-content :deep(.title) {
  color: #5d151d;
  font-family: $title-font;
  font-size: 34px;
}

.login-content :deep(.subtitle) {
  color: #563b36;
}

.login-content :deep(.base-input),
.login-content :deep(.password-input) {
  background: rgba(255, 255, 255, 0.76);
  border-color: rgba(255, 255, 255, 0.48);
}

.form-options {
  display: flex;
  justify-content: space-between;
  margin-top: -4px;
  font-size: 12px;
  color: #fff;
}

.form-options a {
  color: inherit;
}

.remember {
  opacity: 0.92;
}

.footer {
  margin-top: 28px;
  text-align: center;
  font-size: 14px;
  color: $text-secondary;
}

.footer a {
  margin-left: 4px;
  color: $primary-color;
  text-decoration: none;
  font-weight: 600;
}
</style>
