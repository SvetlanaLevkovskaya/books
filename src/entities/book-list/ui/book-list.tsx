import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './book-list.module.scss'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'
import { getTotalItems } from 'entities/book-list/model/selectors/get-total-items'
import { type AppDispatch } from 'app/providers/store-provider/config/store'

export const BookList = () => {
  const dispatch: AppDispatch = useDispatch()
  const { books, error } = useSelector(getBookList)
  const totalItems = useSelector(getTotalItems)
  const navigate = useNavigate()
  const [startIndex, setStartIndex] = useState(0)

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`)
  }

  console.log('books', books)

  useEffect(() => {
    dispatch(fetchBookList(startIndex))
  }, [dispatch, startIndex])

  const loadMoreBooks = () => {
    setStartIndex((prevIndex) => prevIndex + 30)
  }

  if (error) {
    return <p>Error: { error }</p>
  }

  return (
    <>
      <div className={ styles.totalItems}>Found {totalItems} results</div>
      <div className={ styles.container }>
        { books?.map((item, index) => {
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
      {books?.length < totalItems && <button onClick={loadMoreBooks}>Load More</button>}
    </>
  )
}
