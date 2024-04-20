export interface adminWalletTypes {
    id: string
    number: string
    date: string
    walletId: string
    wallet?: Wallet
  }
  
  export interface Wallet {
    name: string
    id: string
    icon: string
    cashout: boolean
    payment: boolean
  }
  