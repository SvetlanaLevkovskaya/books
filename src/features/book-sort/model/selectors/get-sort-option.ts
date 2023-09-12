import { type RootState } from 'app/providers/store-provider/config/store'

export const getSortOption = (state: RootState) => state.bookSort.sort
