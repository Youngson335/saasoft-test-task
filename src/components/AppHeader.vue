<template>
  <div class="header">
    <h1 class="header__title">Учетные записи</h1>
    <vue-button @click="$emit('add-account')">
      <i class="fas fa-plus"></i> Добавить учетную запись
    </vue-button>
  </div>
</template>

<script setup lang="ts">
import VueButton from "./Button/VueButton.vue";
defineEmits<{
  (e: "add-account"): void;
}>();
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e6e6fa;
  &__title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #4a4a4a;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
