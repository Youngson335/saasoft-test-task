import { defineStore } from 'pinia'
import { ref } from 'vue'

enum AccountType {
    LOCAL = 'Локальная',
    LDAP = 'LDAP'
}

export interface Account {
  id: string
  label: string
  type: AccountType.LOCAL | AccountType.LDAP
  login: string
  password: string | null
  errors: {
    label?: string
    login?: string
    password?: string
  }
}

export const useAccountStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([])

  const loadFromStorage = () => {
    const stored = localStorage.getItem('accounts')
    if (stored) {
      accounts.value = JSON.parse(stored)
    }
  }

  const saveToStorage = () => {
    localStorage.setItem('accounts', JSON.stringify(accounts.value))
  }

  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  const addAccount = () => {
    accounts.value.push({
      id: generateId(),
      label: '',
      type: AccountType.LOCAL,
      login: '',
      password: '',
      errors: {}
    })
    saveToStorage()
  }

  const deleteAccount = (id: string) => {
    accounts.value = accounts.value.filter(account => account.id !== id)
    saveToStorage()
  }

  const validateAccount = (account: Account): boolean => {
    account.errors = {}

    // Validate label
    if (account.label.length > 50) {
      account.errors.label = 'Максимум 50 символов'
    }

    // Validate login
    if (!account.login.trim()) {
      account.errors.login = 'Обязательное поле'
    } else if (account.login.length > 100) {
      account.errors.login = 'Максимум 100 символов'
    }

    // Validate password (only for local accounts)
    if (account.type === AccountType.LOCAL) {
      if (!account.password) {
        account.errors.password = 'Обязательное поле'
      } else if (account.password.length > 100) {
        account.errors.password = 'Максимум 100 символов'
      }
    } else {
      account.password = null
    }

    saveToStorage()
    return Object.keys(account.errors).length === 0
  }

  const parseLabels = (labelText: string): { text: string }[] => {
    if (!labelText.trim()) return []
    
    return labelText.split(';')
      .map(item => item.trim())
      .filter(item => item !== '')
      .map(item => ({ text: item }))
  }

  loadFromStorage()

  return {
    accounts,
    addAccount,
    deleteAccount,
    validateAccount,
    parseLabels
  }
})