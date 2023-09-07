import React, { useEffect } from 'react'
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

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`)
  }

  console.log('books', books)

  useEffect(() => {
    dispatch(fetchBookList() as any)
  }, [dispatch])

  if (error) {
    return <p>Error: { error }</p>
  }

  return (
    <>
      <div className={ styles.totalItems}>Total Items: {totalItems}</div>
      <div className={ styles.container }>
        { books.map((item, index) => {
          const coverImage = item.volumeInfo.imageLinks?.smallThumbnail
          const authors = item.volumeInfo.authors?.join(', ')

          return (
            <div
              key={ index }
              className={ styles.item }
              onClick={() => { handleBookClick(item) }}
            >
              <img src={ coverImage } alt="cover" className={ styles.image } />
              <p className={ styles.title } data-full-title={ item.volumeInfo.title }>
                { item.volumeInfo.title }
              </p>
              <p className={ styles.authors }>{ authors }</p>
            </div>
          )
        }) }
      </div>
    </>
  )
}
