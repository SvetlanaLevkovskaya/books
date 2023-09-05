import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from 'app/app'
import ErrorBoundary from 'app/providers/error-boundary/error-boundary'
import { StoreProvider } from 'app/providers/store-provider'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <HashRouter>

      <ErrorBoundary>
        <App />
      </ErrorBoundary>

    </HashRouter>

  </StoreProvider>

)
