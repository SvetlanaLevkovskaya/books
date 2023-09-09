import styles from './tool-bar.module.scss'
import { BookSearch } from 'features/book-search'
import { BookFilter } from 'features/book-filter'
import { BookSort } from 'features/book-sort'

export const ToolBar = () => {
  return (
    <header className={ styles.toolbar }>
      <BookSearch />
      <BookFilter />
      <BookSort />

    </header>
  )
}
