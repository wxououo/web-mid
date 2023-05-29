import 'antd/dist/reset.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Category from './pages/category'
import CategoryAll from './pages/categoryAll'
import Products from './pages/Products'
import Register from './pages/Register'
import Profile from './pages/Profile'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import ScrollToTop from "./scrollToTop";


// feedImages();


export default function Router() {
  return (
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
                <Route path="/Profile" element={<Profile />} />
                <Route path="products/:productId" element={<Products />} />

              </Routes>
            </BrowserRouter>
          </HelmetProvider>
  )
}