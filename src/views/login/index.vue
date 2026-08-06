<template>
  <BasePage>
    <FormLogo />

    <BaseCard>
      <div class="form">
        <BaseInput v-model="form.username" label="账号" placeholder="请输入账号" />

        <PasswordInput v-model="form.password" label="密码" placeholder="请输入密码" />

        <BaseButton :loading="loading" @click="submit"> 登录 </BaseButton>
      </div>
    </BaseCard>

    <div class="footer">
      <span>还没有账号？</span>

      <RouterLink to="/register"> 立即注册 </RouterLink>
    </div>
  </BasePage>
</template>

<script setup lang="ts">
import { login } from "@/api/auth";
import { showToast } from "vant";
import { reactive, ref } from "vue";

import BaseButton from "@/components/base/BaseButton.vue";
import BaseCard from "@/components/base/BaseCard.vue";
import BasePage from "@/components/base/BasePage.vue";

import BaseInput from "@/components/form/BaseInput.vue";
import FormLogo from "@/components/form/FormLogo.vue";
import PasswordInput from "@/components/form/PasswordInput.vue";

const loading = ref(false);

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
    const res = await login(form);

    console.log(res);

    // 保存token

    // 获取用户信息

    // router.replace('/')
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
