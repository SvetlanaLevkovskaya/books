import { createSlice } from '@reduxjs/toolkit'
import { type BookSortSchema } from 'features/book-sort/model/types/book-sort'

const initialState: BookSortSchema = {
  sort: ''
}

export const bookSortSlice = createSlice({
  name: 'bookSort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload
    },

    extraReducers: () => {}
  }
})

export const { actions: bookSortActions } = bookSortSlice
export const { reducer: bookSortReducer } = bookSortSlice
