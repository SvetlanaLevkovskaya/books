import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

export const ErrorBoundaryComponent = ({ children }: any) => {
  const showBoundary = useErrorBoundary()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json()
        console.log(json)
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        showBoundary(error)
      }
    }

    void fetchData().then(r => r)
  }, [])

  return children
}
