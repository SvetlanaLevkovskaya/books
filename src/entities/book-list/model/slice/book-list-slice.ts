import { createSlice } from '@reduxjs/toolkit'
import { type BookListSchema } from 'entities/book-list/model/types/book-list-schema'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'

const initialState: BookListSchema = {
  books: [],
  loading: false,
  error: null
}

export const bookListSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookList.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBookList.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.books = action.payload.items
      })
      .addCase(fetchBookList.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? null
      })
  }
})

export const { actions: bookListActions } = bookListSlice
export const { reducer: bookListReducer } = bookListSlice
