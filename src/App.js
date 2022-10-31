import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';
import Videos from './components/Videos';

function App() {
  return (
  
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
    
  
}

export default App;
