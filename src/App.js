import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/about';
import Admin from './components/admin';
import Menu from './components/Menu';
import AddStudent from './components/AddStudent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
}from "react-router-dom"
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }

render(){

  return (
    <Router>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/add_student" element={<AddStudent />}/>

        </Routes>
      </div>
    </Router>
  )
}
}
export default App;
