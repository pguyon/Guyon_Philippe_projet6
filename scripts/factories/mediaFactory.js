// Création de la classe Media
class MediaFactory {
  constructor(data) {
    if (data.image) {
      return new Image(data);
    } else {
      return new Video(data);
    }
  }
}

// Création de la classe Image
class Image {
  constructor(data) {
    this.title = data.title;
    this.src = data.image;
    this.likes = data.likes;
    this.date = data.date;
    this.photographerId = data.photographerId;
  }

  // Création du template -> si le media est une image
  createHTML() {
    return `
          <article class="card ligthbox__card" data-date="${this.date}" data-title="${
      this.title
    }" data-likes=${this.likes}>
          <a tabindex="0" class="media-link"><img class="media media__lightbox" aria-label="${
            this.title
          }" src="./assets/images/${getPhotographerName(this.photographerId)}/${
      this.src
    }" alt="${this.title}" /></a>
          <div class="img__description">
          <h2 class="lightbox__title" tabindex="0">${this.title}</h2>
          <button tabindex="0" class="likes" data-liked="false">${
            this.likes
          } <i aria-label="likes" class="fa-solid fa-heart"></i></button>
            </div>
          </article>
          `;
  }
}

// Création de la classe Video
class Video {
  constructor(data) {
    this.title = data.title;
    this.src = data.video;
    this.likes = data.likes;
    this.date = data.date;
    this.photographerId = data.photographerId;
  }

  // Création du template -> si le media est une vidéo
  createHTML() {
    return `
          <article class="card ligthbox__card" data-date="${this.date}" data-title="${
      this.title
    }" data-likes=${this.likes}>
          <a tabindex="0" class="media-link paused-video"><video controls class="media media__lightbox" aria-label="${
            this.title
          }" title="${this.title}" src="./assets/images/${getPhotographerName(
      this.photographerId
    )}/${this.src}" loop ></video></a>
          <div class="img__description">
          <h2 class="lightbox__title" tabindex="0">${this.title}</h2>
          <button tabindex="0"  class="likes" data-liked="false">${
            this.likes
          } <i aria-label="likes" class="fa-solid fa-heart"></i></button>
          </div>
          </article>
          `;
  }
}

// Correspondance entre ID et Name
const getPhotographerName = (id) => {
  if (id === 243) {
    return "Mimi_Keel";
  } else if (id === 930) {
    return "Ellie-Rose_Wilkens";
  } else if (id === 82) {
    return "Tracy_Galindo";
  } else if (id === 527) {
    return "Nabeel_Bradford";
  } else if (id === 925) {
    return "Rhode_Dubois";
  } else if (id === 195) {
    return "Marcel_Nikolic";
  } else {
    return "Id non attribuée";
  }
};
