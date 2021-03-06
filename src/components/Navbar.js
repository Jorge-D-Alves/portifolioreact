import React from 'react';
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">sobre mim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> como trabalho</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portifolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contatos</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
