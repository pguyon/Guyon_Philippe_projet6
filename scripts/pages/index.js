// Récupération des données du JSON
const getData = async () => {
  await fetch("./data/photographers.json")
    .then((response) => response.json())
    .then((data) => createPhotographersCard(data))
    .catch((error) => console.log(error));
};

// Création de la CARD
const createPhotographersCard = (data) => {
  let template = "";
  const photographersData = [];
  const section = document.querySelector(".photographer_section");
  photographersData.push(data.photographers);
  photographersData[0].forEach((photographer) => {
    const newPhotographer = new PhotographerFactory(photographer);
    template += newPhotographer.createCard();
  });
  section.innerHTML = template;
};

getData();
