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

  return photographers;
}

async function currentPhotographer() {
  // Récupération des données des photographes
  photographers = await getPhotographers();
  // Récupération de l'id
  let id = window.location.href.split("?")[1];
  if (!id) {
    id = 243;
  }
  // Récupération des données du photographe voulu
  [photographer] = await photographers.filter(
    (photographer) => photographer.id == id
  );
  console.log(photographer);
}

currentPhotographer();
