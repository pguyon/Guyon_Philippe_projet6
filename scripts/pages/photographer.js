// Récupération de l'ID dans l'URL
const path = window.location.href;
const photographerId = parseInt(path.substring(path.lastIndexOf("=") + 1));

// Récupération des données du JSON
const getData = async () => {
  await fetch("./data/photographers.json")
    .then((response) => response.json())
    .then((data) => useData(data))
    .catch((error) => console.log(error));
};

/*
  FILTRE
*/

// Récupération des valeurs du select et filtrage des données
const filterMedia = () => {
  let sortMedia;
  const filter = document.getElementById("filter__select").value;

  if (filter === "Popularité") {
    // Construction d'un tableau de likes
    sortMedia = Array.from(document.querySelectorAll(`[data-likes]`)).sort(
      (a, b) => {
        (x = a.dataset.likes), (y = b.dataset.likes);
        return y - x;
      }
    );
  } else if (filter === "Titre") {
    // Construction d'un tableau de titre
    sortMedia = Array.from(document.querySelectorAll(`[data-title]`)).sort(
      (a, b) => {
        const x = a.dataset.title,
          y = b.dataset.title;
        if (x > y) return 1;
        if (y > x) return -1;
        return 0;
      }
    );
  } else {
    return console.log("Filtre invalide");
  }

  return sortMedia.forEach((element) =>
    document.querySelector(".mediaDiv").appendChild(element)
  );
};

// Ajout d'un event sur le select
const addFilterEvent = () => {
  document
    .getElementById("filter__select")
    .addEventListener("input", filterMedia);
  filterMedia();
};

// Incrémentation des likes
const addLikes = () => {
  const likeButtons = document.querySelectorAll(".likes");
  const likeCounter = document.getElementById("like__counter");

  likeButtons.forEach((button) =>
    button.addEventListener("click", () => {
      let mediaLikes = parseInt(button.innerText);
      let totalLikes = parseInt(likeCounter.innerText);

      if (button.getAttribute("data-liked") === "false") {
        button.closest("article").setAttribute("data-likes", mediaLikes + 1);
        button.setAttribute("data-liked", "true");
        button.innerHTML = `${
          mediaLikes + 1
        } <i class="fa-solid fa-heart"></i>`;
        likeCounter.innerText = totalLikes + 1;
      } else {
        button.setAttribute("data-liked", "false");
        // Désactivation du bouton si l'utilisateur a déjà liké le média
        button.setAttribute("disabled", "true");
      }
    })
  );
};

/**
 * Modal
 */

/**
 * Visibilité du background quand le modal est fermé
 */
const showBackgroundContent = () => {
  document.querySelector("header").setAttribute("aria-hidden", "false");
  document.querySelector("header").style.display = "block";
  document.querySelector("main").setAttribute("aria-hidden", "false");
  document.querySelector("main").style.display = "block";
};

/**
 * Visibilité du background quand le modal est fermé
 */
const hideBackgroundContent = () => {
  document.querySelector("header").setAttribute("aria-hidden", "true");
  document.querySelector("header").style.display = "none";
  document.querySelector("main").setAttribute("aria-hidden", "true");
  document.querySelector("main").style.display = "none";
};

// Navigation au clavier
const addKeyboardEvents = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Esc":
      case "Escape":
        if (
          document.getElementById("contact_modal").style.display === "block"
        ) {
          closeModal();
        } else if (
          document.getElementById("lightboxmodal").style.display === "block"
        ) {
          closeLightBox();
        }
        break;
      case "ArrowLeft":
        if (
          document.getElementById("lightboxmodal").style.display === "block"
        ) {
          changeMedia("left");
        }
        break;
      case "ArrowRight":
        if (
          document.getElementById("lightboxmodal").style.display === "block"
        ) {
          changeMedia("right");
        }
        break;
      case "Enter":
        event.preventDefault();
        document.activeElement.click();
      default:
        return "";
    }
  });
};

// Ajout des events au chargement de la page
const addEvents = () => {
  addFilterEvent();
  addLikes();
  addLightboxEvents();
  addKeyboardEvents();
  addModalEvents();
};

// Création photographe header
const photogrpheData = (data) => {
  const section = document.querySelector(".photograph-header");

  const photographerData = [];
  photographerData.push(
    ...data.photographers.filter(
      (photographer) => photographer.id === photographerId
    )
  );

  const photographer = new PhotographerFactory(photographerData[0]);
  section.innerHTML = photographer.createProfileCard();

  // Ajout du price dans la div likes__price
  document.getElementById("price").innerText = `${photographer.price}€/jour`;

  // Ajout du nom du photographe dans le modal de contact
  document.getElementById(
    "contact-title"
  ).innerText = `Contactez-moi\r ${photographerData[0].name}`;
  document
    .getElementById("contact_modal")
    .setAttribute("aria-labelledby", "contact-title");
};

/*
Création de l'affichage des média
 */
const useMedia = (data) => {
  // Création de la gallerie d'images des médias
  let template = "";
  const section = document.querySelector(".mediaDiv");
  const photographerMedia = [];
  photographerMedia.push(
    ...data.media.filter((content) => content.photographerId === photographerId)
  );

  photographerMedia.forEach((media) => {
    const newMedia = new MediaFactory(media);
    template += newMedia.createHTML();
  });
  section.innerHTML = template;

  // Affichage du compteur total
  let likeCount = 0;
  photographerMedia.forEach((photo) => (likeCount += photo.likes));
  document.getElementById("like__counter").innerText = likeCount;
};

// utilisations des données du JSON
const useData = (data) => {
  photogrpheData(data);
  useMedia(data);
  addEvents();
};

getData();
