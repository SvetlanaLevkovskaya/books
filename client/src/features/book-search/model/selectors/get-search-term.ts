import { type RootState } from 'app/providers/store-provider/config/store'

export const getSearchTerm = (state: RootState) => state.bookSearch.searchTerm
