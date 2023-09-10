interface Book {
  title: string
  authors: string[]
  categories: string[]
  imageLinks: {
    smallThumbnail: string
  }
  description: string
}
export interface BookSchema {
  book: Book
  isLoading: boolean
  error: string | null
}
