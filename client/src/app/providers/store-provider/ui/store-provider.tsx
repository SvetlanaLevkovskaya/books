import React from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/providers/store-provider/config/store'
import { type StateSchema } from 'app/providers/store-provider/config/state-schema'

interface StoreProviderProps {
  children?: React.ReactNode
  initialSate?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props

  const store = createReduxStore()

  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
