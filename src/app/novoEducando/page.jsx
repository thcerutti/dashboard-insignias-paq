"use client";
import React, { useState } from "react";
import axios from "axios";
import constants from "@/constants";
import styles from "./page.module.css";
import { FaHome } from "react-icons/fa";

export default function NovoEducando() {
  const [nome, setNome] = useState("");
  const [trilha, setTrilha] = useState("");
  const [unidade, setUnidade] = useState("");

  const enviarFormulario = (event) => {
    event.preventDefault();
    axios
      .post(constants.endpoints.criarEducando, {
        nome,
        trilha,
        unidade,
      })
      .then((response) => {
        alert(response.data.message);
        setNome("");
        setTrilha("");
        setUnidade("");
      })
      .catch((err) => {
        alert("Erro ao enviar formulário: " + err.message);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <a href="/">
          <FaHome />
        </a>
        Novo Educando
      </h1>
      <form action="#">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome completo do educando"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor="trilha">Trilha:</label>
        <input
          type="text"
          id="trilha"
          name="trilha"
          placeholder="Nome da trilha de estudo do educando"
          value={trilha}
          onChange={(event) => setTrilha(event.target.value)}
        />
        <label htmlFor="unidade">Unidade:</label>
        <input
          type="text"
          id="unidade"
          name="unidade"
          placeholder="Unidade onde o educando está matriculado"
          value={unidade}
          onChange={(event) => setUnidade(event.target.value)}
        />
        <button type="submit" onClick={enviarFormulario}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
