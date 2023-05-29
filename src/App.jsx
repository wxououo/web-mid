import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Category from './pages/category'
import CategoryAll from './pages/categoryAll'
import Products from './pages/Products'
import Register from './pages/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux";
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from "./scrollToTop";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { feedImages } from "./api"

// feedImages();
const queryClient = new QueryClient()
export default function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider context={{}}>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="category/:productCat" element={<Category />} />
                <Route path="category" element={<CategoryAll />} />

                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="products/:productId" element={<Products />} />

              </Routes>
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}