import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './book-list.module.scss'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'
import { getTotalItems } from 'entities/book-list/model/selectors/get-total-items'

export const BookList = () => {
  const dispatch = useDispatch()
  const { books, error } = useSelector(getBookList)
  const totalItems = useSelector(getTotalItems)
  const navigate = useNavigate()
  const [startIndex, setStartIndex] = useState(0)

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`)
  }

  console.log('books', books)

  useEffect(() => {
    dispatch(fetchBookList(startIndex) as any)
  }, [dispatch, startIndex])

  const loadMoreBooks = () => {
    setStartIndex((prevIndex) => prevIndex + 30)
  }

  if (error) {
    return <p>Error: { error }</p>
  }

  return (
    <>
      <div className={ styles.totalItems}>Total Items: {totalItems}</div>
      <div className={ styles.container }>
        { books.map((item, index) => {
          const coverImage = item.volumeInfo.imageLinks?.smallThumbnail || ''
          const authors = item.volumeInfo.authors?.join(', ') || ''
          const title = item.volumeInfo.title || ''
          const categories = item.volumeInfo.categories?.[0] || ''

          return (
            <div
              key={ index }
              className={ styles.item }
              onClick={() => { handleBookClick(item) }}
            >
              <img src={ coverImage } alt="cover" className={ styles.image } />
              <p className={ styles.title } data-full-title={ title }>{ title }</p>
              <p className={ styles.authors }>{ authors }</p>
              <p className={ styles.authors }>{ categories }</p>
            </div>
          )
        }) }
      </div>
      {books.length < totalItems && <button onClick={loadMoreBooks}>Load More</button>}
    </>
  )
}

/*
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
*/
