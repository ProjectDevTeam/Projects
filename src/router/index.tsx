import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { RoutersType, RouteType } from '../types';

const renderRoutes = (routes: RoutersType) => {
	return routes.map((route: RouteType, index: number) => {
		const { path, element, children, redirect } = route;
		return (
			<Route
				path={path}
				element={redirect ? <Navigate to={redirect} replace /> : element}
				key={path + index}>
				{children && children?.length !== 0 ? renderRoutes(children) : null}
			</Route>
		);
	});
};
const RouteDom = renderRoutes(routes);
console.log(RouteDom);
const RootRoute = () => {
	return (
		<HashRouter>
			<Routes>{RouteDom}</Routes>
		</HashRouter>
	);
};
export default RootRoute;
