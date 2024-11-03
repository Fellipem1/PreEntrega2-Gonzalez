import React from 'react';
import phoenixLogo from '../assets/images/imagenes/phoenix.svg';
import CartWidget from './CartWidget';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary roboto-regular">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img
            src={phoenixLogo}
            alt="PHOENIX CONTACT"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="">Automatización</a></li>
                <li><a className="dropdown-item" href="">Impresión y Marcaje</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">Soluciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">Contacto</a>
            </li>
            <CartWidget itemCount={3} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
