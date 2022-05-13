function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date, price } = value;
  let mediaType, media;

  mediaType = image ? 'image' : 'video';

  media = mediaType == 'image' ? `./assets/photos/${photographerId}/${image}`: `./assets/photos/${photographerId}/${video}`;
  /* const images = `./assets/photos/${photographerId}/${image}`;
  const videos = `./assets/photos/${photographerId}/${video}`; */

  function getMediaCardDom() {
    const article = document.createElement("article");
    const imgMedia = document.createElement("img");
    const videoMedia = document.createElement('video')
    const source = document.createElement('source')
    const h2 = document.createElement("h2");

    imgMedia.setAttribute("src", media);
    imgMedia.alt = `Picture of ${title}`;
    source.setAttribute("src", media);
    videoMedia.controls = true;
    videoMedia.autoplay = false;
    videoMedia.muted = false

    h2.textContent = title;

    if(mediaType == 'image'){
      article.appendChild(imgMedia);
    }else{
      videoMedia.appendChild(source)
      article.appendChild(videoMedia);

    }
   
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
