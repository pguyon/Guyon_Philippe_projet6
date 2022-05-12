function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date, price } = value;
  let mediaType;
  const images = `./assets/photos/${photographerId}/${image}`;
  const videos = `./assets/photos/${photographerId}/${video}`;

  function getMediaCardDom() {
    const main = document.querySelector("#main");
    const mediaDiv = document.createElement("div");
    mediaDiv.classList.add('mediaDiv')
    const imgMedia = document.createElement("img");
    const h2 = document.createElement('h2')

    imgMedia.setAttribute("src", images);

    h2.textContent = title;

    main.appendChild(mediaDiv);
    mediaDiv.appendChild(h2);

    return main, mediaDiv;
  }

  return {
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    getMediaCardDom,
  };
}
