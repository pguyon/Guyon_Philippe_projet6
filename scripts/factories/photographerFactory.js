// Création de la classe photographe
class PhotographerFactory {
  // Création des données du JSON
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }

  // Création de la Card photographe
  createCard() {
    return `<article>
        <a href="./photographer.html?id=${this.id}" aria-label="En savoir plus sur ${this.name}">
            <img src="./assets/photographers/${this.portrait}" alt="Photo de ${this.name}">
            <h2>${this.name}</h2>
        </a>
        <div tabindex="0" class="photographer__description">
            <p class="photographer__location">${this.city}, ${this.country}</p>
            <p>${this.tagline}</p>
            <p class="photographer__price">${this.price}€/jour</p>
        </div>
        </article>`;
  }

  // Création de la Card des profiles des photographes
  createProfileCard() {
    return `
        <div>
            <h1 tabindex="0">${this.name}</h1>
            <div tabindex="0">
                <h2 >${this.city}, ${this.country}</h2>
                <p>${this.tagline}</p>
            </div>
        </div>
        <button class="contact_button" id="openModal" aria-label="Bouton d'ouverture du formulaire de contact">Contactez-moi</button>
        <div id="photographerImage">
            <img tabindex="0" src="./assets/photographers/${this.portrait}" alt="Photo de ${this.name}">
        </div>
        `;
  }
}
