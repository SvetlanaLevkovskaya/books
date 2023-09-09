import { type RootState } from 'app/providers/store-provider/config/store'

export const getFilter = (state: RootState) => state.bookFilter.filter
