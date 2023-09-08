import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './book-list.module.scss'
import { fetchBookList, MAX_RESULTS } from 'entities/book-list/model/services/fetch-book-list'
import { getBooks } from 'entities/book-list/model/selectors/get-book-list'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { bookListActions } from 'entities/book-list/model/slice/book-list-slice'
import { getSearchTerm } from 'features/book-search/model/selectors/get-search-term'
import { getFilter } from 'features/book-filter/model/selectors/get-filter'
import { getSort } from 'features/book-sort/model/selectors/get-sort'

export const BookList = () => {
  const dispatch: AppDispatch = useDispatch()
  const { books, error, totalItems, startIndex } = useSelector(getBooks)
  const searchTerm = useSelector(getSearchTerm)
  const filter = useSelector(getFilter)
  const sort = useSelector(getSort)
  const navigate = useNavigate()

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`)
  }
  console.log('books', books)
  console.log('startIndex', startIndex)
  console.log('sort', sort)

  useEffect(() => {
    dispatch(fetchBookList({ startIndex, searchTerm, filter, sort }))
  }, [dispatch, startIndex, searchTerm, filter, sort])

  const loadMoreBooks = () => {
    dispatch(bookListActions.setStartIndex(startIndex + MAX_RESULTS))
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
