//Mettre le code JavaScript lié à la page photographer.html
let totalLikesAndTarif = document.createElement("div");
const main = document.querySelector("#main");

async function getAllPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Une erreur c'est produite");
      }
      return res.json();
    })
    .then((data) => {
      photographers = data.photographers;
    });

  return photographers;
}

async function getAllMedia() {
  await fetch("./data/photographers.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Une erreur c'est produite");
      }
      return res.json();
    })
    .then((value) => {
      medias = value.media;
    });

  return medias;
}

async function currentPhotographer() {
  // Récupération des données des photographes
  photographers = await getAllPhotographers();
  // Récupération de l'id
  let currentPhotographId = window.location.href.split("?")[1];

  // Récupération des données du photographe voulu
  [photographer] = await photographers.filter(
    (photographer) => photographer.id == currentPhotographId
  );

  pictures = await getAllMedia();
  // Récupartion des medias du photographes
  pictures = await pictures.filter(
    (picture) => picture.photographerId == currentPhotographId
  );

  displayCurrentData(photographer);
  displayMediaData(pictures);
  console.log(pictures)

  return photographer, pictures;
}

async function displayCurrentData(photographer) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModel = currentPhotographFactory(photographer);
  const photographCardDOM = photographerModel.getCurrentUserCardDOM();
  photographHeader.appendChild(photographCardDOM);
}

async function displayMediaData(pictures) {
  const mediaSection = document.querySelector(".mediaDiv");
  pictures.map((picture) => {
    const mediaModel = mediaFactories(picture);
    const mediaCardDOM = mediaModel.getMediaCardDom();
    mediaSection.appendChild(mediaCardDOM);
  });
}

getAllMedia();
currentPhotographer();
