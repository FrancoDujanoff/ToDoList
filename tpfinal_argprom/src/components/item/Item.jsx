import React from "react";
import { SlLike } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import "./item.css";

export const Item = ({
  id,
  nombre,
  estado,
  onSuccessClick,
  onInsuccessClick,
  onEliminatedClick,
}) => {
  const handleClickSucces = () => {
    if (onSuccessClick) {
      onSuccessClick("realizado");
    }
  };

  const handleClickDanger = () => {
    if (onInsuccessClick) {
      onInsuccessClick("no_realizado");
    }
  };

  const handleClickWarning = () => {
    if (onEliminatedClick) {
      onEliminatedClick("eliminar");
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-3 m-2">
        <div class="card">
          <div className="bg text-center">
            <div className="row">
              <p>{nombre}</p>
            </div>
            <div className="row text-black">{estado ? <SlLike /> : <SlClose />}</div>
            <div className="row justify-content-center mt-3">
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-success mb-1"
                  onClick={handleClickSucces}
                >
                  <SlLike />
                </button>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-danger mb-1"
                  onClick={handleClickDanger}
                >
                  <SlClose />
                </button>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-warning mb-1"
                  onClick={handleClickWarning}
                >
                  <SlTrash />
                </button>
              </div>
            </div>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </>
  );
};

/*
</div>
            <div class="card-inner">
            <p className="fs-4">
              {nombre} {estado ? <SlLike /> : <SlClose />}
            </p>

          
            <button
              type="button"
              className="btn btn-outline-success mb-1"
              onClick={handleClickSucces}
            >
              <SlLike />
            </button>
          
          <div className="col-1">
            <button
              type="button"
              className="btn btn-outline-danger mb-1"
              onClick={handleClickDanger}
            >
              <SlClose />
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-outline-warning mb-1"
              onClick={handleClickWarning}
            >
              <SlTrash />
            </button>
          </div>
            </div>
*/
