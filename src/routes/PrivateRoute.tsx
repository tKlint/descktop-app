import React from 'react';
import { IProps } from './WrapperRouteComponent';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import APP_CONST from '../consts';

const PrivateRoute: React.FC<IProps> = props => {
  const navigate = useNavigate();
  const isLogin = true;
  const toLoginHandle = () => {
    navigate(APP_CONST.FREE_ROUTER_PATH.LOGIN);
  };
  return isLogin ? props.element : (
    <div>
      <p>You need login</p>
      <Button onClick={toLoginHandle}>Login now</Button>
    </div>
  );

};

export default PrivateRoute;
