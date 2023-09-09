import { createSlice } from '@reduxjs/toolkit'
import { type BookSearchSchema } from 'features/book-search/model/types/book-search-schema'

const initialState: BookSearchSchema = {
  searchTerm: ''
}

export const bookSearchSlice = createSlice({
  name: 'bookSearch',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },

    extraReducers: () => {}
  }
})

export const { actions: bookSearchActions } = bookSearchSlice
export const { reducer: bookSearchReducer } = bookSearchSlice
