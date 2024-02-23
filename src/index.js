import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, BrowserRouter, } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import {
  About,Myexperience,BackToTopButton,Contact,Projects,Resume
 } from "./components/pages/index.js"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navigation/>
 <Routes>
                                                                                                                                                                                                                                 
    <Route path="/" element={<About/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/myexperience" element={<Myexperience/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
   
    
    
   
    </Routes>
    <Footer/>

    <BackToTopButton/>
 
 </BrowserRouter>
);


reportWebVitals();
