import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Routes, Route  } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Careers from './pages/careers/Careers'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Prodact from './pages/prodact/Prodact'
import SIngleRoute from './pages/single-route/SIngleRoute'
import Notfound from './pages/not-found/Notfound'
function App() {

  return (
    <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Careers' element={<Careers/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    <Route path='/Blog' element={<Blog/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/prodacts' element={<Prodact/>}></Route>
    <Route path='/product/:id' element={<SIngleRoute/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>

  </Routes>
    </>
  )
}

export default App
