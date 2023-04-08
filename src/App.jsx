import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import Category from './pages/category'
import Products from './pages/Products'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="category/:productCat" element={<Category />} />
              <Route path="products/:productId" element={<Products />} />

            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  )
}