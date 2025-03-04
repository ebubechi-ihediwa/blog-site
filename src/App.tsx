import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import ContactUs from './pages/contact-us'
import SinglePost from './pages/single-post'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/post/:title/:id' element={<SinglePost />} />
      </Routes>
    </>
  )
}

export default App
