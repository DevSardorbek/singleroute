import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import { Routes, Route  } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Careers from './pages/careers/Careers'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
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
  </Routes>
    </>
  )
}

export default App
