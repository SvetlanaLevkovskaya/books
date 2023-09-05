import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/main-page'
import { NotFoundPage } from 'pages/not-found-page'
import { BookPage } from 'pages/book'

export enum AppRoutes {
  MAIN = 'main',
  BOOK = 'book',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.BOOK]: '/book',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },

  [AppRoutes.BOOK]: {
    path: RoutePath.book,
    element: <BookPage />
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />
  }
}
