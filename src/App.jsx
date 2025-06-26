import React from 'react';
import "./App.css";
import { Inventory } from './components/inventory/Inventory';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export const App = () => {

  return (
    <div>
      <Header/>
      <Inventory/>
      <Footer/>

    </div>
  );
};
