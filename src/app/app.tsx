import { AppRouter } from './providers/router/ui/app-router'
import './styles/index.scss'
import { useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json()
        console.log(json)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchData().then(r => r)
  }, [])

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error()
    }
  }, [])

  return (
    <AppRouter />
  )
}
