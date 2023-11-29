import React from "react";
import { useState } from "react";
import { Item } from "../item/Item";

export const Lista = ({ tareas, onUpdateTarea }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-5">
          {tareas.map((i) => (
            <Item
              key={i.id}
              nombre={i.titulo}
              estado={i.estado}
              onSuccessClick={(accion) => onUpdateTarea(i.id, accion)}
              onInsuccessClick={(accion) => onUpdateTarea(i.id, accion)}
              onEliminatedClick={(accion) => onUpdateTarea(i.id, accion)}
            ></Item>
          ))}
        </div>
      </div>
    </>
  );
};
