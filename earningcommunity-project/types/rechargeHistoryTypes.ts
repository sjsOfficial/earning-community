export interface rechargeHistoryTypes {
    id: string
    amount: number
    wallet: Wallet
    adminWallet: AdminWallet
    status: string
    message: any
    date: string
    userId: string
    transactionId: string
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
  