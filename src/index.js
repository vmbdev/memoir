import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="" element={<App />} />
        <Route path="/chapter/:chapter" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
