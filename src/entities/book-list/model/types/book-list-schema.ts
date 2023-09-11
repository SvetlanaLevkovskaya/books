export interface Book {
  id: string
  volumeInfo: {
    title: string
    authors: string[] | undefined
    categories: string[] | undefined
    imageLinks: {
      smallThumbnail: string | undefined
    } | undefined
  }
}

export interface BookListSchema {
  books: Book[]
  totalItems: number
  isLoading: boolean
  error: string | null
  startIndex: number
}
