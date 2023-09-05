import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://www.googleapis.com/books/v1'
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY
const encodedSearchTerm = encodeURIComponent('js')

const MainPage = () => {
  const [book, setBook] = useState([])

  console.log(book)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/volumes?q=${encodedSearchTerm}&key=${API_KEY}`)
        const res = await response.data.items
        setBook(res)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchData().then(r => r)
  }, [])

  return (
    <div>
      {
        book?.map((item: any) => {
          const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail
          const authors = item.volumeInfo.authors[0]
          return (
            <>
              <img src={thumbnail} alt="" />
              <>
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="authors">{authors}</p>
              </>
            </>
          )
        })
      }
    </div>
  )
}

export default MainPage
