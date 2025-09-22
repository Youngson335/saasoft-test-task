<template>
  <div class="hint">
    <div class="hint__title">
      <i class="fas fa-info-circle"></i> Подсказка для поля "Метка"
    </div>
    <p>
      Вводите текстовые метки через знак <strong>;</strong> (например:
      админ;тест;разработка). Максимум 50 символов.
    </p>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.hint {
  background-color: #fdfd96;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hint__title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
