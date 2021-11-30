import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE, PROFILE_ROUTE} from "../utils/routes";

const AppRouter = () => {

    const store = {isAuth: true};

    const iterateRoutes = (routes) => {
        return routes.map(({path, element, children}) =>
            <Route key={path} path={path} element={element} exact={true}>
                {children ? iterateRoutes(children) : undefined}
            </Route>
        )
    }

    return store.isAuth ?
        (
            <Routes>
                {iterateRoutes(privateRoutes)}
                <Route path="*" element={<Navigate replace to={PROFILE_ROUTE}/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {iterateRoutes(publicRoutes)}
                <Route path="*" element={<Navigate replace to={HOME_ROUTE}/>}/>
            </Routes>
        );
};

export default AppRouter;