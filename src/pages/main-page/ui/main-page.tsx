import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './main-page.module.scss'

const baseUrl = 'https://www.googleapis.com/books/v1'
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
const encodedSearchTerm = encodeURIComponent('react')

const MainPage = () => {
  const [books, setBooks] = useState<any[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const [totalItems, setTotalItems] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/volumes`, {
          params: {
            q: encodedSearchTerm,
            key: API_KEY,
            startIndex
          }
        })
        const { items, totalItems } = response.data
        setBooks(prevBooks => [...prevBooks, ...items])
        setTotalItems(totalItems)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData().then(r => r)
  }, [startIndex])

  const loadMoreBooks = () => {
    setStartIndex(prevIndex => prevIndex + 10)
  }

  return (
    <div className={styles.container}>
      {books.map((item: any, index) => {
        const coverImage = item.volumeInfo.imageLinks?.smallThumbnail
        const authors = item.volumeInfo.authors?.join(', ')

        return (
          <div key={index} className={styles.item}>
            <img
              src={coverImage}
              alt="cover"
              className={styles.image}
            />
            <p className={styles.title} data-full-title={item.volumeInfo.title}>{item.volumeInfo.title}</p>
            <p className={styles.authors}>{authors}</p>
          </div>
        )
      })}

      {books.length < totalItems && (
        <button onClick={loadMoreBooks}>Load More</button>
      )}
    </div>
  )
}

export default MainPage
