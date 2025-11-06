import React from "react";
import "../../styles/Contador.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contador = (props) => {
  const totalSegundos = props.seconds;

  const digitoSeis = Math.floor(totalSegundos / 1) % 10;
  const digitoCinco = Math.floor(totalSegundos / 10) % 10;
  const digitoCuatro = Math.floor(totalSegundos / 100) % 10;
  const digitoTres = Math.floor(totalSegundos / 1000) % 10;
  const digitoDos = Math.floor(totalSegundos / 10000) % 10;
  const digitoUno = Math.floor(totalSegundos / 100000) % 10;

  return (
    <div className="container-fluid">
      <div className="row gap-2">

        <div className="col">
          <FontAwesomeIcon icon={faClock} />
        </div>

        <div className="col">{digitoUno}</div>
        <div className="col">{digitoDos}</div>
        <div className="col">{digitoTres}</div>
        <div className="col">{digitoCuatro}</div>
        <div className="col">{digitoCinco}</div>
        <div className="col">{digitoSeis}</div>
      </div>
    </div>
  );
};
export default Contador;
