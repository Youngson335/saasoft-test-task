<template>
  <div class="account-item">
    <div class="account-item__header">
      <h3 class="account-item__title">Учетная запись #{{ index + 1 }}</h3>
      <button
        class="account-item__delete"
        @click="$emit('delete')"
        aria-label="Удалить учетную запись"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>

    <div class="form-group">
      <label class="form-group__label">
        <i class="fas fa-tag"></i> Метка
      </label>
      <input
        type="text"
        class="form-group__input"
        :class="{ 'form-group__input--error': account.errors.label }"
        v-model="account.label"
        @blur="$emit('validate')"
        placeholder="Введите метки через ;"
      />
      <div class="form-group__info">
        Необязательное поле, максимум 50 символов
      </div>
      <div v-if="account.errors.label" class="form-group__error">
        <i class="fas fa-exclamation-circle"></i> {{ account.errors.label }}
      </div>
    </div>

    <div class="form-group">
      <label class="form-group__label">
        <i class="fas fa-list"></i> Тип записи
      </label>
      <select
        class="form-group__select"
        v-model="account.type"
        @change="$emit('validate')"
      >
        <option value="Локальная">Локальная</option>
        <option value="LDAP">LDAP</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-group__label">
        <i class="fas fa-user"></i> Логин
      </label>
      <input
        type="text"
        class="form-group__input"
        :class="{ 'form-group__input--error': account.errors.login }"
        v-model="account.login"
        @blur="$emit('validate')"
        placeholder="Введите логин"
      />
      <div class="form-group__info">
        Обязательное поле, максимум 100 символов
      </div>
      <div v-if="account.errors.login" class="form-group__error">
        <i class="fas fa-exclamation-circle"></i> {{ account.errors.login }}
      </div>
    </div>

    <div class="form-group" v-if="account.type === 'Локальная'">
      <label class="form-group__label">
        <i class="fas fa-lock"></i> Пароль
      </label>
      <input
        type="password"
        class="form-group__input"
        :class="{ 'form-group__input--error': account.errors.password }"
        v-model="account.password"
        @blur="$emit('validate')"
        placeholder="Введите пароль"
      />
      <div class="form-group__info">
        Обязательное поле, максимум 100 символов
      </div>
      <div v-if="account.errors.password" class="form-group__error">
        <i class="fas fa-exclamation-circle"></i> {{ account.errors.password }}
      </div>
    </div>

    <div
      class="account-item__labels-preview"
      v-if="parseLabels(account.label).length > 0"
    >
      <div class="account-item__labels-title">
        <i class="fas fa-tags"></i> Преобразованные метки:
      </div>
      <div class="account-item__labels-list">
        <span
          v-for="(label, idx) in parseLabels(account.label)"
          :key="idx"
          class="account-item__label-tag"
        >
          {{ label.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Account } from "../stores/accountStore";

interface Props {
  account: Account;
  index: number;
  parseLabels: (labelText: string) => { text: string }[];
}

interface Emits {
  (e: "delete"): void;
  (e: "validate"): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style scoped>
.account-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  animation: fadeIn 0.5s ease;
}

.account-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.account-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.account-item__title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #4a4a4a;
}

.account-item__delete {
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
}

.account-item__delete:hover {
  background-color: rgba(248, 173, 157, 0.1);
  color: #e68a78;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group__label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.form-group__input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e6e6fa;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group__input:focus {
  outline: none;
  border-color: #a7c7e7;
  box-shadow: 0 0 0 3px rgba(167, 199, 231, 0.2);
}

.form-group__input--error {
  border-color: #e68a78;
}

.form-group__select {
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
}

.form-group__select:focus {
  outline: none;
  border-color: #a7c7e7;
  box-shadow: 0 0 0 3px rgba(167, 199, 231, 0.2);
}

.form-group__error {
  color: #e68a78;
  font-size: 0.85rem;
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.form-group__info {
  font-size: 0.85rem;
  color: #6b6b6b;
  margin-top: 0.4rem;
}

.account-item__labels-preview {
  background-color: #e6e6fa;
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.account-item__labels-title {
  font-weight: 500;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.account-item__labels-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.account-item__label-tag {
  background-color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
