import { BookList } from 'entities/book-list'
import { BookSearch } from 'features/book-search'
import { BookFilter } from 'features/book-filter'
import { BookSort } from 'features/book-sort'

const MainPage = () => {
  return (
    <>
      <BookSearch />
      <BookFilter />
      <BookSort />
      <BookList />
    </>

  )
}

export default MainPage
