import { createSelector } from '@reduxjs/toolkit'
import { getBooks } from 'entities/book-list/model/selectors/get-book-list'

export const getTotalItems = createSelector(getBooks, (bookList) => bookList.totalItems)
