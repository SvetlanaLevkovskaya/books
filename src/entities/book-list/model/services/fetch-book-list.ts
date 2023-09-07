import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as process from 'process'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'

const encodedSearchTerm = encodeURIComponent('js')
export const MAX_RESULTS = 30

export const fetchBookList = createAsyncThunk('books/fetchBooks', async (startIndex: number,
  { getState }: { getState: any }) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/volumes`, {
      params: {
        q: encodedSearchTerm,
        key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
        startIndex,
        maxResults: MAX_RESULTS
      }
    })
    const prevBooks = getBookList(getState()).books // Get previously displayed books
    const newBooks = response.data.items // Get newly fetched books
    response.data.items = [...prevBooks, ...newBooks] // Update the response data with the combined books
    return response.data
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
})
