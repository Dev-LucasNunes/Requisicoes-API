//GET o get vai simplesmente pegar o que vc quer da API e mostrar
async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos"); //unico parametro que o fetch pede é a url da api, assim ele reconhece como get mas o post tem que colocar
  //então sempre que especificar como unico parametro a url da api, é entendido como GET
  const conexaoConvertida = await conexao.json();

  console.log(conexaoConvertida);
  return conexaoConvertida;
}

//POST para criar novos post no arquivo json na API
//tudo que tá no parenteses do fetch são seus parametros primeiro a url ai virgula abre chaves e coloca o resto
async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": " application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizaçoes`,
      url: url,
      imagem: imagem,
    }), //aqui cria o corpo da requisição post, basicamente cria um objeto com os valores que eu quero e transforma em string porque senão só vai chegar um objeto
    //javascript para o servidor
  });
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

listaVideos();

export const conectaAPI = {
  listaVideos,
  criaVideo,
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
