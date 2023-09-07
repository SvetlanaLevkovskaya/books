import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import DOMPurify from 'dompurify'
import { fetchBook } from 'entities/book-card/model/services/fetch-book'
import { getBook } from 'entities/book-card/model/selectors/get-book'
import styles from './book-card.module.scss'

export const BookCard = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { book, error } = useSelector(getBook)

  console.log('book', book)

  useEffect(() => {
    dispatch(fetchBook(id) as any)
  }, [dispatch, id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!book) {
    return null
  }

  return (
    <div className={styles.container}>
      <img src={book.imageLinks?.smallThumbnail} alt="cover" className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.authors}>{book.authors?.join(', ')}</p>
        <p className={styles.categories}>{book.categories?.join(', ')}</p>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.description) }}
        ></p>
      </div>
    </div>
  )
}
