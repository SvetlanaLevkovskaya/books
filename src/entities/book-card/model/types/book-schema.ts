export interface BookItems {
  title: string
  authors: string[]
  categories: string[]
  imageLinks: {
    smallThumbnail: string
  }
  description: string
}
export interface BookSchema {
  book: BookItems
  isLoading: boolean
  error: string | null
}
