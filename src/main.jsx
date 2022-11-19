import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './List';
import { items } from './colors';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List items={items}></List>
  </React.StrictMode>
);
