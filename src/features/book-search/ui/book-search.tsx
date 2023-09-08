import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './book-search.module.scss'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { bookSearchActions } from 'features/book-search/model/slice/book-search-slice'

export const BookSearch = () => {
  const dispatch: AppDispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    dispatch(bookSearchActions.setSearchTerm(search))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search books..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
