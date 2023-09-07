import { type BookListSchema } from 'entities/book-list/model/types/book-list-schema'
import { type BookSchema } from 'entities/book-card/model/types/book-schema'

export interface StateSchema {
  books: BookListSchema
  book: BookSchema
}