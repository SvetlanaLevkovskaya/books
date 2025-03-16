import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './book-list.module.scss'
import { fetchBookList, MAX_RESULTS } from 'entities/book-list/model/services/fetch-book-list'
import { getBooks } from 'entities/book-list/model/selectors/get-book-list'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { bookListActions } from 'entities/book-list/model/slice/book-list-slice'
import { getSearchTerm } from 'features/book-search/model/selectors/get-search-term'
import { getFilterOption } from 'features/book-filter/model/selectors/get-filter-option'
import { getSortOption } from 'features/book-sort/model/selectors/get-sort-option'
import { Loader } from 'shared/loader'
import { PageError } from 'widgets/page-error'

export const BookList = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    books,
    error,
    totalItems,
    startIndex,
    isLoading,
  } = useSelector(getBooks)
  const searchTerm = useSelector(getSearchTerm)
  const filterOption = useSelector(getFilterOption)
  const sortOption = useSelector(getSortOption)
  const navigate = useNavigate()

  const observer = useRef<IntersectionObserver | null>(null)

  const lastBookRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && books.length < totalItems) {
          dispatch(bookListActions.setStartIndex(startIndex + MAX_RESULTS))
        }
      })

      if (node) observer.current.observe(node)
    },
    [isLoading, books.length, totalItems, dispatch, startIndex]
  )

  useEffect(() => {
    dispatch(fetchBookList({
      startIndex,
      searchTerm,
      filterOption,
      sortOption,
    }))
  }, [dispatch, startIndex, searchTerm, filterOption, sortOption])

  if (isLoading && books.length === 0) return <Loader />
  if (error) return <PageError error={error} />

  return (
    <>
      <div className={styles.totalItems}>Found {totalItems} results</div>
      <div className={styles.container}>
        {books?.map((item, index) => {
          const coverImage = item.volumeInfo.imageLinks?.smallThumbnail ?? ''
          const authors = item.volumeInfo.authors?.join(', ') ?? ''
          const title = item.volumeInfo.title ?? ''
          const categories = item.volumeInfo.categories?.[0] ?? ''

          return (
            <div
              key={index}
              className={styles.item}
              onClick={() => navigate(`/book/${item.id}`)}
              ref={index === books.length - 1 ? lastBookRef : null}
            >
              <img src={coverImage} alt="cover" className={styles.image} loading="lazy" />
              <p className={styles.title} data-full-title={title}>{title}</p>
              <p className={styles.authors}>{authors}</p>
              <p className={styles.authors}>{categories}</p>
            </div>
          )
        })}
      </div>
      {isLoading && <Loader />}
    </>
  )
}
