import React from "react";
import { RouterConfigType } from "./config";
import WrapperRouteComponent from "./WrapperRouteComponent";

export type UserRouterWithChildren = {
  path: string;
  component?: string;
  name: string;
  index?: true;
  children?: UserRouterWithChildren[]
}

export type RouterElement = {
  element?: React.ReactElement;
} & Omit<UserRouterWithChildren, 'component'>

export const generateRoutes = (menus: UserRouterWithChildren[], parentPath = '') => {
  return menus.map(menus => {
    const { path, component, name, index, children } = menus;
    const pathLinked = parentPath ? `${parentPath}/` : parentPath;
    const routeProps: RouterElement = {
      path: path,
      name,
      index: index || undefined,
      children: children ? generateRoutes(children, `${pathLinked}${path}`) : undefined,
    };
    if (component) {
      const Element = React.lazy(() => import(`@/views${component}`));
      routeProps.element = <WrapperRouteComponent element={<Element />} auth={false} />;
    }
    return routeProps;
  });
};