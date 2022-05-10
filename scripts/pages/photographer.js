//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
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
  getCurrentPhotographer(photographers);
  return photographers;
}

function getCurrentPhotographer(photographer) {
  return console.log(photographer);
}

async function init() {
  // Récupération des données des photographes
  photographers = await getPhotographers();
  // Récupération de l'id
  let idRequested = window.location.href.split("?")[1];
  if (!idRequested) {
    idRequested = 243;
  }
  // Récupération des données du photographe voulu
  [photographer] = await photographers.filter(
    (photographer) => photographer.id == idRequested
  );
  console.log(photographer);
}

init();
