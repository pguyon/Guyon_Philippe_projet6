function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date, price } = value;
  let mediaType;
  const images = `./assets/photos/${photographerId}/${image}`;
  const videos = `./assets/photos/${photographerId}/${video}`;

  function getMediaCardDom() {
    const main = document.querySelector(".main");
    const mediaDiv = document.createElement("div");
    const imgMedia = document.createElement("img");
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
