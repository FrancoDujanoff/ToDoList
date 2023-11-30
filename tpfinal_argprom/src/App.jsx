import React, { useEffect, useState } from "react";
import { Lista } from "./components/lista/Lista";
import { AgregarItem } from "./components/agregaritem/AgregarItem";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const App = () => {

  const [tareas, setTareas] = useState([]);
  const [tareasPersistidas, setTareasPersistidas] = useState([]);
  
  useEffect(() => {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
      try {
        setTareas(JSON.parse(tareasGuardadas));
        setTareasPersistidas(JSON.parse(tareasGuardadas));
      } catch (error) {
        console.log(error);
        localStorage.removeItem("tareas");
        setTareas([]);
        setTareasPersistidas([]);
      }
    }
  }, []);
  
  useEffect(() => {
    if (JSON.stringify(tareas) !== JSON.stringify(tareasPersistidas)) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
      setTareasPersistidas(tareas);
    }
  }, [tareas, tareasPersistidas]);
  
  const addTarea = (newTarea) => {
    const nuevasTareas = [...tareas, newTarea];
    setTareas(nuevasTareas);
  };
  

  const updateTarea = (id, accion) => {
    if (accion == "realizado") {
      setTareas((x) => {
        return x.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              id: item.id,
              titulo: item.titulo,
              estado: true,
            };
          }
          return item;
        });
      });
    } else if (accion == "no_realizado") {
      setTareas((x) => {
        return x.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              titulo: item.titulo,
              estado: false,
            };
          }
          return item;
        });
      });
    } else if (accion == "eliminar") {
      setTareas((x) => {
        return x.filter((item) => item.id !== id);
      });
    } else {
      console.log("Error de accion");
    }
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="container-fluid flex-grow-1">
          <div className="row justify-content-start">
            <h1 className="m-5 text-center fs-1 text-decoration-underline"></h1>
          </div>

          <div className="container">
            <AgregarItem tareas={tareas} onAddTarea={addTarea} />
          </div>

          <div className="container-fluid lugar">
            <Lista tareas={tareas} onUpdateTarea={updateTarea} />
          </div>
        </div>

        <footer className="footer mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
};
