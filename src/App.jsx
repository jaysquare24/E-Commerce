import React from 'react';
import "./App.css";
import { Inventory } from './components/inventory/Inventory';
import { Home } from './components/home/Home';
import { ProductCategory } from './components/ProductCategory';
import { AboutUs } from './components/AboutUs';
import { Root } from './components/Root';
import { SearchItem } from './components/search/SearchItem';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>} />
      <Route path="shop" element={<Inventory/>}/>
      <Route path="shop/category/:value" element={<ProductCategory />} />
      <Route path="aboutUs" element={<AboutUs/>}/>
      <Route path="searchItem/:value" element={<SearchItem/>}/>
    </Route>
  )
);

export const App = () => {

  return (
    <RouterProvider router={router} />
  );
};
