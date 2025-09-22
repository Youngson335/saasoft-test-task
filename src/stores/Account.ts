import AccountType from "./AccountType"

export default interface Account {
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