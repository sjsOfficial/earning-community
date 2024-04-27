export interface PackageHistoryTypes {
  id: string
  package: Package
  price: number
  duration: number
  withdrawLimit: number
  date: string
  userId: string
  packageId: string
  status: string
  wallet: Wallet
  adminWallet: AdminWallet
  transactionId: string
  message: any
}

export interface Package {
  id: string
  title: string
  price: number
  duration: number
  withdrawLimit: number
  description: string
  date: string
}

export interface Wallet {
  name: string
  id: string
  icon: string
  cashout: boolean
  payment: boolean
}

export interface AdminWallet {
  id: string
  number: string
  date: string
  walletId: string
}
