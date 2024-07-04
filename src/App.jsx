import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import Placeorder from './pages/Placeorder/Placeorder';
import NotFoundPage from './pages/NotFoundPage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';


const App = () => {


  const [showLogin, setShowLogin] = useState(false);



  return (
    <>

    {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className='w-[80%] mx-auto'>

        <Navbar setShowLogin={setShowLogin}/>

        <ToastContainer />


        <Routes>


          <Route path='/' element={<HomePage />} />

          <Route path='/cart' element={<CartPage />} />


          <Route path='/order' element={<Placeorder />} />

          

          <Route path='*' element={<NotFoundPage />} />


        </Routes>





      </div>
      <Footer />
    </>
  )
}

export default App