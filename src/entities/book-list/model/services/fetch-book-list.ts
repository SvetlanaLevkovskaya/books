import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'https://www.googleapis.com/books/v1'
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
const encodedSearchTerm = encodeURIComponent('react')

export const fetchBookList = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${baseUrl}/volumes`, {
      params: {
        q: encodedSearchTerm,
        key: API_KEY,
        maxResults: 10
      }
    })
    const { items, totalItems } = response.data
    return { items, totalItems }
  } catch (error: any) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
})
