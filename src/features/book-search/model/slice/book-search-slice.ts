import { createSlice } from '@reduxjs/toolkit'
import { searchBook } from 'features/book-search/model/services/search-book'
import { type BookSearchSchema } from 'features/book-search/model/types/book-search-schema'

const initialState: BookSearchSchema = {
  books: [],
  isLoading: false,
  error: null
}

export const bookSearchSlice = createSlice({
  name: 'bookSearch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBook.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(searchBook.fulfilled, (state, action) => {
        state.books = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(searchBook.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? null
      })
  }
})

export const { actions: bookSearchActions } = bookSearchSlice
export const { reducer: bookSearchReducer } = bookSearchSlice
