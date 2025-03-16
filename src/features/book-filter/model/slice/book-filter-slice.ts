import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type BookFilterSchema } from 'features/book-filter/model/types/book-filter'

const initialState: BookFilterSchema = {
  filter: ''
}

debugger
export const bookFilterSlice = createSlice({
  name: 'bookFilter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },

    extraReducers: () => {}
  }
})

export const { actions: bookFilterActions } = bookFilterSlice
export const { reducer: bookFilterReducer } = bookFilterSlice
