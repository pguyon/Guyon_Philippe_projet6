function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `./assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // Création des éléments de photographer_section
    const link = document.createElement("a");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    // Création des l'url avec l'id du photographe en paramètres
    link.href = `.photographe.html?${id}`;

    // Ajouts des attributs sur l'image
    img.setAttribute("src", picture);
    img.alt = `Picture of ${name}`;

    // Ajouts des valeurs sur les éléments
    h2.textContent = name;
    h3.textContent = `${city} , ${country}`;
    p.textContent = tagline;
    span.textContent = `${price}€/jour`;

    // Ajouts des éléments à la div photographer_section
    link.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(span);
    return article, link;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
