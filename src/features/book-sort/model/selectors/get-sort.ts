import { type RootState } from 'app/providers/store-provider/config/store'

export const getSort = (state: RootState) => state.bookSort.sort
