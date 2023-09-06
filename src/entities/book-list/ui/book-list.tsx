import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './book-list.module.scss'
import { fetchBookList } from 'entities/book-list/model/services/fetch-book-list'
import { getBookList } from 'entities/book-list/model/selectors/get-book-list'
import { Loader } from 'shared/loader'

export const BookList = () => {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector(getBookList)

  useEffect(() => {
    dispatch(fetchBookList() as any)
  }, [dispatch])

  if (error) {
    return <p>Error: { error }</p>
  }

  return (
    <div className={ styles.container }>
      { loading && <Loader /> }
      { books.map((item, index) => {
        const coverImage = item.volumeInfo.imageLinks?.smallThumbnail
        const authors = item.volumeInfo.authors?.join(', ')

        return (
          <div key={ index } className={ styles.item }>
            <img src={ coverImage } alt="cover" className={ styles.image } />
            <p className={ styles.title } data-full-title={ item.volumeInfo.title }>
              { item.volumeInfo.title }
            </p>
            <p className={ styles.authors }>{ authors }</p>
          </div>
        )
      }) }
    </div>
  )
}

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import styles from './book-list.module.scss'
//
// const baseUrl = 'https://www.googleapis.com/books/v1'
// const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
// const encodedSearchTerm = encodeURIComponent('react')
//
// export const BookList = () => {
//   const [books, setBooks] = useState<any[]>([])
//   const [startIndex, setStartIndex] = useState(0)
//   const [totalItems, setTotalItems] = useState<number>(0)
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}/volumes`, {
//           params: {
//             q: encodedSearchTerm,
//             key: API_KEY,
//             startIndex
//           }
//         })
//         const { items, totalItems } = response.data
//         setBooks(prevBooks => [...prevBooks, ...items])
//         setTotalItems(totalItems)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//
//     fetchData().then(r => r)
//   }, [startIndex])
//
//   const loadMoreBooks = () => {
//     setStartIndex(prevIndex => prevIndex + 10)
//   }
//
//   return (
//     <div className={styles.container}>
//       {books.map((item: any, index) => {
//         const coverImage = item.volumeInfo.imageLinks?.smallThumbnail
//         const authors = item.volumeInfo.authors?.join(', ')
//
//         return (
//           <div key={index} className={styles.item}>
//             <img
//               src={coverImage}
//               alt="cover"
//               className={styles.image}
//             />
//             <p className={styles.title} data-full-title={item.volumeInfo.title}>{item.volumeInfo.title}</p>
//             <p className={styles.authors}>{authors}</p>
//           </div>
//         )
//       })}
//
//       {books.length < totalItems && (
//         <button onClick={loadMoreBooks}>Load More</button>
//       )}
//     </div>
//   )
// }
