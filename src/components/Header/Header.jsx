import { Link, useNavigate } from "react-router-dom";

import React from 'react';

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        <header>
        <div class="comeco">
          <h1 class="titulo">CORAÇÃO GENEROSO</h1>
        </div>
        <div class="menu-sanduiche">
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" class="menu-icon">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </label>
          <nav class="menu">
              <ul>
                  <Link to={"/"}>
                  Home
                  </Link>
                  <Link to={"/Sobre"}>
                  Sobre
                  </Link>
    
                  <Link to={"/Perfil"}>
                  Perfil
                  </Link>
    
                  <Link to={"/Login"}>
                  Entrar
                  </Link>
                 
              </ul>
          </nav>
      </div>
    </header>
        </>
    );
};

export default Header;
