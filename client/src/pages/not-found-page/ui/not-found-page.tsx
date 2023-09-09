import pageNotFound from 'assets/not-found.png'
import styles from './page-not-found.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={pageNotFound}
          alt="Page Not Found"
          className={styles.image}
        />
        <h1>404 - Page Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    </div>

  )
}
