import { type BookListSchema } from 'entities/book-list/model/types/book-list-schema'
import { type BookSchema } from 'entities/book-card/model/types/book-schema'
import { type BookSearchSchema } from 'features/book-search/model/types/book-search-schema'
import { type BookFilterSchema } from 'features/book-filter/model/types/book-filter'

export interface StateSchema {
  books: BookListSchema
  book: BookSchema
  bookSearch: BookSearchSchema
  bookFilter: BookFilterSchema
}
