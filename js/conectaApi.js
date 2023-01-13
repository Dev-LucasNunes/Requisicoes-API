async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos"); //unico parametro que o fetch pede é a url da api
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

listaVideos();

export const conectaApi = {
  listaVideos,
};

//eu coloco o async para declarar que essa função vai ser assincrona, por padrão o javascript é sincrono
//o fetch já é um método assincrono e tem como unico parametro obrigatório a url da api, e quando a gente pede o fetch na api ele retorna uma promisse, que faz o que o nome já diz, ela promete
//que algo vai acontecer alguma hora e essa promessa pode ser resolvida ou rejeitada

//quando não coloca nenhum parametro (só a url) a gente tá fazendo uma requisição get, é só uma solicitação para api mas não vamos fazer nada com eles por enquanto, só queremos ve-los, por exemplo
//uma lista de produtos de um ecommerce, eles só vão aparecer para gente quando requisitados, só isso
//e a gente coloca o await antes do fetch para mandar aguardar o fetch ser resolvido ou rejeitadfo, tem que vir uma resposta e não somente a promessa

//ai precisamos converter todos os dados usando o metodo json, ai ele transforma tudo em objeto e para podermos manipula-los, então tem que pedir o que quer com o fetch e depois converter com o json

//ai nós pedimos para a função retornar aqueles valores pra gente, para quando chamarmos a função todos esses valores vem pra gente poder manipula-los

//ai  pra ficar tudo bem separado a gente exporta essa função com todos os valores dentro dela para poder usar em outro arquivo, usando o export
