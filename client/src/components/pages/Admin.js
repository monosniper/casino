import React from 'react';
import {Link, Outlet, useMatch, useResolvedPath} from "react-router-dom";
import {PULLS_MONEY_ROUTE, USERS_ROUTE} from "../../utils/routes";
import {Container} from "reactstrap";
import ContentBlock from "../ContentBlock";

const Admin = () => {
    let resolvedPushMoneyRoute = useResolvedPath(USERS_ROUTE);
    let matchPushMoneyRoute = useMatch({ path: resolvedPushMoneyRoute.pathname, end: true});

    let resolvedPullMoneyRoute = useResolvedPath(PULLS_MONEY_ROUTE);
    let matchPullMoneyRoute = useMatch({ path: resolvedPullMoneyRoute.pathname, end: true});

    return (
        <Container>
            <div className="profile-menu">
                <Link className={matchPushMoneyRoute ? "profile-menu-item active" : "profile-menu-item"} to={USERS_ROUTE}>Пользователи</Link>
                <Link className={matchPullMoneyRoute ? "profile-menu-item active" : "profile-menu-item"} to={PULLS_MONEY_ROUTE}>Запросы на вывод</Link>
            </div>

            <ContentBlock>
                <Outlet />
            </ContentBlock>
        </Container>
    );
};

export default Admin;