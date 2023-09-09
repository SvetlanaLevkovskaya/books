import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as process from 'process'
import { getBooks } from 'entities/book-list/model/selectors/get-book-list'

export const MAX_RESULTS = 30

interface FetchBookListType {
  startIndex: number
  searchTerm: string
  filter: string
  sort: string
}

export const fetchBookList = createAsyncThunk('books/fetchBooks', async ({ startIndex, searchTerm, filter, sort }: FetchBookListType,
  { getState }: { getState: any }) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/volumes`, {
      params: {
        q: `${searchTerm}+subject:${filter}`,
        orderBy: sort || 'relevance',
        key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
        startIndex: 0,
        maxResults: MAX_RESULTS
      }
    })
    const prevBooks = getBooks(getState()).books
    const newBooks = response.data.items
    response.data.items = [...prevBooks, ...newBooks]
    return response.data
  } catch (error: any) {
    throw new Error(`Failed to fetch books: ${error.message}`)
  }
})
