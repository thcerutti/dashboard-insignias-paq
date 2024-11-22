const DetalhesInsignia = ({ insignia }) => {
  return (
    <div>
      <h2>Detalhes da insígnia</h2>
      <h2>{insignia.nome}</h2>
      <p>{insignia.descricao}</p>
    </div>
  );
};
