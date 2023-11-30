import React from "react";
import { BiPencil } from "react-icons/bi";
import "./header.css";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a className="navbar-brand fs-1 p-3 text-white fw-bold">
              <BiPencil /> ToDoList
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active pe-5 fs-4 text-succes" aria-current="page">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
