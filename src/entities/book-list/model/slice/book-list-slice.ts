import { createSlice } from '@reduxjs/toolkit'
import { type BookListSchema } from 'entities/book-list/model/types/book-list-schema'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'

const initialState: BookListSchema = {
  books: [],
  totalItems: 0,
  isLoading: false,
  error: null
}

export const bookListSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchBookList.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.books = action.payload.items
        state.totalItems = action.payload.totalItems
      })
      .addCase(fetchBookList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? null
      })
  }
})

export const { actions: bookListActions } = bookListSlice
export const { reducer: bookListReducer } = bookListSlice
