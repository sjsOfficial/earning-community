export interface videoTypes {
  id: string
  title: string
  duration: number
  videoUrl: string
  platformType: string
  categoryId: string
  date: string
  watchHistory: watchHistoryTypes[]
}
export interface watchHistoryTypes {
  id: string
  videoId: string
  date: Date
  userId: string
}