import { createSelector } from '@reduxjs/toolkit'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'

export const getTotalItems = createSelector(getBookList, (bookList) => bookList.totalItems)
