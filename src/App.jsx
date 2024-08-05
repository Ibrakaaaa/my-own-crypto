import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NoPageFound from './pages/NoPageFound'
import Coin from './components/Coin'

function App() {

  return (
    <Routes>
      <Route path='/' index element={<Login />}></Route>
      <Route path='homepage' element={<HomePage />}></Route>
      <Route path='*' element={<NoPageFound />}></Route>
      <Route path='/coin' element={<Coin />}>
      <Route path=':coinId' element={<Coin />}></Route>
      </Route>
    </Routes>
  )
}

export default App
