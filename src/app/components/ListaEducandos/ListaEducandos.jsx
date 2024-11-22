import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "@/constants";
import styles from "./ListaEducandos.module.css";

const ListaEducandos = () => {
  const [educandos, setEducandos] = useState([]);

  useEffect(() => {
    axios
      .get(constants.endpoints.educandos)
      .then((response) => {
        setEducandos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Educandos</h2>
      <ul>
        {educandos.map((educando) => (
          <li key={educando.id}>
            <a href={`/educando/${educando.id}`}>{educando.nome_completo}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaEducandos;
