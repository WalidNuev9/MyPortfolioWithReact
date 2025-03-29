import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import React, { Component,useEffect,useState } from "react";
import "../assets/App.css"
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Blog from './Blog'

 

  
  
    class NotFound extends React.Component {
      render() {
        return (
          <p>Page Non Trouvée</p>
        );
      }
    }
  
    export default class Menu extends React.Component {
      render() {
        return (
          <div>
              <BrowserRouter>
              <header>
              <nav className="navbar navbar-expand navbar-dark bg-dark shadow fixed-top">
              <div className="container-fluid text-danger">
              <a className="navbar-brand fs-5 fw-bolder" href="#">Walid Belegchour</a>
              <ul className="d-flex fs-5 navbar-nav ">
                  <li className="nav-item">
                      <Link className='items  nav-link' to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='items nav-link ' to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='items nav-link ' to="blog">Blog</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='items nav-link' to="/contact">Contact</Link>
                  </li>
              </ul>
              </div>
              </nav>
              </header>
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
              </Routes>
              </BrowserRouter>
          </div>
        );
      }
    }  
