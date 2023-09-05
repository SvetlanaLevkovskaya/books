import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from 'app/app'
import ErrorBoundary from 'app/providers/error-boundary/error-boundary'

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>

    <ErrorBoundary>
      <App />
    </ErrorBoundary>

  </HashRouter>
)
