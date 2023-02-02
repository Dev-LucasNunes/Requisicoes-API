import { conectaAPI } from "./conectaApi.js ";

const lista = document.querySelector("[data-lista]");

//exporta a função direto
export default function constroiCards(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<li class="videos__item">
  <iframe width="100%" height="72%" src="${url}"
      title="${titulo}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  <div class="descricao-video">
      <img src="${imagem}">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
  </div>
</li>`;

  return video;
}

async function listaVideos() {
  try {
    const listaApi = await conectaAPI.listaVideos();
    listaApi.forEach((element) =>
      lista.appendChild(
        constroiCards(
          element.titulo,
          element.descricao,
          element.url,
          element.imagem
        )
      )
    );
  } catch {
    lista.innerHTML = `<h2 class= "mensagem_titulo"> Não foi possivel carregar a lista de vídeos </h2>`;
  }
}

listaVideos();
