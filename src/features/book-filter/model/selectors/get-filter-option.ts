import { type RootState } from 'app/providers/store-provider/config/store'

debugger

export const getFilterOption = (state: RootState) => state.bookFilter.filter
