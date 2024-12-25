import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Nabvar = ({ nombre }) => {
  console.log(nombre.nombre);
  return (
    <>
      <div className="navbar">
        <ul className="navbar-links">
          <li>
            <Link className="navbar-links-item" to="/">
              Inicio
            </Link>
          </li>
          {/* {nombre.nombre !== "Jorge" ? (
            <li>
              <Link className="navbar-links-item" to="/admin">
                Admin
              </Link>
            </li>
          ) : (
            " "
          )}
          {nombre.nombre === "Jorge" ? (
            <>
              <li>
                <Link className="navbar-links-item" to="/*">
                  Añadir señal
                </Link>
              </li>
              <li>
                <Link className="navbar-links-item" to="/*">
                  Cerrar sesión
                </Link>
              </li>
            </>
          ) : (
            " "
          )} */}
        </ul>
      </div>
    </>
  );
};

export default Nabvar;
