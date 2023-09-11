import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Book, type BookListSchema } from 'entities/book-list/model/types/book-list-schema'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'
import { bookSearchActions } from 'features/book-search/model/slice/book-search-slice'
import { bookFilterActions } from 'features/book-filter/model/slice/book-filter-slice'
import { bookSortActions } from 'features/book-sort/model/slice/book-sort-slice'

const initialState: BookListSchema = {
  books: [],
  totalItems: 0,
  isLoading: false,
  error: null,
  startIndex: 0
}

export const bookListSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchBookList.fulfilled, (state, action: PayloadAction<{ items: Book[], totalItems: number }>) => {
        state.isLoading = false
        state.error = null
        state.books = action.payload.items
        state.totalItems = action.payload.totalItems
      })
      .addCase(fetchBookList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? null
      })
      .addCase(bookSearchActions.setSearchTerm.type, (state) => {
        state.books = []
      })
      .addCase(bookFilterActions.setFilter.type, (state) => {
        state.books = []
      })
      .addCase(bookSortActions.setSort.type, (state) => {
        state.books = []
      })
  }
})

export const { actions: bookListActions } = bookListSlice
export const { reducer: bookListReducer } = bookListSlice
