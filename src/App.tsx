import { ConfigProvider } from 'antd';
import React from 'react';
import RenderRouter from './routes';

export default function App() {
  return (
    <ConfigProvider>
      <RenderRouter />
    </ConfigProvider>
  )
}
