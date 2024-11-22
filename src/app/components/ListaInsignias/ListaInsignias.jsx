import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "@/constants";
import styles from "./ListaInsignias.module.css";

const ListaInsignias = () => {
  const [insignias, setInsignias] = useState([]);

  useEffect(() => {
    axios
      .get(constants.endpoints.insignias)
      .then((response) => {
        setInsignias(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Insignias</h2>
      <ul>
        {insignias.map((insignia) => (
          <li key={insignia.id}>
            <a href={`/insignia/${insignia.id}`}>{insignia.nome}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaInsignias;
