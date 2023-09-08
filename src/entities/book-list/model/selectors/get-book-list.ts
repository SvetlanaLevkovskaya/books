import { type RootState } from 'app/providers/store-provider/config/store'

export const getBooks = (state: RootState) => state.books
