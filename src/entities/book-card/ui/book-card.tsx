import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import DOMPurify from 'dompurify'
import { fetchBook } from 'entities/book-card/model/services/fetch-book'
import { getBook } from 'entities/book-card/model/selectors/get-book'

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
    <>
      <img src={book.imageLinks?.smallThumbnail} alt="cover" />
      <h2>{book.subtitle}</h2>
      <p>{book.authors?.join(', ')}</p>
      <p>{book.publishedDate}</p>
      <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(book.description) }}></p>
    </>
  )
}
