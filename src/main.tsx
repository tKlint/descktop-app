import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { MemoryRouter } from 'react-router-dom';

function render() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
}

render();