import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import DOMPurify from 'dompurify'
import { Loader } from 'shared/loader'
import { fetchBook } from 'entities/book-card/model/services/fetch-book'
import { getBook } from 'entities/book-card/model/selectors/get-book'

export const BookCard = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { book, isLoading, error } = useSelector(getBook)

  useEffect(() => {
    dispatch(fetchBook(id) as any)
  }, [dispatch, id])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!book) {
    return null
  }

  const sanitizedText = DOMPurify.sanitize(book.description)
  console.log('book', book)

  return (
    <>
      { isLoading && <Loader /> }
      <img src={book.imageLinks?.smallThumbnail} alt="cover" />
      <h2>{book.subtitle}</h2>
      <p>{book.authors?.join(', ')}</p>
      <p>{book.publishedDate}</p>
      <p dangerouslySetInnerHTML={{ __html: sanitizedText }}></p>
    </>
  )
}

/*
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import { Loader } from 'shared/loader'

const baseUrl = 'https://www.googleapis.com/books/v1'
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY

export const BookCard = () => {
  const { id } = useParams()
  const [book, setBook] = useState<any>()

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${baseUrl}/volumes/${id}?key=${API_KEY}`)
        const bookData = response.data.volumeInfo
        setBook(bookData)
      } catch (error) {
        console.error('Error fetching book:', error)
      }
    }

    fetchBook().then(r => r)
  }, [id])

  if (!book) {
    return <Loader />
  }

  console.log('book', book)
  const sanitizedText = DOMPurify.sanitize(book.description)

  return (
    <>
      <img src={ book.imageLinks?.smallThumbnail } alt="cover" />
      <h2>{ book.subtitle }</h2>
      <p>{ book.authors?.join(', ') }</p>
      <p>{ book.publishedDate }</p>
      <p dangerouslySetInnerHTML={{ __html: sanitizedText }}></p>
    </>
  )
}
*/
