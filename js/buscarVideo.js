import { conectaAPI } from "./conectaApi.js";
import constroiCards from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const pesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaVideo(pesquisa);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild); //lopping para deixar a lista vazia para deixar só o pesquisado, então ele ve se tem firstchild, se tiver ele tira, até ficar
    //vazio, ai só quando não tiver mais firstchild que é quando estiver vazio que ele passa par o foreach e faz a busca
  }

  busca.forEach((element) =>
    lista.appendChild(
      constroiCards(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    )
  );
  if (busca.length == 0) {
    lista.innerHTML = `<h2 class= "mensagem_titulo"> Não existem vídeos com esse termo </h2>`;
  }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", (evento) => buscarVideo(evento));
