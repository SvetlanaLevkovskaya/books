import styles from './page-error.module.scss'

interface FetchingErrorProps {
  error: string
}

export const PageError = ({ error }: FetchingErrorProps) => {
  const reloadPage = () => { location.reload() }

  return (
    <div className={styles.pageError}>
      <p>Sorry.. there was an error: {error}</p>
      <button onClick={reloadPage}>Reload the Page</button>
      <p>or check your internet connection</p>
    </div>
  )
}
