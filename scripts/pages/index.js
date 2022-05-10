let photographers;
async function getPhotographers() {
  await fetch("/data/photographers.json", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something bad happened.");
      }

      return res.json();
    })
    .then((data) => {
      const photographers = data.photographers;
      console.log(photographers);
      return photographers;
    });
}

console.log(photographers);

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers);
// }

// init();

getPhotographers();
