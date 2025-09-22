<template>
  <div class="form-group">
    <label class="form-group__label">
      <i :class="icon"></i>
      {{ label }}
    </label>
    <input
      :type="type"
      class="form-group__input"
      :class="{ 'form-group__input--error': error }"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      @blur="$emit('blur')"
      :placeholder="placeholder"
    />
    <div class="form-group__info" v-if="info">
      {{ info }}
    </div>
    <div v-if="error" class="form-group__error">
      <i class="fas fa-exclamation-circle"></i> {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  type?: string;
  modelValue: string;
  error?: string;
  info?: string;
  placeholder?: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
}>();
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 1.2rem;

  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #4a4a4a;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  &__input {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #e6e6fa;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #a7c7e7;
      box-shadow: 0 0 0 3px rgba(167, 199, 231, 0.2);
    }

    &--error {
      border-color: #e68a78;
    }
  }

  &__error {
    color: #e68a78;
    font-size: 0.85rem;
    margin-top: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  &__info {
    font-size: 0.85rem;
    color: #6b6b6b;
    margin-top: 0.4rem;
  }
}
</style>
