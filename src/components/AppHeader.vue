<template>
  <div class="header">
    <h1 class="header__title">Учетные записи</h1>
    <button class="header__button" @click="$emit('add-account')">
      <i class="fas fa-plus"></i> Добавить учетную запись
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "add-account"): void;
}>();
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e6e6fa;
}

.header__title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #4a4a4a;
}

.header__button {
  background-color: #b8e0d2;
  color: #4a4a4a;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.header__button:hover {
  background-color: #9dd4c0;
  transform: translateY(-2px);
}

.header__button i {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .header__button {
    align-self: flex-start;
  }
}
</style>
