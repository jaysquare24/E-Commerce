import React from 'react';
import "./App.css";
import { Inventory } from './components/inventory/Inventory';
import { Home } from './components/home/container/Home';
import { ProductCategory } from './components/ProductCategory';
import { AboutUs } from './components/AboutUs';
import { Root } from './components/Root';
import { SearchProducts } from './components/search/SearchProducts';
import { ProductDetailsContainer } from './components/productDetails/containers/ProductDetailsContainer';
import { Cart } from './components/cart/container/Cart';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home/>} />
      <Route path="shop" element={<Inventory/>}/>
      <Route path="shop/:type" element={<ProductCategory />}/>
      <Route path="shop/:type/:value" element={<ProductCategory />} />
      <Route path="aboutUs" element={<AboutUs/>}/>
      <Route path="searchItem/:value" element={<SearchProducts/>}/>
      <Route path="product/:id" element={<ProductDetailsContainer/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>
  )
);

export const App = () => {

  return (
    <RouterProvider router={router} />
  );
};
