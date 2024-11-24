"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import constants from "@/constants";
import styles from "./page.module.css";
import Image from "next/image";
import format from "date-fns/format";
import { FaHome } from "react-icons/fa";

export default function Educando() {
  const [educando, setEducando] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios
      .get(`${constants.endpoints.detalheEducando}/${id}`)
      .then((response) => {
        setEducando(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        <a href="/">
          <FaHome />
        </a>
        Página do educando
      </h1>
      <main>
        <section>
          {educando && (
            <ul>
              <li>
                <strong>Nome:</strong> {educando.nome_completo}
              </li>
              <li>
                <strong>Trilha:</strong> {educando.trilha}
              </li>
              <li>
                <strong>Unidade:</strong> {educando.unidade}
              </li>
              <li>
                <strong>Insignias conquistadas:</strong>
                <ul>
                  {educando.insignias &&
                    educando.insignias.map((insignia) => (
                      <li key={insignia.id}>
                        <a href={`/insignia/${insignia.id}`}>
                          {insignia.nome}{" "}
                          <span>{format(insignia.data, "dd/MM/yyyy")}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          )}
        </section>
        <aside>
          {educando && (
            <Image
              src={`https://ui-avatars.com/api/?rounded=true&size=256&name=${educando?.nome_completo}`}
              width={200}
              height={200}
              alt={`Avatar de ${educando.nome_completo}`}
            />
          )}
        </aside>
      </main>
    </div>
  );
}
