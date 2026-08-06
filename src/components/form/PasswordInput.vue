<template>
  <div class="password-input" :class="{ focus }">
    <div v-if="label" class="label">
      {{ label }}
    </div>

    <input
      :type="show ? 'text' : 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      @focus="focus = true"
      @blur="focus = false"
      @input="input"
    />

    <div class="eye" @click="show = !show">
      {{ show ? "隐藏" : "显示" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

const show = ref(false);

const focus = ref(false);

const input = (e: any) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style scoped lang="scss">
.password-input {
  position: relative;
  padding: 14px 16px;
  background: #fff;
  border: 1px solid $border-color;
  border-radius: 16px;
}

.focus {
  border-color: $primary-color;
  box-shadow: 0 0 0 3px rgba(197, 91, 104, 0.12);
}

.label {
  margin-bottom: 8px;
  font-size: 13px;
  color: $text-secondary;
}

input {
  width: 100%;
  padding-right: 48px;
  border: none;
  outline: none;
  font-size: 16px;
}

.eye {
  position: absolute;
  right: 16px;
  bottom: 16px;
  color: $primary-color;
  font-size: 13px;
}
</style>
