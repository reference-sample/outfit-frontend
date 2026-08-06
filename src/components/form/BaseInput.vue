<template>
  <div class="base-input" :class="{ focus }">
    <div v-if="label" class="label">{{ label }}</div>

    <input
      ref="inputRef"
      :type="type"
      :placeholder="placeholder"
      :modelValue="modelValue"
      :maxlength="maxlength"
      :disabled="disabled"
      @focus="focus = true"
      @blur="focus = false"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  maxlength: Number,
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const focus = ref(false);

const inputRef = ref();

const onInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};

defineExpose({
  focus: () => inputRef.value?.focus(),
});
</script>

<style scoped lang="scss">
.base-input {
  padding: 14px 16px;
  background: #fff;
  border: 1px solid $border-color;
  border-radius: 16px;
  transition: 0.25s;
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
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  color: $text-main;
}

input::placeholder {
  color: $text-placeholder;
}
</style>
