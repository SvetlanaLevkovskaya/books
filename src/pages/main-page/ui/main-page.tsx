import { BookList } from 'entities/book-list'
import { BookSearch } from 'features/book-search'

const MainPage = () => {
  return (
    <>
      <BookSearch />
      <BookList/>
    </>

  )
}

export default MainPage
