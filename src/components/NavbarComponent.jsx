import React from 'react';
import { Link } from 'react-router-dom';
import phoenixLogo from '../assets/images/imagenes/phoenix.svg';
import CartWidget from './CartWidget';

const NavbarComponent = ({ itemCount }) => {
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
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/category/automatizacion">Automatización</Link></li>
                <li><Link className="dropdown-item" to="/category/marcaje">Impresión y Marcaje</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Soluciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Contacto</Link>
            </li>
            <CartWidget itemCount={itemCount} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

