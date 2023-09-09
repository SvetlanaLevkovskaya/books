import { lazy } from 'react'

export const BookPageAsync = lazy(async () => await import('./book-page'))
