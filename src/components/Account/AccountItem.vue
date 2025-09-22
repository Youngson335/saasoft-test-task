<template>
  <div class="account-item">
    <AccountHeader :index="index" @delete="$emit('delete')" />

    <FormInput
      label="Метка"
      icon="fas fa-tag"
      type="text"
      :model-value="account.label"
      :error="account.errors.label"
      info="Необязательное поле, максимум 50 символов"
      placeholder="Введите метки через ;"
      @update:model-value="updateField('label', $event)"
      @blur="$emit('validate')"
    />

    <FormSelect
      label="Тип записи"
      icon="fas fa-list"
      :model-value="account.type"
      :options="accountTypeOptions"
      @update:model-value="updateField('type', $event)"
    />

    <FormInput
      label="Логин"
      icon="fas fa-user"
      type="text"
      :model-value="account.login"
      :error="account.errors.login"
      info="Обязательное поле, максимум 100 символов"
      placeholder="Введите логин"
      @update:model-value="updateField('login', $event)"
      @blur="$emit('validate')"
    />

    <FormInput
      v-if="account.type === 'Локальная'"
      label="Пароль"
      icon="fas fa-lock"
      type="password"
      :model-value="account.password || ''"
      :error="account.errors.password"
      info="Обязательное поле, максимум 100 символов"
      placeholder="Введите пароль"
      @update:model-value="updateField('password', $event)"
      @blur="$emit('validate')"
    />

    <LabelsPreview
      v-if="parseLabels(account.label).length > 0"
      :labels="parseLabels(account.label)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Account from "@/stores/Account";
import AccountHeader from "./AccountHeader.vue";
import FormInput from "../Form/FormInput.vue";
import FormSelect from "../Form/FormSelect.vue";
import LabelsPreview from "../LabelsPreview.vue";

interface Props {
  account: Account;
  index: number;
  parseLabels: (labelText: string) => { text: string }[];
}

interface Emits {
  (e: "delete"): void;
  (e: "validate"): void;
  (e: "update:account", account: Account): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const accountTypeOptions = [
  { value: "Локальная", label: "Локальная" },
  { value: "LDAP", label: "LDAP" },
];

const updateField = (field: keyof Account, value: string) => {
  const updatedAccount = { ...props.account, [field]: value };
  emit("update:account", updatedAccount);
};
</script>

<style scoped lang="scss">
.account-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  animation: fadeIn 0.5s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
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
