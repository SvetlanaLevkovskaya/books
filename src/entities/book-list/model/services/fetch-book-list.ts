import { createAsyncThunk, type SerializedError } from '@reduxjs/toolkit'
import axios from 'axios'
import * as process from 'process'
import { getBooks } from 'entities/book-list/model/selectors/get-book-list'
import { type Book } from 'entities/book-list/model/types/book-list-schema'
import { type RootState } from 'app/providers/store-provider/config/store'

export const MAX_RESULTS = 30

interface FetchBookListType {
  startIndex: number
  searchTerm: string
  filterOption: string
  sortOption: string
}

interface BookApiResponse {
  items: Book[]
  totalItems: number
}

export const fetchBookList = createAsyncThunk<BookApiResponse, FetchBookListType,
{ rejectValue: SerializedError }>('books/fetchBooks',
  async ({
    startIndex,
    searchTerm,
    filterOption,
    sortOption
  }: FetchBookListType,
  { getState }) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/volumes`, {
        params: {
          q: `${searchTerm}+subject:${filterOption}`,
          orderBy: sortOption || 'relevance',
          key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
          startIndex: 0,
          maxResults: MAX_RESULTS
        }
      })
      const prevBooks = getBooks(getState() as RootState).books
      const newBooks = response.data.items
      response.data.items = [...prevBooks, ...newBooks]
      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch books: ${error.message}`)
      }
    }
  })
