import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "@/constants";
import styles from "./ListaInsignias.module.css";
import { FaPlusCircle } from "react-icons/fa";

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
      <h2>
        <a href="/novaInsignia">
          <FaPlusCircle />
        </a>
        Insignias
      </h2>
      <ul>
        {insignias.map((insignia, index) => (
          <li key={index}>
            <a href={`/insignia/${insignia.id}`}>{insignia.nome}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaInsignias;
