"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import constants from "@/constants";

export default function About() {
  const [insignia, setInsignia] = useState({});
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
  }, []);

  return (
    <div>
      <a href="/">voltar</a>
      <h1>Página da insígnia</h1>
      <ul>
        <li>
          <strong>Nome:</strong>
          {insignia.nome}
        </li>
        <li>
          <strong>Trilha:</strong>
          {insignia.trilha}
        </li>
        <li>
          <strong>Níveis:</strong>
        </li>

        <ol>
          {insignia.niveis &&
            insignia.niveis.map((nivel, index) => (
              <li key={index}>{nivel.requisitos}</li>
            ))}
        </ol>
      </ul>
    </div>
  );
}
