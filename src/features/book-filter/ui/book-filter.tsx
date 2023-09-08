import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './book-filter.module.scss'
import { type AppDispatch } from 'app/providers/store-provider/config/store'
import { bookFilterActions } from 'features/book-filter/model/slice/book-filter-slice'
import { useNavigate } from 'react-router-dom'

export const BookFilter = () => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    dispatch(bookFilterActions.setFilter(selectedValue))
    setFilter(selectedValue)
    navigate('/')
  }

  return (
    <div className={styles.filter}>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="biography">Biography</option>
        <option value="computers">Computers</option>
        <option value="history">History</option>
        <option value="medical">Medical</option>
        <option value="poetry">Poetry</option>
      </select>
    </div>
  )
}
