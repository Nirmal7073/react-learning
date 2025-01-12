import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Page from './Page'
import Contact from './Contact'
import Work from './Work'
import Feature from './Feature'
import Support from './Support'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/page' element={<Page/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/feature' element={<Feature/>} />
              <Route path='/work' element={<Work/>} />
              <Route path='/support' element={<Support/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App