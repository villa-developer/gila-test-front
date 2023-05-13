export enum Categories {
  Sport,
  Finance,
  Movies
}

export interface NotificationEntry {
    id: number,
    userName: string,
    category: string,
    channel: String[],
    message: String,
    created_at: Date,
}

export interface DiaryEntry {
  id: number
  date: string
  weather: string
  visibility: string
  comment: string
}