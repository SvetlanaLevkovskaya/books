import { type AnyAction, configureStore, type ThunkDispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/store-provider/config/state-schema'
import { bookListReducer } from 'entities/book-list/model/slice/book-list-slice'
import { bookReducer } from 'entities/book-card/model/slice/book-slice'
import { bookSearchReducer } from 'features/book-search/model/slice/book-search-slice'

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      books: bookListReducer,
      book: bookReducer,
      bookSearch: bookSearchReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>

/* // Infer the `RootState` and `AppDispatch` types from the store itself
 export type RootState = ReturnType<typeof store.getState>
 // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 export type AppDispatch = typeof store.dispatch */
