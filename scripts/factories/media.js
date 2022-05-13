function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date, price } = value;
  let mediaType;
  const images = `./assets/photos/${photographerId}/${image}`;
  const videos = `./assets/photos/${photographerId}/${video}`;

  function getMediaCardDom() {
    const article = document.createElement("article");
    const imgMedia = document.createElement("img");
    const h2 = document.createElement("h2");

    imgMedia.setAttribute("src", images);
    imgMedia.alt = `Picture of ${title}`;

    h2.textContent = title;
    article.appendChild(imgMedia);
    article.appendChild(h2);

    return article;
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
