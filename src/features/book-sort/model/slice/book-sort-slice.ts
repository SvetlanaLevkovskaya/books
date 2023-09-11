import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type BookSortSchema } from 'features/book-sort/model/types/book-sort'

const initialState: BookSortSchema = {
  sort: ''
}

export const bookSortSlice = createSlice({
  name: 'bookSort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },

    extraReducers: () => {}
  }
})

export const { actions: bookSortActions } = bookSortSlice
export const { reducer: bookSortReducer } = bookSortSlice
