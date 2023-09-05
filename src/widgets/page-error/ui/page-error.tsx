import styles from './page-error.module.scss'

export const PageError = () => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={styles.pageError}>
      <p>Sorry.. there was an error</p>
      <button onClick={reloadPage}>Reload the Page</button>
    </div>
  )
}
