import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as process from 'process'

const encodedSearchTerm = encodeURIComponent('react')

export const fetchBookList = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/volumes`, {
      params: {
        q: encodedSearchTerm,
        key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
        maxResults: 10
      }
    })
    return response.data
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
})
