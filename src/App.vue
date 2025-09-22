<template>
  <div class="app">
    <AppHeader @add-account="accountStore.addAccount()" />
    <AppHint />

    <div class="accounts-list">
      <TransitionGroup name="fade">
        <AccountItem
          v-for="(account, index) in accountStore.accounts"
          :key="account.id"
          :account="account"
          :index="index"
          :parse-labels="accountStore.parseLabels"
          @delete="accountStore.deleteAccount(account.id)"
          @validate="accountStore.validateAccount(account)"
          @update:account="updateAccount(account.id, $event)"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAccountStore } from "@/stores/accountStore";
import AppHeader from "@/components/AppHeader.vue";
import AppHint from "@/components/AppHint.vue";
import AccountItem from "./components/Account/AccountItem.vue";

const accountStore = useAccountStore();

const updateAccount = (id: string, updatedAccount: any) => {
  const index = accountStore.accounts.findIndex((acc) => acc.id === id);
  if (index !== -1) {
    accountStore.accounts[index] = {
      ...accountStore.accounts[index],
      ...updatedAccount,
    };
    accountStore.saveToStorage();
  }
};

onMounted(() => {
  if (accountStore.accounts.length === 0) {
    accountStore.addAccount();
  }
});
</script>

<style>
:root {
  --pastel-blue: #a7c7e7;
  --pastel-green: #b8e0d2;
  --pastel-peach: #f8ad9d;
  --pastel-lavender: #e6e6fa;
  --pastel-yellow: #fdfd96;
  --text-dark: #4a4a4a;
  --text-light: #6b6b6b;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fafafa;
  color: var(--text-dark);
  line-height: 1.6;
  padding: 0;
  margin: 0;
}

.app {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.accounts-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .app {
    padding: 1.5rem 1rem;
  }
}
</style>
