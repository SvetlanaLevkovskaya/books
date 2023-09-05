import { AppRouter } from './providers/router/ui/app-router'
import './styles/index.scss'
import { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error()
    }
  }, [])

  return (
    <AppRouter />
  )
}
