import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'https://www.googleapis.com/books/v1'
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY

export const fetchBook = createAsyncThunk('book/fetchBook', async (id: string | undefined) => {
  try {
    const response = await axios.get(`${baseUrl}/volumes/${id}?key=${API_KEY}`)
    return response.data.volumeInfo
  } catch (error: any) {
    throw new Error(`Failed to fetch book: ${error.message}`)
  }
})
