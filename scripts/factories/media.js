function mediaFactories(value) {
  const { photographerId, title, image, video, likes, date } = value;
  const allLikes = document.querySelectorAll(".img__likes");
  let totalLikes = document.querySelector("#totalLikes");

  let mediaType, media;
  let count = likes;

  mediaType = image ? "image" : "video";

  media =
    mediaType == "image"
      ? `./assets/photos/${photographerId}/${image}`
      : `./assets/photos/${photographerId}/${video}`;

  function getMediaCardDom() {
    const article = document.createElement("article");
    const imgMedia = document.createElement("img");
    const videoMedia = document.createElement("video");
    const source = document.createElement("source");
    const descriptionDiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const imgLikes = document.createElement("span");

    // Add attribute and description
    imgMedia.setAttribute("src", media);
    imgMedia.alt = title;
    source.setAttribute("src", media);
    videoMedia.controls = true;
    videoMedia.autoplay = false;
    videoMedia.muted = false;
    descriptionDiv.classList.add("img__description");
    imgLikes.classList.add("img__likes");
    imgLikes.ariaLabel = "Total de likes";

    // Add content
    h2.textContent = title;
    imgLikes.innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;

    if (mediaType == "image") {
      article.appendChild(imgMedia);
    } else {
      videoMedia.appendChild(source);
      article.appendChild(videoMedia);
    }
    article.appendChild(descriptionDiv);
    descriptionDiv.appendChild(h2);
    descriptionDiv.appendChild(imgLikes);

    imgLikes.addEventListener(
      "click",
      function () {
        count++;
        return (imgLikes.innerHTML = `${count} <i class="fa-solid fa-heart"></i>`);
      },
      { once: true }
    );

    const array = [];

    for (i = 0; i < allLikes.length; i++) {
      array.push(parseInt(allLikes[i].innerHTML));
    }

    //console.log(value);

    let total = array.reduce((a, b) => a + b, 0);
    totalLikes.innerHTML = `${total} <i class="fa-solid fa-heart"></i>`;

    return article;
  }

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
