import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';



export enum AppRoutes {
	MAIN = 'main',
	NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.NOT_FOUND]: '/*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['not-found'],
		element: <NotFoundPage />,
	},
}
