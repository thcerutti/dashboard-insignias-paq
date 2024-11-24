"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import constants from "@/constants";
import styles from "./page.module.css";
import { FaHome, FaStar } from "react-icons/fa";

const EstrelaInsignia = ({ nivel }) => {
  const cor = {
    1: "#b87333", // copper
    2: "#c0c0c0", // silver
    3: "#ffd700", // gold
  };
  return (
    <span>
      <FaStar style={{ fill: cor[nivel] }} title={`Nível ${nivel}`} />
    </span>
  );
};

export default function About() {
  const [insignia, setInsignia] = useState({});
  const [educandos, setEducandos] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios
      .get(`${constants.endpoints.detalheInsignia}/${id}`)
      .then((response) => {
        setInsignia(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        constants.endpoints.educandosQueConquistaramDeterminadaInsignia.replace(
          "{id}",
          id
        )
      )
      .then((response) => {
        setEducandos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <a href="/">
          <FaHome />
        </a>
        Detalhes da Insignia
      </h1>
      <ul>
        <li>
          <strong>Nome: </strong>
          {insignia.nome}
        </li>
        <li>
          <strong>Trilha: </strong>
          {insignia.trilha}
        </li>
        <li>
          <strong>Níveis:</strong>
        </li>
        <ol>
          {insignia.niveis &&
            insignia.niveis.map((nivel, index) => (
              <li key={index}>
                <span>
                  <EstrelaInsignia nivel={nivel.id} />
                  {nivel.requisitos}
                </span>
              </li>
            ))}
        </ol>
      </ul>
      {educandos && (
        <section>
          <h2>Educandos que conquistaram esta insígnia</h2>
          <ul>
            {educandos.map((educando, index) => (
              <li key={index}>
                <a href={`/educando/${educando.id}`}>{educando.nome}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
