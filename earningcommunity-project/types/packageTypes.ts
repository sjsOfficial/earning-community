export interface packageTypes {
  id: string
  title: string
  price: number
  duration: number
  withdrawLimit: number
  description: string
  date: string
}
export interface packageTypesString {
  title: string
  price: string
  duration: string
  withdrawLimit: string
  description: string
}
export interface packageHistoryTypes {
  id: string
  package: packageTypes
  price: number
  duration: number
  withdrawLimit: number
  date: string
  userId: string
}