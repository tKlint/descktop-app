import { RouteObject } from "react-router-dom"
import APP_CONST from "../consts";

export type RouterConfigType = {
  path: string;
  name: string;
  component?: string;
}

const routes: RouterConfigType[] = [
  {
    name: 'Home',
    path: 'home',
    component: '/home'
  }
]

export default routes;