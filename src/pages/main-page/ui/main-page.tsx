import { BookList } from 'entities/book-list'
import { BookSearch } from 'features/book-search'
import { BookFilter } from 'features/book-filter'

const MainPage = () => {
  return (
    <>
      <BookSearch />
      <BookFilter/>
      <BookList/>
    </>

  )
}

export default MainPage
