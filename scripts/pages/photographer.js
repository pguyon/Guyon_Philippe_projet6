//Mettre le code JavaScript lié à la page photographer.html
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

/* async function photographMedia() {
  const medias = await getAllMedia();
  return medias;
} */

async function currentPhotographer() {
  // Récupération des données des photographes
  photographers = await getAllPhotographers();
  // Récupération de l'id
  let id = window.location.href.split("?")[1];
  if (!id) {
    id = 243;
  }
  // Récupération des données du photographe voulu
  [photographer] = await photographers.filter(
    (photographer) => photographer.id == id
  );
  displayCurrentData(photographer);
  console.log(pictures);

  return photographer, pictures;
}

async function displayCurrentData(photographer, pictures) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModel = currentPhotographFactory(photographer);
  const photographCardDOM = photographerModel.getCurrentUserCardDOM();
  photographHeader.appendChild(photographCardDOM);
  const mediaDiv = document.querySelector("mediaDiv");
}

currentPhotographer();
getAllMedia();
