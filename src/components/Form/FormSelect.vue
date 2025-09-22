<template>
  <div class="form-group">
    <label class="form-group__label">
      <i :class="icon"></i>
      {{ label }}
    </label>
    <select
      class="form-group__select"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface SelectOption {
  value: string;
  label: string;
}

defineProps<{
  label: string;
  icon: string;
  modelValue: string;
  options: SelectOption[];
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
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

  &__select {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #e6e6fa;
    border-radius: 8px;
    font-size: 1rem;
    background-color: white;
    transition: all 0.3s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;

    &:focus {
      outline: none;
      border-color: #a7c7e7;
      box-shadow: 0 0 0 3px rgba(167, 199, 231, 0.2);
    }
  }
}
</style>
