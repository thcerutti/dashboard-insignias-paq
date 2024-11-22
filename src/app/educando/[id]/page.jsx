"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import constants from "@/constants";

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
    <div>
      <a href="/">voltar</a>
      <h1>Página do educando</h1>
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
            <ol>
              {educando.insignias &&
                educando.insignias.map((insignia) => (
                  <li key={insignia.id}>
                    <a
                      href={`/insignia/${insignia.id}`}
                    >
                      {insignia.nome}
                    </a>
                    {' '}({insignia.data})
                  </li>
                ))}
            </ol>
          </li>
        </ul>
      )}
    </div>
  );
}
