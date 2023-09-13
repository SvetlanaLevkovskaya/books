import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import DOMPurify from 'dompurify'
import { fetchBook } from 'entities/book-card/model/services/fetch-book'
import { getBook } from 'entities/book-card/model/selectors/get-book'
import styles from './book-card.module.scss'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { Loader } from 'shared/loader'
import { PageError } from 'widgets/page-error'

export const BookCard = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch: AppDispatch = useDispatch()
  const { book, error, isLoading } = useSelector(getBook)

  console.log('book', book)

  useEffect(() => {
    dispatch(fetchBook(id))
  }, [dispatch, id])

  if (error) {
    return <PageError error={error}/>
  }

  if (isLoading) {
    return <Loader />
  }

  if (!book) {
    return null
  }

  return (
    <div className={styles.container}>
      <img src={book.imageLinks?.smallThumbnail} alt="cover" className={styles.image} />
      <div className={styles.details}>
        <p className={styles.categories}>{book.categories?.join(', ')}</p>

        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.authors}>{book.authors?.join(', ')}</p>

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.description) }}
        ></p>
      </div>
    </div>
  )
}
