import { type RootState } from 'app/providers/store-provider/config/store'

export const getBookList = (state: RootState) => state.books
