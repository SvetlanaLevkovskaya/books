export interface BookItems {
  title: string
  authors: string[]
  categories: string[]
  imageLinks: {
    small?: string
    medium?: string
    large?: string
    extraLarge?: string
    thumbnail?: string
    smallThumbnail: string
  }
  description: string
}

export interface BookSchema {
  book: BookItems
  isLoading: boolean
  error: string | null
}
