"use client";
import React from "react";
import ListaEducandos from "@/app/components/ListaEducandos";
import ListaInsignias from "./components/ListaInsignias";
import styles from "./page.module.css";
import GraficoInsigniasConquistadas from "./components/GraficoInsigniasConquistadas/GraficoInsigniasConquistadas";
import paqLogo from "./img/paq-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        <Image src={paqLogo} alt="logo do PAQ" /> PAQ Dashboard
      </h1>
      <main>
        <div>
          <ListaEducandos />
          <ListaInsignias />
        </div>
        <GraficoInsigniasConquistadas />
      </main>
    </div>
  );
}
