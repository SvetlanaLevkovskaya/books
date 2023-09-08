import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './book-sort.module.scss'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { bookSortActions } from 'features/book-sort/model/slice/book-sort-slice'

export const BookSort = () => {
  const dispatch: AppDispatch = useDispatch()
  const [sort, setSort] = useState('')

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    dispatch(bookSortActions.setSort(selectedValue))
    setSort(selectedValue)
  }

  return (
    <div className={styles.sort}>
      <select value={sort} onChange={handleSortChange}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  )
}
