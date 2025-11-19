import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ProductList from './Components/Products/List/ProductList'
import ProtectedRoute from './Components/Auth/ProtectedRoute'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
