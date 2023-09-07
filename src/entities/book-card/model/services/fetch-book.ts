import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import process from 'process'

export const fetchBook = createAsyncThunk('book/fetchBook', async (id: string | undefined) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/volumes/${id}?key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`)
    return response.data.volumeInfo
  } catch (error: any) {
    throw new Error(`Failed to fetch book: ${error.message}`)
  }
})
