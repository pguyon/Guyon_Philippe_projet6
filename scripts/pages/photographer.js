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

async function currentPhotographer() {
  // Récupération des données des photographes
  photographers = await getAllPhotographers();
  // Récupération de l'id
  let idRequested = window.location.href.split("?")[1];
  if (!idRequested) {
    idRequested = 243;
  }
  // Récupération des données du photographe voulu
  [photographer] = await photographers.filter(
    (photographer) => photographer.id == idRequested
  );
  displayCurrentData(photographer);
  return photographer;
}

async function displayCurrentData(photographer) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModel = currentPhotographFactory(photographer);
  const photographCardDOM = photographerModel.getCurrentUserCardDOM();
  photographHeader.appendChild(photographCardDOM);
  console.log(photographer);
  console.log(photographCardDOM);
}

currentPhotographer();
