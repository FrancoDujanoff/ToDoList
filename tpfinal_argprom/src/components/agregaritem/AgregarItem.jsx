import React, { useState } from "react";
import "./agregaritem.css";

export const AgregarItem = ({ tareas, onAddTarea }) => {
  const [newTarea, setNewTarea] = useState("");

  const handleAddTarea = (event) => {
    let ultimaTarea = null;

    let idUltima = 1;

    if (tareas.length > 0) {
      ultimaTarea = tareas[tareas.length - 1];

      idUltima = ultimaTarea.id + 1;
    }

    onAddTarea({ id: idUltima, titulo: inputValue, estado: false });
    setNewTarea("");

    ultimaTarea = null;

    idUltima = 1;
  };

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleAddTarea();
    setInputValue("");
  };

  return (
    <>
      <form className="row justify-content-start">
        <div className="col-lg-5 col-md-8 mt-2">
          <input
            className="input"
            type="text"
            placeholder="Ingrese tarea"
            value={inputValue}
            onChange={onInputChange}
            maxLength={"50"}
          ></input>
        </div>
        <div className="col-md-8 col-lg-4">
          <button className="button" onClick={onSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>
            <div className="text">Agregar</div>
          </button>
        </div>
      </form>
    </>
  );
};
