import { createSlice } from '@reduxjs/toolkit'
import { type BookSchema } from 'entities/book-card/model/types/book-schema'
import { fetchBook } from 'entities/book-card/model/services/fetch-book'

const initialState: BookSchema = {
  book: {
    title: 'No Title Available',
    authors: [],
    categories: [],
    imageLinks: {
      smallThumbnail: 'No Image Available'
    },
    description: 'No Description Available'
  },
  isLoading: false,
  error: null
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.book = action.payload
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? null
      })
  }
})

export const { actions: bookActions } = bookSlice
export const { reducer: bookReducer } = bookSlice
