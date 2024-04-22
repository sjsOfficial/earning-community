export interface WithdrawTypes {
    id: string
    amount: number
    userWallet: UserWallet
    status: string
    message: any
    date: string
    userId: string
  }
  
  interface UserWallet {
    id: string
    number: string
    walletHolderName: string
    userId: string
    date: string
    wallet: Wallet
  }
  
  interface Wallet {
    name: string
    id: string
    icon: string
    cashout: boolean
    payment: boolean
  }
  