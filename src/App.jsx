import { Routes, Route } from 'react-router'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProductPage from './pages/productsPage'
import AccountPage from './pages/AccountPage'
import CheckoutPage from './pages/CheckoutPage'
import SearchPage from './pages/SearchPage'
import WishlistPage from './pages/WishlistPage'
import './App.css'

function App() {
  const [overlay, setOverlay] = useState(false)

  return (
    <Routes>
      <Route index element={<HomePage 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />} />
      <Route path='/products/:id' element={<ProductPage 
        overlay={overlay} 
        setOverlay={setOverlay} 
        />}/>
      <Route path='/account' element={<AccountPage 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />}/>
      <Route path='/checkout' element={<CheckoutPage 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />}/>
      <Route path='/search' element={<SearchPage 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />}/>
      <Route path='/wishlist' element={<WishlistPage 
        overlay={overlay} 
        setOverlay={setOverlay} 
      />}/>
    </Routes>
  )
}

export default App
