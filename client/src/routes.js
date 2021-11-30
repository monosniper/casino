import {
    ADMIN_ROUTE,
    CABINET_ROUTE,
    CASSA_ROUTE,
    HOME_ROUTE, PAYHISTORY_ROUTE,
    PROFILE_ROUTE, PULL_MONEY_ROUTE, PULLS_MONEY_ROUTE,
    PUSH_MONEY_ROUTE, USERS_ROUTE,
    VERIFICATION_ROUTE
} from "./utils/routes";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Verification from "./components/pages/Verification";
import Cabinet from "./components/pages/Cabinet";
import Cassa from "./components/pages/Cassa";
import PushMoney from "./components/pages/PushMoney";
import PullMoney from "./components/pages/PullMoney";
import PayHistory from "./components/pages/PayHistory";
import Admin from "./components/pages/Admin";
import PullsMoney from "./components/pages/PullsMoney";
import Users from "./components/pages/Users";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>,
    },
];

export const privateRoutes = [
    ...publicRoutes,

    {
        path: CABINET_ROUTE,
        element: <Cabinet/>,
        children: [
            {
                path: PROFILE_ROUTE,
                element: <Profile/>,
            },
            {
                path: VERIFICATION_ROUTE,
                element: <Verification/>,
            },
        ]
    },

    {
        path: CASSA_ROUTE,
        element: <Cassa/>,
        children: [
            {
                path: PUSH_MONEY_ROUTE,
                element: <PushMoney/>,
            },
            {
                path: PULL_MONEY_ROUTE,
                element: <PullMoney/>,
            },
            {
                path: PAYHISTORY_ROUTE,
                element: <PayHistory/>,
            },
        ]
    },

    {
        path: ADMIN_ROUTE,
        element: <Admin/>,
        children: [
            {
                path: USERS_ROUTE,
                element: <Users/>,
            },
            {
                path: PULLS_MONEY_ROUTE,
                element: <PullsMoney/>,
            },
        ]
    },

];