import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './book-list.module.scss'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'
import { Loader } from 'shared/loader'
import { useNavigate } from 'react-router-dom'

export const BookList = () => {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector(getBookList)
  const navigate = useNavigate()

  console.log('books', books)

  useEffect(() => {
    dispatch(fetchBookList() as any)
  }, [dispatch])

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`)
  }

  if (error) {
    return <p>Error: { error }</p>
  }

  return (
    <div className={ styles.container }>
      { loading && <Loader /> }
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
  )
}
