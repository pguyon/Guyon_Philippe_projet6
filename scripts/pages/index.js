async function getPhotographers() {
  let res = await fetch("/data/photographers.json", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Une erreur c'est produite");
  }

  let data = await res.json();
  const photographers = data.photographers;
  displayData(photographers);
  console.log(photographers);
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
