import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ImageContextProvider } from './store/item-images-context';
import { LightboxContextProvider } from './store/lightbox-context';
import { CartProvider } from "./store/cart-context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LightboxContextProvider>
    <ImageContextProvider>
    <CartProvider>
        <App />
    </CartProvider>
    </ImageContextProvider>
    </LightboxContextProvider>
  </React.StrictMode>
);