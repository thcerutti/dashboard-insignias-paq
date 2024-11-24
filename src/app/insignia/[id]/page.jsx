"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import constants from "@/constants";
import styles from "./page.module.css";
import { FaHome } from "react-icons/fa";
import EstrelaInsignia from "@/app/components/EstrelaInsignia";

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
