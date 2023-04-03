import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Header/Navbar';
import HomePage from '../Pages/Common/HomePage';
import NotFound from '../Pages/Common/NotFound';
import AuthenticationPage from '../Pages/Common/AuthenticationPage';

function Routers(props) {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path='auth' element={<AuthenticationPage/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default Routers;