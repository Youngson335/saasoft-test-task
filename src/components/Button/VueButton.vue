<template>
  <button class="vue-button" @click="$emit('add-account')">
    <slot />
  </button>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.vue-button {
  background-color: #ca8762;
  color: white;
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
  &:hover {
    background-color: #ec9c70;
    transform: translateY(-2px);
  }
  & i {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    align-self: flex-start;
  }
}
</style>
