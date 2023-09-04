import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../../../../shared/route-config/route-config';
import { Loader } from '../../../../shared/ui/loader/ui/loader';



export const AppRouter = () => {
	return (
		<Suspense fallback={ <Loader /> }>
			<div className="page-wrapper">
				<Routes>
					{ Object.values(routeConfig).map(({ element, path }) => (
						<Route
							key={ path }
							path={ path }
							element={ element }
						/>
					)) }
				</Routes>
			</div>
		</Suspense>
	);
};

