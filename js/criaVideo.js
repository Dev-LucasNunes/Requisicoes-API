import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]"); //sempre bom usar data-atributtes para ficar mais dinamico

async function criarVideos(evento) {
  evento.preventDefault();
  console.log(evento);
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaAPI.criaVideo(titulo, descricao, url, imagem); //se eu to chamando uma função assincrona, essa daqui tem que ser tbm
    //a ordem dos parametros tem que ser igual da função, pq ele tá esperando receber os parametros nessa ordem
    //a gente pede para esperar tbm pra podermos tratar erros e ver o que está acontecendo, pode ser que ela até funcione sem esperar, mas se der erro nao da pra saber

    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e); //o catch pega a mensagem que foi jogado do erro e exibe a mensagem, esse (e) é padrão pra pegar aquela mensagem
  }
}

//math.floor arredonda para baixo
//math.round arredonda tradicional, para o numero mais proximo
//math.ceil arredonda para cima

formulario.addEventListener("submit", (evento) => criarVideos(evento)); //submit sempre tenta atualizar por isso tem que prevbenir o default
