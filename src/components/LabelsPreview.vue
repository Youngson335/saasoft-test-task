<template>
  <div class="labels-preview">
    <div class="labels-preview__title">
      <i class="fas fa-tags"></i> Преобразованные метки:
    </div>
    <div class="labels-preview__list">
      <span
        v-for="(label, idx) in labels"
        :key="idx"
        class="labels-preview__tag"
      >
        {{ label.text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  labels: { text: string }[];
}>();
</script>

<style scoped lang="scss">
.labels-preview {
  background-color: #e6e6fa;
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  &__title {
    font-weight: 500;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    background-color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 50px;
    font-size: 0.8rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
}
</style>
