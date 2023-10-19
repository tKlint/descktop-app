import { ConfigProvider } from 'antd';
import React, { useState } from 'react';
import RenderRouter from './routes';

export default function App() {
  const [count, setCount] = useState(0);
  console.log(location)
  return (
    <ConfigProvider>
      <RenderRouter />
    </ConfigProvider>
  )
}
