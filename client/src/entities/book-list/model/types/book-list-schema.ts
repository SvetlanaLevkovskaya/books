export interface BookListSchema {
  books: any[]
  totalItems: number
  isLoading: boolean
  error: string | null
  startIndex: number
}
