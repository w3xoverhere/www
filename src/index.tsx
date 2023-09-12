import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import { ErrorRoute } from './routes/ErrorRoute/ErrorRoute';
import { MainRoute } from './routes/MainRoute/MainRoute';
import { BlogRoute } from './routes/BlogRoute/BlogRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorRoute/>}>
      <Route path='/' element={<MainRoute />}/>
      <Route path='/blog' element={<BlogRoute />}/>
    </Route>
))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
);
