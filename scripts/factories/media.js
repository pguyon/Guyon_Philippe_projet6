function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date } = value;
  const allLikes = document.querySelectorAll(".img__likes");
  const totalLikes = document.querySelector("#totalLikes");

  // Création des variables pour la gestion des types de médias et du compteur de likes
  let mediaType, media;
  let count = likes;

  // Création de la condition de définition du type du média
  mediaType = image ? "image" : "video";

  // Si le média est une image on ajoute l'image sinon on ajoute la vidéo
  media =
    mediaType == "image"
      ? `./assets/photos/${photographerId}/${image}`
      : `./assets/photos/${photographerId}/${video}`;

  function getMediaCardDom() {
    // Création des éléments
    const article = document.createElement("article");
    const imgMedia = document.createElement("img");
    const videoMedia = document.createElement("video");
    const source = document.createElement("source");
    const descriptionDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const imgLikes = document.createElement("button");

    // Ajouts des attributs et des descriptions
    imgMedia.setAttribute("src", media);
    imgMedia.alt = title;
    source.setAttribute("src", media);
    videoMedia.controls = true;
    videoMedia.autoplay = false;
    videoMedia.muted = false;
    descriptionDiv.classList.add("img__description");
    imgLikes.classList.add("img__likes");
    imgLikes.ariaLabel = "Total de likes";

    // Ajouts du contenu
    h2.textContent = title;
    imgLikes.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;

    // Ajouts des éléments
    if (mediaType == "image") {
      article.appendChild(imgMedia);
    } else {
      videoMedia.appendChild(source);
      article.appendChild(videoMedia);
    }
    article.appendChild(descriptionDiv);
    descriptionDiv.appendChild(h2);
    descriptionDiv.appendChild(imgLikes);

    // Incrémentation du nombre de likes
    imgLikes.addEventListener("click", function () {
      count++;
      imgLikes.innerHTML = `${count} <i class="fa-solid fa-heart"></i>`;
      imgLikes.setAttribute("disabled", "true");
    });

    return article;
  }

  // Création d'un tableau vide
  const array = [];

  // Ajout de tous les likes dans le tableau
  for (i = 0; i < allLikes.length; i++) {
    array.push(parseInt(allLikes[i].innerHTML));
  }
  //console.log(allLikes);

  // Addition de tous les likes
  let total = array.reduce((a, b) => a + b, 0);
  totalLikes.innerHTML = `${total} <i class="fa-solid fa-heart"></i>`;

  // Incrémentaion du nombre total de likes
  function incrementLikes() {
    total++;
    totalLikes.innerHTML = `${total} <i class="fa-solid fa-heart"></i>`;
  }
  allLikes.forEach((btn) => btn.addEventListener("click", incrementLikes));

  (function () {
    let getIcons = document.querySelectorAll("i");
    getIcons.forEach(function (iconEach) {
      let getIconAttr = iconEach.getAttribute("aria-hidden");
      if (!getIconAttr) {
        iconEach.setAttribute("aria-hidden", "true");
      }
    });
  })();

  return {
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    count,
    getMediaCardDom,
  };
}
