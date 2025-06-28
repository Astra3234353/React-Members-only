import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ProductPage from './pages/productsPage'
import AccountPage from './pages/AccountPage'
import CheckoutPage from './pages/CheckoutPage'
import SearchPage from './pages/SearchPage'
import WishlistPage from './pages/WishlistPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/products' element={<ProductPage />}/>
      <Route path='/account' element={<AccountPage />}/>
      <Route path='/checkout' element={<CheckoutPage />}/>
      <Route path='/search' element={<SearchPage />}/>
      <Route path='/wishlist' element={<WishlistPage />}/>
    </Routes>
  )
}

export default App
