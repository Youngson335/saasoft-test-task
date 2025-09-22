<template>
  <div class="account-header">
    <h3 class="account-header__title">Учетная запись #{{ index + 1 }}</h3>
    <button
      class="account-header__delete"
      @click="$emit('delete')"
      aria-label="Удалить учетную запись"
    >
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number;
}>();

defineEmits<{
  (e: "delete"): void;
}>();
</script>

<style scoped lang="scss">
.account-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;

  &__title {
    font-size: 1.1rem;
    font-weight: 500;
    color: #4a4a4a;
  }

  &__delete {
    background: none;
    border: none;
    color: #f8ad9d;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(248, 173, 157, 0.1);
      color: #e68a78;
    }
  }
}
</style>
