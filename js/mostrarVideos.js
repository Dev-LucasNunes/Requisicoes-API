import { conectaAPI } from "./conectaApi.js ";

const lista = document.querySelector("[data-lista]");

function constroiCards(titulo, descricao, url, imagem) {
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
}

console.log(listaVideos);
listaVideos();
