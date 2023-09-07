import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as process from 'process'
import { MAX_RESULTS } from 'entities/book-list/model/services/fetch-book-list'

export const searchBook = createAsyncThunk('books/fetchBooks',
  async (searchTerm: string) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/volumes`, {
        params: {
          q: searchTerm || 'react',
          key: process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY,
          maxResults: MAX_RESULTS
        }
      })
      return response.data
    } catch (error: any) {
      throw new Error(`Failed to fetch products: ${error.message}`)
    }
  })
