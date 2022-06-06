let medias = [];
let currentIndex = 0;

// Création des events de la lightbox
const addLightboxEvents = () => {
  document.querySelectorAll(".media-link").forEach((media) =>
    media.addEventListener("click", (event) => {
      openLightbox(event);
    })
  );

  document
    .getElementById("close__lightbox")
    .addEventListener("click", closeLightBox);
  document
    .getElementById("prev__lightbox")
    .addEventListener("click", changeMedia);
  document
    .getElementById("next__lightbox")
    .addEventListener("click", changeMedia);
};

// Ouverture de la lightbox avec affichage de l'élément clické
const openLightbox = (event) => {
  medias = document.querySelectorAll("article");

  // Récupération du media clické
  const url = event.currentTarget.firstElementChild.attributes.src.value;
  medias.forEach((media, index) => {
    if (
      media.firstElementChild.firstElementChild.attributes.src.value === url
    ) {
      currentIndex = index;
    }
  });

  // Affichage du contenu de la lightbox
  document.getElementById("lightboxmodal").style.display = "block";
  document.getElementById("lightboxmodal").setAttribute("aria-hidden", "false");
  document
    .getElementById("media__lightbox")
    .appendChild(medias[currentIndex].cloneNode(true));
  newMediaCheckLB();
  hideBackgroundContent();
};

// Fermeture de la lightbox
const closeLightBox = () => {
  const lightboxChild = document.querySelector("#media__lightbox article");
  document.getElementById("media__lightbox").removeChild(lightboxChild);
  document.getElementById("lightboxmodal").style.display = "none";
  document.getElementById("lightboxmodal").setAttribute("aria-hidden", "true");
  showBackgroundContent();
};

// Navigation de la lightbox
const changeMedia = (arrow) => {
  const lightboxChild = document.querySelector("#media__lightbox article");
  document.getElementById("media__lightbox").removeChild(lightboxChild);
  if (document.activeElement.id === "prev__lightbox" || arrow === "left") {
    currentIndex === 0
      ? (currentIndex = medias.length - 1)
      : (currentIndex -= 1);
  } else if (
    document.activeElement.id === "next__lightbox" ||
    arrow === "right"
  ) {
    currentIndex === medias.length - 1
      ? (currentIndex = 0)
      : (currentIndex += 1);
  }
  document
    .getElementById("media__lightbox")
    .appendChild(medias[currentIndex].cloneNode(true));
  newMediaCheckLB();
};

// Mettre en pause ou non une vidéo
const toggleVideo = () => {
  const video = document.querySelector("#media__lightbox video");
  video.paused ? video.play() : video.pause();
  video.parentElement.classList.toggle("paused-video");
};

// Vérification du type de média
const checkMediaLB = () => {
  // Ajout de l'event viédo si une vidéo est selectionnée
  if (document.querySelectorAll("#media__lightbox video").length === 1) {
    toggleVideo();
    document
      .querySelector("#media__lightbox video")
      .addEventListener("click", toggleVideo);
  }

  // Ajout de tabindex si une image est selectionnée
  if (document.querySelectorAll("#media__lightbox img").length === 1) {
    document
      .querySelector("#media__lightbox img")
      .setAttribute("tabindex", "0");
  }
};

const changeMediaLB = () => {
  // Remove link
  const link = document.querySelector("#media__lightbox .media-link");
  link.replaceWith(link.firstElementChild);

  // Hide likes
  const likes = document.querySelector("#media__lightbox .likes");
  likes.style.display = "none";
  likes.setAttribute("aria-hidden", "true");
};

// Vérification du média
const newMediaCheckLB = () => {
  checkMediaLB();
  changeMediaLB();
};
