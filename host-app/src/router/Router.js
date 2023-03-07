import { Navigate, useRoutes } from "react-router-dom";
import React from "react";
import { lazy } from "react";
const Error = lazy(() => import("../Error"));
const RemoteApp = lazy(() => import("Remote/App"));
const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <RemoteApp />
		},
		{
			path: "*",
			element: <Error />
		},
        {
			path: "page",
			element: <RemoteApp />
		}
	]);

	return routes;
};

export default Router;
