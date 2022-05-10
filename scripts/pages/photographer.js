//Mettre le code JavaScript lié à la page photographer.html
async function currentPhotographer() {
  let res = await fetch(`./data/photographers.json`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("une erreur c'est produite");
  }
  let data = await res.json();
  const photographers = data.photographers;
  console.log(photographers);
}

currentPhotographer();
