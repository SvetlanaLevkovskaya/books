import styles from './book-search.module.scss'

export const BookSearch = () => {
  return (
    <div className={styles.search}>
      <input type='text' defaultValue={'search'}/>
    </div>
  )
}
