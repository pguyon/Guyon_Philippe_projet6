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
      displayData(photographers);
    });
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.map((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

getPhotographers();
