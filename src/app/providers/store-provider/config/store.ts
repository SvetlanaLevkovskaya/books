import { type AnyAction, configureStore, type ThunkDispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/store-provider/config/state-schema'
import { bookListReducer } from 'entities/book-list/model/slice/book-list-slice'
import { bookReducer } from 'entities/book-card/model/slice/book-slice'
import { bookSearchReducer } from 'features/book-search/model/slice/book-search-slice'
import { bookFilterReducer } from 'features/book-filter/model/slice/book-filter-slice'

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      books: bookListReducer,
      book: bookReducer,
      bookSearch: bookSearchReducer,
      bookFilter: bookFilterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>
