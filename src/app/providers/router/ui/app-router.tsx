import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from 'shared/loader'
import { routeConfig } from 'shared/route-config'
import { ToolBar } from 'widgets/tool-bar'

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="page-wrapper">
        <ToolBar />
        <Routes>
          {Object.values(routeConfig).map(({
            element,
            path
          }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}
