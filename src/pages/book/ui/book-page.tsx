import React, { useEffect } from 'react'

const BookPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const json = await response.json()
        console.log(json)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchData().then(r => r)
  }, [])

  return (
    <div>
      BookPage
    </div>
  )
}

export default BookPage
