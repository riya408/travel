import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import ToursData from './components/Package/ToursData'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Thankyou from './components/Thankyou/Thankyou';
import Booking from './components/Booking/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App />}></Route>
    <Route path="/login" element={<Login/>} >   </Route>
        <Route path="/Signup" element={<Signup/>} >   </Route>
        <Route path='/ToursData'element={<ToursData/>}> </Route>
        <Route path='/booking'element={<Booking/>}> </Route>
        <Route path="/thankyou" element={<Thankyou/>} >   </Route>
        
        
    
  </Routes>
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
