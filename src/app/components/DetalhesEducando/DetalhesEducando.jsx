const DetalhesEducando = ({ educando }) => {
  return (
    <div>
      <h2>Detalhes do educando</h2>
      <p>Nome: {educando.nome_completo}</p>
      <p>Data de nascimento: {educando.data_nascimento}</p>
      <p>Nome da mãe: {educando.nome_mae}</p>
      <p>Nome do pai: {educando.nome_pai}</p>
    </div>
  );
};

export default DetalhesEducando;
