import React, { Suspense } from 'react'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import APP_CONST from "../consts";
import WrapperRouteComponent from "./WrapperRouteComponent";
import Login from '@/views/login';
import SingUp from '@/views/signUp';
import Layout from '@/layout';
import SuspendFallbackLoading from '@/layout/SuspendFallbackLoading';
import routes from './config';
import { generateRoutes } from './utils';
// import second from ''

const defaultHomePath = routes[0].path;

const baseRoutes: RouteObject[] = [
  {
    path: APP_CONST.FREE_ROUTER_PATH.LOGIN,
    element: <WrapperRouteComponent auth={false} element={<Login />} />
  },
  {
    path: APP_CONST.FREE_ROUTER_PATH.SIGN_UP,
    element: <WrapperRouteComponent auth={false} element={<SingUp />} />
  },
  {
    path: '/',
    element: <WrapperRouteComponent auth={true} element={<Layout />} />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'} />
      },
      ...generateRoutes(routes) as RouteObject[]
    ]
  }
]


const RenderRouter: React.FC = () => {
  const element = useRoutes(baseRoutes);
  return <Suspense fallback={<SuspendFallbackLoading message="文件加载失败" />}>{element}</Suspense>;
};

export default RenderRouter;