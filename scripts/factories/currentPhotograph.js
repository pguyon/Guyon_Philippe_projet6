function currentPhotographFactory(data) {
  const { name, portrait, city, country, tagline, id, price } = data;
  const picture = `./assets/photographers/${portrait}`;

  function getCurrentUserCardDOM() {
    // Création des éléments de photographer_section
    const photographHeader = document.querySelector(".photograph-header");
    const main = document.querySelector("#main");
    const infosPhotographDiv = document.createElement("div");

    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const priceDiv = document.createElement("div");
    const globalLikes = document.createElement("span");
    const tarif = document.createElement("span");

    // Ajouts des attributs sur l'image
    img.setAttribute("src", picture);
    img.alt = `Picture of ${name}`;

    priceDiv.classList.add("price");

    // Ajouts des valeurs sur les éléments
    h2.textContent = name;
    h3.textContent = `${city}, ${country}`;
    p.textContent = tagline;
    tarif.textContent = `${price}€ / jour`;
    globalLikes.textContent = "296 125";

    // Ajouts des éléments à la div photographer_section

    //photographHeader.prepend(infosPhotographDiv);
    infosPhotographDiv.appendChild(h2);
    infosPhotographDiv.appendChild(h3);
    infosPhotographDiv.appendChild(p);
    photographHeader.appendChild(img);
    main.appendChild(priceDiv);
    priceDiv.appendChild(globalLikes);
    priceDiv.appendChild(tarif);

    return photographHeader, infosPhotographDiv;
  }

  return {
    name,
    picture,
    city,
    country,
    tagline,
    id,
    price,
    getCurrentUserCardDOM,
  };
}
